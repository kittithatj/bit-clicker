//elements
let bitDisplay = document.getElementById('bit-display');
let storageBar = document.getElementById('storage-bar');
let maxStorageDisplay = document.getElementById('max-storage');
let dsTimelineModal = document.getElementById('ds-timeline');

//game variable
let bit = 0;
let storage = 64;

//init
bitDisplay.innerHTML = `Bit : ${bit}`;
maxStorageDisplay.innerHTML = `${storage} Bit`
storageBar.innerHTML = `${storage} Bit`
storageBar.max = `${storage}`

//function
function clickBit(){
    if(bit < storage && bit >= 0){
        bit++;
        bitDisplay.innerHTML = `Bit : ${bit}`
        storageBar.value = `${bit}`;
    }else{
        bitDisplay.style = 'color: red;';
    }
}

function openDsTimeline(){
    dsTimelineModal.style = 'display: block;'
}

function closeModal(){
    dsTimelineModal.style = 'display: none;'
}