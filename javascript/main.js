let squares = document.querySelectorAll(".squares .square");
let done = false;
let start = true;
let radioO = document.querySelector("[value='o']");
let radioX = document.querySelector("[value='x']");
let winner = document.querySelector(".winner");
radioX.oninput = function () {
  if (radioO.checked) {
    start = true;
  } else {
    start = false;
  }
};

squares.forEach((square) => {
  square.addEventListener("click", (e) => {
    if (e.currentTarget.innerHTML === "" && done === false) {
      if (start === true) {
        e.currentTarget.innerHTML = `<span class="inner"><i class="fa-solid fa-o"></i></span>`;
        start = !start;
      } else {
        e.currentTarget.innerHTML = `<span class="inner"><i class="fa-solid fa-x"></i></span>`;
        start = !start;
      }
    }
  });
});
let container = document.querySelector(".squares");
container.onclick = function () {
  radioO.setAttribute("disabled", "");
  radioX.setAttribute("disabled", "");
  if (
    squares[0].innerHTML !== "" &&
    squares[0].innerHTML === squares[1].innerHTML &&
    squares[1].innerHTML === squares[2].innerHTML
  ) {
    for (let i = 0; i < 3; i++) {
      squares[i].style.backgroundColor = "#e91e63";
    }
    done = true;
  } else if (
    squares[3].innerHTML !== "" &&
    squares[3].innerHTML === squares[4].innerHTML &&
    squares[4].innerHTML === squares[5].innerHTML
  ) {
    for (let i = 3; i < 6; i++) {
      squares[i].style.backgroundColor = "#e91e63";
    }
    done = true;
  } else if (
    squares[6].innerHTML !== "" &&
    squares[6].innerHTML === squares[7].innerHTML &&
    squares[7].innerHTML === squares[8].innerHTML
  ) {
    for (let i = 6; i < 9; i++) {
      squares[i].style.backgroundColor = "#e91e63";
    }
    done = true;
  } else if (
    squares[0].innerHTML !== "" &&
    squares[0].innerHTML === squares[3].innerHTML &&
    squares[3].innerHTML === squares[6].innerHTML
  ) {
    squares[0].style.backgroundColor = "#e91e63";
    squares[3].style.backgroundColor = "#e91e63";
    squares[6].style.backgroundColor = "#e91e63";
    done = true;
  } else if (
    squares[1].innerHTML !== "" &&
    squares[1].innerHTML === squares[4].innerHTML &&
    squares[4].innerHTML === squares[7].innerHTML
  ) {
    squares[1].style.backgroundColor = "#e91e63";
    squares[4].style.backgroundColor = "#e91e63";
    squares[7].style.backgroundColor = "#e91e63";
    done = true;
  } else if (
    squares[2].innerHTML !== "" &&
    squares[2].innerHTML === squares[5].innerHTML &&
    squares[5].innerHTML === squares[8].innerHTML
  ) {
    squares[2].style.backgroundColor = "#e91e63";
    squares[5].style.backgroundColor = "#e91e63";
    squares[8].style.backgroundColor = "#e91e63";
    done = true;
  } else if (
    squares[0].innerHTML !== "" &&
    squares[0].innerHTML === squares[4].innerHTML &&
    squares[4].innerHTML === squares[8].innerHTML
  ) {
    squares[0].style.backgroundColor = "#e91e63";
    squares[4].style.backgroundColor = "#e91e63";
    squares[8].style.backgroundColor = "#e91e63";
    done = true;
  } else if (
    squares[2].innerHTML !== "" &&
    squares[2].innerHTML === squares[4].innerHTML &&
    squares[4].innerHTML === squares[6].innerHTML
  ) {
    squares[2].style.backgroundColor = "#e91e63";
    squares[4].style.backgroundColor = "#e91e63";
    squares[6].style.backgroundColor = "#e91e63";
    done = true;
  } else {
    let counter = 0;
    for (let i = 0; i < squares.length; i++) {
      if (squares[i].innerHTML !== "") {
        counter++;
      }
      if (counter === 9) {
        for (let i = 0; i < squares.length; i++) {
          squares[i].style.backgroundColor = "#e91e63";
        }
        winner.innerHTML = `Draw`;
        done = true;
      }
    }
  }
};
let colorPick = document.querySelector("[type='color']");
let root = document.querySelector(":root");
let reset = document.querySelector("button");
reset.onclick = function () {
  for (let i = 0; i < squares.length; i++) {
    squares[i].innerHTML = "";
    squares[i].style.backgroundColor = "var(--main-color)";
  }
  radioO.removeAttribute("disabled");
  radioX.removeAttribute("disabled");
  done = false;
  winner.innerHTML = "";
};
//grap color from local storage======================

root.style.setProperty("--main-color", window.localStorage.getItem("color"));
colorPick.value = window.localStorage.getItem("color");

//change color ======================================
colorPick.oninput = function () {
  root.style.setProperty("--main-color", colorPick.value);
  window.localStorage.setItem("color", colorPick.value);
};
