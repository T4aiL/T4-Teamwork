fetch('https://catfact.ninja/fact')
.then(res => res.json())
.then(data => {
    console.log(data.value.fact)

    posts = data.value;
});