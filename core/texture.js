module.exports = function( type = "item" ){
  var data = { texture_data: {} }
  function add( name, value ){
    data.texture_data[name] = {textures: value}
  }
  function json(){
    return [{
      path: "resources/textures/" + type + "_texture.json",
      json: data
    }]
  }
  return {add,json}
}