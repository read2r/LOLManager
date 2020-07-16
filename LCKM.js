const playerCardWidth = 150;
const PlayerCardFontSize = 15;
const playerCardPadding = 10;
const playerCardHeight = playerCardWidth + PlayerCardFontSize + playerCardPadding * 2
const playerCardCornerAngle = 20;
const playerCardInterval = 30;
const playerCardIconSize = 25;

const ds = 40;
const positionCardWidth = playerCardWidth + ds;
const positionCardHeight = playerCardHeight + ds
const positionCardCornerAngle = playerCardCornerAngle + ds / 2; 
const positionCardInterval = 30;
const positionIconSide = 100;

var positionList = ["top", "jng", "mid", "adc", "sup"]
var positionCardList = [];
var playerList = [
    {
        name: "doran",
        position: "top",
        team: "drx",
        year: 2020,
        color: "#5A8DFF",
    }, {
        name: "pyosik",
        position: "jng",
        team: "drx",
        year: 2020,
        color: "#5A8DFF",
    }, {
        name: "chovy",
        position: "mid",
        team: "drx",
        year: 2020,
        color: "#5A8DFF",
    }, {
        name: "deft",
        position: "adc",
        team: "drx",
        year: 2020,
        color: "#5A8DFF",
    }, {
        name: "keria",
        position: "sup",
        team: "drx",
        year: 2020,
        color: "#5A8DFF",
    },
]

var sources = {
    doran: './assets/Team/2020/DRX/doran150.png',
    pyosik: './assets/Team/2020/DRX/pyosik150.png',
    chovy: './assets/Team/2020/DRX/chovy150.png',
    deft: './assets/Team/2020/DRX/deft150.png',
    keria: './assets/Team/2020/DRX/keria150.png',
    drxIcon: './assets/Team/2020/DRX/drxIcon25.png',
    top25: "./assets/InGame/top25.png",
    jng25: "./assets/InGame/jng25.png",
    mid25: "./assets/InGame/mid25.png",
    adc25: "./assets/InGame/adc25.png",
    sup25: "./assets/InGame/sup25.png",
    top100: "./assets/InGame/top100.png",
    jng100: "./assets/InGame/jng100.png",
    mid100: "./assets/InGame/mid100.png",
    adc100: "./assets/InGame/adc100.png",
    sup100: "./assets/InGame/sup100.png"
};

var layer;

function loadImage(sources, callback) {
    var images = {};
    var loadedImages = 0;
    var numImages = 0;
    // get num of sources
    for (var src in sources) {
        numImages++;
    }
    for (var src in sources) {
        images[src] = new Image();
        images[src].onload = function () {
            if (++loadedImages >= numImages) {
                callback(images);
            }
        };
        images[src].src = sources[src];
    }
}

function getCardCenter(card) {
    let x = card.x() + card.getChildren()[0].width() / 2;
    let y = card.y() + card.getChildren()[0].height() / 2;
    return {x: x, y: y}
}

function getMatchedPositionCard(playerCard, positionCardList) {
    pid = playerCard.id();
    playerPosition = pid.split('_')[3];
    for(positionCard of positionCardList) {
        if(positionCard.id() === playerPosition) {
            return positionCard;
        }
    }
    return null
}

function isNear(playerCard, targetPositionCard) {
    let px = playerCard.x();
    let py = playerCard.y();

    let tw = positionCardWidth;
    let th = positionCardHeight;
    let tx = targetPositionCard.x();
    let ty = targetPositionCard.y();

    if(px > tx - tw/2 && px < tx + tw/2 && py > ty - th/2 && py < ty + th/2) {
        return true;
    }
    return false;
}

function draw(images) { 
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    
    var stage = new Konva.Stage({
        container: 'container',
        width: windowWidth,
        height: windowHeight,
    });
    
    layer = new Konva.Layer();

    let x = (windowWidth - positionCardWidth) / 2 - (positionCardWidth + positionCardInterval) * 3
    let y = 40;
    for(position of positionList) {
        x += positionCardWidth + positionCardInterval;
        let positionIconImage = images[`${position}100`];
        let positionCard = createPositionCard(positionIconImage, position, x, y);
        positionCardList.push(positionCard);
        layer.add(positionCard);
    }

    x = (windowWidth - playerCardWidth) / 2 - (playerCardWidth + positionCardInterval) * 3
    y = 500;
    for(player of playerList) {
        x += playerCardWidth + positionCardInterval;
        const cardId = `${player.year}_${player.team}_${player.name}_${player.position}`;
        const cardName = `${String(player.year).slice(-2,)}' ${player.name.toUpperCase()}`;
        const portratiImage = images[player.name];
        const teamIconImage = images[`${player.team}Icon`];
        const positionIconImage = images[`${player.position}25`];
        const teamcolor = player.color;  
        const lane = player.lane;
        const playerCardInfomation = {
            cardId: cardId,
            cardName: cardName,
            portraitImage: portratiImage,
            teamIconImage: teamIconImage,
            positionIconImage: positionIconImage,
            teamColor: teamcolor,
            lane: lane,
        }
        let playerCard = createPlayerCard(layer, playerCardInfomation, x, y);
        player.card = playerCard; 
        layer.add(playerCard);
    }
    
    stage.add(layer);
}

function createPositionCard(positionIconImage, id, x, y) {
    let positionCard = new Konva.Group({
        id: id,
        x: x ? x : 0,
        y: y ? y : 0,
    });
    
    let cardBack = new Konva.Rect({
        x: 0,
        y: 0,
        width: positionCardWidth,
        height: positionCardHeight,
        fill: "#303536",
        stroke: "#66502C",
        strokeWidth: 10,
        cornerRadius: positionCardCornerAngle
    });
    
    let positionIcon = new Konva.Rect({
        x: cardBack.width()/2 - positionIconSide/2,
        y: cardBack.height()/2 - positionIconSide/2,
        width: positionIconSide,
        height: positionIconSide,
        fillPatternImage: positionIconImage
    });
    
    positionCard.add(cardBack);
    positionCard.add(positionIcon);
    
    return positionCard;
}

function createPlayerCard(layer, playerCardInfomation, x, y) {
    const {cardId, cardName, portraitImage, teamIconImage, positionIconImage, teamColor, lane} = playerCardInfomation;
    
    let card = new Konva.Group({
        id: cardId,
        x: x ? x : 0,
        y: y ? y : 0, 
        draggable: true,
    });
    
    let portrait = new Konva.Rect({
        x: 0,
        y: 0,
        width: playerCardWidth,
        height: playerCardWidth,
        fillPatternImage: portraitImage,
        cornerRadius: [playerCardCornerAngle, playerCardCornerAngle, 0, 0]
    });
    
    let teamIcon = new Konva.Rect({
        x: 10,
        y: 10,
        width: playerCardIconSize,
        height: playerCardIconSize,
        fillPatternImage: teamIconImage,
    });
    
    let positionIcon  = new Konva.Rect({
        x: 115,
        y: 10,
        width: playerCardIconSize,
        height: playerCardIconSize,
        fillPatternImage: positionIconImage,
    });
    
    let nameTag = new Konva.Text({
        x: 0,
        y: playerCardWidth,
        text: cardName,
        fontSize: PlayerCardFontSize,
        fontFamily: 'Jua',
        width: playerCardWidth, 
        padding: playerCardPadding,
        align: 'center'
    });
    
    let nameBack = new Konva.Rect({
        x: 0,
        y: playerCardWidth,
        width: playerCardWidth,
        height: nameTag.height(),
        fill: teamColor,
        cornerRadius: [0, 0, playerCardCornerAngle, playerCardCornerAngle]
    });

    let cardBack = new Konva.Rect({
        x: 0,
        y: 0,
        width: playerCardWidth,
        height: playerCardWidth + nameTag.height(),
        fill: "#E6E6E6",
        cornerRadius: playerCardCornerAngle,
        shadowColor: "white"
    });
    
    let cardFilter = new Konva.Rect({
        x: 0, 
        y: 0, 
        width: playerCardWidth, 
        height: playerCardWidth + nameTag.height(),
        cornerRadius: playerCardCornerAngle - 5,
        opacity: 0.5,
    });
    
    card.on('mouseover', function() {
        document.body.style.cursor = 'pointer';
        cardBack.shadowBlur(10);
        layer.draw();
    });
    
    card.on('mouseout', function() {
        document.body.style.cursor = 'default';
        cardBack.shadowBlur(0);
        layer.draw();
    });
    
    var prex, prey, selected = false;

    card.on('dragstart', function(){
        if(!selected) {
            prex = this.x();
            prey = this.y();
        }
    });

    card.on('dragend', function() {
        let targetCard = getMatchedPositionCard(this, positionCardList);
        let isNearState = isNear(this, targetCard);
        if(isNearState) {
            let dx = (positionCardWidth - playerCardWidth) / 2;
            let dy = (positionCardHeight - playerCardHeight) / 2;
            this.x(targetCard.x() + dx);
            this.y(targetCard.y() + dy);
            selected = true;
        } else {
            this.x(prex);
            this.y(prey);
            selected = false;
        }
        layer.draw();
    });

    card.add(cardBack);
    card.add(portrait);
    card.add(teamIcon);
    card.add(positionIcon);
    card.add(nameBack);
    card.add(nameTag);
    card.add(cardFilter);
    
    return card;
}

loadImage(sources, function (images) {
    draw(images);
});