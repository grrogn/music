const player__list_switcher_element = document.getElementById("player__list_switcher_element");
const player__list_switcher_left_button = document.getElementById("player__list_switcher_left_button");
const player__list_switcher_right_button = document.getElementById("player__list_switcher_right_button");
const pause_button = document.getElementById("pause");
const play_button = document.getElementById("play");
const player__list = document.getElementById("player__list");

// const player__list_item_delete_svg = document.getElementById("player__list_item_delete_svg");
// const player__list_item_add_svg = document.getElementById("player__list_item_add_svg");
// const list_item_button = document.getElementById("list_item_button");
// player__list_item_delete_svg.classList.add('hidden');
// let isDeleteMode = false;
// list_item_button?.addEventListener("click", () => {
//     if (!isDeleteMode) {
//         player__list_item_add_svg.classList.add('hidden');
//         player__list_item_delete_svg.classList.remove('hidden');
//         isDeleteMode = true;
//     } else {
//         player__list_item_add_svg.classList.remove('hidden');
//         player__list_item_delete_svg.classList.add('hidden');
//         isDeleteMode = false;
//     }
// });
console.log(document.querySelectorAll('.player__list_item_add_button'));
document.querySelectorAll('.player__list_item_add_button').forEach((button, index) => {
    const addSvg = button.querySelector('.player__list_item_add_svg');
    const deleteSvg = button.querySelector('.player__list_item_delete_svg');
    console.log(addSvg);
    console.log(deleteSvg);
    let isDeleteMode = false;
button?.addEventListener("click", () => {
    if (!isDeleteMode) {
        addSvg.classList.add('hidden');
        deleteSvg.classList.remove('hidden');
        isDeleteMode = true;
    } else {
        addSvg.classList.remove('hidden');
        deleteSvg.classList.add('hidden');
        isDeleteMode = false;
    }
});

})








play_button?.addEventListener("click", () => {
        play_button.classList.add('hidden');
        pause.classList.add('active');
        
});

pause_button?.addEventListener("click", () => {
        play_button.classList.remove('hidden');
        pause.classList.remove('active');
        
});



player__list_switcher_left_button?.addEventListener("click", () => {
    player__list_switcher_element.classList.remove('right');
    player__list_switcher_element.style.width = "49%";
});

player__list_switcher_right_button?.addEventListener("click", () => {
    player__list_switcher_element.classList.add('right'); 
    player__list_switcher_element.style.width = "47%";
});







// const button = document.querySelector(".player__list_item_add_button");
// const logo = document.getElementById("header_logo");
// const modalTest = document.getElementById("modal_window");
// const closeButton = document.getElementById("modal_svg");



// logo.addEventListener("click", () => {
//         modalTest.style.display = "flex";
//         overlay.style.display = "block"


// })

// closeButton.addEventListener("click", () => {
//         modalTest.style.display = "none";
//         overlay.style.display = "none"
// })

// // overlay.addEventListener("click", () => {
// //         modalTest.style.display = "none";
// //         overlay.style.display = "none"
// // })



// button.addEventListener("mouseenter", function(){
//         button.style.opacity = 0.8;
// })

// button.addEventListener("mouseleave", function(){

//         button.style.opacity = 1;



// })
