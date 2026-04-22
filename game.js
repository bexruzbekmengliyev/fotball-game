// Jamoalar va o'yinchilar ma'lumotlari (2026)
const teams = {
    realMadrid: {
        name: "Real Madrid",
        logo: "👑",
        color: "team-a",
        players: [
            { number: 1, name: "Courtois", position: "GK", x: 5, y: 50 },
            { number: 2, name: "Carvajal", position: "DF", x: 20, y: 20 },
            { number: 3, name: "Militao", position: "DF", x: 15, y: 40 },
            { number: 4, name: "Alaba", position: "DF", x: 15, y: 60 },
            { number: 23, name: "Mendy", position: "DF", x: 20, y: 80 },
            { number: 8, name: "Valverde", position: "MF", x: 35, y: 30 },
            { number: 10, name: "Modric", position: "MF", x: 35, y: 50 },
            { number: 15, name: "Tchouameni", position: "MF", x: 35, y: 70 },
            { number: 11, name: "Rodrygo", position: "FW", x: 50, y: 25 },
            { number: 7, name: "Vinicius Jr", position: "FW", x: 50, y: 75 },
            { number: 9, name: "Mbappe", position: "FW", x: 55, y: 50 }
        ]
    },
    barcelona: {
        name: "Barcelona",
        logo: "🔵",
        color: "team-b",
        players: [
            { number: 1, name: "Ter Stegen", position: "GK", x: 95, y: 50 },
            { number: 2, name: "Kounde", position: "DF", x: 80, y: 20 },
            { number: 4, name: "Araujo", position: "DF", x: 85, y: 40 },
            { number: 23, name: "Christensen", position: "DF", x: 85, y: 60 },
            { number: 3, name: "Balde", position: "DF", x: 80, y: 80 },
            { number: 21, name: "De Jong", position: "MF", x: 65, y: 35 },
            { number: 8, name: "Pedri", position: "MF", x: 65, y: 50 },
            { number: 6, name: "Gavi", position: "MF", x: 65, y: 65 },
            { number: 19, name: "Yamal", position: "FW", x: 50, y: 25 },
            { number: 11, name: "Raphinha", position: "FW", x: 50, y: 75 },
            { number: 9, name: "Lewandowski", position: "FW", x: 45, y: 50 }
        ]
    },
    manCity: {
        name: "Man City",
        logo: "🔵",
        color: "team-a",
        players: [
            { number: 31, name: "Ederson", position: "GK", x: 5, y: 50 },
            { number: 2, name: "Walker", position: "DF", x: 20, y: 20 },
            { number: 3, name: "Dias", position: "DF", x: 15, y: 40 },
            { number: 25, name: "Akanji", position: "DF", x: 15, y: 60 },
            { number: 24, name: "Gvardiol", position: "DF", x: 20, y: 80 },
            { number: 16, name: "Rodri", position: "MF", x: 35, y: 50 },
            { number: 17, name: "De Bruyne", position: "MF", x: 40, y: 35 },
            { number: 20, name: "Bernardo", position: "MF", x: 40, y: 65 },
            { number: 47, name: "Foden", position: "FW", x: 50, y: 25 },
            { number: 10, name: "Grealish", position: "FW", x: 50, y: 75 },
            { number: 9, name: "Haaland", position: "FW", x: 55, y: 50 }
        ]
    },
    bayern: {
        name: "Bayern Munich",
        logo: "🔴",
        color: "team-b",
        players: [
            { number: 1, name: "Neuer", position: "GK", x: 95, y: 50 },
            { number: 40, name: "Mazraoui", position: "DF", x: 80, y: 20 },
            { number: 2, name: "Upamecano", position: "DF", x: 85, y: 40 },
            { number: 3, name: "Kim", position: "DF", x: 85, y: 60 },
            { number: 19, name: "Davies", position: "DF", x: 80, y: 80 },
            { number: 6, name: "Kimmich", position: "MF", x: 65, y: 35 },
            { number: 8, name: "Goretzka", position: "MF", x: 65, y: 50 },
            { number: 42, name: "Musiala", position: "MF", x: 60, y: 65 },
            { number: 10, name: "Sane", position: "FW", x: 50, y: 25 },
            { number: 11, name: "Coman", position: "FW", x: 50, y: 75 },
            { number: 9, name: "Kane", position: "FW", x: 45, y: 50 }
        ]
    },
    liverpool: {
        name: "Liverpool",
        logo: "🔴",
        color: "team-a",
        players: [
            { number: 1, name: "Alisson", position: "GK", x: 5, y: 50 },
            { number: 66, name: "Alexander-Arnold", position: "DF", x: 20, y: 20 },
            { number: 4, name: "Van Dijk", position: "DF", x: 15, y: 40 },
            { number: 5, name: "Konate", position: "DF", x: 15, y: 60 },
            { number: 26, name: "Robertson", position: "DF", x: 20, y: 80 },
            { number: 3, name: "Endo", position: "MF", x: 35, y: 50 },
            { number: 8, name: "Szoboszlai", position: "MF", x: 40, y: 35 },
            { number: 10, name: "Mac Allister", position: "MF", x: 40, y: 65 },
            { number: 11, name: "Salah", position: "FW", x: 50, y: 25 },
            { number: 7, name: "Diaz", position: "FW", x: 50, y: 75 },
            { number: 9, name: "Nunez", position: "FW", x: 55, y: 50 }
        ]
    },
    psg: {
        name: "PSG",
        logo: "🔵",
        color: "team-b",
        players: [
            { number: 99, name: "Donnarumma", position: "GK", x: 95, y: 50 },
            { number: 2, name: "Hakimi", position: "DF", x: 80, y: 20 },
            { number: 5, name: "Marquinhos", position: "DF", x: 85, y: 40 },
            { number: 21, name: "Skriniar", position: "DF", x: 85, y: 60 },
            { number: 25, name: "Mendes", position: "DF", x: 80, y: 80 },
            { number: 33, name: "Zaire-Emery", position: "MF", x: 65, y: 35 },
            { number: 8, name: "Fabian", position: "MF", x: 65, y: 50 },
            { number: 17, name: "Vitinha", position: "MF", x: 65, y: 65 },
            { number: 10, name: "Dembele", position: "FW", x: 50, y: 25 },
            { number: 7, name: "Mbappe", position: "FW", x: 50, y: 75 },
            { number: 9, name: "Goncalo", position: "FW", x: 45, y: 50 }
        ]
    }
};


// O'yin o'zgaruvchilari
let currentPlayerTeam = null;
let cpuTeam = null;
let scorePlayer = 0;
let scoreCpu = 0;
let matchTime = 0;
let gameInterval = null;
let ballPosition = { x: 50, y: 50 };
let activePlayerIndex = 0;
let isPlayerTurn = true;

// Sahifa yuklanganda
document.addEventListener('DOMContentLoaded', () => {
    initializeGame();
});

function initializeGame() {
    showMainMenu();
}

function showMainMenu() {
    hideAllMenus();
    document.getElementById('mainMenu').classList.remove('hidden');
}

function showTeamSelection() {
    hideAllMenus();
    document.getElementById('teamSelection').classList.remove('hidden');
    renderTeams();
}

function showInstructions() {
    hideAllMenus();
    document.getElementById('instructions').classList.remove('hidden');
}

function hideAllMenus() {
    document.querySelectorAll('.menu, .modal').forEach(menu => {
        menu.classList.add('hidden');
    });
    document.getElementById('gameField').classList.add('hidden');
}

function renderTeams() {
    const grid = document.getElementById('teamsGrid');
    grid.innerHTML = '';
    
    Object.keys(teams).forEach(teamKey => {
        const team = teams[teamKey];
        const card = document.createElement('div');
        card.className = 'team-card';
        card.innerHTML = `
            <div class="team-logo">${team.logo}</div>
            <div class="team-name">${team.name}</div>
            <div class="team-players">
                ${team.players.slice(0, 5).map(p => `${p.number}. ${p.name}`).join('<br>')}
                ...
            </div>
        `;
        card.onclick = () => selectTeam(teamKey);
        grid.appendChild(card);
    });
}

function selectTeam(teamKey) {
    currentPlayerTeam = teams[teamKey];
    
    // CPU uchun tasodifiy jamoa tanlash
    const teamKeys = Object.keys(teams).filter(k => k !== teamKey);
    cpuTeam = teams[teamKeys[Math.floor(Math.random() * teamKeys.length)]];
    
    startGame();
}

function startGame() {
    scorePlayer = 0;
    scoreCpu = 0;
    matchTime = 0;
    ballPosition = { x: 50, y: 50 };
    
    document.getElementById('playerTeamName').textContent = currentPlayerTeam.name.substring(0, 4).toUpperCase();
    document.getElementById('cpuTeamName').textContent = cpuTeam.name.substring(0, 4).toUpperCase();
    document.getElementById('scorePlayer').textContent = '0';
    document.getElementById('scoreCpu').textContent = '0';
    
    hideAllMenus();
    document.getElementById('gameField').classList.remove('hidden');
    
    renderPlayers();
    updateBallPosition();
    startMatchTimer();
}

function renderPlayers() {
    const container = document.getElementById('playersContainer');
    container.innerHTML = '';
    
    // O'yinchi jamoasi
    currentPlayerTeam.players.forEach((player, index) => {
        const playerEl = document.createElement('div');
        playerEl.className = `player ${currentPlayerTeam.color}`;
        if (index === activePlayerIndex) playerEl.classList.add('active');
        playerEl.style.left = `${player.x}%`;
        playerEl.style.top = `${player.y}%`;
        playerEl.innerHTML = `
            <span class="player-number">${player.number}</span>
            <span class="player-name">${player.name}</span>
        `;
        container.appendChild(playerEl);
    });
    
    // CPU jamoasi
    cpuTeam.players.forEach((player, index) => {
        const playerEl = document.createElement('div');
        playerEl.className = `player ${cpuTeam.color}`;
        playerEl.style.left = `${player.x}%`;
        playerEl.style.top = `${player.y}%`;
        playerEl.innerHTML = `
            <span class="player-number">${player.number}</span>
            <span class="player-name">${player.name}</span>
        `;
        container.appendChild(playerEl);
    });
}

function updateBallPosition() {
    const ball = document.getElementById('ball');
    ball.style.left = `calc(${ballPosition.x}% - 10px)`;
    ball.style.top = `calc(${ballPosition.y}% - 10px)`;
}

function startMatchTimer() {
    if (gameInterval) clearInterval(gameInterval);
    
    gameInterval = setInterval(() => {
        matchTime++;
        const minutes = Math.floor(matchTime / 60);
        const seconds = matchTime % 60;
        document.getElementById('matchTime').textContent = 
            `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        
        // 90 daqiqadan keyin o'yin tugaydi
        if (matchTime >= 90 * 60) {
            endGame();
        }
        
        // Har 10 daqiqada CPU harakat qiladi
        if (matchTime % (10 * 60) === 0) {
            cpuMove();
        }
    }, 100); // Real vaqtni tezlashtirish
}

function passBall() {
    if (!isPlayerTurn) return;
    
    const activePlayer = currentPlayerTeam.players[activePlayerIndex];
    
    // To'pni yaqin o'yinchiga uzatish
    let nearestDistance = Infinity;
    let nearestIndex = 0;
    
    currentPlayerTeam.players.forEach((player, index) => {
        if (index !== activePlayerIndex) {
            const distance = Math.sqrt(
                Math.pow(player.x - activePlayer.x, 2) + 
                Math.pow(player.y - activePlayer.y, 2)
            );
            if (distance < nearestDistance) {
                nearestDistance = distance;
                nearestIndex = index;
            }
        }
    });
    
    ballPosition.x = currentPlayerTeam.players[nearestIndex].x;
    ballPosition.y = currentPlayerTeam.players[nearestIndex].y;
    activePlayerIndex = nearestIndex;
    
    updateBallPosition();
    renderPlayers();
    isPlayerTurn = false;
    
    setTimeout(() => {
        cpuMove();
        isPlayerTurn = true;
    }, 1000);
}

function shootBall() {
    if (!isPlayerTurn) return;
    
    const activePlayer = currentPlayerTeam.players[activePlayerIndex];
    
    // Darvozaga yaqinlikni tekshirish
    if (activePlayer.x > 70) {
        // Gol urish ehtimoli
        const goalChance = Math.random();
        if (goalChance > 0.4) {
            scoreGoal('player', activePlayer);
        } else {
            // Gol urilmadi
            ballPosition = { x: 50, y: 50 };
            updateBallPosition();
            isPlayerTurn = false;
            setTimeout(() => {
                cpuMove();
                isPlayerTurn = true;
            }, 1000);
        }
    } else {
        alert("Darvozaga juda uzoqsiz! Yaqinroq boring.");
    }
}

function sprintPlayer() {
    if (!isPlayerTurn) return;
    
    const player = currentPlayerTeam.players[activePlayerIndex];
    player.x = Math.min(player.x + 10, 90);
    
    renderPlayers();
    isPlayerTurn = false;
    
    setTimeout(() => {
        cpuMove();
        isPlayerTurn = true;
    }, 500);
}

function cpuMove() {
    // CPU tasodifiy harakat qiladi
    const randomPlayer = Math.floor(Math.random() * cpuTeam.players.length);
    const player = cpuTeam.players[randomPlayer];
    
    // To'pni olish
    ballPosition.x = player.x;
    ballPosition.y = player.y;
    updateBallPosition();
    
    // Gol urishga harakat qilish
    if (player.x < 30 && Math.random() > 0.6) {
        const goalChance = Math.random();
        if (goalChance > 0.5) {
            scoreGoal('cpu', player);
        } else {
            ballPosition = { x: 50, y: 50 };
            updateBallPosition();
        }
    } else {
        ballPosition = { x: 50, y: 50 };
        updateBallPosition();
    }
}

function scoreGoal(scorer, player) {
    if (scorer === 'player') {
        scorePlayer++;
        document.getElementById('scorePlayer').textContent = scorePlayer;
        document.getElementById('goalScorer').textContent = 
            `${currentPlayerTeam.name} - ${player.name} (${player.number})`;
    } else {
        scoreCpu++;
        document.getElementById('scoreCpu').textContent = scoreCpu;
        document.getElementById('goalScorer').textContent = 
            `${cpuTeam.name} - ${player.name} (${player.number})`;
    }
    
    document.getElementById('goalModal').classList.remove('hidden');
}

function continueGame() {
    document.getElementById('goalModal').classList.add('hidden');
    ballPosition = { x: 50, y: 50 };
    updateBallPosition();
    isPlayerTurn = true;
}

function endGame() {
    clearInterval(gameInterval);
    
    const result = scorePlayer > scoreCpu ? "G'ALABA! 🎉" : 
                   scorePlayer < scoreCpu ? "MAG'LUBIAT 😔" : "DURANG 🤝";
    
    document.getElementById('finalResult').textContent = result;
    document.getElementById('finalPlayerScore').textContent = 
        `${currentPlayerTeam.name}: ${scorePlayer}`;
    document.getElementById('finalCpuScore').textContent = 
        `${cpuTeam.name}: ${scoreCpu}`;
    
    document.getElementById('gameOver').classList.remove('hidden');
}

// Klaviatura boshqaruvi
document.addEventListener('keydown', (e) => {
    if (document.getElementById('gameField').classList.contains('hidden')) return;
    
    switch(e.key.toLowerCase()) {
        case 'a':
            passBall();
            break;
        case 's':
            shootBall();
            break;
        case 'd':
            sprintPlayer();
            break;
        case 'arrowup':
            movePlayer(0, -5);
            break;
        case 'arrowdown':
            movePlayer(0, 5);
            break;
        case 'arrowleft':
            movePlayer(-5, 0);
            break;
        case 'arrowright':
            movePlayer(5, 0);
            break;
    }
});

function movePlayer(dx, dy) {
    if (!isPlayerTurn) return;
    
    const player = currentPlayerTeam.players[activePlayerIndex];
    player.x = Math.max(0, Math.min(100, player.x + dx));
    player.y = Math.max(0, Math.min(100, player.y + dy));
    
    renderPlayers();
}
