let guess = Math.floor(Math.random() * 20) + 1;
let check = document.querySelector("#check");
let score = 5;
let highestScore = 0;
let again = document.querySelector("#again");

let whenCorrect = () => {
  document.querySelector(
    "#update"
  ).innerHTML = `<i class="fa fa-trophy" aria-hidden="true"></i> YOU WIN!`;
  document.querySelector("#update").style.color = "blue";
  document.querySelector("#guess").textContent = `${guess}`;
  document.querySelector("#guess").style.width = "200px";
  document.querySelector("#guess").classList.add("animating1");
  document.querySelector("#again").classList.add("animating");
  document.querySelector("body").style.backgroundColor = "#0bb845";
  if (score > highestScore) {
    highestScore = score;
    document.querySelector("#hScore").textContent = highestScore;
    document.querySelector("#again").classList.add("animating");
  }
};

document.querySelector("#input").focus();

check.addEventListener("click", (e) => {
  let input = +document.querySelector("#input").value;

  if (score > 1) {
    if (!input) {
      document.querySelector(
        "#update"
      ).innerHTML = `<i class="fa fa-pencil-square-o" aria-hidden="true"></i> Please enter a number! <br> Between 1 - 20`;
      document.querySelector("#update").style.color = "rgb(150, 2, 1)";
      document.querySelector("#input").focus();
    } else if (input !== guess) {
      document.querySelector("#update").style.color =
        input < guess ? "rgb(250 15 15)" : "rgb(250 227 15)";
      document.querySelector("#update").innerHTML =
        input < guess
          ? `<i class="fa fa-level-down" aria-hidden="true"></i> ${input} Is Too Low`
          : `<i class="fa fa-level-up" aria-hidden="true"></i> ${input} Is Too High`;
      
      score--;
      document.querySelector("#score").textContent = score;
      document.querySelector("#input").focus();
    } else if (input === guess) {
      whenCorrect();
    }  
   
  } else {
    if (input === guess) {
      whenCorrect();
    } else {
      document.querySelector(
        "#update"
      ).innerHTML = `<i class="fa fa-level-down" aria-hidden="true"></i> Game Over!`;
      document.querySelector("#update").style.color = "rgb(40, 2, 150)";
      document.querySelector("#score").textContent = "0";
      document.querySelector("#again").classList.add("animating");
      document.querySelector("body").style.backgroundColor = "#b81d0b";
    }
  }
});

again.addEventListener("click", () => {
  document.querySelector("body").style.backgroundColor = "darkgoldenrod";
  document.querySelector("#guess").textContent = `?`;
  document.querySelector("#again").classList.remove("animating");
  score = 5;
  document.querySelector("#score").textContent = score;
  guess = Math.floor(Math.random() * 20) + 1;
  document.querySelector(
    "#update"
  ).innerHTML = `<i class="fa fa-pencil-square-o" aria-hidden="true"></i> Start Guessing...`;
  document.querySelector("#update").style.color = "rgb(3, 114, 99)";
  document.querySelector("#guess").style.width = "100px";
  document.querySelector("#guess").classList.remove("animating1");
  document.querySelector("#input").value = "";
  document.querySelector("#input").focus();

  // console.log(guess);
});

// console.log(guess);
