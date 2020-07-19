const gamerCardWidth = 150;
const GamerCardFontSize = 15;
const gamerCardPadding = 10;
const gamerCardHeight = gamerCardWidth + GamerCardFontSize + gamerCardPadding * 2
const gamerCardCornerAngle = 20;
const gamerCardInterval = 30;
const gamerCardIconSize = 25;
const gamerCardHorizontalInterval = 30;
const gamerCardVerticalInterval = 20;

const ds = 40;
const positionCardWidth = gamerCardWidth + ds;
const positionCardHeight = gamerCardHeight + ds
const positionCardPadding = 30;
const positionCardCornerAngle = gamerCardCornerAngle + ds / 2; 
const positionCardInterval = 30;
const positionIconSide = 100;

let mTeam = {};
const positionList = ["top", "jng", "mid", "adc", "sup"]
const gamerList = [
    // DRX
    {
        name: "doran",
        position: "top",
        team: "drx",
        year: 2020,
        color: "#5A8DFF",
    },
    {
        name: "pyosik",
        position: "jng",
        team: "drx",
        year: 2020,
        color: "#5A8DFF",
    },
    {
        name: "chovy",
        position: "mid",
        team: "drx",
        year: 2020,
        color: "#5A8DFF",
    },
    {
        name: "deft",
        position: "adc",
        team: "drx",
        year: 2020,
        color: "#5A8DFF",
    },
    {
        name: "keria",
        position: "sup",
        team: "drx",
        year: 2020,
        color: "#5A8DFF",
    },
    // AF
    {
        name: "kiin",
        position: "top",
        team: "af",
        year: 2020,
        color: "#0086FF",
    },
    {
        name: "spirit",
        position: "jng",
        team: "af",
        year: 2020,
        color: "#0086FF",
    },
    {
        name: "fly",
        position: "mid",
        team: "af",
        year: 2020,
        color: "#0086FF",
    },
    {
        name: "mystic",
        position: "adc",
        team: "af",
        year: 2020,
        color: "#0086FF",
    },
    {
        name: "ben",
        position: "sup",
        team: "af",
        year: 2020,
        color: "#0086FF",
    },
    // DYN
    {
        name: "rich",
        position: "top",
        team: "dyn",
        year: 2020,
        color: "#1B75BC",
    },
    {
        name: "beyond",
        position: "jng",
        team: "dyn",
        year: 2020,
        color: "#1B75BC",
    },
    {
        name: "kuzan",
        position: "mid",
        team: "dyn",
        year: 2020,
        color: "#1B75BC",
    },
    {
        name: "deokdam",
        position: "adc",
        team: "dyn",
        year: 2020,
        color: "#1B75BC",
    },
    {
        name: "guger",
        position: "sup",
        team: "dyn",
        year: 2020,
        color: "#1B75BC",
    },
    // DWG
    {
        name: "nuguri",
        position: "top",
        team: "dwg",
        year: 2020,
        color: "#55969C",
    },
    {
        name: "canyon",
        position: "jng",
        team: "dwg",
        year: 2020,
        color: "#55969C",
    },
    {
        name: "showmaker",
        position: "mid",
        team: "dwg",
        year: 2020,
        color: "#55969C",
    },
    {
        name: "ghost",
        position: "adc",
        team: "dwg",
        year: 2020,
        color: "#55969C",
    },
    {
        name: "nuclear",
        position: "adc",
        team: "dwg",
        year: 2020,
        color: "#55969C",
    },
    {
        name: "beryl",
        position: "sup",
        team: "dwg",
        year: 2020,
        color: "#55969C",
    },
    // GEN
    {
        name: "rascal",
        position: "top",
        team: "gen",
        year: 2020,
        color: "#AA8B2F",
    },
    {
        name: "clid",
        position: "jng",
        team: "gen",
        year: 2020,
        color: "#AA8B2F",
    },
    {
        name: "bdd",
        position: "mid",
        team: "gen",
        year: 2020,
        color: "#AA8B2F",
    },
    {
        name: "ruler",
        position: "adc",
        team: "gen",
        year: 2020,
        color: "#AA8B2F",
    },
    {
        name: "life",
        position: "sup",
        team: "gen",
        year: 2020,
        color: "#AA8B2F",
    },
    // HLE
    {
        name: "cuvee",
        position: "top",
        team: "hle",
        year: 2020,
        color: "#F37321",
    },
    {
        name: "dudu",
        position: "top",
        team: "hle",
        year: 2020,
        color: "#F37321",
    },
    {
        name: "cad",
        position: "jng",
        team: "hle",
        year: 2020,
        color: "#F37321",
    },
    {
        name: "haru",
        position: "jng",
        team: "hle",
        year: 2020,
        color: "#F37321",
    },
    {
        name: "lava",
        position: "mid",
        team: "hle",
        year: 2020,
        color: "#F37321",
    },
    {
        name: "mireu",
        position: "mid",
        team: "hle",
        year: 2020,
        color: "#F37321",
    },
    {
        name: "viper",
        position: "adc",
        team: "hle",
        year: 2020,
        color: "#F37321",
    },
    {
        name: "lehends",
        position: "sup",
        team: "hle",
        year: 2020,
        color: "#F37321",
    },
    // KT
    {
        name: "smeb",
        position: "top",
        team: "kt",
        year: 2020,
        color: "#FF131F",
    },
    {
        name: "sohwan",
        position: "top",
        team: "kt",
        year: 2020,
        color: "#FF131F",
    },
    {
        name: "bono",
        position: "jng",
        team: "kt",
        year: 2020,
        color: "#FF131F",
    },
    {
        name: "kuro",
        position: "mid",
        team: "kt",
        year: 2020,
        color: "#FF131F",
    },
    {
        name: "ucal",
        position: "mid",
        team: "kt",
        year: 2020,
        color: "#FF131F",
    },
    {
        name: "aiming",
        position: "adc",
        team: "kt",
        year: 2020,
        color: "#FF131F",
    },
    {
        name: "tusin",
        position: "sup",
        team: "kt",
        year: 2020,
        color: "#FF131F",
    },
    // SB
    {
        name: "summit",
        position: "top",
        team: "sb",
        year: 2020,
        color: "#CE243D",
    },
    {
        name: "onfleek",
        position: "jng",
        team: "sb",
        year: 2020,
        color: "#CE243D",
    },
    {
        name: "fate",
        position: "mid",
        team: "sb",
        year: 2020,
        color: "#CE243D",
    },
    {
        name: "route",
        position: "adc",
        team: "sb",
        year: 2020,
        color: "#CE243D",
    },
    {
        name: "gorilla",
        position: "sup",
        team: "sb",
        year: 2020,
        color: "#CE243D",
    },
    // SHO
    {
        name: "ikssu",
        position: "top",
        team: "sho",
        year: 2020,
        color: "#D74646",
    },
    {
        name: "flawless",
        position: "jng",
        team: "sho",
        year: 2020,
        color: "#D74646",
    },
    {
        name: "mickey",
        position: "mid",
        team: "sho",
        year: 2020,
        color: "#D74646",
    },
    {
        name: "hybrid",
        position: "adc",
        team: "sho",
        year: 2020,
        color: "#D74646",
    },
    {
        name: "secret",
        position: "sup",
        team: "sho",
        year: 2020,
        color: "#D74646",
    },
    // T1
    {
        name: "canna",
        position: "top",
        team: "t1",
        year: 2020,
        color: "#E4002B",
    },
    {
        name: "cuzz",
        position: "jng",
        team: "t1",
        year: 2020,
        color: "#E4002B",
    },
    {
        name: "ellim",
        position: "jng",
        team: "t1",
        year: 2020,
        color: "#E4002B",
    },
    {
        name: "faker",
        position: "mid",
        team: "t1",
        year: 2020,
        color: "#E4002B",
    },
    {
        name: "teddy",
        position: "adc",
        team: "t1",
        year: 2020,
        color: "#E4002B",
    },
    {
        name: "effort",
        position: "sup",
        team: "t1",
        year: 2020,
        color: "#E4002B",
    },
]
const sources = {
    // DRX
    drxIcon: "./assets/Team/2020/drx/drxIcon25.png",
    doran: "./assets/Team/2020/drx/doran150.png",
    pyosik: "./assets/Team/2020/drx/pyosik150.png",
    chovy: "./assets/Team/2020/drx/chovy150.png",
    deft: "./assets/Team/2020/drx/deft150.png",
    keria: "./assets/Team/2020/drx/keria150.png",
    
    // AF
    afIcon: "./assets/Team/2020/af/afIcon25.png",
    kiin: "./assets/Team/2020/af/kiin150.png",
    spirit: "./assets/Team/2020/af/spirit150.png",
    fly: "./assets/Team/2020/af/fly150.png",
    mystic: "./assets/Team/2020/af/mystic150.png",
    ben: "./assets/Team/2020/af/ben150.png",
    
    // DYN
    dynIcon: "./assets/Team/2020/dyn/dynIcon25.png",
    rich: "./assets/Team/2020/dyn/rich150.png",
    beyond: "./assets/Team/2020/dyn/beyond150.png",
    kuzan: "./assets/Team/2020/dyn/kuzan150.png",
    deokdam: "./assets/Team/2020/dyn/deokdam150.png",
    guger: "./assets/Team/2020/dyn/guger150.png",
    
    // DWG
    dwgIcon: "./assets/Team/2020/dwg/dwgIcon25.png",
    nuguri: "./assets/Team/2020/dwg/nuguri150.png",
    canyon: "./assets/Team/2020/dwg/canyon150.png",
    showmaker: "./assets/Team/2020/dwg/showmaker150.png",
    ghost: "./assets/Team/2020/dwg/ghost150.png",
    nuclear: "./assets/Team/2020/dwg/nuclear150.png",
    beryl: "./assets/Team/2020/dwg/beryl150.png",
    
    // GEN
    genIcon: "./assets/Team/2020/gen/genIcon25.png",
    rascal: "./assets/Team/2020/gen/rascal150.png",
    clid: "./assets/Team/2020/gen/clid150.png",
    bdd: "./assets/Team/2020/gen/bdd150.png",
    ruler: "./assets/Team/2020/gen/ruler150.png",
    life: "./assets/Team/2020/gen/life150.png",
    
    // HLE
    hleIcon: "./assets/Team/2020/hle/hleIcon25.png",
    cuvee: "./assets/Team/2020/hle/cuvee150.png",
    dudu: "./assets/Team/2020/hle/dudu150.png",
    cad: "./assets/Team/2020/hle/cad150.png",
    haru: "./assets/Team/2020/hle/haru150.png",
    lava: "./assets/Team/2020/hle/lava150.png",
    mireu: "./assets/Team/2020/hle/mireu150.png",
    viper: "./assets/Team/2020/hle/viper150.png",
    lehends: "./assets/Team/2020/hle/lehends150.png",
    
    // KT
    ktIcon: "./assets/Team/2020/kt/ktIcon25.png",
    smeb: "./assets/Team/2020/kt/smeb150.png",
    sohwan: "./assets/Team/2020/kt/sohwan150.png",
    bono: "./assets/Team/2020/kt/bono150.png",
    kuro: "./assets/Team/2020/kt/kuro150.png",
    ucal: "./assets/Team/2020/kt/ucal150.png",
    aiming: "./assets/Team/2020/kt/aiming150.png",
    tusin: "./assets/Team/2020/kt/tusin150.png",
    
    // SB
    sbIcon: "./assets/Team/2020/sb/sbIcon25.png",
    summit: "./assets/Team/2020/sb/summit150.png",
    onfleek: "./assets/Team/2020/sb/onfleek150.png",
    fate: "./assets/Team/2020/sb/fate150.png",
    route: "./assets/Team/2020/sb/route150.png",
    gorilla: "./assets/Team/2020/sb/gorilla150.png",
    
    // SHO
    shoIcon: "./assets/Team/2020/sho/shoIcon25.png",
    ikssu: "./assets/Team/2020/sho/ikssu150.png",
    flawless: "./assets/Team/2020/sho/flawless150.png",
    mickey: "./assets/Team/2020/sho/mickey150.png",
    hybrid: "./assets/Team/2020/sho/hybrid150.png",
    secret: "./assets/Team/2020/sho/secret150.png",
    
    // T1
    t1Icon: "./assets/Team/2020/t1/t1Icon25.png",
    canna: "./assets/Team/2020/t1/canna150.png",
    cuzz: "./assets/Team/2020/t1/cuzz150.png",
    ellim: "./assets/Team/2020/t1/ellim150.png",
    faker: "./assets/Team/2020/t1/faker150.png",
    teddy: "./assets/Team/2020/t1/teddy150.png",
    effort: "./assets/Team/2020/t1/effort150.png",
    
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
var positionCardList = [];

var stage;
var positionLayer;
var gamerLayer;
var halfW = window.innerWidth;

function loadImage(sources, callback) {
    var images = {};
    var loadedImages = 0;
    var numImages = 0;
    // get num of sources
    for (var src in sources) {
        numImages++;
    }
    for (var src in sources) {
        images[src] = new Image()
        images[src].onload = function () {
            if (++loadedImages >= numImages) {
                callback(images);
            }
        };
        images[src].src = sources[src];
    }
}

function getMatchedPositionCard(gamerCard, positionCardList) {
    pid = gamerCard.id();
    gamerPosition = pid.split('_')[3];
    for(positionCard of positionCardList) {
        if(positionCard.id() === gamerPosition) {
            return positionCard;
        }
    }
    return null
}

function isNear(gamerCard, targetPositionCard) {
    let px = gamerCard.x();
    let py = gamerCard.y();
    let tw = positionCardWidth;
    let th = positionCardHeight;
    let tx = targetPositionCard.x();
    let ty = targetPositionCard.y();
    let selectScale = 0.7
    
    if(px > tx - tw * selectScale && px < tx + tw * selectScale &&
        py > ty - th * selectScale && py < ty + th * selectScale) {
            return true;
        }
        return false;
    }
    
    function draw(images) { 
        var windowWidth = window.innerWidth;
        var windowHeight = window.innerHeight;
        var nav = document.getElementsByClassName("nav")
        
        stage = new Konva.Stage({
            container: 'container',
            width: windowWidth,
            height: windowHeight,
        });
        
        gamerLayer = new Konva.Layer({
            name: "gamer" 
        });
        positionLayer = new Konva.Layer({
            name: "position"
        });

        stage.add(gamerLayer);
        stage.add(positionLayer);
        positionLayer.moveToTop();

        let positionLayerBack = new Konva.Rect({
            x: 0,
            y: 0,
            width: windowWidth,
            height: positionCardHeight + positionCardPadding * 2,
            fill: "#303436", 
        });
        positionLayer.add(positionLayerBack);
        
        let x = (windowWidth - positionCardWidth) / 2 - (positionCardWidth + positionCardInterval) * parseInt(positionList.length/2);
        let y = positionCardInterval;
        for(position of positionList) {
            let positionIconImage = images[`${position}100`];
            let positionCard = createPositionCard(positionIconImage, position, x, y);
            x += positionCardWidth + positionCardInterval;
            positionCardList.push(positionCard);
            positionLayer.add(positionCard);
        }
        
        let i = 0;
        let cols = 7;
        let dx = gamerCardWidth + gamerCardInterval;
        let dy = gamerCardHeight + gamerCardInterval;
        let tw = gamerCardWidth * cols + gamerCardInterval * (cols - 1)
        let initX = (windowWidth - gamerCardWidth) / 2 - (gamerCardWidth + gamerCardInterval) * parseInt(cols/2);
        initX = (windowWidth - tw) / 2;
        x = initX;
        y = positionLayerBack.height() - dy + gamerCardInterval;
        for(gamer of gamerList) {
            if((i++) % cols == 0) {
                x = initX;
                y += dy; 
            }
            const cardId = `${gamer.year}_${gamer.team}_${gamer.name}_${gamer.position}`;
            const cardName = `${String(gamer.year).slice(-2,)}' ${gamer.name.toUpperCase()}`;
            const portratiImage = images[gamer.name];
            const teamIconImage = images[`${gamer.team}Icon`];
            const positionIconImage = images[`${gamer.position}25`];
            const teamcolor = gamer.color;  
            const lane = gamer.lane;
            const gamerCardInfomation = {
                cardId: cardId,
                cardName: cardName,
                portraitImage: portratiImage,
                teamIconImage: teamIconImage,
                positionIconImage: positionIconImage,
                teamColor: teamcolor,
                lane: lane,
            }
            let gamerCard = createGamerCard(gamerLayer, gamerCardInfomation, x, y);
            x += dx;
            gamer.card = gamerCard; 
            gamer.x = gamerCard.x();
            gamer.y = gamerCard.y();
            gamerLayer.add(gamerCard);
        }

        var scrollContainer = document.getElementById('scroll-container');
        function repositionStage() {
            var sdy = scrollContainer.scrollTop;
            stage.container().style.transform = 
            'translate(' + 0 + 'px, ' + sdy + 'px)';
            gamerLayer.y(-sdy);
            gamerLayer.batchDraw();
            positionLayer.batchDraw();
        }
        scrollContainer.addEventListener('scroll', repositionStage);
        repositionStage();

        function resizeStage() {
            dx = (halfW - window.innerWidth) / 2;
            gamerLayer.x(-dx);
            positionLayer.x(-dx);
            stage.width(window.innerWidth);
            stage.height(window.innerHeight);
            positionLayerBack.width(window.innerWidth);
            positionLayerBack.x(+dx);
            gamerLayer.draw();
            positionLayer.draw();
        }
        window.addEventListener('resize', resizeStage);
        resizeStage();
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
    
    function createGamerCard(gamerLayer, gamerCardInfomation, x, y) {
        const {cardId, cardName, portraitImage, teamIconImage, positionIconImage, teamColor} = gamerCardInfomation;
        let initX = x;
        let initY = y;
        
        let card = new Konva.Group({
            id: cardId,
            x: x ? x : 0,
            y: y ? y : 0, 
            draggable: true,
        });
        
        let portrait = new Konva.Rect({
            x: 0,
            y: 0,
            width: gamerCardWidth,
            height: gamerCardWidth,
            fillPatternImage: portraitImage,
            cornerRadius: [gamerCardCornerAngle, gamerCardCornerAngle, 0, 0]
        });
        
        let teamIcon = new Konva.Rect({
            x: 10,
            y: 10,
            width: gamerCardIconSize,
            height: gamerCardIconSize,
            fillPatternImage: teamIconImage,
        });
        
        let positionIcon  = new Konva.Rect({
            x: 115,
            y: 10,
            width: gamerCardIconSize,
            height: gamerCardIconSize,
            fillPatternImage: positionIconImage,
        });
        
        let nameTag = new Konva.Text({
            x: 0,
            y: gamerCardWidth,
            text: cardName,
            fontSize: GamerCardFontSize,
            fontFamily: 'Jua',
            width: gamerCardWidth, 
            padding: gamerCardPadding,
            align: 'center'
        });
        
        let nameBack = new Konva.Rect({
            x: 0,
            y: gamerCardWidth,
            width: gamerCardWidth,
            height: nameTag.height(),
            fill: teamColor,
            cornerRadius: [0, 0, gamerCardCornerAngle, gamerCardCornerAngle]
        });
        
        let cardBack = new Konva.Rect({
            x: 0,
            y: 0,
            width: gamerCardWidth,
            height: gamerCardWidth + nameTag.height(),
            fill: "#E6E6E6",
            cornerRadius: gamerCardCornerAngle,
            shadowColor: "white"
        });
        
        let cardFilter = new Konva.Rect({
            x: 0, 
            y: 0, 
            width: gamerCardWidth, 
            height: gamerCardWidth + nameTag.height(),
            cornerRadius: gamerCardCornerAngle - 5,
            opacity: 0.5,
        });
        
        card.on('mouseover', function() {
            document.body.style.cursor = 'pointer';
            cardBack.shadowBlur(10);
            positionLayer.draw();
            gamerLayer.draw();
        });
        
        card.on('mouseout', function() {
            document.body.style.cursor = 'default';
            cardBack.shadowBlur(0);
            positionLayer.draw();
            gamerLayer.draw();
        });
        
        card.on('dragstart', function(){
            this.moveTo(positionLayer);
            positionLayer.draw();
            gamerLayer.draw();
        });
        
        card.on('dragend', function() {
            let targetCard = getMatchedPositionCard(this, positionCardList);
            let thisGamer = findGamer(this, gamerList);
            let position = thisGamer.position;
            let selectedGamer = mTeam[position];
            console.log("before :", this.parent.name());
            if(isNear(this, targetCard)) {
                if(selectedGamer) {
                    selectedGamer.card.moveTo(gamerLayer);
                    selectedGamer.card.x(selectedGamer.x);
                    selectedGamer.card.y(selectedGamer.y);
                }
                this.moveTo(positionLayer);
                mTeam[position] = findGamer(this, gamerList);
                let dx = (positionCardWidth - gamerCardWidth) / 2;
                let dy = (positionCardHeight - gamerCardHeight) / 2;
                this.x(targetCard.x() + dx);
                this.y(targetCard.y() + dy);
                targetCard.getChildren()[0].stroke("#C8AA6E");
                console.log("wow1 :", this.parent.name());
            } else {
                this.moveTo(gamerLayer);
                this.x(initX);
                this.y(initY);
                if(selectedGamer && selectedGamer === thisGamer) {
                    targetCard.getChildren()[0].stroke("#66502C");
                    mTeam[position] == null;
                }
                console.log("wow2 :", this.parent.name());
            }
            positionLayer.draw();
            gamerLayer.draw();
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
    
    function findGamer(targetCard, gamerList) {
        for(gamer of gamerList) {
            if(gamer.card === targetCard) {
                return gamer;
            }
        }
    }
    
    loadImage(sources, function (images) {
        draw(images);
    });