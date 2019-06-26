

class Accordian {
    constructor(accordian){
        this.accordian = accordian;
        // console.log(this)
        this.autoClose = accordian.dataset.autoClose === "true" ? true : false;
        // console.log(this.autoClose)
        this.panelButtons = accordian.querySelectorAll('.panel-buttons')
        console.log(this.panelButtons)
        this.panels = accordian.querySelectorAll('.panel');
        // console.log(this.panels)
        this.panels.forEach(panel => new Panel(panel, this))

    }
    collapse(){
        if(this.autoClose){
            let currentPanel = this.accordian.querySelector('.panel-content', '.toggle-on')
            if (currentPanel) {
                currentPanel.classList.remove('toggle-on')
        }
    }

}
}
class Panel {
    constructor(panel, parentAccordian) {
        this.panel = panel;
        // console.log(this.panel)
        this.parentAccordian = parentAccordian;
        this.panelButtons = panel.querySelector('panel-buttons')
        // console.log(this.panelButtons)
        this.openButton = panel.querySelector('.panel-btn-open')
        console.log(this.openButton)
        this.closeButton = panel.querySelector('.panel-btn-close')
        console.log(this.closeButton)
        this.panelContent = panel.querySelector('.panel-content')
        this.openButton.addEventListener('click', () => this.togglePanel())
        this.closeButton.addEventListener('click', () => this.togglePanel())
    
    }
    togglePanel(){
        this.parentAccordian.collapse()
        console.log('togglePanel()', this)
        this.panelContent.classList.toggle('toggle-on')
        this.openButton.classList.toggle('hide-btn')
        this.closeButton.classList.toggle('hide-btn')
        
    }
}




const accordians = document.querySelectorAll('.accordian')
accordians.forEach(accordian => new Accordian(accordian))
