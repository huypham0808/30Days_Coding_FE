const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movie");

populateUI();

let ticketPrice = +movieSelect.value; //Convert from string number
//Save selected movie index and price
function setMovieData(movieIndex, moviePrice) {
  localStorage.setItem("selectedMovieIndex", movieIndex);
  localStorage.setItem("selectedPriceIndex", moviePrice);
}
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");
  const seatsIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat));
  localStorage.setItem("selectedSeat", JSON.stringify(seatsIndex));
  const selectedSeatCount = selectedSeats.length;
  count.innerText = selectedSeatCount;
  total.innerText = selectedSeatCount * ticketPrice;
}

function populateUI() {
  const selectedSeats = JSON.parse(localStorage.getItem("selectedSeat"));
  if (selectedSeats !== null && selectedSeats.length > 0) {
    seats.forEach((seat, index) => {
      if (selectedSeats.indexOf(index) > -1) {
        seat.classList.add("selected");
      }
    });
  }
  const selectedMovie = localStorage.getItem("selectedMovieIndex");
  if (selectedMovie !== null) {
    movieSelect.selectedIndex = selectedMovie;
  }
}
//Movie select event
movieSelect.addEventListener("change", (e) => {
  ticketPrice = +e.target.value; //Convert from string number
  setMovieData(e.target.selectedIndex, e.target.value);
  updateSelectedCount();
});

//Seat click event
container.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
  ) {
    e.target.classList.toggle("selected"); // toggle : add or remove a class name
    updateSelectedCount();
  }
});

//Initial count and total
updateSelectedCount();
