module.exports = function( path, json, isjson ){
  return {json(){return [{path,json,isjson}]}}
}