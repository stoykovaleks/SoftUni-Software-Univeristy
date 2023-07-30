function isValidBossInput(input) {
    let n = Number(input.shift());
    let pattern = /^\|([A-Z]{4,})\|:#([A-Za-z]+ [A-Za-z]+)#$/;

    for (let i = 0; i < n; i++) {
        let line = input[i];
        let match = line.match(pattern);

        if (match) {
            let bossName = match[1];
            let title = match[2];
            let strength = bossName.length;
            let armor = title.length;

            console.log(`${bossName}, The ${title}\n>> Strength: ${strength}\n>> Armor: ${armor}`);
        }
        else {
            console.log("Access denied!");
        }
    }
}
isValidBossInput((['3', '|PETER|:#Lead architect#', '|GEORGE|:#High Overseer#', '|ALEX|:#Assistant Game Developer#']))