 AOS.init();


 const navToggler = document.querySelector(".nav-toggler");
 navToggler.addEventListener("click", navToggle);

 function navToggle() {
    navToggler.classList.toggle("active");
    const nav = document.querySelector(".nav");
    nav.classList.toggle("open");
    if(nav.classList.contains("open")){
    	nav.style.maxHeight = nav.scrollHeight + "px";
    }
    else{
    	nav.removeAttribute("style");
    }
 } 

 function app(){
   alert ('Mohon Maaf..Aplikasi sedang maintance \nHarap coba lagi nanti..');
 }
 function contact(){
   alert ('Mohon Maaf..Halaman contact sedang maintance \nHarap Coba lagi nanti..');
 }