import { nabeulPlaces } from "../data/places-to-visit.js";

renderPlaces();

function renderPlaces() {
  const container = document.querySelector(".places-container-js");
  let html = "";

  nabeulPlaces.forEach((place) => {
    html += `
      <div class="places-container">
        <div class="image-container">
          <img src="${place.image}" class="place-image" alt="${place.name}">
        </div>

        <div class="info-container">
          <div class="place-title">
            <h3>${place.name}</h3>
          </div>

          <div class="place-description">
            <p>${place.description}</p>
          </div>

          <a href="${place.wiki}" target="_blank" class="read-more-btn">Read More</a>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}
