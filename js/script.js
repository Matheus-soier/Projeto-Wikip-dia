const qs = el => document.querySelector(el);

let btnFerramentas = qs('#ferramentasButton');
let ferramentasArea = qs('.container-popup-ferramentas');
let arrowFerramentas = qs('#arrowFerramentas');

btnFerramentas.addEventListener('mouseup', (e) => {
    e.preventDefault();
    toggleFerramentas();
});

document.addEventListener('mouseup', (e) => {
    if (!ferramentasArea.contains(e.target) && !btnFerramentas.contains(e.target)) {
        closeFerramentas();
    }
});

function toggleFerramentas() {
    let arrowAttr = arrowFerramentas.getAttribute('name');
    arrowFerramentas.setAttribute('name', arrowAttr == 'chevron-down' ? 'chevron-up' : 'chevron-down');
    
    if (ferramentasArea.classList.contains('displayNone')) {
        ferramentasArea.classList.replace('displayNone', 'displayFlex');
    } else {
        ferramentasArea.classList.replace('displayFlex', 'displayNone');
    }
}

function closeFerramentas() {
    if (ferramentasArea.classList.contains('displayFlex')) {
        ferramentasArea.classList.replace('displayFlex', 'displayNone');
        arrowFerramentas.setAttribute('name', 'chevron-down');
    }
}


let btnExpandWindown = qs('.fixed-expand-windown').addEventListener('mousedown', (e)=>{
    e.preventDefault();
    let main = qs('.container-main');
    //pegar estilos do css externo
    let mainStyle = window.getComputedStyle(main); 

    if(mainStyle.width === "950px") {
        main.style.width = "90vw";
    } else if(main.style.width === "90vw") {
        main.style.width = "950px";
    }
});

