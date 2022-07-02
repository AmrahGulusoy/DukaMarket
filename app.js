
let lang=document.querySelector(".open_lang")
let subItems=document.querySelector(".sub_list_items")



const openlang=()=>{

    let result=subItems.classList.toggle("active")

    if (result){
        subItems.style.display="block"
        // subItems.style.transition= "all 0.5s ease-in-out"
    }

    else{
        
        subItems.style.display="none"
    }


}

lang.addEventListener("click",openlang)


let shoplist=document.querySelector(".bottom_left_items")
let icon=document.querySelector(".close i")
console.log(icon)
let shopclick=document.querySelector(".header_bottom_left h3")

function toggledata(){
    let result= shoplist.classList.toggle("active")

    if(result){
        shoplist.style.display="block"
        shopclick.style.backgroundColor= "#72B8D9"
        icon.className="fas fa-times"

    

    }

    else{
        shoplist.style.display="none"
        shopclick.style.backgroundColor= "transparent"
        icon.className="fas fa-bars"
    }

}




shopclick.addEventListener('click',toggledata)




var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        enabled: false,
    }
})
let swiper2 = new Swiper(".proSwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    centeredSlides: true,
    pagination: {
        enabled: false,
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        enabled: false,
    }
});


let tradeDate = new Date("September 25 , 21 12:25:23")

let newTradeDate = tradeDate.getTime()
let spanDay = document.getElementById("days")
let spanHour = document.getElementById("hours")
let spanMinute = document.getElementById("minutes")
let spanSecond = document.getElementById("seconds")

let interval = setInterval(function () {

    let currentDate = new Date

    let curDate = currentDate.getTime()

    let distance = tradeDate - currentDate;

    let days = Math.floor(distance / (1000 * 24 * 60 * 60))
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    let seconds = Math.floor((distance % (1000 * 60)) / 1000)

    spanDay.innerHTML = `${days} Days`
    spanHour.innerHTML = `${hours} Hours`
    spanMinute.innerHTML = `${minutes} Min`
    spanSecond.innerHTML = `${seconds} Sec`
}, 1000)







