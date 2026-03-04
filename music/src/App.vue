<template>
<Header />

<section class="container intro">
  <div class="intro__info">
    <h1>Моя Линия</h1>
    <a href="#player">
      <button class="intro__button">Слушать
        <svg viewBox="0 0 28 31" width="28" height="31">
          <use href="./assets/CSS/sprite.svg#intro__button_triangle"></use>
        </svg>
      </button>
     </a> 
  </div>
  <div class="container_intro">
    <div class="intro__blur"></div>
    <div class="intro__video">
      <video autoplay muted loop playsinline>
        <source src="./assets/static/intro.webm" type="video/webm">
      </video>
    </div>
  </div>
</section>

<section class="container">
    <div class="categories">
        <a href="#player">
        <div class="div1">
            <p>Танцевальная</p>
        </div>
    </a>
    <a href="#player">
        <div class="div2">
            <p>Рок</p>
        </div></a>
        <a href="#player">
        <div class="div3">
            <p>Электроника</p>
        </div></a>
        <a href="#player">
        <div class="div4">
            <p>Джаз</p>
        </div></a>
        <a href="#player">
        <div class="div5">
            <p>Рэп</p>
        </div></a>
        <a href="#player">
        <div class="div6">
            <p>Хип-хоп</p>
        </div></a>
    </div>
</section>

   <section id="player" class="container player">
    <h1>Проигрыватель</h1>
    <div class="player__left_gradient"></div>
    <div class="container player__left_gradient_blur"></div>
    <div class="player__frame">
      <div class="player__content">
        <div class="player__content_left">
          <div id="player__list_switcher" class="player__list_switcher">
            <div class="player__list_switcher_text">
              <p id="player__list_switcher_left_button">Рекомендации</p>
              <p id="player__list_switcher_right_button">Моя музыка</p>
            </div>
            <div id="player__list_switcher_element" class="player__list_switcher_element"></div>
          </div>
          <div id="player__list" class="player__list">
            <PlayerListItem />
            <PlayerListItem />
            <PlayerListItem />
            <PlayerListItem />
            <PlayerListItem />
            <PlayerListItem />
            <PlayerListItem />
            <PlayerListItem />
            <PlayerListItem />
            <PlayerListItem />
            <PlayerListItem />
            <PlayerListItem />
          </div>
        </div>
        <div class="player__content_right">
          <div class="player__content_right_main_player">
            <div class="player__playing_music_image">
              <img src="./assets/static/trackPic.png" alt="playingPic"></img>
            </div>
            <div class="player__music_name_author">
              <p>Название - Исполнитель</p>
            </div>
            <div class="player__music_progress_bar_place">
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
            <div class="player__control_buttons">
              <div class="player__sound_icon">
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none">
                  <use href="./assets/CSS/sprite.svg#player__sound_icon"></use>
                </svg>
              </div>
              <div class="player__volume_range">
                <input id="player__volume_range_line" class="player__music_progress_bar_line" type="range" min=0 max=100
                  value=""></input>
                <div class="player__music_progress_bar_style"></div>
              </div>

              <div class="player__main_buttons">
                <button class="player__previous_track_button">
                  <svg width="51" height="50" viewBox="0 0 51 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <use href="./assets/CSS/sprite.svg#player__previous_button_icon"></use>
                  </svg>
                </button>

                <button id="ruu" class="player__play_button">
                  <svg id="play" width="88" height="83" viewBox="0 0 88 83" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <foreignObject x="-13.8" y="-13.8" width="115.6" height="110.6">
                      <div xmlns="http://www.w3.org/1999/xhtml"
                        style="backdrop-filter:blur(6.9px);clip-path:url(#bgblur_0_478_318_clip_path);height:100%;width:100%">
                      </div>
                    </foreignObject>
                    <g data-figma-bg-blur-radius="13.8">
                      <rect width="88" height="83" rx="30" fill="white" fill-opacity="0.22" />
                      <rect x="0.5" y="0.5" width="87" height="82" rx="29.5" stroke="white" stroke-opacity="0.56" />
                    </g>
                    <foreignObject x="-4.96766" y="-10.5495" width="100.193" height="102.96">
                      <div xmlns="http://www.w3.org/1999/xhtml"
                        style="backdrop-filter:blur(14.4px);clip-path:url(#bgblur_1_478_318_clip_path);height:100%;width:100%">
                      </div>
                    </foreignObject>
                    <path data-figma-bg-blur-radius="28.8"
                      d="M61.3149 32.2074C68.1283 36.027 68.1283 45.8336 61.315 49.6531L38.7223 62.3184C32.0564 66.0553 23.8323 61.2374 23.8323 53.5956V28.265C23.8323 20.6232 32.0564 15.8053 38.7223 19.5421L61.3149 32.2074Z"
                      fill="white" fill-opacity="0.35" />
                    <defs>
                      <clipPath id="bgblur_0_478_318_clip_path" transform="translate(13.8 13.8)">
                        <rect width="88" height="83" rx="30" />
                      </clipPath>
                      <clipPath id="bgblur_1_478_318_clip_path" transform="translate(4.96766 10.5495)">
                        <path
                          d="M61.3149 32.2074C68.1283 36.027 68.1283 45.8336 61.315 49.6531L38.7223 62.3184C32.0564 66.0553 23.8323 61.2374 23.8323 53.5956V28.265C23.8323 20.6232 32.0564 15.8053 38.7223 19.5421L61.3149 32.2074Z" />
                      </clipPath>
                    </defs>
                  </svg>

                  <svg id="pause" width="88" height="83" viewBox="0 0 88 83" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <foreignObject x="-13.8" y="-13.8" width="115.6" height="110.6">
                      <div xmlns="http://www.w3.org/1999/xhtml"
                        style="backdrop-filter:blur(6.9px);clip-path:url(#bgblur_0_611_320_clip_path);height:100%;width:100%">
                      </div>
                    </foreignObject>
                    <g data-figma-bg-blur-radius="13.8">
                      <rect width="88" height="83" rx="30" fill="white" fill-opacity="0.22" />
                      <rect x="0.5" y="0.5" width="87" height="82" rx="29.5" stroke="white" stroke-opacity="0.56" />
                    </g>
                    <foreignObject x="17.2" y="-11.8" width="73.6" height="106.6">
                      <div xmlns="http://www.w3.org/1999/xhtml"
                        style="backdrop-filter:blur(14.4px);clip-path:url(#bgblur_1_611_320_clip_path);height:100%;width:100%">
                      </div>
                    </foreignObject>
                    <rect data-figma-bg-blur-radius="28.8" x="46" y="17" width="16" height="49" rx="8" fill="white"
                      fill-opacity="0.35" />
                    <foreignObject x="-3.8" y="-11.8" width="73.6" height="106.6">
                      <div xmlns="http://www.w3.org/1999/xhtml"
                        style="backdrop-filter:blur(14.4px);clip-path:url(#bgblur_2_611_320_clip_path);height:100%;width:100%">
                      </div>
                    </foreignObject>
                    <rect data-figma-bg-blur-radius="28.8" x="25" y="17" width="16" height="49" rx="8" fill="white"
                      fill-opacity="0.35" />
                    <defs>
                      <clipPath id="bgblur_0_611_320_clip_path" transform="translate(13.8 13.8)">
                        <rect width="88" height="83" rx="30" />
                      </clipPath>
                      <clipPath id="bgblur_1_611_320_clip_path" transform="translate(-17.2 11.8)">
                        <rect x="46" y="17" width="16" height="49" rx="8" />
                      </clipPath>
                      <clipPath id="bgblur_2_611_320_clip_path" transform="translate(3.8 11.8)">
                        <rect x="25" y="17" width="16" height="49" rx="8" />
                      </clipPath>
                    </defs>
                  </svg>
                  <!-- <svg width="88" height="83" viewBox="0 0 88 83" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <use href="/CSS/sprite.svg#player__play_button_icon"></use>
                                </svg> -->
                </button>

                <button class="player__next_track_button"><svg width="51" height="50" viewBox="0 0 51 50" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <use href="./assets/CSS/sprite.svg#player__next_button_icon"></use>
                  </svg></button>
              </div>
              <button id="player__plus_button_icon"
                class="player__list_item_add_button profile__list_item_add_button--mobile">
                <svg viewBox="0 0 42 42" width="42" height="42" fill="none">
                  <use class="player__list_item_delete_svg hidden"
                    href="./assets/CSS/sprite.svg#player__list_item_delete2"></use>
                  <use class="player__list_item_add_svg" href="./assets/CSS/sprite.svg#player__plus_button_icon"></use>
                </svg>
              </button>

              <button class="player__dontlike_button"><svg width="41" height="41" viewBox="0 0 41 41" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <use href="./assets/CSS/sprite.svg#player__dontlike_button_icon"></use>
                </svg></button>
            </div>
          </div>
          <div class="player__content_gradient"></div>
        </div>
      </div>
    </div>
  </section>

<Footer />





<Mobile />
</template>









<script setup>
import Header from './components/Header.vue'
import PlayerListItem from './components/PlayerListItem.vue'
import Footer from './components/Footer.vue'
import Mobile from './components/Mobile.vue'
import "./assets/js/player.js";




</script>
<style scoped></style>
