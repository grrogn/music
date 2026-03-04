<template>
<nav id="curtain_header" class="curtain_header--mobile">
    <div class="curtain_header__reg-or-auth--mobile">
        <button id="auth_button_mobile" class="curtain_header__auth_link--mobile"><p>Вход</p></button>
        <button id="reg_button_mobile" class="curtain_header__reg_link--mobile"><p>Регистрация</p></button>
    </div>
<button class="curtain_header__item--mobile">
    <p>О нас</p>
    <svg width="33" height="33" viewBox="0 0 33 33" fill="none">
        <use href="../assets/CSS/sprite.svg#go_icon"></use>
</svg>
</button>
<button class="curtain_header__item--mobile">
<p>Контакты</p>
    <svg width="33" height="33" viewBox="0 0 33 33" fill="none">
        <use href="../assets/CSS/sprite.svg#go_icon"></use>
</svg>
</button>
<button class="curtain_header__item--mobile">
    <p>Поддержка</p>
        <svg width="33" height="33" viewBox="0 0 33 33" fill="none">
        <use href="../assets/CSS/sprite.svg#go_icon"></use>
</svg>
</button>
<button class="curtain_header__item--mobile">
    <p>Пользовательское <br>соглашение</p>
        <svg width="33" height="33" viewBox="0 0 33 33" fill="none">
        <use href="../assets/CSS/sprite.svg#go_icon"></use>
</svg>
</button>

<div class="curtain__drug_line"></div>
</nav>


<header class="container header--mobile">
    <nav class=" header__navbar--mobile">
        <input class="header__search--mobile" type="search" placeholder="поиск">
        <button id="header__burger_menu_mobile" class="header__burger_menu--mobile">
            <svg width="28" height="18" viewBox="0 0 28 18">
                <use href="../assets/CSS/sprite.svg#header__burger_menu"></use>
            </svg>
        </button>
    </nav>
</header>


<section id="search__content" class="container search__content--mobile hidden">
<h1>Результаты поиска</h1>

<div class="player__list_switcher search__switcher">
    <div class="player__list_switcher_text search__switcher_text">
        <p id="search_switcher_left_button">Треки</p>
        <p id="search_switcher_middle_button">Исполнители</p>
        <p id="search_switcher_right_button">Альбомы</p>
    </div>
    <div id="search_switcher_element" class="player__list_switcher_element search__switcher_element"></div>
</div>


<section id="search_tracks_content" class="author_albums search_tracks search_tracks--mobile">
    <div id="search_tracks__list" class="player__list search__list--mobile">
        <div id="player__list_item_author" class="player__list_item player__list_item_author search__list_item--mobile">
            <div class="player__list_item_left player__list_item_left_author search__list_item_left--mobile">
                <div class="player__list_item_image">
                    <img src="../assets/static/trackPic.png" alt="playingPic"></img>
                </div>
                <div>
                    <p>Название</p>
                    <p>Исполнитель</p>
                </div>
            </div>
            <div class="player__list_item_right player__list_item_right_author">
                <p>1:30</p>
                                <button class="player__list_item_add_button profile__list_item_add_button--mobile noHover">
                                    <svg viewBox="0 0 42 42" width="42" height="42" fill="none">
                                        <use class="player__list_item_delete_svg hidden" href="../assets/CSS/sprite.svg#player__list_item_delete"></use>
                                        <use class="player__list_item_add_svg" href="../assets/CSS/sprite.svg#player__list_item_add"></use>
                                    </svg>
                                </button>
            </div>
        </div>
        <div id="player__list_item_author" class="player__list_item player__list_item_author search__list_item--mobile">
            <div class="player__list_item_left player__list_item_left_author search__list_item_left--mobile">
                <div class="player__list_item_image">
                    <img src="../assets/static/trackPic.png" alt="playingPic"></img>
                </div>
                <div>
                    <p>Название</p>
                    <p>Исполнитель</p>
                </div>
            </div>
            <div class="player__list_item_right player__list_item_right_author">
                <p>1:30</p>
                                <button class="player__list_item_add_button profile__list_item_add_button--mobile noHover">
                                    <svg viewBox="0 0 42 42" width="42" height="42" fill="none">
                                        <use class="player__list_item_delete_svg hidden" href="../assets/CSS/sprite.svg#player__list_item_delete"></use>
                                        <use class="player__list_item_add_svg" href="../assets/CSS/sprite.svg#player__list_item_add"></use>
                                    </svg>
                                </button>
            </div>
        </div>
        <div id="player__list_item_author" class="player__list_item player__list_item_author search__list_item--mobile">
            <div class="player__list_item_left player__list_item_left_author search__list_item_left--mobile">
                <div class="player__list_item_image">
                    <img src="../assets/static/trackPic.png" alt="playingPic"></img>
                </div>
                <div>
                    <p>Название</p>
                    <p>Исполнитель</p>
                </div>
            </div>
            <div class="player__list_item_right player__list_item_right_author">
                <p>1:30</p>
                                <button class="player__list_item_add_button profile__list_item_add_button--mobile noHover">
                                    <svg viewBox="0 0 42 42" width="42" height="42" fill="none">
                                        <use class="player__list_item_delete_svg hidden" href="../assets/CSS/sprite.svg#player__list_item_delete"></use>
                                        <use class="player__list_item_add_svg" href="../assets/CSS/sprite.svg#player__list_item_add"></use>
                                    </svg>
                                </button>
            </div>
        </div>
                                <div id="player__list_item_author" class="player__list_item player__list_item_author search__list_item--mobile">
            <div class="player__list_item_left player__list_item_left_author search__list_item_left--mobile">
                <div class="player__list_item_image">
                    <img src="../assets/static/trackPic.png" alt="playingPic"></img>
                </div>
                <div>
                    <p>Название</p>
                    <p>Исполнитель</p>
                </div>
            </div>
            <div class="player__list_item_right player__list_item_right_author">
                <p>1:30</p>
                                <button class="player__list_item_add_button profile__list_item_add_button--mobile noHover">
                                    <svg viewBox="0 0 42 42" width="42" height="42" fill="none">
                                        <use class="player__list_item_delete_svg hidden" href="../assets/CSS/sprite.svg#player__list_item_delete"></use>
                                        <use class="player__list_item_add_svg" href="../assets/CSS/sprite.svg#player__list_item_add"></use>
                                    </svg>
                                </button>
            </div>
        </div>
                                <div id="player__list_item_author" class="player__list_item player__list_item_author search__list_item--mobile">
            <div class="player__list_item_left player__list_item_left_author search__list_item_left--mobile">
                <div class="player__list_item_image">
                    <img src="../assets/static/trackPic.png" alt="playingPic"></img>
                </div>
                <div>
                    <p>Название</p>
                    <p>Исполнитель</p>
                </div>
            </div>
            <div class="player__list_item_right player__list_item_right_author">
                <p>1:30</p>
                                <button class="player__list_item_add_button profile__list_item_add_button--mobile noHover">
                                    <svg viewBox="0 0 42 42" width="42" height="42" fill="none">
                                        <use class="player__list_item_delete_svg hidden" href="../assets/CSS/sprite.svg#player__list_item_delete"></use>
                                        <use class="player__list_item_add_svg" href="../assets/CSS/sprite.svg#player__list_item_add"></use>
                                    </svg>
                                </button>
            </div>
        </div>
        <div id="player__list_item_author" class="player__list_item player__list_item_author search__list_item--mobile">
            <div class="player__list_item_left player__list_item_left_author search__list_item_left--mobile">
                <div class="player__list_item_image">
                    <img src="../assets/static/trackPic.png" alt="playingPic"></img>
                </div>
                <div>
                    <p>Название</p>
                    <p>Исполнитель</p>
                </div>
            </div>
            <div class="player__list_item_right player__list_item_right_author">
                <p>1:30</p>
                                <button class="player__list_item_add_button profile__list_item_add_button--mobile noHover">
                                    <svg viewBox="0 0 42 42" width="42" height="42" fill="none">
                                        <use class="player__list_item_delete_svg hidden" href="../assets/CSS/sprite.svg#player__list_item_delete"></use>
                                        <use class="player__list_item_add_svg" href="../assets/CSS/sprite.svg#player__list_item_add"></use>
                                    </svg>
                                </button>
            </div>
        </div>
        <div id="player__list_item_author" class="player__list_item player__list_item_author search__list_item--mobile">
            <div class="player__list_item_left player__list_item_left_author search__list_item_left--mobile">
                <div class="player__list_item_image">
                    <img src="../assets/static/trackPic.png" alt="playingPic"></img>
                </div>
                <div>
                    <p>Название</p>
                    <p>Исполнитель</p>
                </div>
            </div>
            <div class="player__list_item_right player__list_item_right_author">
                <p>1:30</p>
                                <button class="player__list_item_add_button profile__list_item_add_button--mobile noHover">
                                    <svg viewBox="0 0 42 42" width="42" height="42" fill="none">
                                        <use class="player__list_item_delete_svg hidden" href="../assets/CSS/sprite.svg#player__list_item_delete"></use>
                                        <use class="player__list_item_add_svg" href="../assets/CSS/sprite.svg#player__list_item_add"></use>
                                    </svg>
                                </button>
            </div>
        </div>
        <div id="player__list_item_author" class="player__list_item player__list_item_author search__list_item--mobile">
            <div class="player__list_item_left player__list_item_left_author search__list_item_left--mobile">
                <div class="player__list_item_image">
                    <img src="../assets/static/trackPic.png" alt="playingPic"></img>
                </div>
                <div>
                    <p>Название</p>
                    <p>Исполнитель</p>
                </div>
            </div>
            <div class="player__list_item_right player__list_item_right_author">
                <p>1:30</p>
                                <button class="player__list_item_add_button profile__list_item_add_button--mobile noHover">
                                    <svg viewBox="0 0 42 42" width="42" height="42" fill="none">
                                        <use class="player__list_item_delete_svg hidden" href="../assets/CSS/sprite.svg#player__list_item_delete"></use>
                                        <use class="player__list_item_add_svg" href="../assets/CSS/sprite.svg#player__list_item_add"></use>
                                    </svg>
                                </button>
            </div>
        </div>
                              <div id="player__list_item_author" class="player__list_item player__list_item_author search__list_item--mobile">
            <div class="player__list_item_left player__list_item_left_author search__list_item_left--mobile">
                <div class="player__list_item_image">
                    <img src="../assets/static/trackPic.png" alt="playingPic"></img>
                </div>
                <div>
                    <p>Название</p>
                    <p>Исполнитель</p>
                </div>
            </div>
            <div class="player__list_item_right player__list_item_right_author">
                <p>1:30</p>
                                <button class="player__list_item_add_button profile__list_item_add_button--mobile noHover">
                                    <svg viewBox="0 0 42 42" width="42" height="42" fill="none">
                                        <use class="player__list_item_delete_svg hidden" href="../assets/CSS/sprite.svg#player__list_item_delete"></use>
                                        <use class="player__list_item_add_svg" href="../assets/CSS/sprite.svg#player__list_item_add"></use>
                                    </svg>
                                </button>
            </div>
        </div>
</div>
</section>






<section id="search_albums_content" class="author_albums search_albums search_albums--mobile hidden">
    <div class="author_albums__list_grid search_albums__grid search_albums__grid--mobile">
<div class="author_albums__list_grid_1">

    <div class="author_albums__list_grid_item_image search_albums__album_image">
        <img src="../assets/static/albumPicPage.png" alt="albumPic"></img>
    </div>
    <div class="author_albums__list_grid_item_info search_albums__grid_info">
        <p>Альбом</p>
        <p>Исполнитель</p>
    </div>
    
</div>

<div class="author_albums__list_grid_2">

    <div class="author_albums__list_grid_item_image search_albums__album_image">
        <img src="../assets/static/albumPicPage.png" alt="albumPic"></img>
    </div>
    <div class="author_albums__list_grid_item_info search_albums__grid_info">
        <p>Альбом</p>
        <p>Исполнитель</p>
    </div>
    
</div>
<div class="author_albums__list_grid_3">

    <div class="author_albums__list_grid_item_image search_albums__album_image">
        <img src="../assets/static/albumPicPage.png" alt="albumPic"></img>
    </div>
    <div class="author_albums__list_grid_item_info search_albums__grid_info">
        <p>Альбом</p>
        <p>Исполнитель</p>
    </div>
    
</div>
<div class="author_albums__list_grid_4">

    <div class="author_albums__list_grid_item_image search_albums__album_image">
        <img src="../assets/static/albumPicPage.png" alt="albumPic"></img>
    </div>
    <div class="author_albums__list_grid_item_info search_albums__grid_info">
        <p>Альбом</p>
        <p>Исполнитель</p>
    </div>
    
</div>
<div class="author_albums__list_grid_5">

    <div class="author_albums__list_grid_item_image search_albums__album_image">
        <img src="../assets/static/albumPicPage.png" alt="albumPic"></img>
    </div>
    <div class="author_albums__list_grid_item_info search_albums__grid_info">
        <p>Альбом</p>
        <p>Исполнитель</p>
    </div>
    
</div>
<div class="author_albums__list_grid_6">

    <div class="author_albums__list_grid_item_image search_albums__album_image">
        <img src="../assets/static/albumPicPage.png" alt="albumPic"></img>
    </div>
    <div class="author_albums__list_grid_item_info search_albums__grid_info">
        <p>Альбом</p>
        <p>Исполнитель</p>
    </div>
    
</div>
<div class="author_albums__list_grid_7">

    <div class="author_albums__list_grid_item_image search_albums__album_image">
        <img src="../assets/static/albumPicPage.png" alt="albumPic"></img>
    </div>
    <div class="author_albums__list_grid_item_info search_albums__grid_info">
        <p>Альбом</p>
        <p>Исполнитель</p>
    </div>
    
</div>
<div class="author_albums__list_grid_8">

    <div class="author_albums__list_grid_item_image search_albums__album_image">
        <img src="../assets/static/albumPicPage.png" alt="albumPic"></img>
    </div>
    <div class="author_albums__list_grid_item_info search_albums__grid_info">
        <p>Альбом</p>
        <p>Исполнитель</p>
    </div>
    
</div>
<div class="author_albums__list_grid_9">

    <div class="author_albums__list_grid_item_image search_albums__album_image">
        <img src="../assets/static/albumPicPage.png" alt="albumPic"></img>
    </div>
    <div class="author_albums__list_grid_item_info search_albums__grid_info">
        <p>Альбом</p>
        <p>Исполнитель</p>
    </div>
    
</div>
    </div>

</section>

<section id="search_authors_content" class="author_albums search_albums search_authors search_authors--mobile hidden">
    <div class="author_albums__list_grid search_albums__grid search_albums__grid--mobile">
<div class="author_albums__list_grid_1">

    <div class="author_albums__list_grid_item_image search_albums__album_image">
        <img src="../assets/static/basta.png" alt="albumPic"></img>
    </div>
    <div class="author_albums__list_grid_item_info search_albums__grid_info search_authors__grid_info search_authors__grid_info--mobile">
        <p>Исполнитель</p>
    </div>
    
</div>

<div class="author_albums__list_grid_2">

    <div class="author_albums__list_grid_item_image search_albums__album_image">
        <img src="../assets/static/bilan.png" alt="albumPic"></img>
    </div>
    <div class="author_albums__list_grid_item_info search_albums__grid_info search_authors__grid_info search_authors__grid_info--mobile">
        <p>Исполнитель</p>
    </div>
    
</div>
<div class="author_albums__list_grid_3">

    <div class="author_albums__list_grid_item_image search_albums__album_image">
        <img src="../assets/static/bilan.png" alt="albumPic"></img>
    </div>
    <div class="author_albums__list_grid_item_info search_albums__grid_info search_authors__grid_info search_authors__grid_info--mobile">
        <p>Исполнитель</p>
    </div>
    
</div>
<div class="author_albums__list_grid_4">

    <div class="author_albums__list_grid_item_image search_albums__album_image">
        <img src="../assets/static/bilan.png" alt="albumPic"></img>
    </div>
    <div class="author_albums__list_grid_item_info search_albums__grid_info search_authors__grid_info search_authors__grid_info--mobile">
        <p>Исполнитель</p>
    </div>
    
</div>
<div class="author_albums__list_grid_5">

    <div class="author_albums__list_grid_item_image search_albums__album_image">
        <img src="../assets/static/bilan.png" alt="albumPic"></img>
    </div>
    <div class="author_albums__list_grid_item_info search_albums__grid_info search_authors__grid_info search_authors__grid_info--mobile">
        <p>Исполнитель</p>
    </div>
    
</div>
<div class="author_albums__list_grid_6">

    <div class="author_albums__list_grid_item_image search_albums__album_image">
        <img src="../assets/static/bilan.png" alt="albumPic"></img>
    </div>
    <div class="author_albums__list_grid_item_info search_albums__grid_info search_authors__grid_info search_authors__grid_info--mobile">
        <p>Исполнитель</p>
    </div>
    
</div>
<div class="author_albums__list_grid_7">

    <div class="author_albums__list_grid_item_image search_albums__album_image">
        <img src="../assets/static/bilan.png" alt="albumPic"></img>
    </div>
    <div class="author_albums__list_grid_item_info search_albums__grid_info search_authors__grid_info search_authors__grid_info--mobile">
        <p>Исполнитель</p>
    </div>
    
</div>
<div class="author_albums__list_grid_8">

    <div class="author_albums__list_grid_item_image search_albums__album_image">
        <img src="../assets/static/bilan.png" alt="albumPic"></img>
    </div>
    <div class="author_albums__list_grid_item_info search_albums__grid_info search_authors__grid_info search_authors__grid_info--mobile">
        <p>Исполнитель</p>
    </div>
    
</div>
<div class="author_albums__list_grid_9">

    <div class="author_albums__list_grid_item_image search_albums__album_image">
        <img src="../assets/static/bilan.png" alt="albumPic"></img>
    </div>
    <div class="author_albums__list_grid_item_info search_albums__grid_info search_authors__grid_info search_authors__grid_info--mobile">
        <p>Исполнитель</p>
    </div>
    
</div>
    </div>

</section>

</section>
















<section id="home__content" class="container home__content--mobile">
    <div class="intro intro--mobile">
        <div class="intro__info intro__info--mobile">
            <h1>Моя Линия</h1>
            <a href="#player">
                <button class="intro__button intro__button--mobile">Слушать
                    <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <use href="../assets/CSS/sprite.svg#intro__button_triangle_mobile"></use>
                    </svg>
                </button>
            </a>    
        </div>

        
        <div class="container_intro">
            <div class="intro__blur"></div>
            <div class="intro__video">
                <video autoplay muted loop playsinline>
                    <source src="../assets/static/intro.webm" type="video/webm">
                </video>
            </div>
        </div>
    </div>
    <div class="home__content_album_card--mobile">
        <div class="home__content_album_card_image--mobile"></div>
        <div class="home__content_album_card_info--mobile">
            <div class="home__content_album_card_info_left--mobile">
                <div class="home__content_album_card_info_left_image--mobile">
                    <img src="../assets/static/authorPic.png" alt="authorPic"></img>
                </div>
<div class="home__content_album_card_info_left_text">
   <p>Название альбома</p>
                <p>50 треков</p> 
</div>      
            </div>
                <button class="home__content_album_card_info_right_play_button--mobile">
                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                        <use href="../assets/CSS/sprite.svg#home__content_album_card_info_right_play_button"></use>
                    </svg>
                </button>
        </div>
    </div>
        <div class="home__content_album_card--mobile">
        <div class="home__content_album_card_image--mobile"></div>
        <div class="home__content_album_card_info--mobile">
            <div class="home__content_album_card_info_left--mobile">
                <div class="home__content_album_card_info_left_image--mobile">
                    <img src="../assets/static/authorPic.png" alt="authorPic"></img>
                </div>
<div class="home__content_album_card_info_left_text">
   <p>Название альбома</p>
                <p>50 треков</p> 
</div>     
            </div>
                <button class="home__content_album_card_info_right_play_button--mobile">
                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                        <use href="../assets/CSS/sprite.svg#home__content_album_card_info_right_play_button"></use>
                    </svg>
                </button>
        </div>
    </div>
</section>

<section class="categories__content--mobile hidden">
<div id="categories__content" class="container categories categories--mobile">
            <div class="div1">
                <p>Танцевальная</p>
            </div>
            <div class="div2">
                <p>Рок</p>
            </div>
            <div class="div3">
                <p>Электроника</p>
            </div>
            <div class="div4">
                <p>Джаз</p>
            </div>
            <div class="div5">
            <p>Рэп</p>
            </div>
            <div class="div6">
            <p>Хип-хоп</p>
            </div>
        </div>
</section>

<section id="player__content" class="container player__content--mobile">
                    <div class="player__content_right_main_player player__content_right_main_player--mobile">
                        <div class="player__playing_music_image player__playing_music_image--mobile">
                            <img src="../assets/static/trackPic.png" alt="playingPic"></img>

                        </div>
                        <div class="player__music_name_author">
                            <p>Название - Исполнитель</p>
                        </div>
                        <div class="player__music_progress_bar_place player__music_progress_bar_place--mobile">
                            <div class="player__grid1">
                                <p>0:30</p>
                            </div>
                            <div class="player__grid2">
                                <p>-1:00</p>
                            </div>
                            <div class="player__grid3">
                                <div class="player__music_progress_bar">
                                    <input class="player__music_progress_bar_line" type="range" min=0 max=100 value="">
                                    </input>
                                    <div class="player__music_progress_bar_style">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="player__control_buttons player__control_buttons--mobile">
                            <div class="player__sound_icon">
                                <svg width="25" height="25" viewBox="0 0 25 25" fill="none">
                                    <use href="../assets/CSS/sprite.svg#player__sound_icon"></use>
                                </svg>
                            </div>
                            <div class="player__volume_range">
                                <input id="player__volume_range_line" class="player__music_progress_bar_line"
                                    type="range" min=0 max=100 value=""></input>
                                <div class="player__music_progress_bar_style"></div>
                            </div>

                            <div class="player__main_buttons">
                                <button class="player__previous_track_button">
                                    <svg width="51" height="50" viewBox="0 0 51 50" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <use href="../assets/CSS/sprite.svg#player__previous_button_icon"></use>
                                    </svg>
                                </button>

                                <button class="player__play_button">
                                    <svg width="88" height="83" viewBox="0 0 88 83" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <use href="../assets/CSS/sprite.svg#player__play_button_icon"></use>
                                    </svg>
                                </button>

                                <button class="player__next_track_button"><svg width="51" height="50"
                                        viewBox="0 0 51 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <use href="../assets/CSS/sprite.svg#player__next_button_icon"></use>
                                    </svg></button>
                            </div>
                            <button class="player__plus_button"><svg width="42" height="41" viewBox="0 0 42 41"
                                    fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <use href="../assets/CSS/sprite.svg#player__plus_button_icon"></use>
                                </svg></button>
                            <button class="player__dontlike_button"><svg width="41" height="41" viewBox="0 0 41 41"
                                    fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <use href="../assets/CSS/sprite.svg#player__dontlike_button_icon"></use>
                                </svg></button>
                        </div>
                    </div>
</section>

<section id="profile__content" class="container profile__content--mobile">
<div class="author_tracks__main profile_main">
<div class="author_tracks__main_author_container_photo profile__content_container_photo--mobile">
<div class="author_tracks__main_author_container_photo_img">
    <img src="../assets/static/profileAvatarPic.png" alt="authorPic"></img>
</div>
<div class="author_tracks__main_author_container_photo_gradient">
    <img src="../assets/static/profileGradient.png" alt="gradientPic"></img>
</div>
</div>

<p>Nickname</p>

<div class="author_tracks__main_right ">
    <div class="player__list profile__content_list--mobile">
                        <div id="player__list_item_author" class="player__list_item">
                            <div class="player__list_item_left player__list_item_left_author profile__content_list_item_left--mobile">
                                <div class="player__list_item_image">
                                    <img src="../assets/static/trackPic.png" alt="playingPic"></img>
                                </div>
                                <div>
                                    <p>Название</p>
                                    <p>Исполнитель</p>
                                </div>
                            </div>
                            <div class="player__list_item_right player__list_item_right_author profile__content_list_item_right--mobile">
                                <p>1:30</p>
                                <button class="player__list_item_add_button profile__list_item_add_button--mobile noHover">
                                    <svg viewBox="0 0 42 42" width="42" height="42" fill="none">
                                        <use class="player__list_item_delete_svg hidden" href="../assets/CSS/sprite.svg#player__list_item_delete"></use>
                                        <use class="player__list_item_add_svg" href="../assets/CSS/sprite.svg#player__list_item_add"></use>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div id="player__list_item_author" class="player__list_item">
                            <div class="player__list_item_left player__list_item_left_author profile__content_list_item_left--mobile">
                                <div class="player__list_item_image">
                                    <img src="../assets/static/trackPic.png" alt="playingPic"></img>
                                </div>
                                <div>
                                    <p>Название</p>
                                    <p>Исполнитель</p>
                                </div>
                            </div>
                            <div class="player__list_item_right player__list_item_right_author profile__content_list_item_right--mobile">
                                <p>1:30</p>
                                <button class="player__list_item_add_button profile__list_item_add_button--mobile noHover">
                                    <svg viewBox="0 0 42 42" width="42" height="42" fill="none">
                                        <use class="player__list_item_delete_svg hidden" href="../assets/CSS/sprite.svg#player__list_item_delete"></use>
                                        <use class="player__list_item_add_svg" href="../assets/CSS/sprite.svg#player__list_item_add"></use>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div id="player__list_item_author" class="player__list_item">
                            <div class="player__list_item_left player__list_item_left_author profile__content_list_item_left--mobile">
                                <div class="player__list_item_image">
                                    <img src="../assets/static/trackPic.png" alt="playingPic"></img>
                                </div>
                                <div>
                                    <p>Название</p>
                                    <p>Исполнитель</p>
                                </div>
                            </div>
                            <div class="player__list_item_right player__list_item_right_author profile__content_list_item_right--mobile">
                                <p>1:30</p>
                                <button class="player__list_item_add_button profile__list_item_add_button--mobile noHover">
                                    <svg viewBox="0 0 42 42" width="42" height="42" fill="none">
                                        <use class="player__list_item_delete_svg hidden" href="../assets/CSS/sprite.svg#player__list_item_delete"></use>
                                        <use class="player__list_item_add_svg" href="../assets/CSS/sprite.svg#player__list_item_add"></use>
                                    </svg>
                                </button>
                            </div>
                        </div>
                                                <div id="player__list_item_author" class="player__list_item">
                            <div class="player__list_item_left player__list_item_left_author profile__content_list_item_left--mobile">
                                <div class="player__list_item_image">
                                    <img src="../assets/static/trackPic.png" alt="playingPic"></img>
                                </div>
                                <div>
                                    <p>Название</p>
                                    <p>Исполнитель</p>
                                </div>
                            </div>
                            <div class="player__list_item_right player__list_item_right_author profile__content_list_item_right--mobile">
                                <p>1:30</p>
                                <button class="player__list_item_add_button profile__list_item_add_button--mobile noHover">
                                    <svg viewBox="0 0 42 42" width="42" height="42" fill="none">
                                        <use class="player__list_item_delete_svg hidden" href="../assets/CSS/sprite.svg#player__list_item_delete"></use>
                                        <use class="player__list_item_add_svg" href="../assets/CSS/sprite.svg#player__list_item_add"></use>
                                    </svg>
                                </button>
                            </div>
                        </div>
                                                <div id="player__list_item_author" class="player__list_item">
                            <div class="player__list_item_left player__list_item_left_author profile__content_list_item_left--mobile">
                                <div class="player__list_item_image">
                                    <img src="../assets/static/trackPic.png" alt="playingPic"></img>
                                </div>
                                <div>
                                    <p>Название</p>
                                    <p>Исполнитель</p>
                                </div>
                            </div>
                            <div class="player__list_item_right player__list_item_right_author profile__content_list_item_right--mobile">
                                <p>1:30</p>
                                <button class="player__list_item_add_button profile__list_item_add_button--mobile noHover">
                                    <svg viewBox="0 0 42 42" width="42" height="42" fill="none">
                                        <use class="player__list_item_delete_svg hidden" href="../assets/CSS/sprite.svg#player__list_item_delete"></use>
                                        <use class="player__list_item_add_svg" href="../assets/CSS/sprite.svg#player__list_item_add"></use>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div id="player__list_item_author" class="player__list_item">
                            <div class="player__list_item_left player__list_item_left_author profile__content_list_item_left--mobile">
                                <div class="player__list_item_image">
                                    <img src="../assets/static/trackPic.png" alt="playingPic"></img>
                                </div>
                                <div>
                                    <p>Название</p>
                                    <p>Исполнитель</p>
                                </div>
                            </div>
                            <div class="player__list_item_right player__list_item_right_author profile__content_list_item_right--mobile">
                                <p>1:30</p>
                                <button class="player__list_item_add_button profile__list_item_add_button--mobile noHover">
                                    <svg viewBox="0 0 42 42" width="42" height="42" fill="none">
                                        <use class="player__list_item_delete_svg hidden" href="../assets/CSS/sprite.svg#player__list_item_delete"></use>
                                        <use class="player__list_item_add_svg" href="../assets/CSS/sprite.svg#player__list_item_add"></use>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div id="player__list_item_author" class="player__list_item">
                            <div class="player__list_item_left player__list_item_left_author profile__content_list_item_left--mobile">
                                <div class="player__list_item_image">
                                    <img src="../assets/static/trackPic.png" alt="playingPic"></img>
                                </div>
                                <div>
                                    <p>Название</p>
                                    <p>Исполнитель</p>
                                </div>
                            </div>
                            <div class="player__list_item_right player__list_item_right_author profile__content_list_item_right--mobile">
                                <p>1:30</p>
                                <button class="player__list_item_add_button profile__list_item_add_button--mobile noHover">
                                    <svg viewBox="0 0 42 42" width="42" height="42" fill="none">
                                        <use class="player__list_item_delete_svg hidden" href="../assets/CSS/sprite.svg#player__list_item_delete"></use>
                                        <use class="player__list_item_add_svg" href="../assets/CSS/sprite.svg#player__list_item_add"></use>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div id="player__list_item_author" class="player__list_item">
                            <div class="player__list_item_left player__list_item_left_author profile__content_list_item_left--mobile">
                                <div class="player__list_item_image">
                                    <img src="../assets/static/trackPic.png" alt="playingPic"></img>
                                </div>
                                <div>
                                    <p>Название</p>
                                    <p>Исполнитель</p>
                                </div>
                            </div>
                            <div class="player__list_item_right player__list_item_right_author profile__content_list_item_right--mobile">
                                <p>1:30</p>
                                <button class="player__list_item_add_button profile__list_item_add_button--mobile noHover">
                                    <svg viewBox="0 0 42 42" width="42" height="42" fill="none">
                                        <use class="player__list_item_delete_svg hidden" href="../assets/CSS/sprite.svg#player__list_item_delete"></use>
                                        <use class="player__list_item_add_svg" href="../assets/CSS/sprite.svg#player__list_item_add"></use>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div id="player__list_item_author" class="player__list_item">
                            <div class="player__list_item_left player__list_item_left_author profile__content_list_item_left--mobile">
                                <div class="player__list_item_image">
                                    <img src="../assets/static/trackPic.png" alt="playingPic"></img>
                                </div>
                                <div>
                                    <p>Название</p>
                                    <p>Исполнитель</p>
                                </div>
                            </div>
                            <div class="player__list_item_right player__list_item_right_author profile__content_list_item_right--mobile">
                                <p>1:30</p>
                                <button class="player__list_item_add_button profile__list_item_add_button--mobile noHover">
                                    <svg viewBox="0 0 42 42" width="42" height="42" fill="none">
                                        <use class="player__list_item_delete_svg hidden" href="../assets/CSS/sprite.svg#player__list_item_delete"></use>
                                        <use class="player__list_item_add_svg" href="../assets/CSS/sprite.svg#player__list_item_add"></use>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div id="player__list_item_author" class="player__list_item">
                            <div class="player__list_item_left player__list_item_left_author profile__content_list_item_left--mobile">
                                <div class="player__list_item_image">
                                    <img src="../assets/static/trackPic.png" alt="playingPic"></img>
                                </div>
                                <div>
                                    <p>Название</p>
                                    <p>Исполнитель</p>
                                </div>
                            </div>
                            <div class="player__list_item_right player__list_item_right_author profile__content_list_item_right--mobile">
                                <p>1:30</p>
                                <button class="player__list_item_add_button profile__list_item_add_button--mobile noHover">
                                    <svg viewBox="0 0 42 42" width="42" height="42" fill="none">
                                        <use class="player__list_item_delete_svg hidden" href="../assets/CSS/sprite.svg#player__list_item_delete"></use>
                                        <use class="player__list_item_add_svg" href="../assets/CSS/sprite.svg#player__list_item_add"></use>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div id="player__list_item_author" class="player__list_item">
                            <div class="player__list_item_left player__list_item_left_author profile__content_list_item_left--mobile">
                                <div class="player__list_item_image">
                                    <img src="../assets/static/trackPic.png" alt="playingPic"></img>
                                </div>
                                <div>
                                    <p>Название</p>
                                    <p>Исполнитель</p>
                                </div>
                            </div>
                            <div class="player__list_item_right player__list_item_right_author profile__content_list_item_right--mobile">
                                <p>1:30</p>
                                <button class="player__list_item_add_button profile__list_item_add_button--mobile noHover">
                                    <svg viewBox="0 0 42 42" width="42" height="42" fill="none">
                                        <use class="player__list_item_delete_svg hidden" href="../assets/CSS/sprite.svg#player__list_item_delete"></use>
                                        <use class="player__list_item_add_svg" href="../assets/CSS/sprite.svg#player__list_item_add"></use>
                                    </svg>
                                </button>
                            </div>
                        </div>
    </div>
</div>
</div>
<!-- </div> -->
</section>

<MobileNavbar />


<nav id="curtain_footer_auth" class="curtain_footer_auth--mobile">
    <h1>Вход</h1>
<div class="curtain_footer_auth_inputs--mobile">
<input class="curtain_footer_auth_input--mobile" type="text" placeholder="логин">
<input class="curtain_footer_auth_input--mobile" type="password" placeholder="пароль">
</div>
<button id="window_frame_apply_button__mobile2" class="reg_window__frame_apply_button">
            <span>Подтвердить</span>

            <svg width="268" height="70" viewBox="0 0 268 70" fill="none" xmlns="http://www.w3.org/2000/svg">
<foreignObject x="-20.4" y="-20.4" width="308.8" height="110.8"><div xmlns="http://www.w3.org/1999/xhtml" style="backdrop-filter:blur(10.2px);clip-path:url(#bgblur_0_591_261_clip_path);height:100%;width:100%"></div></foreignObject><g data-figma-bg-blur-radius="20.4">
<rect width="268" height="70" rx="16" fill="white" fill-opacity="0.35"/>
<rect x="0.5" y="0.5" width="267" height="69" rx="15.5" stroke="white" stroke-opacity="0.46"/>
</g>
<defs>
<clipPath id="bgblur_0_591_261_clip_path" transform="translate(20.4 20.4)"><rect width="268" height="70" rx="16"/>
</clipPath></defs>
</svg>


<div id="window_frame_apply_button_gradient__mobile2" class="reg_window__frame_apply_button_gradient"></div>
        </button>
<div id="curtain__drug_line_auth" class="curtain__drug_line"></div>
</nav>

<nav id="curtain_footer_reg" class="curtain_footer_reg--mobile">
    <h1>Регистрация</h1>
<div class="curtain_footer_reg_inputs--mobile">
<input class="curtain_footer_reg_input--mobile" type="text" placeholder="логин">
<input class="curtain_footer_reg_input--mobile" type="password" placeholder="пароль">
<input class="curtain_footer_reg_input--mobile" type="password" placeholder="повторите пароль">
  <div class="curtain_footer_reg_input_checkbox--mobile">
    <input name="curtain_footer_reg_input_checkbox" id="curtain_footer_reg_input_checkbox" type="checkbox">
    <label for="curtain_footer_reg_input_checkbox">Согласен с Пользовательским соглашением</label>
  </div>


</div>
        <button id="window_frame_apply_button__mobile" class="reg_window__frame_apply_button">
            <span>Подтвердить</span>

            <svg width="268" height="70" viewBox="0 0 268 70" fill="none" xmlns="http://www.w3.org/2000/svg">
<foreignObject x="-20.4" y="-20.4" width="308.8" height="110.8"><div xmlns="http://www.w3.org/1999/xhtml" style="backdrop-filter:blur(10.2px);clip-path:url(#bgblur_0_591_261_clip_path);height:100%;width:100%"></div></foreignObject><g data-figma-bg-blur-radius="20.4">
<rect width="268" height="70" rx="16" fill="white" fill-opacity="0.35"/>
<rect x="0.5" y="0.5" width="267" height="69" rx="15.5" stroke="white" stroke-opacity="0.46"/>
</g>
<defs>
<clipPath id="bgblur_0_591_261_clip_path" transform="translate(20.4 20.4)"><rect width="268" height="70" rx="16"/>
</clipPath></defs>
</svg>


<div id="window_frame_apply_button_gradient__mobile" class="reg_window__frame_apply_button_gradient"></div>
        </button>

<div id="curtain__drug_line_reg" class="curtain__drug_line"></div>
</nav>








</template>









<script setup>
import MobileNavbar from './MobileNavbar.vue'
// import "../assets/js/mobile.js";
</script>
<style scoped></style>