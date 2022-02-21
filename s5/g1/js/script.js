var data = new Date ()
console.log (data)




document.querySelectorAll('p')[0].innerHTML = ("Questa è la data di oggi con l'orario di Roma: " + "<br>" + data)


document.querySelectorAll('p')[1].innerHTML = (data.getMonth())
document.querySelectorAll('p')[2].innerHTML = (data.getDay())
document.querySelectorAll('p')[3].innerHTML = (data.getDay())
document.querySelectorAll('p')[4].innerHTML = (data.getHours())

var data1 = data.toLocaleDateString()
var data2 = data.toLocaleString()
document.querySelectorAll('p')[5].innerHTML = data1
document.querySelectorAll('p')[6].innerHTML = data2




