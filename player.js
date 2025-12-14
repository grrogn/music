const player__list_switcher_element = document.getElementById("player__list_switcher_element");
const player__list_switcher_left_button = document.getElementById("player__list_switcher_left_button");
const player__list_switcher_right_button = document.getElementById("player__list_switcher_right_button");
const pause_button = document.getElementById("pause");
const play_button = document.getElementById("play");
const player__list = document.getElementById("player__list");
const modal_player = document.querySelector(".modal_player");
const modal_player__close_button = document.querySelector(".modal_player__close_button");
const modal_player__content_top = document.querySelector(".modal_player__content_top");










modal_player__close_button?.addEventListener("click", () => {
modal_player.classList.add('hidden');
// button.classList.add('active');
});


document.querySelectorAll('.player__list_item_author').forEach((button, index) => {
button?.addEventListener("click", () => {
modal_player.classList.remove('hidden');
// button.classList.add('active');
});
})


modal_player?.addEventListener("mouseenter", function(){
        modal_player.classList.remove('wrapped');
            setTimeout(() => {
    modal_player__content_top.classList.remove('wrapped');
}, 150);
        
})

modal_player?.addEventListener("mouseleave", function(){
    modal_player__content_top.classList.add('wrapped');
                setTimeout(() => {
modal_player.classList.add('wrapped');
}, 150);    
})






document.querySelectorAll('.player__list_item_add_button').forEach((button, index) => {
    const addSvg = button.querySelector('.player__list_item_add_svg');
    const deleteSvg = button.querySelector('.player__list_item_delete_svg');
    let isDeleteMode = false;
button?.addEventListener("click", (e) => {
    e.stopPropagation();
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



document.querySelectorAll('.modal_player__content_bottom_right_play_button').forEach((button, index) => {
    const addSvg = button.querySelector('.modal_player__content_bottom_right_play_svg');
    const deleteSvg = button.querySelector('.modal_player__content_bottom_right_pause_svg');
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


document.querySelectorAll('.modal_player__content_bottom_right_add_button').forEach((button, index) => {
    const addSvg = button.querySelector('.modal_player__content_bottom_right_add_svg');
    const deleteSvg = button.querySelector('.modal_player__content_bottom_right_delete_svg');
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
