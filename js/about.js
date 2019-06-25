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




let cards = document.querySelectorAll('.card')
console.log(cards)
cards.forEach( card => {
    new Card(card);
});
