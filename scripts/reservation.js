reservations = [
    {name: "John Doe", email: "johndoe@gmail.com" date: "2024-07-15", guests: 4},
    {name: "Jane Smith", email: "janesmith@gmail.com", date: "2024-07-20", guests: 2},
]

function addReservation(reservations){
    const reservationForm = document.querySelector('.reservation-form');
    reservationForm.addEventListener('submit', (event)=> {
        event.preventDefault();

        const name = document.getElementById('name').value ;
        const email = document.getElementById('email').value ;
        const date = document.getElementById('date').value ;
        const guests = document.getElementById('guests').value ;

        const newReservation = { name, email, date, guests};
        reservations.push(newReservation);
        alert('Reservation added successfully!');
        reservationForm.reset();
    })
}

function init(){
    addReservation(reservations);
}

window.onload = init;

function saveToLocalStorage(key, data){
    localStorage.setItem(key, JSON.stringify(data));
}
function getFromLocalStorage(key){
    const data = LocalStorage.getItem(key);
    return data ? JSON.parse(data) : null;    
}
