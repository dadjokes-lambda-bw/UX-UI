class Carousel{
constructor(carousel){
this.carousel = carousel;
this.cards = this.carousel.querySelectorAll(".mySlides");
this.leftButton = document.querySelector(".leftButton");
this.rightButton = document.querySelector(".rightButton");
this.index = 0;
this.leftButton.addEventListener('click', ()=> this.toggleLeft())
this.rightButton.addEventListener('click', ()=> this.toggleRight())

}
toggleRight(){
this.cards[this.index].style.display = 'none';
console.log(this.index);
if (this.index === this.cards.length -1){
  this.index = 0;
}
else {
this.index ++
}
this.cards[this.index].style.display = 'block';
}

toggleLeft(){
  this.cards[this.index].style.display = 'none';
  
  if (this.index === 0){
    this.index = this.cards.length -1;
  }
  else {
  this.index --
  }
  this.cards[this.index].style.display = 'block';
  }
  
}

const carousels = document.querySelectorAll(".carousel")
carousels.forEach(carousel => new Carousel(carousel));