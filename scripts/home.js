import { addReservation,reservations } from '../data/reservation.js';

const reservationForm = document.querySelector('.reservation-form');
reservationForm.addEventListener('submit', (event)=> {
    event.preventDefault();
    const name = document.getElementById('name').value ;
    let pattern=/(^[A-Z]?[a-z]+\s){2,}/;
    if(!pattern.test(name)){
        alert('Invalid name');
        reservationForm['name'].style.border="red solid 2px";
        return;
    }
    const email = document.getElementById('email').value ;
    pattern=/^\w+([\.-_]?\w+)*@\w+([\.-_]?\w+)*(\.\w{2,3})+$/;
    if(!pattern.test(email)){
        alert('Invalid email');
        reservationForm['name'].style.border="red solid 2px";
        return;
    }
    const date = document.getElementById('date').value ;
   
    const guests = document.getElementById('guests').value ;
    pattern=/[0-9]/;
    if(!pattern.test(guests)){
        alert('Number of guest invalid');
        return;
    }
    if(guests >4){
        alert('Too many guests');
        return;
    }
    const newReservation = { name, email, date, guests};
    console.log(newReservation);
    addReservation(newReservation);
    forms.reset();
});