import {hotels} from '../data/hotel.js';
import {formatStars} from './utils.js';

renderAccomodation();
function renderAccomodation(){
    console.log(hotels);
    let html='';
    hotels.forEach(hotel => {

        html+= `<div class="accommodation-container">
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
                <a href="reservation.html">
                <div class="availability-note
                 availability-note-js-${hotel.id}"
                 data-hotel-id="${hotel.id}">Check Availability</div>
                </a>
            </div>
        </div>`      
    });

    document.querySelector('.accommodation-section-js')
    .innerHTML=html;

}

const checkout= document.querySelectorAll('.availability-note');
checkout.forEach((link)=>{
    link.addEventListener('click',()=>{

    });
});
