(function (){
    document.querySelector('.w-btn').style.right="2000px"

})()



var service1 = document.querySelector('.service-1');
var service2 = document.querySelector('.service-2');
var service3 = document.querySelector('.service-3');
var service4 = document.querySelector('.service-4');
var service5 = document.querySelector('.service-5');
var service6 = document.querySelector('.service-6');




function wbtnscroll(){
    if (window.innerWidth<992 && scrollY>10){
        document.querySelector('.w-btn').style.right="28%"
        document.querySelector('.w-btn').style.top="15%"

    }
    if (scrollY>200){
        document.querySelector('.w-btn').style.right="47.5%"
    }

}
function scrolservices(){

    if (scrollY>800){
        service1.style.left=0
        service2.style.top=0
        service3.style.right=0
        service4.style.left=0
        service5.style.bottom=0
        service6.style.right=0

    }
}
function scrol(){
    wbtnscroll();
    scrolservices();


}







function change(){
    let welcom = document.querySelector('.welcome');
    let main = document.querySelector('main');
    let header = document.querySelector('header');
    let footer = document.querySelector('footer')
    welcom.style.display="none"
    main.style.display="block"
    header.style.display="block"
    footer.style.display="block"
    window.scrollTo(0,0);
}
// function menu(){
//     let menu = document.querySelector('.main-menu');
//     menu.style.left="1000px"
//     menu.style.left="0"
// }

let menu = document.querySelector('.main-menu');
let menuIcon = document.querySelector('.fa-bars');
menuIcon.addEventListener('click',function (){
   if(menuIcon.classList.contains('fa-bars')){
       menu.style.left=0
       menuIcon.classList="fa fa-times "
   } else {
       menu.style.left='-1000px'
       menuIcon.classList="fa fa-bars"
   }
})



// responsive : {
//     // breakpoint from 0 up
//     0 : {
//         option1 : value,
//             option2 : value,
//     ...
//     },
//     // breakpoint from 480 up
//     480 : {
//         option1 : value,
//             option2 : value,
//     ...
//     },
//     // breakpoint from 768 up
//     768 : {
//         option1 : value,
//             option2 : value,
//     ...
//     }
// }

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    dots:true,
    responsive:{
        0:{
            items:1,
            nav:false,
        },
        576:{
            items:2,
            nav:false,
        },
        992:{
            items:3,
            nav:false,
            loop:true
        }
    }
})