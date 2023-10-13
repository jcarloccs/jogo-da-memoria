const emojis = [
    "🎨",
    "😊",
    "😎",
    "🎶",
    "🎂",
    "🥩",
    "🚐",
    "🌎",
    "🚝",
    "👩‍🦱",
    "✌",
    "👍",
    "🛴",
    "🐱",
    "🐎",
    "🐬",
    "🧡",
    "💤",
    "💨",
    "💫",
    "💥",
    "💦",
    "🧁",
    "⭕",
    "❌",
    "🔆",
    "🕘",
    "✔",
    "😛",
    "🤑",
    "😡",
    "🦝"
];

let temp = [];

let openCards = [];

let game = document.querySelector(".game");

const quantidadeBtn = document.getElementById("quantidade");
quantidadeBtn.addEventListener("input", alterarQuantidade);

function alterarQuantidade() {
    openCards = [];
    game.className = `game`;
    let tamanhoDoEmoji;

    if (quantidadeBtn.value == 4) {
        game.setAttribute("style", `grid-template-columns: auto auto auto auto;`);
        tamanhoDoEmoji = "4em";
    } else if (quantidadeBtn.value == 6) {
        game.setAttribute("style", `grid-template-columns: auto auto auto auto auto auto;`);
        tamanhoDoEmoji = "3em";
    } else if (quantidadeBtn.value == 8) {
        game.setAttribute("style", `grid-template-columns: auto auto auto auto auto auto auto auto;`);
        tamanhoDoEmoji = "2em";
    }

    let quantidade = Math.pow(quantidadeBtn.value, 2);

    let emojis2 = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1)).slice(0, quantidade/2);

    temp = [];

    emojis2.forEach((x) => temp.push(x));
    emojis2.forEach((x) => temp.push(x));

    let shuffleEmojis = temp.sort(() => (Math.random() > 0.5 ? 2 : -1));

    game.innerHTML = "";

    for (let i = 0; i < temp.length; i++) {
        let box = document.createElement("div");
        box.className = `item`;
        box.style.fontSize = tamanhoDoEmoji;
        box.innerHTML = shuffleEmojis[i];
        box.onclick = handleClick;
        game.appendChild(box);
    }
}

function handleClick() {
    if (!openCards.includes(this)) {

        if (openCards.length < 2) {
            this.classList.add("boxOpen");
            openCards.push(this);
        }

        if (openCards.length == 2) {
            setTimeout(checkMatch, 500);
        }
    }

    console.log(openCards);
}

function checkMatch() {
    if (openCards[0].innerHTML === openCards[1].innerHTML) {
        openCards[0].classList.add("boxMatch");
        openCards[1].classList.add("boxMatch");
    } else {
        openCards[0].classList.remove("boxOpen");
        openCards[1].classList.remove("boxOpen");
    }

    openCards = [];

    if (document.querySelectorAll(".boxMatch").length === temp.length) {
        alert("Você venceu !");
    }
}

alterarQuantidade();