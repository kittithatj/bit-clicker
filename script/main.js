//elements
let BitDisplay = document.getElementById('bit-display');
let StorageBar = document.getElementById('storage-bar');
let MaxStorageDisplay = document.getElementById('max-storage');

let PunchCardAmount = document.getElementById('punch-card-am');
let PunchCardCost = document.getElementById('punch-card-cost');

let MntDrumAmount = document.getElementById('mnt-drum-am');
let MntDrumCost = document.getElementById('mnt-drum-cost');

let TransAmount = document.getElementById('trans-am');
let TransCost = document.getElementById('trans-cost');

let RamAmount = document.getElementById('ram-am');
let RamCost = document.getElementById('ram-cost');

let BpcDisplay = document.getElementById('bit-per-click');
let BpsDisplay = document.getElementById('bit-per-sec');

//game variable
let bit = 0;
let bitPerClick = 1;
let bitPerSec = 0;
let storage = 64;

    //storage
let punchCard = {
    storage : 64,
    amount : 0,
    cost : 64 // Bit
}
let mntDrum = {
    storage : 1024,
    amount : 0,
    cost : 7 // PunchCards
}
let storageDevices = [punchCard,mntDrum];

    //processor
let ram = {
    bpc : 1,
    amount : 0,
    cost : 64 // Bit
}
let transistor = {
    bps : 1,
    amount : 0,
    cost : 128 // Bit
}
let bpcDevices = [ram];
let bpsDevices = [transistor];

//init
gameUpdate();
gameLoop();

//function
function gameLoop(){
    setInterval(bitGenerate,100)
}

function bitGenerate(){
    if(bit<storage){
        bit += bitPerSec/10;
        bitUpdate();
    }else{
        BitDisplay.style = 'color: red;';
    }
}

function gameUpdate(){
    bitUpdate();
    storageUpdate();
    processorUpdate();
}

function bitUpdate(){
    BitDisplay.style = 'color: azure;';
    BitDisplay.innerHTML = `Bit : ${Math.floor(bit)}`;
    StorageBar.value = `${bit}`;
    StorageBar.max = `${storage}`;
    MaxStorageDisplay.innerHTML = `Max ${storage} Bit`;
}

function storageUpdate(){
    PunchCardAmount.innerHTML = `${punchCard.amount}`
    PunchCardCost.innerHTML = `Cost : ${punchCard.cost} Bit`

    MntDrumAmount.innerHTML = `${mntDrum.amount}`
    MntDrumCost.innerHTML = `Cost : ${mntDrum.cost} Punch Cards`
}

function processorUpdate(){
    RamAmount.innerHTML = `${ram.amount}`
    RamCost.innerHTML = `Cost : ${ram.cost} Bit`

    TransAmount.innerHTML = `${transistor.amount}`
    TransCost.innerHTML = `Cost : ${transistor.cost} Bit`

    BpcDisplay.innerHTML = `You are getting ${bitPerClick} Bit/second`;
    BpsDisplay.innerHTML = `You are getting ${bitPerSec} Bit/click`;
}

function getStorage(){
    let cap = 64
    storageDevices.forEach(device => {
        cap += device.amount*device.storage;
    });
    return cap;
}

function getBpc(){
    let pc = 1
    bpcDevices.forEach(device => {
        pc += device.amount*device.bpc;
    });
    return pc;
}

function getBps(){
    let ps = 0
    bpsDevices.forEach(device => {
        ps += device.amount*device.bps;
    });
    return ps;
}

function clickBit(){
    if(bit+bitPerClick < storage && bit >= 0){
        bit += bitPerClick;
        bitUpdate();
    }else{
        bit = storage;
        bitUpdate();
        BitDisplay.style = 'color: red;';
    }
}

function punchCardUpgrade() {
    if(bit>=punchCard.cost){
        bit -= punchCard.cost;
        punchCard.amount++;
        storage = getStorage();
        gameUpdate();
    }
}

function mntDrumUpgrade() {
    if(punchCard.amount>=mntDrum.cost){
        punchCard.amount -= mntDrum.cost;
        mntDrum.amount++;
        storage = getStorage();
        gameUpdate();
    }
}

function ramUpgrade(){
    if(bit>=ram.cost){
        bit -= ram.cost;
        ram.amount++;
        bitPerClick = getBpc();
        gameUpdate();
    }
}

function transUpgrade(){
    if(bit>=transistor.cost){
        bit -= transistor.cost;
        transistor.amount++;
        bitPerSec = getBps();
        gameUpdate();
    }
}
