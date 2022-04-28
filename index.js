var today = new Date();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
console.log('time:', time)

const homePage = document.querySelector(".home-page")
const page = document.querySelector(".page")

const pay = ()=>{
  const rupeIn = document.querySelector(".rupeIn").value
  const merIn = document.querySelector(".merIn").value
  const nameIn = document.querySelector(".nameIn").value
  const rupees = document.querySelector(".rupees")
  const merchant = document.querySelector(".service")
  const name = document.querySelector(".name")
  rupees.innerText = rupeIn
  merchant.innerText = merIn
  name.innerText = nameIn
  hide()
}

const hide = ()=>{
     homePage.style.display= 'none'
     page.style.display= 'block'
    }
    
    const show = ()=>{
        homePage.style.display= 'flex'
        page.style.display= 'none'
 }