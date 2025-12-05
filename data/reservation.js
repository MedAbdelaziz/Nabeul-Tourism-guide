export let reservations;

reservations=getFromLocalStorage('reservations') || [
    {name: "John Doe", email: "johndoe@gmail.com", date: "2024-07-15", guests: 4},
    {name: "Jane Smith", email: "janesmith@gmail.com", date: "2024-07-20", guests: 2},
    ];
//window.onload = init;

export function addReservation(newReservation){
    const reservationForm = document.querySelector('.reservation-form');
    reservations.push(newReservation);
    alert('Reservation added successfully!');
    //console.log(reservations);
    reservationForm.reset();
    //console.log(reservations); 
    saveToLocalStorage('reservations', reservations);
}

function init(){
    reservations = getFromLocalStorage('reservations');
    //addReservation(reservations);
    console.log(reservations);

}

function saveToLocalStorage(key, data){
    localStorage.setItem(key, JSON.stringify(data));
}
function getFromLocalStorage(key){
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;    
}

//console.log(reservations);