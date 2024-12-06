const rooms = [
  {
    img: "/Images/Maharaja Room.jpg",
    room: "Maharaja Room",
    price: "5500",
  },
  {
    img: "/Images/Super delux room.jpg",
    room: "Super Deluxe Room",
    price: "3500",
  },
  {
    img: "/Images/Deluxe Room.jpg",
    room: "Deluxe Room",
    price: "2500",
  },
  {
    img: "/Images/Honeymoon sweet.jpg",
    room: "Honeymoon Sweet",
    price: "4200",
  },
  {
    img: "/Images/Mountain view.jpg",
    room: "Mountain View",
    price: "4000",
  },
  {
    img: "/Images/Lake view.jpg",
    room: "Lake View",
    price: "4000",
  },
];

const roomsCont = document.querySelector(".rooms");
rooms.map((roomSpecs, i) => {
  roomsCont.innerHTML += `<div class="card" id="${i}">
                    <img class="image" src="${roomSpecs.img}" alt="${roomSpecs.room}">
                    <h3>${roomSpecs.room}</h3>
                    <p>INR. ${roomSpecs.price}/- Per Day</p>
                    <a class="buttons" href="booking.html">Book Now</a>
                </div>`;
});
