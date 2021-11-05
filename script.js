var ticket = 500;
var hotel = 250;
var museum = 120;

var ticketSum = 9433*ticket;
var hotelSum = 9433*hotel;
var museumSum = 10354*museum;

var allSpendings = ticketSum+hotelSum+museumSum;

var userName = prompt('Ismigizni kiriting');
var money = prompt('Sayohat uchun qancha pulingiz bor');
var tittle = document.querySelector('#tittle');

if (money > 0) {
if (money < allSpendings) {
    tittle.textContent = ("Kechirasiz "+ userName +" sizda mablag' yetarli emas." );
    console.log("Kechirasiz " + userName + " sizda mablag' yetarli emas.")
}else {
    tittle.textContent = ("Oq yo\'l " + userName + "");
    console.log("Oq yo\'l " + userName + "");
}
}