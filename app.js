
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





// var swiper = new Swiper(".mySwiper", {
//     spaceBetween: 30,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//   });


//   let swiper2 = new Swiper(".proSwiper", {
//     slidesPerView: 4,
//     spaceBetween: 30,
//     centeredSlides: true,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//   });




