const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', generateJoke)

generateJoke();

async function generateJoke() {
    const config = {
        headers: {
            'Accept': 'application/json'
        },
    }

    // Using .then()
    /*fetch('https://icanhazdadjoke.com/', config)
        .then(res => res.json())
        .then((data) => {
            // console.log(data)
            jokeEl.innerHTML = data.joke
        })
    */

    const rest = await fetch('https://icanhazdadjoke.com/', config)
    const data = await rest.json();
    jokeEl.innerHTML = data.joke;
}