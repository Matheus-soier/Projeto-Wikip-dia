const qs = el => document.querySelector(el);

let btnFerramentas = qs('#ferramentasButton').addEventListener('click', ()=> {
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

