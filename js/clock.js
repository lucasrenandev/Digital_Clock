// SELECIONANDO OS ELEMENTOS HTML E ATRIBUINDO EM SUAS VARIÁVEIS
const hoursElement = document.getElementById("hours")
const minutesElement = document.getElementById("minutes")
const secondsElement = document.getElementById("seconds")
const periodHours = document.getElementById("period-hours")
const dayElement = document.getElementById("day-element")
const dateElement = document.getElementById("date-element")
const monthElement = document.getElementById("month-element")
const yearElement = document.getElementById("year-element")
const dateContent = document.getElementById("date-content")
const monthContent = document.getElementById("month-content")
const yearContent = document.getElementById("year-content")

// CRIANDO OS DIAS DA SEMANA E ATRIBUINDO EM UM ARRAY
const daysWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

// CRIANDO OS MÊSES DO ANO A ATRIBUINDO EM UM ARRAY
const fullYear = ["January", "February", "March", "April", "May", "june", "July", "August", "September", "October", "November", "December"]

// FUNÇÃO PARA ADICIONAR VALOR
function addNumber(element) {
    if(element < 10) {
        return "0" + element
    }
    else {
        return element
    }
}

// FUNÇÃO PARA OBTER DATA ATUAL DO SISTEMA
function getDate() {
    const today = new Date()
    const day = today.getDay()
    const date = today.getDate()
    const month = today.getMonth()
    const year = today.getFullYear()

    dayElement.textContent = daysWeek[day] + ","
    monthElement.textContent = fullYear[month] 
    dateElement.textContent = addNumber(date) + "," 
    yearElement.textContent = year

    dateContent.textContent = addNumber(date)
    monthContent.textContent = addNumber(month + 1) + " / "
    yearContent.textContent = year + " / "
}
// CHAMANDO A FUNÇÃO OBTER DATA NO DOCUMENTO
getDate()

// FUNÇÃO PARA OBTER HORA ATUAL DO SISTEMA
function digitalClock() {
    const date = new Date()
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()
    hoursElement.textContent = addNumber(hours)
    minutesElement.textContent = addNumber(minutes)
    secondsElement.textContent = addNumber(seconds)

    if(hours < 12) {
        periodHours.textContent = "AM"
    }
    else {
        periodHours.textContent = "PM"
    }
}
// CHAMANDO A FUNÇÃO OBTER HORA NO DOCUMENTO
digitalClock()

// ADICIONANDO INTERVALO NO DOCUMENTO
setInterval(() => {
    digitalClock()
}, 1000)