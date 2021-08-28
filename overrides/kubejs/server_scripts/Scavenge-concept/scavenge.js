onEvent('recipes',event =>{
    //cutting down on space
    const {mixing,filling,splashing,sequenced_assembly,deploying,cutting}= event.recipes.create
    //context:
    //event.recipes.create.sequenced_assembly(output[], input, sequence[]).transitionalItem(item).loops(number)
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

})
