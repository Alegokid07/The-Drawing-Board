onEvent('recipes',event =>{
    //cutting down on space
    const {mixing,filling,splashing,sequenced_assembly,deploying,cutting}= event.recipes.create
    //context:
    //event.recipes.create.sequenced_assembly(output[], input, sequence[]).transitionalItem(item).loops(number)

    //gravel
    sequenced_assembly(
        [
            item.of('emendatusenigmatica:copper_nugget'),
            item.of('emendatusenigmatica:zinc_nugget'),
            item.of('emendatusenigmatica:silver_nugget'),
            item.of('emendatusenigmatica:lead_nugget'),
            item.of('minecraft:iron_nugget'),
            item.of('emendatusenigmatica:copper_nugget',3),
            item.of('emendatusenigmatica:zinc_nugget',3),
            item.of('emendatusenigmatica:silver_nugget',3),
            item.of('emendatusenigmatica:lead_nugget',3),
            item.of('minecraft:iron_nugget',3),
        ],
            item.of('minecraft:gravel'),
        [
            filling('minecraft:gravel',['minecraft:gravel',fluid.of('minecraft:water',200)]),
            cutting('minecraft:gravel','minecraft:gravel').processingTime(100)
        ]
        ).transitionalItem('minecraft:gravel').id('kjs_scavenge:gravel').loops(2)
    
    //limesand
    sequenced_assembly(
        [
            item.of('minecraft:lapis_lazuli'),
            item.of('minecraft:clay_ball'),
            item.of('minecraft:bone_meal'),
            item.of('emendatusenigmatica:silicon_gem'),
            item.of('minecraft:redstone'),

            item.of('minecraft:lapis_lazuli',3),
            item.of('minecraft:clay_ball',3),
            item.of('minecraft:bone_meal',3),
            item.of('emendatusenigmatica:silicon_gem',3),
            item.of('minecraft:redstone',3)
        ],
            item.of('create:limesand'),
        [
            filling('minecraft:gravel',['minecraft:gravel',fluid.of('minecraft:water',200)]),
            cutting('minecraft:gravel','minecraft:gravel').processingTime(100)
        ]
    ).transitionalItem('create:limesand').id('kjs_scavenge:limesand').loops(2)

    //sand
    sequenced_assembly(
        [
            item.of('minecraft:gold_nugget'),
            item.of('emendatusenigmatica:tin_nugget'),
            item.of('minecraft:clay_ball'),
            item.of('botania:quartz_sunny'),

            item.of('minecraft:gold_nugget',3),
            item.of('emendatusenigmatica:tin_nugget',3),
            item.of('minecraft:clay_ball',3),
            item.of('botania:quartz_sunny',3),
            item.of('tconstruct:quartz_shuriken',2)
        ],
        item.of('minecraft:sand'),
        [
            filling('minecraft:gravel',['minecraft:gravel',fluid.of('minecraft:water',200)]),
            cutting('minecraft:gravel','minecraft:gravel').processingTime(100)
        ]
    ).transitionalItem('minecraft:sand').id('kjs_scavenge:sand').loops(2)

    //netherrack
    sequenced_assembly(
        [
            //tier 1
            item.of('create:cinder_flour',3).withChance(20.5),
            item.of('create:rose_quartz').withChance(20.5),
            item.of('tconstruct:scorched_brick').withChance(20.5),
            item.of('tconstruct:ichor_slime_ball').withChance(20.5),
            //tier 2
            item.of('quark:soul_bead').withChance(6.5),
            item.of('tconstruct:cobalt_nugget',2).withChance(6.5),
            //tier 3
            item.of('tconstruct:manyullyn_nugget').withChance(2.5),
            item.of('tconstruct:debris_nugget').withChance(2.5),
        ],
            item.of('minecraft:netherrack'),
        [
            filling('minecraft:gravel',['minecraft:gravel',fluid.of('minecraft:water',200)]),
            cutting('minecraft:gravel','minecraft:gravel').processingTime(100)
        ]
    ).transitionalItem('minecraft:netherrack').id('kjs_scavenge:netherrack').loops(2)
})
