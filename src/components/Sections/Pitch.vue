<script setup lang="ts">
import SlideContainer from '../SlideContainer.vue';
import Text from '../Text.vue';

</script>

<template>
    <SlideContainer :direction="'left'" :threshold="50">
        <Text text="Witaj w świecie S.I.G.M.A." :size="'header'" :textStyle="'primary'"/>
        <Text text="Projekt S.I.G.M.A. to zaawansowana symulacja działań w „szarej strefie” konfliktu hybrydowego. Stań za kurtyną rzeczywistości, przejmij kontrolę nad ośrodkami wpływu i naucz się dostrzegać niewidzialne nici manipulacji. To Twój poligon doświadczalny w walce o suwerenność umysłu." :size="'content'" :textStyle="'primary'"/>
    </SlideContainer>
</template>