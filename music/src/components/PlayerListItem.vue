<template>
<div class="player__list_item">
    <div class="player__list_item_left">
        <div class="player__list_item_image">
            <img src="../assets/static/trackPic.png" alt="playingPic"></img>
        </div>
        <div>
            <p>Название</p>
            <p>Исполнитель</p>
        </div>
    </div>
    <div class="player__list_item_right">
        <p>1:30</p>
        <button class="player__list_item_add_button profile__list_item_add_button--mobile">
            <svg viewBox="0 0 42 42" width="42" height="42" fill="none">
                <use class="player__list_item_delete_svg hidden" href="../assets/CSS/sprite.svg#player__list_item_delete"></use>
                <use class="player__list_item_add_svg" href="../assets/CSS/sprite.svg#player__list_item_add"></use>
            </svg>
        </button>
    </div>
</div>
</template>


<script setup></script>
<style scoped></style>