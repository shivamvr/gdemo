
const homePage = document.querySelector(".home-page")
const page = document.querySelector(".page")


const pay = () => {
  var vid = document.querySelector(".gvideo");
  var videobox = document.querySelector(".videobox");
  videobox.style.display = 'flex'
  vid.play();
  setTimeout(() => {
    videobox.style.display = 'none'
  }, 1000)
  var audio = new Audio("sound.mp3");
  const rupeIn = document.querySelector(".rupeIn").value
  const merIn = document.querySelector(".merIn").value
  const nameIn = document.querySelector(".nameIn").value
  const rupees = document.querySelector(".rupees")
  const merchant = document.querySelector(".service")
  const name = document.querySelector(".name")
  setTime()
  rupees.innerText = '₹' + rupeIn + '.00'
  merchant.innerText = 'Paid to ' + merIn
  name.innerText = nameIn
  hide()
  setTimeout(() => {
    audio.play();
  }, 300)
}

const hide = () => {
  homePage.style.display = 'none'
  page.style.display = 'block'
}

const show = () => {
  homePage.style.display = 'flex'
  page.style.display = 'none'
}


function setTime() {
  var d = new Date();
  var hours = d.getHours()
  var minutes = d.getMinutes()
  var ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0' + minutes : minutes;
  var time = hours + ':' + minutes + ' ' + ampm;

  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const dateTime = document.querySelector(".time")
  const month = monthNames[d.getMonth()]
  const year = d.getFullYear()
  const day = d.getDay()
  const newD = `${month} ${day}, ${year} ${time}`
  dateTime.innerText = newD
}