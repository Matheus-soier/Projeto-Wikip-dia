const qs = el => document.querySelector(el);

let btnFerramentas = qs('#ferramentasButton').addEventListener('mouseup', (e)=>{
    e.preventDefault();
    let ferramentasArea = qs('.container-popup-ferramentas');
    let arrowFerramentas = qs('#arrowFerramentas');

     if(arrowFerramentas.getAttribute('name') == 'chevron-down') {
         arrowFerramentas.setAttribute('name', 'chevron-up');
     } else if (arrowFerramentas.getAttribute('name') == 'chevron-up') {
        arrowFerramentas.setAttribute('name', 'chevron-down');
     }

     if (ferramentasArea.classList.contains('displayNone')) {
        ferramentasArea.classList.remove('displayNone');
        ferramentasArea.classList.add('displayFlex');
    } else if (ferramentasArea.classList.contains('displayFlex')) {
        ferramentasArea.classList.remove('displayFlex');
        ferramentasArea.classList.add('displayNone');
    }
});

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

