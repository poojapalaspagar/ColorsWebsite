const menu = document.querySelector('#mobile_menu')
const menuLinks = document.querySelector('.Navbar_menu')
const navLogo = document. querySelector('#navbar_logo')

//Display Mobile Menu
const mobileMenu = () =>{
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
};
 

menu.addEventListener('click', mobileMenu);

//show active menu scrolling 

const highLightMenu =() => {
    const elem = document.querySelector('.hightlight')
    const homeMenu = document.querySelector('#home_page')
    const aboutMenu = document.querySelector('#About_page')
    const servicesMenu = document.querySelector('#Services_page')
    let scrollPos = window.scrollY



     // adds 'hightLight' class to my menu item

     if(window.innerWidth > 960 && scrollPos < 600){
         homeMenu.classList.add('highLight')
         aboutMenu.classList.remove('highLight')
         return
         
     }
     else if(window.innerWidth > 960 && scrollPos < 1400){
         aboutMenu.classList.add('highLight')
         homeMenu.classList.remove('highLight')
         servicesMenu.classList.remove('highLght')
         return

     }
     else if(window.innerWidth > 960 && scrollPos < 2345){
        aboutMenu.classList.add('highLight')
        servicesMenu.classList.remove('highLght')
        return
        
    }
    if((elem && window.innerWidth < 960 && scrollPos < 600) || elem){
        elem.classList.remove('highLght')
    } 
}
