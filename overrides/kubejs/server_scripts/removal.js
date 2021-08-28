// priority: 1000
//removes based on ID
events.listen('recipes', event => {
    var ID = [
        //Botania
        'botania:conjuration_catalyst',
        'botania:spark',
        'botania:corporea_spark',

        //Extended Crafting
        'extendedcrafting:redstone_ingot',

        //Occultism
        'occultism:crafting/chalk_white_impure',
        'occultism:spirit_fire/chalk_white',

        //AE2
        'appliedenergistics2:network/cells/storage_components_cell_4k_part',

        //Refined Storage
        'refinedstorage:4k_storage_part',

        //Immersive Engineering
        'immersiveengineering:crafting/alloybrick',
    ];
    ID.forEach(iR => {
        event.remove({
            id: iR
        });
    });
});
