import { addReservation,reservations } from '../data/reservation.js';
import {hotels,getHotel} from '../data/hotel.js';
import {formatStars} from './utils.js';

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
    const hotelId= document.getElementById('place').value;
    if(guests >4){
        alert('Too many guests');
        reservationForm['guests'].classList.toggle('invalid');
        return;
    }
    const newReservation = { name, email,phone,hotelId, date, guests};
    console.log(newReservation);
    addReservation(newReservation);
    forms.reset();
});

const selectElem = document.getElementById('place');
selectElem.addEventListener('change',(event)=>{
    const selectedElement= event.target.value;
    renderHotelInfo(selectedElement);
    console.log(selectedElement);
    

});

function renderFormSelect(hotels){
    let html='<option value="" disabled selected>Select a place</option>';
    hotels.forEach((hotel)=>{
        html+=`<option value=${hotel.id}>${hotel.name}</option>`;
    });
    document.querySelector('.form-select').innerHTML=html;
    
}

export function renderHotelInfo(hotelId){
    const hotel= getHotel(hotelId);
    console.log(hotel);
    const html= `<div class="accommodation-container">
            <div class="image-container">
                <img src="${hotel.image}" class="accommodation-image">
            </div>
            <div class="info-container">
                <div class="accommodation-title">
                    <div class="name"><h3>${hotel.name}</h3></div>
                    <div class="rating"><img src="images/ratings/rating-${formatStars(hotel.rating.stars)}.png"></div>
                </div>
                <div class="accommodation-description"> 
                    <p>${hotel.description}</p>
                </div>
            </div>
            <div class="price-container">
                <div class="price-note">
                    <div class =price-note-left>
                        <div class="comment">${hotel.rating.note}</div>
                        <div class = "review-count">${hotel.rating.reviews} reviews</div>
                    </div>
                    
                    <div class="price-note-right">${hotel.rating.score}</div>
                </div>
                <div class="price-value">${hotel.price}$<span class="side-note">/per night</span></div>
            </div>
        </div>`;
     document.querySelector('.accommodation-section-js')
    .innerHTML=html;
}