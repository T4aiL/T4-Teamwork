class Post {
    constructor(tytul, tresc, autor, img) {
      this.tytul = tytul;
      this.tresc = tresc;
      this.autor = autor;
      this.img = img;
    }
  }

const slider = document.getElementById("slider")

let post1 = new Post ("post1", "Tresc posta 1 jest calkiem dluga", "michal", '/img/back.png')
let post2 = new Post ("post2", "lorem pusm a posta drugiego jest calkiem calkiem", "michal", '/img/back.png')
let post3 = new Post ("post3", "lorem pusmlorem pusmlorem pusmlorem pusmlorem pusmlorem pusmlorem pusmlorem pusmlorem pusmlorem pusmlorem pusmlorem pusmlorem pusmlorem pusmlorem pusmlorem pusm", "michal", '/img/back.png')




let post = [post1, post2, post3]
console.log(post[0].tytul)

function sliderek() {
 let tresc = document.getElementById("tresc")
 let tytul = document.getElementById("tytul")
 if(slideIndex<0){
   slideIndex = -slideIndex
 }
 slideIndex = slideIndex%post.length
console.log(post[slideIndex].tytul)
 tresc.innerHTML = post[slideIndex].tresc
 tytul.innerHTML = post[slideIndex].tytul
 
 slider.style.backgroundImage = "url("+ post[slideIndex].img +")"
 
}

var slideIndex = 0;
var idinterwalu
// Next/previous controls
function plusSlides(n) {
  slideIndex += n;
  console.log(slideIndex)
}

function playloop(){
 idinterwalu = setInterval(sliderek, 1000);
}