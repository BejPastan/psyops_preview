<script setup lang="ts">
import FalingTracers from './components/FalingTracers.vue';
import Footer from './components/Footer.vue';
import Contact from './components/Sections/Contact.vue';
import Pitch from './components/Sections/Pitch.vue';
import Text from './components/Text.vue';
</script>

<template>
   <div id="app">
    <FalingTracers/>
    <div class="header">
      <Text text="S.I.G.M.A." :size="'title'" :textStyle="'primary'"/>
      <Text text="karciana gra szkoleniowa" :size="'header'" :textStyle="'primary'"/>
    </div>
    <div class="content">
      <div class="content-container">
        <Pitch/>
      </div>
      <div class="content-container">
        <Contact/>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<style>
.header {
  height: 110dvh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.content {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: var(--spacing-xxl);
  margin-bottom: var(--spacing-xxl);
}
.content-container{
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>