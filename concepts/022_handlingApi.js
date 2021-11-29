fetch('https://api.chucknorris.io/jokes/random')
.then((response) => {
    // console.log("API: ",response.json());
    return response.json();       //returning this to next then
})
.then((data) => {
    var joke = data.value;
    console.log("JOKE: ", joke);
})
.catch();
//execute in browser