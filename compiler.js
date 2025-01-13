var efs = require( "fs-extra" ),
  path = require( "path" ),
  manifest = require( __dirname + "/manifest/manifest" )
function compile( args ){
  var project = args[0]
  // 读清单
  var pack = efs.readJsonSync( path.join( project, "pack.json" ) )
  console.log( "正在编译清单" )
  var {manifests,modules} = manifest( pack )
  for( let index in modules ){
    let module = modules[index]
    efs.outputJsonSync( path.join( project, `/dist/${module}/manifest.json` ), manifests[index] )
    if( efs.pathExistsSync( path.join( project, "icon.png" ) ) ){
      efs.copySync( path.join( project, "icon.png" ), path.join( project, `/dist/${module}/pack_icon.png` ) )
    }
  }
  console.log( "清单编译完毕" )
  console.log( "开始编译addon" )
  var script = require( project )
  script( function( obj ){
    var npath = require( "path" )
    var steps = obj.json()
    for( let step of steps ){
      let {path, json, isjson} = step
      console.log( path )
      if( isjson === false ){
        efs.outputFileSync( npath.join( project, npath.join( "dist", path ) ), json )
      } else {
        efs.outputJsonSync( npath.join( project, npath.join( "dist", path ) ), json )
      }
    }
  }, function( name ){
    return require( __dirname + "/core/" + name )
  })
  console.log( "addon编译完成" )
}
compile( process.argv.slice( 2 ) )