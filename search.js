const search_switcher_element = document.getElementById("search_switcher_element");
const search_switcher_left_button = document.getElementById("search_switcher_left_button");
const search_switcher_middle_button = document.getElementById("search_switcher_middle_button");
const search_switcher_right_button = document.getElementById("search_switcher_right_button");
const search_tracks_content = document.getElementById("search_tracks_content");
const search_albums_content = document.getElementById("search_albums_content");
const search_authors_content = document.getElementById("search_authors_content");

search_switcher_left_button?.addEventListener("click", () => {
    search_switcher_element.classList.remove('right');
    search_switcher_element.classList.remove('middle');
    search_tracks_content.classList.remove('hidden');
    search_albums_content?.classList.add('hidden');
    search_authors_content.classList.add('hidden');

    // search_switcher_element.style.width = "40%";
});

search_switcher_middle_button?.addEventListener("click", () => {
    search_switcher_element.classList.remove('right'); 
    search_switcher_element.classList.add('middle');
    search_tracks_content.classList.add('hidden');
    search_albums_content?.classList.remove('hidden');
    search_authors_content.classList.add('hidden');
    // search_switcher_element.style.width = "37%";
});

search_switcher_right_button?.addEventListener("click", () => {
    search_switcher_element.classList.add('right'); 
    search_switcher_element.classList.remove('middle'); 
    search_tracks_content.classList.add('hidden');
    search_albums_content?.classList.add('hidden');
    search_authors_content.classList.remove('hidden');
    // search_switcher_element.style.width = "35%";
});