module.exports = function( id, icon, name, type = "items", components = {}, events = {}, format = "1.16.100" ){
  var data = components
  data[ "minecraft:display_name" ] = {value: name}
  data[ "minecraft:icon" ] = {texture: icon}
  var eves = events
  var others = []
  function item(){
    return [{
      path: "data/items/" + id.split( ":" )[1] + ".json",
      json : {
        "format_version": format,
        "minecraft:item": {
          description: {
            identifier: id,
            category: type
          },
          components: data,
          events: eves
        }
      }
    }].concat( others )
  }
  function setComponents( key, value ){
    data[ key ] = value
  }
  function set( key, value ){
    data[ "minecraft:" + key ] = value
  }
  function setEvent( key, value ){
    eves[ key ] = value
  }
  function setRecipe( table, keys, count = 1, tag = "crafting_table" ){
    others.push( {
      path : "data/recipes/" + id.split( ":" )[1] + "_recipe.json",
      json : {
        "format_version": "1.12.2",
        "minecraft:recipe_shaped": {
          description: {
            identifier: id + "_recipe"
          },
          tags: Array.isArray( tag ) ? tag : [tag],
          pattern: table,
          key: keys,
          result: {
            item: id,
            count: count
          }
        }
      }
    })
  }
  return {json:item, setComponents, set, setEvent, setRecipe }
}