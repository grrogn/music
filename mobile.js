const burger_button = document.getElementById("header__burger_menu_mobile");
const curtain_header = document.getElementById("curtain_header");
const overlay = document.getElementById("overlay");
const auth_button = document.getElementById("auth_button_mobile");
const reg_button = document.getElementById("reg_button_mobile");
const navbar_home_button = document.getElementById("navbar_home_button");
const navbar_categories_button = document.getElementById("navbar_categories_button");
const navbar_player_button = document.getElementById("navbar_player_button");
const navbar_profile_button = document.getElementById("navbar_my_music_button");
const categories__content = document.getElementById("categories__content");
const home__content = document.getElementById("home__content");
const player__content = document.getElementById("player__content");
const profile__content = document.getElementById("profile__content");

categories__content.classList.add('hidden');
player__content.classList.add('hidden');
profile__content.classList.add('hidden');

burger_button.addEventListener("click", () => {
        curtain_header.style.top = "0";
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        document.documentElement.style.overflow = 'hidden';
overlay.addEventListener("click", () => {
        curtain_header.style.top = "-354px";
        overlay.classList.remove('active');
        document.body.style.overflow = '';
        document.documentElement.style.overflow = '';      
})
auth_button.addEventListener("click", () => {
        curtain_header.style.top = "-354px";
        curtain_footer_auth.style.bottom = "0";

overlay.addEventListener("click", () => {
        curtain_footer_auth.style.bottom = "-461px";
        overlay.classList.remove('active');
        document.body.style.overflow = '';
        document.documentElement.style.overflow = '';      
})
})
reg_button.addEventListener("click", () => {
        curtain_header.style.top = "-354px";
        curtain_footer_reg.style.bottom = "0";

overlay.addEventListener("click", () => {
        curtain_footer_reg.style.bottom = "-461px";
        overlay.classList.remove('active');
        document.body.style.overflow = '';
        document.documentElement.style.overflow = '';      
})
})
})


navbar_categories_button.addEventListener("click", () => {
    categories__content.classList.remove('hidden');
    home__content.classList.add('hidden');
    player__content.classList.add('hidden');
    profile__content.classList.add('hidden');
    navbar_home_button.classList.remove('active');
    navbar_player_button.classList.remove('active');
    navbar_profile_button.classList.remove('active');
    navbar_categories_button.classList.add('active');
    currentWindow = 'categories__content';
});

navbar_home_button.addEventListener("click", () => {
    
    player__content.classList.add('hidden');
    categories__content.classList.add('hidden');
    profile__content.classList.add('hidden');
    home__content.classList.remove('hidden');
    navbar_player_button.classList.remove('active');
    navbar_categories_button.classList.remove('active');
    navbar_profile_button.classList.remove('active');
    navbar_home_button.classList.add('active');
    currentWindow = 'home__content';
});

navbar_player_button.addEventListener("click", () => {
    categories__content.classList.add('hidden');
    home__content.classList.add('hidden');
    profile__content.classList.add('hidden');
    player__content.classList.remove('hidden');
    navbar_player_button.classList.add('active');
    navbar_profile_button.classList.remove('active');
    navbar_home_button.classList.remove('active');
    navbar_categories_button.classList.remove('active');
    currentWindow = 'player__content';
});

navbar_profile_button.addEventListener("click", () => {
    categories__content.classList.add('hidden');
    home__content.classList.add('hidden');
    player__content.classList.add('hidden');
    profile__content.classList.remove('hidden');
    navbar_profile_button.classList.add('active');
    navbar_home_button.classList.remove('active');
    navbar_categories_button.classList.remove('active');
    navbar_player_button.classList.remove('active');
    currentWindow = 'profile__content';
});


