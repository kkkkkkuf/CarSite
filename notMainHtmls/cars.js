const carsCatalog = {
  1: {
    marka: "Lexus",
    model: "lx570",
    cost: 5513000,
    date: 2015,
    new: false,
  },
  2: {
    marka: "BMW",
    model: "x8",
    cost: 8010000,
    date: 2021,
    new: true,
  },
  3: {
    marka: "Ford",
    model: "Focus",
    cost: 235000,
    date: 2008,
    new: false,
  },
  4: {
    marka: "Mercedes-Benz",
    model: "W124",
    cost: 87000,
    date: 1990,
    new: false,
  },
  5: {
    marka: "Cadillac",
    model: "Escalade III",
    cost: 219900,
    date: 2013,
    new: false,
  },
  6: {
    marka: "Scoda",
    model: "Octavia II",
    cost: 470000,
    date: 2011,
    new: true,
  },
  7: {
    marka: "Kia",
    model: "Rio",
    cost: 850000,
    date: 2013,
    new: false,
  },
  8: {
    marka: "Mercedes S-Class",
    model: "W223",
    cost: 10600000,
    date: 2022,
    new: true,
  },
  9: {
    marka: "Porsche",
    model: "911",
    cost: 9760000,
    date: 2022,
    new: true,
  },
  10: {
    marka: "Porsche",
    model: "Cayenne",
    cost: 5500000,
    date: 2017,
    new: false,
  },
}

function printoutCars() {
  //get elements
  let date = parseInt(document.getElementById("a").value)
  let cost = parseInt(document.getElementById("b").value)


  if ((isNaN(date) == true) || (isNaN(cost) == true)) {
    alert("Заполните корректно значения всех полей")
    return false
  }
  else if (document.getElementById("a").value.length != 4 ){
    alert("Введите корректное значение даты")
    return false
  }
  else {
  let output = document.getElementById("output")

  if (!output) {
    alert("ошибка")
  } 
}

  removeAllChildNodes(output)
  printOutCarsInNode(output, cost, date)
   var isEmpty = document.getElementById("output").innerHTML === "";
      if (isEmpty) {
        const message = `
        К сожалению, по вашему запросу мы не смогли подобрать для вас автомобиль
        `;
        output.innerHTML = message
    }
}
  
function printOutCarsInNode(node, cost, date) {
  Object.values(carsCatalog).forEach((auto) => {
    
    if (auto.cost > cost || auto.date < date)  return 
         

    const autoDiv = document.createElement("div")
    autoDiv.className = "container p-3 my-3 bg-dark text-white"

    const autoElem = document.createElement("h5")
    autoElem.innerHTML = auto.marka + " " + auto.model
    autoDiv.appendChild(autoElem)

    const autoDate = document.createTextNode("Год производства: " + auto.date)
    autoDiv.appendChild(autoDate)

    const autoCost = document.createElement("p")
    autoCost.innerHTML = "Цена: " + auto.cost
    autoDiv.appendChild(autoCost)

    const autoBool = document.createElement("small")
    if (auto.new == true) {
    autoBool.innerHTML = "Новая машина"
    }
    else {
      autoBool.innerHTML = "Машина б/у"
    }
    autoDiv.appendChild(autoBool)
    
    node.appendChild(autoDiv)

}
     )
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild)
  }
}
