<script setup lang="ts">
import router from '../../router/index.ts';
import Btn from '../Btn.vue';
import SlideContainer from '../SlideContainer.vue';
import Text from '../Text.vue';

</script>

<template>
    <SlideContainer :direction="'left'" :threshold="50">
        <Text text="Jak grać?" :size="'header'" :textStyle="'primary'"/>
        <Text text="Zachecamy do zapoznania się ze skróconymi zasadami gry, aby zrozumieć na czym polega gra" :size="'content'" :textStyle="'primary'"/>
        <div class="btnContainer">
            <Btn :type="'primary'" :onClick="() => { router.push('/game') }">
                <Text text="Instrukcja" :textStyle="'secondary'"/>
            </Btn>
        </div>
    </SlideContainer>
</template>

<style>
.btnContainer{
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content:center;
}
</style>