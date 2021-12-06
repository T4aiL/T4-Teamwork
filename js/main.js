import { topFunction, scrollFunction } from "./footer.js"

var mybutton = document.getElementById("myBtn");

mybutton.addEventListener('click',topFunction)

window.onscroll = function() {scrollFunction(mybutton)};


fetch('https://catfact.ninja/fact')
.then(res => res.json())
.then(data => {
    console.log(data.value.fact)

    posts = data.value;
});

posts.map(post => {
    
})