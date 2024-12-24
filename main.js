// async function getRate() {
//   try {
//     let response = await fetch(
//       `https://v6.exchangerate-api.com/v6/1513e32c745c3365cf456f3d/latest/RUB`
//     );
//     if (response.ok) {
//       let data = await response.json();
//       console.log(data.conversion_rates);
//     } else {
//       alert("ERROR" + response.status);
//     }
//     return data.conversion_rates;
//   } catch (error) {}
// }

//ВЫВОД ВСЕХ ВАЛЮТ НА СТРАНИЦУ
// const currency = Object.entries(data.conversion_rates);

// let table = document.createElement('table')
// table.className = 'tableCurrency'
// document.body.append(table)

// currency.forEach((elem) => {
//     let tr = document.createElement('tr');
//     let tdone = document.createElement('td');
//     let tdtwo = document.createElement('td');
//     document.body.append(tr);
//     tdone.innerHTML = `${elem[0]}`;
//     document.body.append(tdone);
//     tdtwo.innerHTML = `${elem[1]} $`;
//     document.body.append(tdtwo);
// })

// currency.forEach((elem) => {
//     console.log(elem);
//     let newElement = document.createElement('div');
//     newElement.className = 'currency';
//     newElement.innerHTML = `${elem[0]} \t ${elem[1]} $`;
//     document.body.append(newElement);
// })

// function changeSelected(tag) {
//   let param = null;
//   return param;
// }

// function addMeaningInput(tag, param) {
//   tag.addEventListener("keyup", function () {
//     param = this.value;
//     console.log(tag.value);
//     // console.log(param);
//   });
// }

// appendInSelect(selectFirst);
// appendInSelect(selectSecond);
// currencySelectFirst = changeSelected(selectFirst);

// changeSelected(selectSecond, currencySelectSecond);

// addMeaningInput(inputFirst, meaningInputFirst);
// addMeaningInput(inputSecond, meaningInputSecond);

// console.log(data.conversion_rates[`${currencySelectFirst}`]);
// console.log(currencySelectFirst);

// currency.forEach((elem) => {
//     let selone = document.querySelector('#selectFirstValue')
//     let seltwo = document.querySelector('#selectSecondValue')
//     let opt = document.createElement('option')
//     opt.value = elem[0];
//     opt.innerHTML = `${elem[0]}`
//     selone.appendChild(opt)
// })

const currency = Object.entries(data.conversion_rates);

let currencySelectFirst = null;
let currencySelectSecond = null;

let meaningInputFirst = null;
let meaningInputSecond = null;

let selectFirst = document.querySelector("#selectFirstValue");
let selectSecond = document.querySelector("#selectSecondValue");
let inputFirst = document.querySelector("#inputQuantityCurrencyIncoming");
let inputSecond = document.querySelector("#inputQuantityCurrencyComingOut");

function appendInSelect(teg) {
  currency.forEach((elem) => {
    let opt = document.createElement("option");
    opt.value = elem[0];
    opt.innerHTML = `${elem[0]}`;
    teg.appendChild(opt);
  });
}

appendInSelect(selectFirst);
appendInSelect(selectSecond);

selectFirst.addEventListener("change", function () {
  currencySelectFirst = this.value;
  inputFirst.value = "";
  inputSecond.value = "";
  // console.log(currencySelectFirst);
});

selectSecond.addEventListener("change", function () {
  currencySelectSecond = this.value;
  inputFirst.value = "";
  inputSecond.value = "";
  // console.log(currencySelectSecond);
});

inputFirst.addEventListener("keyup", function () {
  meaningInputFirst = this.value;
  // console.log(meaningInputFirst);
  let diff = null;
  // if (diff == NaN) {
  //   document.querySelectorAll(
  //     ".inputQuantityCurrency"
  //   ).innerHTML = `ВЫБЕРИТЕ КОНКРЕТНУЮ ВАЛЮТУ`;
  //   console.log("AAAAAAAAAA");
  // } else {
  //   diff =
  //     data.conversion_rates[currencySelectFirst] /
  //     data.conversion_rates[currencySelectSecond];
  //   console.log(diff);
  // }
  diff =
    data.conversion_rates[currencySelectSecond] /
    data.conversion_rates[currencySelectFirst];
  // console.log(diff);
  inputSecond.value = meaningInputFirst * diff;
});

inputSecond.addEventListener("keyup", function () {
  meaningInputSecond = this.value;
  // console.log(meaningInputSecond);
  let diff = null;
  diff =
    data.conversion_rates[currencySelectFirst] /
    data.conversion_rates[currencySelectSecond];
  // console.log(diff);
  inputFirst.value = meaningInputSecond * diff;
});

// СЧИТЫВАНИЕ С INPUT ЧЕРЕЗ КОНЕЧНОГО ЗНАЧЕНИЯ
// let timerID = setTimeout(function () {
//   inputFirst.addEventListener("keyup", function () {
//     meaningInputFirst = this.value;
//     // console.log(meaningInputFirst);
//   });
// }, 1000);
let btnTheme = document.querySelector("#newButton");
if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  btnTheme.textContent = "light";
} else {
  btnTheme.textContent = "dark";
}

if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  document.body.classList.toggle("darkTheme");
} else {
  document.body.classList.toggle("lightTheme");
}

document.querySelector("#newButton").addEventListener("click", () => {
  if (document.body.classList[0] === "lightTheme") {
    document.body.classList.remove("lightTheme");
    document.body.classList.add("darkTheme");
  } else {
    document.body.classList.add("lightTheme");
    document.body.classList.remove("darkTheme");
  }
  if (btnTheme.textContent === "light") {
    btnTheme.textContent = "dark";
  } else {
    btnTheme.textContent = "light";
  }
});

let btn = document.querySelector("#changeLang");
btn.addEventListener("click", () => {
  btn.textContent === "RU"
    ? (btn.textContent = "EN")
    : (btn.textContent = "RU");
  let lab = document.querySelector("#labelChangeTheColor");
  let labb = document.querySelectorAll(".labelChangeCurrency");
  let h1 = document.querySelector("h1");
  if (btn.textContent === "RU") {
    labb.forEach((elem) => {
      elem.textContent = "Select a currency";
    });
    lab.textContent = "Change the subject";
    h1.textContent = "Currency Calculator";
    inputFirst.placeholder = "Enter the amount of currency to convert";
    inputSecond.placeholder = "The amount of currency being converted";
  } else {
    labb.forEach((elem) => {
      elem.textContent = "Выберите валюту";
    });
    lab.textContent = "Сменить тему";
    h1.textContent = "Калькулятор валют";
    inputFirst.placeholder = "Введите количество конвертируемой валюты";
    inputSecond.placeholder = "Количество конвертируемой валюты";
  }
});

let noneSelectFirst = null;
selectFirst.addEventListener("change", function () {
  noneSelectFirst = this.value;
});

inputFirst.addEventListener("keyup", () => {
  if (
    noneSelectFirst === null ||
    noneSelectFirst === selectFirst.options[0].value
  ) {
    // document
    //   .querySelector("#labelChangeCurrencyIn")
    //   .classList.add("errorLabel");
    alert("Пожалуйста выберите валюту");
    inputFirst.value = "";
    inputSecond.value = "";
  } else {
    // document
    //   .querySelector("#labelChangeCurrencyIn")
    //   .classList.remove("errorLabel");
  }
  if (
    noneSelectSecond === null ||
    noneSelectSecond === selectSecond.options[0].value
  ) {
    document;
    // .querySelector("#labelChangeCurrencyOut")
    // .classList.add("errorLabel");
  } else {
    document;
    // .querySelector("#labelChangeCurrencyOut")
    // .classList.remove("errorLabel");
  }
});

let noneSelectSecond = null;
selectSecond.addEventListener("change", function () {
  noneSelectSecond = this.value;
});

inputSecond.addEventListener("keyup", () => {
  if (
    noneSelectSecond === null ||
    noneSelectSecond === selectSecond.options[0].value
  ) {
    // document
    //   .querySelector("#labelChangeCurrencyOut")
    //   .classList.add("errorLabel");
    alert("Пожалуйста выберите валюту");
    inputFirst.value = "";
    inputSecond.value = "";
  } else {
    // document
    //   .querySelector("#labelChangeCurrencyOut")
    //   .classList.remove("errorLabel");
  }
  if (
    noneSelectFirst === null ||
    noneSelectFirst === selectFirst.options[0].value
  ) {
    // document
    //   .querySelector("#labelChangeCurrencyIn")
    //   .classList.add("errorLabel");
    // selectFirst.classList.add("errorSelect");
  } else {
    // document
    //   .querySelector("#labelChangeCurrencyIn")
    //   .classList.remove("errorLabel");
  }
});

inputFirst.addEventListener("keyup", () => {
  if (inputFirst.value !== "") {
    inputFirst.classList.add("inputNotNullDark");
  } else {
    inputFirst.classList.remove("inputNotNullDark");
  }
});

inputSecond.addEventListener("keyup", () => {
  if (inputSecond.value !== "") {
    inputSecond.classList.add("inputNotNullDark");
  } else {
    inputSecond.classList.remove("inputNotNullDark");
  }
});
