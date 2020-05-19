var clientName2F = document.getElementById('clientName2');
var clientMsg2 = document.getElementById('message');


var workTypeF = document.getElementById('workType');
var clientNameF = document.getElementById('clientName');
var clientTelF = document.getElementById('clientTel');
var clientEmailF = document.getElementById('clientWantedDate');

document.getElementById('mess_send').onclick = populateStorage1
document.getElementById('order_send').onclick = populateStorage2

function populateStorage1() {
    localStorage.setItem('clientName2', document.getElementById('clientName2').value);
    localStorage.setItem('clientMsg', document.getElementById('message').value);
}

function populateStorage2() {
    localStorage.setItem('workType', document.getElementById('workType').value);
    localStorage.setItem('clientName', document.getElementById('clientName').value);
    localStorage.setItem('clientTel', document.getElementById('clientTel').value);
    localStorage.setItem('clientWantedDate', document.getElementById('clientWantedDate').value);
    sessionStorage.setItem('clientName', document.getElementById('clientName').value);
}