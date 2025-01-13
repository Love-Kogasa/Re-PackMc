/**
 * PackMc 清单结构示例
 * name : string 名称字符串
 * info : string 介绍
 * modules : string[] 引用的模块(包类型) 比如 [ "data", "resources" ]
 * "version": string 最低版本号 默认 1.16.100
 */
var uuid = require( __dirname + "/uuid" )
module.exports = function( json ){
  var out = []
  for( let type of json.modules ){
    out.push( {
      format_version: 2,
      header: {
        name: json.name,
        description: json.info,
        min_engine_version: (json.version || "1.16.100").split( "." ),
        version: [0,0,1],
        uuid: uuid( json.name + type )
      },
      modules: [{
        type, version: [0,0,1],
        uuid: uuid( type + json.name )
      }]
    } )
  }
  return {manifests: out, modules: json.modules}
}