let storageMenu = document.getElementById('storage-menu');
let processorMenu = document.getElementById('processor-menu');
let researchMenu = document.getElementById('research-menu');
let reviseMenu = document.getElementById('revise-menu');

function menuDisplay(menu){
    storageMenu.style = 'display: none;';
    processorMenu.style = 'display: none;';
    researchMenu.style = 'display: none;';
    reviseMenu.style = 'display: none;';
    //Display onClick Content
    menu.style = 'display: contents;';
}