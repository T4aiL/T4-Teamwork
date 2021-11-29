class Post {
    constructor(tytul, tresc, autor, img) {
      this.tytul = tytul;
      this.tresc = tresc;
      this.autor = autor;
      this.img = img;
    }
  }

const slider = document.getElementById("slider")

let post1 = new Post ("post1", "lorem pusm", "michal", '/img/back.png')
let post2 = new Post ("post2", "lorem pusm", "michal", '/img/back.png')
let post3 = new Post ("post3", "lorem pusm", "michal", '/img/back.png')




let post = [post1, post2, post3]
console.log(post[0].tytul)

function sliderek() {
 let tresc = document.getElementById("tresc")
 let tytul = document.getElementById("tytul")

 tresc.innerHTML = post[slideIndex].tresc
 tytul.innerHTML = post[slideIndex].tytul
 
 slider.style.backgroundImage = "url("+ post[slideIndex].img +")"
 
}

var slideIndex = 0;

// Next/previous controls
function plusSlides(n) {
  slideIndex += n;
}

function playloop(){
setInterval(sliderek(), 16);
}