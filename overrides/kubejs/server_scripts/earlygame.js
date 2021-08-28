

onEvent('recipes', event => {

    //Functions
    function botaniaManaInfusion(output, input, mana, catalyst) {
        event.custom({
            type: 'botania:mana_infusion',
            input: item.of(input),
            output: item.of(output),
            mana: mana,
            catalyst: catalyst
        }).id('kjs_' + output)
    }

    function elvenTrade(name, outputs, inputs) {
        event.custom({
            type: 'botania:elven_trade',
            ingredients: [
                ingredient.of(inputs)
            ],
            output: [
                ingredient.of(outputs)
            ],
        }).id('kjs_' + name)
    }

    //Shapeless Recipes
	event.shapeless('atmospheric:passionfruit', ['cyclic:biomass', 'minecraft:purple_dye', 'minecraft:purple_dye', 'minecraft:magenta_dye', 'minecraft:dandelion', 'minecraft:purple_dye', 'minecraft:magenta_dye', 'minecraft:magenta_dye', 'cyclic:biomass']).id('kjs_passionfruit');
    event.shapeless('extendedcrafting:redstone_ingot', ['immersiveengineering:ingot_copper', 'minecraft:redstone', 'minecraft:redstone',  'minecraft:redstone',  'minecraft:redstone']).id('kjs_redstone_ingot');
    event.shapeless('2x botania:corporea_spark', ['#forge:chests', 'botania:spark', 'botania:mana_powder', 'botania:manasteel_ingot']).id('kjs_corporea_spark_manasteel');
    event.shapeless('4x botania:corporea_spark', ['#forge:chests', 'botania:spark', 'botania:mana_powder', 'botania:mana_pearl']).id('kjs_corporea_spark_manapearl');
    event.shapeless('6x botania:corporea_spark', ['#forge:chests', 'botania:spark', 'botania:mana_powder', 'botania:mana_diamond']).id('kjs_corporea_spark_manadiamond');

    //Shaped Recipes
    event.shaped('botania:conjuration_catalyst', [
        'LAL',
        'IBI',
        'LIL'
    ], {
        L: 'botania:livingrock',
        A: 'botania:animated_torch',
        I: 'extendedcrafting:redstone_ingot',
        B: 'minecraft:redstone_block'
    }).id('kjs_conjuration_catalyst');
    
    event.shaped('4x astralsorcery:glow_flower', [
        'TST',
        'GDG',
        'TST'
    ], {
        T: 'minecraft:torch',
        S: 'botania:golden_seeds',
        G: 'botania:grass_seeds',
        D: 'minecraft:glowstone_dust'
    }).id('kjs_glow_flower');
    
    event.shaped('2x botania:spark', [
        ' P ',
        'DID',
        ' P '
    ], {
        P: '#botania:petals',
        D: 'minecraft:glowstone_dust',
        I: 'botania:manasteel_ingot'
    }).id('kjs_spark');

    
    event.shaped('appliedenergistics2:4k_cell_component', [
        'PGP',
        'GSG',
        'PGP'
    ], {
        P: 'appliedenergistics2:calculation_processor',
        G: '#forge:glass',
        S: 'occultism:storage_stabilizer_tier1'
    }).id('kjs_4k_cell_component')

    event.shaped('refinedstorage:4k_storage_part', [
        'PGP',
        'GSG',
        'PGP'
    ], {
        P: 'refinedstorage:basic_processor',
        G: '#forge:glass',
        S: 'occultism:storage_stabilizer_tier1'
    }).id('kjs_4k_storage_part')
    
    event.shaped('2x immersiveengineering:alloybrick', [
        'LB',
        'BL'
    ], {
        L: 'botania:livingrock',
        B: 'minecraft:brick'
    }).id('kjs_alloybrick');

    event.shaped('botania:mana_pool', [
        'L L',
        'MLM'
    ], {
        L: 'botania:livingrock',
        M: 'immersiveengineering:sheetmetal_constantan',
    })

    //Custom Recipes
    botaniaManaInfusion('occultism:chalk_white_impure', 'create:limesand', 1280, 'botania:conjuration_catalyst');
    botaniaManaInfusion('occultism:datura', 'atmospheric:passionfruit', 640, 'botania:conjuration_catalyst');

    elvenTrade('chalk_white', 'occultism:chalk_white', 'occultism:chalk_white_impure');
})