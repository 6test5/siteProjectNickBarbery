var clientName2F = document.getElementById('clientName2');
var clientMsg2 = document.getElementById('message');


var workTypeF = document.getElementById('workType');
var clientNameF = document.getElementById('clientName');
var clientTelF = document.getElementById('clientTel');
var clientEmailF = document.getElementById('clientWantedDate');

document.querySelector('#blink, .recBtn').addEventListener('click', (e) => {
    document.querySelector('.message').classList.add('hidden');
    document.querySelector('#f1').classList.remove('hidden');
    document.querySelector('.form_head').classList.remove('hidden');
    document.getElementById('f1').reset();
});


document.querySelector('#mess_send').addEventListener('click', (e) => {
    e.preventDefault();
    populateStorage(['clientName2', 'message']);
    document.getElementById('form_input').reset();
    return false;
});

document.querySelector('#order_send').addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.message').classList.remove('hidden');
    document.querySelector('#f1').classList.add('hidden');
    document.querySelector('.form_head').classList.add('hidden');
    populateStorage(['workType', 'clientName', 'clientTel', 'clientWantedDate']);
    return false;
});

function populateStorage(data = [1, 2, 3, 4]) {
    data.forEach(data => {
        const elem = document.getElementById(data);
        if (elem) {
            localStorage.setItem(data, elem.value);
        }
    });
}