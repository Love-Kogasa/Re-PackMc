var sha = require( "sha-1" )
module.exports = function( string ){
  var template = "xxxxxxxx-xxxx-4xxx-xxxx-xxxxxxxxxxxx",
    hash = sha( string ),
    out = ""
  for( let index in template ){
    out += template[ index ] === "x" ? hash[ index % hash.length] : template[ index ]
  }
  return out
}