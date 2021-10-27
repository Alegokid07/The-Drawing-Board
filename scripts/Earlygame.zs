import mods.botania.ManaInfusion;
import mods.botania.StateIngredient;
import mods.botania.ElvenTrade;
import crafttweaker.api.blocks.MCBlockState;
craftingTable.addShapeless("e521f2a3-bcfc-46a9-8ea8-f66342294dad",<item:atmospheric:passionfruit>, [
	<item:cyclic:biomass>, <item:minecraft:purple_dye>, <item:minecraft:purple_dye>, <item:minecraft:magenta_dye>, <item:minecraft:dandelion>, <item:minecraft:purple_dye>, <item:minecraft:magenta_dye>, <item:minecraft:magenta_dye>, <item:cyclic:biomass>
]);
craftingTable.removeRecipe(<item:botania:conjuration_catalyst>);
craftingTable.removeRecipe(<item:extendedcrafting:redstone_ingot>);
craftingTable.addShapeless("a30ef41c-1e1e-4e1c-b545-6bbdbd07023b",<item:extendedcrafting:redstone_ingot>, [
	<item:minecraft:redstone>, <item:minecraft:redstone>, <item:minecraft:redstone>, <item:immersiveengineering:ingot_copper>, <item:minecraft:redstone>
]);
craftingTable.addShaped("cf59a264-d5b2-498d-b487-39bd40943baa", <item:botania:conjuration_catalyst>, [
	[<item:botania:livingrock>, <item:botania:animated_torch>, <item:botania:livingrock>], 
	[<item:extendedcrafting:redstone_ingot>, <item:minecraft:redstone_block>, <item:extendedcrafting:redstone_ingot>], 
	[<item:botania:livingrock>, <item:extendedcrafting:redstone_ingot>, <item:botania:livingrock>]
]);
<recipetype:botania:mana_infusion>.addRecipe("ddream", <item:occultism:datura>, <item:atmospheric:passionfruit>, 640, <block:botania:conjuration_catalyst>);
<recipetype:botania:mana_infusion>.addRecipe("chalky", <item:occultism:chalk_white_impure>, <item:create:limesand>, 1280, <block:botania:conjuration_catalyst>);
craftingTable.removeRecipe(<item:occultism:chalk_white_impure>);
<recipetype:occultism:spirit_fire>.removeRecipe(<item:occultism:chalk_white>); 
<recipetype:botania:elven_trade>.addRecipe("elven_trade_test", [<item:occultism:chalk_white>], <item:occultism:chalk_white_impure>);
craftingTable.addShaped("4d95c931-4049-4276-a40d-6337bfad4df5",<item:astralsorcery:glow_flower>*4, [
	[<item:minecraft:torch>, <item:botania:grass_seeds>, <item:minecraft:torch>], 
	[<item:botania:golden_seeds>, <item:minecraft:glowstone_dust>, <item:botania:golden_seeds>], 
	[<item:minecraft:torch>, <item:botania:grass_seeds>, <item:minecraft:torch>]
]);
craftingTable.addShaped("4d95c931-4049-4276-a40d-6337bfad4df4",<item:astralsorcery:glow_flower>*4, [
	[<item:minecraft:torch>, <item:botania:golden_seeds>, <item:minecraft:torch>], 
	[<item:botania:golden_grass>, <item:minecraft:glowstone_dust>, <item:botania:grass_seeds>], 
	[<item:minecraft:torch>, <item:botania:golden_seeds>, <item:minecraft:torch>]
]);
craftingTable.removeRecipe(<item:botania:spark>);
craftingTable.addShaped("ea44d197-6c02-4b98-b660-df2e07beeb2d",<item:botania:spark>*2, [
	[<item:minecraft:air>, <tag:items:botania:petals>, <item:minecraft:air>], 
	[<item:minecraft:glowstone_dust>, <item:botania:manasteel_ingot>, <item:minecraft:glowstone_dust>], 
	[<item:minecraft:air>, <tag:items:botania:petals>, <item:minecraft:air>]
]);
craftingTable.removeRecipe(<item:botania:corporea_spark>);
craftingTable.addShapeless("dfb993db-8638-4154-9816-a2a1de55d91b", <item:botania:corporea_spark>*2, [
	<item:minecraft:chest>, <item:botania:spark>, <item:botania:mana_powder>, <item:botania:manasteel_ingot>
]);
craftingTable.addShapeless("dfb983db-8638-4154-9816-a2a1de55d91b", <item:botania:corporea_spark>*4, [
	<item:minecraft:chest>, <item:botania:spark>, <item:botania:mana_powder>, <item:botania:mana_pearl>
]);
craftingTable.addShapeless("dfb983db-8638-4154-9816-a2b1de55d91b", <item:botania:corporea_spark>*6, [
	<item:minecraft:chest>, <item:botania:spark>, <item:botania:mana_powder>, <item:botania:mana_diamond>
]);
craftingTable.removeRecipe(<item:appliedenergistics2:4k_cell_component>);
craftingTable.addShaped("55d109a5-c390-4820-abfb-4987044a5df3",<item:appliedenergistics2:4k_cell_component>, [
	[<item:appliedenergistics2:calculation_processor>, <item:minecraft:glass>, <item:appliedenergistics2:calculation_processor>], 
	[<item:minecraft:glass>, <item:occultism:storage_stabilizer_tier1>, <item:minecraft:glass>], 
	[<item:appliedenergistics2:calculation_processor>, <item:minecraft:glass>, <item:appliedenergistics2:calculation_processor>]
]);
craftingTable.removeRecipe(<item:refinedstorage:4k_storage_part>);
craftingTable.addShaped("56d70f62-2772-4a55-a015-d189ba82b61b",<item:refinedstorage:4k_storage_part>, [
	[<item:refinedstorage:basic_processor>, <item:minecraft:glass>, <item:refinedstorage:basic_processor>], 
	[<item:minecraft:glass>, <item:occultism:storage_stabilizer_tier1>, <item:minecraft:glass>], 
	[<item:refinedstorage:basic_processor>, <item:minecraft:glass>, <item:refinedstorage:basic_processor>]
]);
craftingTable.removeRecipe(<item:immersiveengineering:alloybrick>);
craftingTable.addShaped("7033a997-344b-4deb-b238-384568756c8b", <item:immersiveengineering:alloybrick>*2, [
	[<item:botania:livingrock>, <item:minecraft:brick>], 
	[<item:minecraft:brick>, <item:botania:livingrock>]
]);
craftingTable.removeRecipe(<item:botania:mana_pool>);
craftingTable.addShaped("1fb0ede5-a9f8-4094-82ca-5931aa1b4df4", <item:botania:mana_pool>, [
	[<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>], 
	[<item:botania:livingrock>, <item:minecraft:air>, <item:botania:livingrock>], 
	[<item:immersiveengineering:sheetmetal_constantan>, <item:botania:livingrock>, <item:immersiveengineering:sheetmetal_constantan>]
]);
craftingTable.addShaped("22440991-a595-4175-b60f-a46ba4f86c5b", <item:kubejs:interdim_linker>, [
	[<item:minecraft:air>, <item:extendedcrafting:redstone_ingot_block>, <item:minecraft:air>], 
	[<item:kubejs:kapparite_ingot>, <item:botania:elf_glass>, <item:kubejs:kapparite_ingot>], 
	[<item:kubejs:kapparite_ingot>, <item:botania:elf_glass>, <item:kubejs:kapparite_ingot>]
]);
craftingTable.addShaped("82e12d96-fd9b-4852-9acc-a00dddfd5e81", <item:kubejs:dcmempty>, [
	[<item:minecraft:air>, <item:kubejs:interdim_linker>, <item:minecraft:air>], 
	[<item:kubejs:kapparite_ingot>, <item:botania:elf_glass>, <item:kubejs:kapparite_ingot>], 
	[<item:botania:terrasteel_ingot>, <item:botania:elf_glass>, <item:botania:terrasteel_ingot>]
]);
<recipetype:botania:mana_infusion>.addRecipe("dcmtofull", <item:kubejs:dcmfull>, <item:kubejs:dcmempty>, 1000);