let Jokebtn = document.querySelector(".btn"),
  TheJoke = document.querySelector(".joke");

Jokebtn.addEventListener("click", generateJoke);
generateJoke();

function generateJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  fetch("https://icanhazdadjoke.com", config)
    .then((res) => res.json())
    .then((data) => {
      TheJoke.innerHTML = data.joke;
    });
}
