<script setup lang="ts">
import SlideContainer from '../SlideContainer.vue';
import Text from '../Text.vue';

</script>

<template>
    <SlideContainer :direction="'left'" :threshold="50">
        <Text text="Szkolenia" :size="'header'" :textStyle="'primary'"/>
        <Text text="Bla bla bla, organizacja szkolenia" :size="'content'" :textStyle="'primary'"/>
        <Text text="Kontakt" :size="'header2'" :textStyle="'primary'"/>
        <Text text="email: example@gmail.com" :size="'content'" :textStyle="'primary'"/>
        <Text text="telefon: 123-456-789" :size="'content'" :textStyle="'primary'"/>
    </SlideContainer>
</template>