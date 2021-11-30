fetch('https://catfact.ninja/facts')
.then(res => res.json())
.then(data => {
    console.log(data.value.facts)

    posts = data.value;
});