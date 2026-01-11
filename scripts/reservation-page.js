import { addReservation,reservations } from '../data/reservation.js';
import {hotels,getHotel} from '../data/hotel.js';

renderFormSelect(hotels);
const reservationForm = document.querySelector('.reservation-form');
reservationForm.addEventListener('submit', (event)=> {
    event.preventDefault();
    const name = document.getElementById('name').value ;
    let pattern=/^[A-Z][a-z]+(\s[A-Z][a-z]+)+$/;
    if(!pattern.test(name)){
        alert('Invalid name');
        reservationForm['name'].classList.toggle('invalid');
        return;
    }
    const email = document.getElementById('email').value ;
    pattern=/^\w+([\.-_]?\w+)*@\w+([\.-_]?\w+)*(\.\w{2,3})+$/;
    if(!pattern.test(email)){
        alert('Invalid email');
        reservationForm['email'].classList.toggle('invalid');
        return;
    }
    const phone= document.getElementById('phone').value;
    pattern=/^\+[0-9]+/;
    if(!pattern.test(phone)){
        alert('Invalid phone number');
        reservationForm['phone'].classList.toggle('invalid');
        return;
    }

    const date = new Date(document.getElementById('date').value );
    const today= new Date();
    //console.log(date.toDateString()+' '+today.toDateString());
    if(date.toDateString()< today.toDateString()){
        alert('Invalid date');
        reservationForm['date'].classList.toggle('invalid');
        return;
    }
    const guests = document.getElementById('guests').value ;
    pattern=/[0-9]/;
    if(!pattern.test(guests)){
        alert('Number of guest invalid');
        reservationForm['guests'].classList.toggle('invalid');
        return;
    }
    if(guests >4){
        alert('Too many guests');
        reservationForm['guests'].classList.toggle('invalid');
        return;
    }
    const newReservation = { name, email,phone, date, guests};
    console.log(newReservation);
    addReservation(newReservation);
    forms.reset();
});

function renderFormSelect(hotels){
    let html='<option value="" disabled selected>Select a place</option>';
    hotels.forEach((hotel)=>{
        html+=`<option value=${hotel.id}>${hotel.name}</option>`;
    });
    document.querySelector('.form-select').innerHTML=html;
    
}