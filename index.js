
const homePg = document.querySelector(".home-page")
const page = document.querySelector(".page")
let ldata = JSON.parse(localStorage.getItem('data'))
console.log('ldata:', ldata)
let merIn = document.querySelector(".merIn")
let nameIn = document.querySelector(".nameIn")

if (ldata) {
  merIn.value = ldata.merch
  nameIn.value = ldata.name
}

const pay = () => {
  var vid = document.querySelector(".gvideo");
  vid.defaultPlaybackRate = 0.1
  vid.playbackRate = .6
  var videobox = document.querySelector(".videobox");
  videobox.style.display = 'flex'
  vid.play();
  setTimeout(() => {
    videobox.style.display = 'none'
  }, 2000)
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
  }, 2000)
}

const hide = () => {
  homePg.style.display = 'none'
  setTimeout(() => {
    page.style.display = 'block'
    page.style.opacity = '1'
  }, 2000)
}

const show = () => {
  homePg.style.display = 'flex'
  page.style.display = 'none'
}

function setTime() {
  var d = new Date();
  // ------------Date-------------
  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const day = d.getDate()
  const month = monthNames[d.getMonth()]
  const year = d.getFullYear()
  const dateTime = document.querySelector(".time")
  // ------------Time-------------
  var hours = d.getHours()
  var minutes = d.getMinutes()
  var ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0' + minutes : minutes;
  var time = hours + ':' + minutes + ' ' + ampm;

  // ------------Combine date and time-------------
  const newD = `${month} ${day}, ${year} ${time}`
  dateTime.innerText = newD
}

function gotoQr(){
  window.location.href = '/qr.html'
}