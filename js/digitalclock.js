// SELECIONANDO OS ELEMENTOS HTML E ATRIBUINDO EM SUAS VARIÁVEIS
const hoursElement = document.getElementById("hours")
const minutesElement = document.getElementById("minutes")
const secondsElement = document.getElementById("seconds")
const periodHoursElement = document.getElementById("period-hours")
const dayElement = document.getElementById("day-element")
const dateElement = document.getElementById("date-element")
const monthElement = document.getElementById("month-element")
const yearElement = document.getElementById("year-element")
const dateContentElement = document.getElementById("date-content")
const monthContentElement = document.getElementById("month-content")
const yearContentElement = document.getElementById("year-content")

// CRIANDO OS DIAS DA SEMANA E ATRIBUINDO EM UM ARRAY
const daysWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

// CRIANDO OS MÊSES DO ANO A ATRIBUINDO EM UM ARRAY
const fullYear = ["January", "February", "March", "April", "May", "june", "July", "August", "September", "Octuber", "November", "December"]

// FUNÇÃO PARA ADICIONAR ITEM DE APOIO
function addNumber(element) {
    if(element < 10) {
        return "0" + element
    }
    else {
        return element
    }
}

// FUNÇÃO PARA BUSCAR DATA ATUAL DO SISTEMA
function getDate() {
    const today = new Date()
    const day = today.getDay()
    const date = today.getDate()
    const month = today.getMonth()
    const year = today.getFullYear()

    dayElement.textContent = daysWeek[day] + " , "
    dateElement.textContent = addNumber(date) + " , " 
    monthElement.textContent = fullYear[month] 
    yearElement.textContent = year
    dateContentElement.textContent = addNumber(date)
    monthContentElement.textContent = addNumber(month + 1) + " / "
    yearContentElement.textContent = year + " / "
}
// CHAMANDO A FUNÇÃO NO DOCUMENTO
getDate()

// FUNÇÃO PARA BUSCAR HORA ATUAL DO SISTEMA
function digitalClock() {
    const date = new Date()
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()
    hoursElement.textContent = addNumber(hours)
    minutesElement.textContent = addNumber(minutes)
    secondsElement.textContent = addNumber(seconds)

    if(hours < 12) {
        periodHoursElement.textContent = "AM"
    }
    else {
        periodHoursElement.textContent = "PM"
    }
}
// CHAMANDO A FUNÇÃO NO DOCUMENTO
digitalClock()

// ADICIONANDO INTERVALO NO DOCUMENTO
setInterval(() => {
    digitalClock()
}, 1000)