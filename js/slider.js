class Post {
    constructor(tytul, tresc, autor, img) {
      this.tytul = tytul;
      this.tresc = tresc;
      this.autor = autor;
      this.img = img;
    }
  }

const slider = document.getElementById("slider")

let post1 = new Post ("post1", "lorem pusm", "michal")
let post2 = new Post ("post2", "lorem pusm", "michal")
let post3 = new Post ("post3", "lorem pusm", "michal")




let post = [post1, post2, post3]

