
const reg_window_frame_input_checkbox = document.getElementById("reg_window_frame_input_checkbox_container");
const reg_window_frame_input_checkbox_gradient = document.getElementById("reg_window_frame_input_checkbox_gradient");
const window_frame_apply_button = document.getElementById("window_frame_apply_button");
const window_frame_apply_button_gradient = document.getElementById("window_frame_apply_button_gradient");
const window_frame_apply_button2 = document.getElementById("window_frame_apply_button2");
const window_frame_apply_button_gradient2 = document.getElementById("window_frame_apply_button_gradient2");


if (reg_window_frame_input_checkbox && reg_window_frame_input_checkbox_gradient) {
    reg_window_frame_input_checkbox.addEventListener("mouseenter", function(){
    reg_window_frame_input_checkbox_gradient.classList.add('active');
})
reg_window_frame_input_checkbox.addEventListener("mouseleave", function(){
    reg_window_frame_input_checkbox_gradient.classList.remove('active');
})
}









if (window_frame_apply_button && window_frame_apply_button_gradient) {
    window_frame_apply_button.addEventListener("click", () => {
    window_frame_apply_button_gradient.classList.add('active');
    window_frame_apply_button.querySelector('span').style.color = "#6B6B6B";
    window_frame_apply_button.style.opacity = "1";
    window_frame_apply_button.style.transform = "scale(0.9)";
    
    setTimeout(() => {
    window.location.href = 'index.html';
}, 1000);
});
}
console.log(window_frame_apply_button && window_frame_apply_button_gradient)
console.log(window_frame_apply_button2 && window_frame_apply_button_gradient2)
if (window_frame_apply_button2 && window_frame_apply_button_gradient2) {
 window_frame_apply_button2.addEventListener("click", () => {
    console.log("Enter");
    window_frame_apply_button_gradient2.classList.add('active');
    window_frame_apply_button2.querySelector('span').style.color = "#6B6B6B";
    window_frame_apply_button2.style.opacity = "1";
    window_frame_apply_button2.style.transform = "scale(0.9)";
    
    setTimeout(() => {
    window.location.href = 'index.html';
}, 1000);
});
}
