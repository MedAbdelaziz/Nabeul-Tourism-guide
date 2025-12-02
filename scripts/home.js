import { addReservation,reservations } from './reservation.js';

const reservationForm = document.querySelector('.reservation-form');
reservationForm.addEventListener('submit', (event)=> {
    event.preventDefault();

    const name = document.getElementById('name').value ;
    const email = document.getElementById('email').value ;
    const date = document.getElementById('date').value ;
    const guests = document.getElementById('guests').value ;

    const newReservation = { name, email, date, guests};
    console.log(newReservation);
    addReservation(newReservation);
    
});