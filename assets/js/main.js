//minhas funçoes//
homeBlob = document.getElementById('home-blob');

window.onload = function() {
    homeBlob.classList.remove('home_blob_init');    
    homeBlob.classList.add('home_blob');    
};

/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close');

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}


/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav_link');
function linkAction(){
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));


/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName('skills_content'),
    skillsHeader = document.querySelectorAll(".skills_header");

function toggleSkills(){
    let itemClass = this.parentNode.className;    

    for (let i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = "skills_content skills_close";
        const skillPercentage = skillsContent[i].querySelectorAll('.skills_percentage');    
        skillPercentage.forEach(n => n.classList.add('skills0'));    
    }
    if (itemClass === "skills_content skills_close"){
        this.parentNode.className = "skills_content skills_open";
        const skillPercentage = this.parentNode.querySelectorAll('.skills_percentage');  
        skillPercentage.forEach(n => n.classList.remove('skills0'));  
    }
}
skillsHeader.forEach(element => {
    element.addEventListener("click", toggleSkills);    
});
/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll("[data-target]"),
tabConteudos = document.querySelectorAll("[data-content]");

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        const target = document.querySelector(tab.dataset.target);

        tabConteudos.forEach(tabConteudo => {
            tabConteudo.classList.remove("qualification_active");
        });
        target.classList.add("qualification_active");
        
        tabs.forEach(t =>{
            t.classList.remove("qualification_active");
        });

        tab.classList.remove("qualification_active");
    });
    
});


/*==================== SERVICES MODAL ====================*/


/*==================== PORTFOLIO SWIPER  ====================*/


/*==================== TESTIMONIAL ====================*/


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/


/*==================== CHANGE BACKGROUND HEADER ====================*/ 


/*==================== SHOW SCROLL UP ====================*/ 


/*==================== DARK LIGHT THEME ====================*/ 