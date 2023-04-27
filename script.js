function komenda(id){
    commandsText = document.getElementById("commands");
    commandsText.style.left = 0 + "px";
    if (id == 1){
        document.getElementById("line001").textContent = "pierwsza komenda od tego pierwszego bloka poleceń (fioletowego staje się fioletowym poprzez ustawienie w opcjach na repeat)";
        document.getElementById("line002").textContent = 'gamemode creative @a[nbt={SelectedItem:{id:"minecraft:command_block"}}]';
        document.getElementById("line003").textContent = "druga komenda w pomarańczowym" 
        document.getElementById("line004").textContent = "gamemode survival @p"

    }
    if (id == 2){
        document.getElementById("line001").textContent = '1. [repeat] [unconditional] [always active] /gamemode survival @a[nbt={SelectedItem:{id:"minecraft:bone"}}]';
        document.getElementById("line002").textContent = '2. [repeat] [unconditional] [needs redstone] /effect give @p minecraft:invisibility 1 1';
        document.getElementById("line003").textContent = '3. [chain] [unconditional] [always active] /tp @e[name=balto] @p';
        document.getElementById("line004").textContent = '4. [chain] [unconditional] [always active] /effect give @p minecraft:speed 1 1 true';
        document.getElementById("line005").textContent = '5 (ten w tubie a tuby nie trzeba budować ale ja zbudowałem bo miałęm ochotę ;-)).';
        document.getElementById("line006").textContent = '[repeat] [unconditional] [needs redstone] /tp @e[name=balto] ~ ~1 ~ facing 66.73 73.00 -31.39';
        document.getElementById("line007").textContent = '6.[repeat] [unconditional] [always active] /effect give @e[name=balto] minecraft:fire_resistance 1 10 true';
        document.getElementById("line008").textContent = '7.[repeat] [unconditional] [always active] /effect give @e[name=balto] minecraft:absorption 1 10 true';
        document.getElementById("line009").textContent = '8.[repeat] [unconditional] [always active] /effect give @e[name=balto] minecraft:health_boost 1 10 true';
        document.getElementById("line010").textContent = '9.[repeat] [unconditional] [always active] /effect give @e[name=balto] minecraft:regeneration 1 10 true';
    }
    if (id == 3){
        document.getElementById("line001").textContent = komenda1;
    }
    if (id == 4){
        document.getElementById("line001").textContent = komenda1;
    }
}