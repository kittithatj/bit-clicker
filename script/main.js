//elements
let BitDisplay = document.getElementById('bit-display');
let StorageBar = document.getElementById('storage-bar');
let MaxStorageDisplay = document.getElementById('max-storage');

let PunchCardAmount = document.getElementById('punch-card-am');
let PunchCardCost = document.getElementById('punch-card-cost');

let MntDrumAmount = document.getElementById('mnt-drum-am');
let MntDrumCost = document.getElementById('mnt-drum-cost');

//game variable
let bit = 0;
let bitPerClick = 8;
let storage = 64;
let punchCard = {
    storage : 800,
    amount : 0,
    cost : 64
}
let mntDrum = {
    storage : 5000,
    amount : 0,
    cost : 4096
}

//init
bitUpdate();
storageUpdate();

//function
function bitUpdate(){
    BitDisplay.style = 'color: azure;';
    BitDisplay.innerHTML = `Bit : ${bit}`;
    StorageBar.value = `${bit}`;
    StorageBar.max = `${storage}`;
    MaxStorageDisplay.innerHTML = `Max ${storage} Bit`;
}

function storageUpdate(){
    PunchCardAmount.innerHTML = `${punchCard.amount}`
    PunchCardCost.innerHTML = `Cost : ${punchCard.cost} Bit`

    MntDrumAmount.innerHTML = `${mntDrum.amount}`
    MntDrumCost.innerHTML = `Cost : ${mntDrum.cost} Bit`

}

function clickBit(){
    if(bit < storage && bit >= 0){
        bit += bitPerClick;
        bitUpdate();
    }else{
        BitDisplay.style = 'color: red;';
    }
}

function punchCardUpgrade() {
    if(bit>=punchCard.cost){
        bit -= punchCard.cost;
        storage += punchCard.storage;
        bitUpdate();
        punchCard.amount++;
        punchCard.cost += Math.round(punchCard.cost);
        storageUpdate();
    }
}

function mntDrumUpgrade() {
    if(bit>=mntDrum.cost){
        bit -= mntDrum.cost;
        storage += mntDrum.storage;
        bitUpdate();
        mntDrum.amount++;
        mntDrum.cost += Math.round(mntDrum.cost);
        storageUpdate();
    }
}
