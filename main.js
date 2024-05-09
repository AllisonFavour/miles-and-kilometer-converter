(function () {
  "use strict";

  const h1 = document.querySelector("h1");
  const h3 = document.querySelector("h3");
  const form = document.querySelector("form");

  const p = document.querySelector("#convert-display");

  let conversionType;

  document.addEventListener("keydown", (event) => {
    if (event.key === "k" || event.key === "K") {
      conversionType = "kilometers";
      h1.innerText = "Kilometers to miles converter";
      h3.innerText =
        "Type in a number of kilometes and click on the button to convert the distance to miles";
    } else if (event.key === "m" || event.key === "M") {
      conversionType = "miles";
      h1.innerText = "Miles to kilometer converter";
      h3.innerText =
        "Type in a number of miles and click on the button to convert the distance to kilometers";
    }
  });

  form.addEventListener("click", (event) => {
    event.preventDefault();

    const input = document.querySelector("#input");
    let inputVal = parseFloat(input.value);

    if (inputVal) {
      if (conversionType == "miles") {
        const convertedVal = (inputVal * 1.60934).toFixed(3);
        p.className = 'converted';
        p.innerText = `${inputVal} miles converts to ${convertedVal} kilometers`;
      } else if (conversionType == "kilometers") {
        const convertedVal = (inputVal * 0.621371).toFixed(3);
        p.classList = 'converted';
        p.innerText = `${inputVal} kilometers converts to ${convertedVal} kilometers`;
      }
    } else {
      p.classList = 'warn';
      p.innerText = "Please enter a valid number or Press 'K' or 'M' to choose conversion";
    }
  });
})();
