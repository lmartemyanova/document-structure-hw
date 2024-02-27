const elemsWithTooltip = document.querySelectorAll('.has-tooltip')
const textDivs = document.getElementsByTagName('div')

function getCoords(elem) {
    let box = elem.getBoundingClientRect();
  
    return {
        top: box.top + window.pageYOffset,
        right: box.right + window.pageXOffset,
        bottom: box.bottom + window.pageYOffset,
        left: box.left + window.pageXOffset
    };
}

for (let index = 0; index < elemsWithTooltip.length; index++) {
    const elemWithTooltip = elemsWithTooltip[index];

    const tooltip = document.createElement('div')
    elemWithTooltip.insertAdjacentElement('afterend', tooltip)
    tooltip.classList.add('tooltip')
    tooltip.innerHTML = elemWithTooltip.getAttribute('title')
    
    elemWithTooltip.addEventListener('click', (e) => {
        e.preventDefault()
        
        elemsWithTooltip.forEach((elem) => {
            elem.nextElementSibling.classList.remove('tooltip_active')
        }) 
        
        tooltip.classList.add('tooltip_active')

        tooltip.style.position = 'absolute'

        let coords = getCoords(elemWithTooltip);

        tooltip.style.left = coords.left + "px";
        tooltip.style.top = coords.bottom + "px";
    })
}