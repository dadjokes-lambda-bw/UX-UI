class Card {
    constructor(domElement){
        this.domElement = domElement; //'.card'
        console.log(this)
        this.expandBtn = this.domElement.querySelector('.expand');
        this.content = this.domElement.querySelector('p');
        this.expandBtn.addEventListener('click', () => {this.expandContent()});
    }
    expandContent(){
        this.content.classList.toggle('content-hidden');
    }

}//toggling the paragraph content on click of the h2 with the class of '.expand'
class Accordian {
    constructor(accordian){
        this.accordian = accordian;
        this.autoClose = accordian.dataset.autoClose === 'true' ? true : false;
        this.panels = accordian.querySelectorAll('.panel');
        this.panels.forEach(panel => new panel(panel, this))

    }
    collapse(){
        if(this.autoClose){
            const currentPanel = this.accordian.qeurySelector('.panel-content.toggle-on')
            if (currentPanel) currentPanel.classList.remove('toggle-on')
        }
    }

}
class Panel {
    constructor(panel, parentAccordian) {
        this.parentAccordian = parentAccordian;
        this.openButton = panel.querySelector('.panel-btn-open')
        this.closeButton = panel.querySelector('.panel-btn-close')
        this.panelContent = panel.querySelector('.panel-content')
        this.openButton.addEventListener('click', () =>
        this.togglePanel())
    
    }
    togglePanel(){
        this.parentAccordian.collapse()
        this.panelContent.classList.toggle('toggle-on')
    }
}



let cards = document.querySelectorAll('.card')
console.log(cards)
cards.forEach( card => {
    new Card(card);
});


const accordians = document.querySelectorAll('.accordian')
console.log(accordians)