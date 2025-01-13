module.exports = function( func, type = "sequence"  ){
  var cmds = []
  func( new Proxy( {}, {
    get( obj, key ){
      return ( ...args ) => cmds.push( [key].concat( args ).join( " " ))
    }
  }))
  var out = {}
  out[type] = [{
    run_command: { command: cmds }
  }]
  return out
}