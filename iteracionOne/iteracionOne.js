/* 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
evento click que ejecute un console log con la información del evento del click */
     
const goClick = function(event) {
    console.log(event)
}
document.getElementById('btnToClick').addEventListener('click', goClick)

/* 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input. */

const addFocus = function(eventFocus) {
    console.log(eventFocus)
}
document.getElementsByClassName("focus").addEventListener('focus', addFocus)

/* 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input. */

const newEventInput = function(eventInput) {
    console.log(eventInput)
}
document.getElementsByClassName("value").addEventListener('input', newEventInput)