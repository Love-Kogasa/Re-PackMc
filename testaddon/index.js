// RePackMc 使用一种与serverless类似的结构
module.exports = function( add, include ){
  var item = include( "item" )
  var fevent = include( "events/function" )
  var apple = item( "test:apple", "apple", "苹果", "nature" )
  apple.setRecipe( [
    "xxx", "xxx", "xxx"
  ], { "x": "minecraft:apple" }, 9 )
  apple.set( "on_use", { on_use: { event: "use" } } )
  apple.setEvent( "use", fevent( function( smcf ){
    smcf.give( "@s", "minecraft:apple" )
  }))
  add( apple )
}