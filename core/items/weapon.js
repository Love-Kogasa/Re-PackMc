module.exports = ( id, icon, name, type = "equipment", damage = 0, enchantable = "sword", offhand = false, he ) => {
  var item = require( __dirname + "/../item" )
  var weapon = item( id, icon, name, type )
  weapon.set( "weapon", he || {} )
  weapon.set( "damage", damage )
  weapon.set( "max_stack_size", 1 )
  weapon.set( "hand_equipped", true )
  weapon.set( "allow_off_hand", offhand )
  weapon.set( "enchantable", {
    value: 10, slot: enchantable
  })
  return weapon
}