export function scrollFunction(mybutton) {
    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

export function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}