function updateStat(statId, increment) {
    let statElement = document.getElementById(statId);
    let statValue = parseInt(statElement.innerText); 

    if (increment) {
        statValue += 1;
    } else {
        statValue = Math.max(0, statValue - 1);
    }

    statElement.innerText = statValue;

    updateTotalScore();
    updateTotalAssist();
    updateTotalRebound();
    updateTotalSteal();
    updateTotalBlock();
    updateTotalFouls();
    updateTeamFouls();
}

function updateTotalScore() {
    let totalScore = 0;
    let pointElements = document.querySelectorAll("[id^='point-']"); 

    pointElements.forEach(element => {
        totalScore += parseInt(element.innerText);
    });

    document.getElementById("total-score").innerText = totalScore;
}

function updateTotalAssist() {
    let totalAssist = 0;
    let assistElements = document.querySelectorAll("[id^='assist']"); 

    assistElements.forEach(element => {
        totalAssist += parseInt(element.innerText);
    });

    document.getElementById("total-assist").innerText = totalAssist;
}

function updateTotalRebound() {
    let totalRebound = 0;
    let reboundElements = document.querySelectorAll("[id^='rebound']");
    
    reboundElements.forEach(element => {
        totalRebound += parseInt(element.innerText);
    });

    document.getElementById("total-rebound").innerText = totalRebound;
}

function updateTotalSteal() {
    let totalSteal = 0;
    let stealElements = document.querySelectorAll("[id^='steal']");
    
    stealElements.forEach(element => {
        totalSteal += parseInt(element.innerText);
    });

    document.getElementById("total-steal").innerText = totalSteal;
}

function updateTotalBlock() {
    let totalBlock = 0;
    let blockElements = document.querySelectorAll("[id^='block']");
    
    blockElements.forEach(element => {
        totalBlock += parseInt(element.innerText);
    });

    document.getElementById("total-block").innerText = totalBlock;
}

function updateTotalFouls() {
    let totalFouls = 0;
    let foulElements = document.querySelectorAll("[id^='foul']");
    
    foulElements.forEach(element => {
        totalFouls += parseInt(element.innerText);
    });

    document.getElementById("total-fouls").innerText = totalFouls;
}

function updateTeamFouls() {
    let teamFouls = parseInt(document.getElementById("team-fouls").innerText);
    teamFouls += 1;
    document.getElementById("team-fouls").innerText = teamFouls;
}

function resetTeamFouls() {
    document.getElementById("team-fouls").innerText = 0;
}

