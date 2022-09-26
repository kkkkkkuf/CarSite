function setFromLocalStorage() {
  const lastInputJSON = localStorage.getItem("lastInput")
  if (!lastInputJSON) return

  const lastInput = JSON.parse(lastInputJSON)

  setElementsValues(lastInput.name, lastInput.creditSum, lastInput.procent, lastInput.srok)
}

function saveToLocalStorage() {
  const {name, creditSum, procent, srok} = getElementsValues()

  const lastInput = {
    name,
    creditSum,
    procent,
    srok,
  }

  localStorage.setItem("lastInput", JSON.stringify(lastInput))
}

function addition() {
  let { name, creditSum, procent, srok} = getElementsValues()


  const month = srok * 12
  const rez = creditSum * (1 + procent/100) / month
  
  document.getElementById("result1").innerHTML = `Сумма кредита: ${creditSum} руб.`
  document.getElementById("result3").innerHTML = `Годовая ставка: ${procent} %`
  document.getElementById("result2").innerHTML = `Срок кредита: ${month} месяцев`
  

 
  document.getElementById("result4").innerHTML = ` ${name} Ваш минимальный ежемесячный платеж составит ${rez} руб.`

  console.log("Результат - " + rez)
}

function getElementsValues() {
  if (document.getElementById("name").value == "" || document.getElementById("a").value ==""  || document.getElementById("proc").value =="" || document.getElementById("b").value =="") {
    alert("Все поля должны быть заполнены")
    stop
  }
  else if(!document.getElementById("name").value.match("^[А-Яа-яЁё ]+$")){
    alert("Поле «ФИО» может содержать только кириллицу")
    stop
  }
  else if ((isNaN(document.getElementById("a").value) == true)) {
    alert("Некорректно заполнено поле «Сумма кредита»")
    stop
  } 
  else if ((isNaN(document.getElementById("proc").value) == true)) {
    alert("Некорректно заполнено поле «Годовая ставка»")
    stop
  } 
  else if ((isNaN(document.getElementById("b").value)== true)) {
    alert("Некорректно заполнено поле «Срок кредита»")
    stop
  }
  else {
  return {
    name: document.getElementById("name").value,
    creditSum: parseInt(document.getElementById("a").value),
    procent : parseInt(document.getElementById("proc").value),
    srok: parseInt(document.getElementById("b").value),
  }
}
}

function setElementsValues(name = "", a = "",proc ="", b = "") {
  document.getElementById("name").value = name
  document.getElementById("a").value = a
  document.getElementById("proc").value = proc
  document.getElementById("b").value = b

  document.getElementById("result1").innerHTML = ""
  document.getElementById("result3").innerHTML = ""
  document.getElementById("result2").innerHTML = ""
  document.getElementById("result4").innerHTML = ""

}

