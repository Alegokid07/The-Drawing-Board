onEvent('recipes',event =>{
    const {compacting,filling} = event.recipes.create
    //manyullyn ingot
    event.remove({id:'tconstruct:smeltery/melting/metal/manyullyn/nugget'})
    event.remove({id:'tconstruct:common/materials/manyullyn_ingot_from_nuggets'})
    compacting('tconstruct:manyullyn_ingot',item.of('tconstruct:manyullyn_nugget',9)).superheated().id('kjs_scavenge:pressing/manyullyn_ingot')

    //debris
    event.remove({id:'tconstruct:smeltery/melting/metal/molten_debris/debris_nugget'})
    compacting('mekanism:dirty_netherite_scrap',item.of('tconstruct:debris_nugget',9)).superheated().id('kjs_scavenge:pressing/dirty_netherite_scrap')
    
    //blaze cake
    event.remove({id:'create:filling/blaze_cake'})
    filling(
            'create:blaze_cake', 
        [
            'create:blaze_cake_base',
            fluid.of('tconstruct:blazing_blood', 250)
        ]
    ).id('kjs_scavenge:filling/blaze_cake')
})