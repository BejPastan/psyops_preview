<script setup lang="ts">
import useEmblaCarousel from 'embla-carousel-vue';
import Autoplay from 'embla-carousel-autoplay';


const baseImages = [
  '/cardGallery/Card1.png',
  '/cardGallery/Card2.png',
  '/cardGallery/Card3.png',
  '/cardGallery/Card4.png',
  '/cardGallery/Card5.png',
];

// Duplicate items to ensure vue3-carousel has enough buffer nodes for seamless wrapAround
const images = [...baseImages];
const [emblaRef] = useEmblaCarousel(
  { loop: true, align: 'center' },
  [Autoplay({ delay: 4000, stopOnInteraction: true })]
)
emblaRef;
</script>

<template>
    <div class="prevContainer">
        <div class="carouselContainer">
            <div class="embla" ref="emblaRef">
                <div class="embla__container">
                <div v-for="(image, index) in images" :key="index" class="embla__slide">
                    <img class="cardImage" :src="image" :alt="`Card ${index + 1}`" />
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.prevContainer{
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content:space-between;
    gap: var(--spacing-lg);
    overflow-y: visible !important;
}
.carouselContainer{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content:center;
    width: 100%;
    flex-shrink: 1;
    overflow-y: visible !important;
}
.controllArrow{
    cursor: pointer;
    width: var(--spacing-xxl);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content:center;
}
.cardImage{
    width: 80%;
    height: 80%;
    object-fit: cover;
    transition: scale 2s ease;
    overflow-y: visible;
    transform: translateY(10%);
}
.cardImage:hover{
    scale: 1.2;
    transition: scale 2s ease;
}

.embla {
  overflow-y: visible !important;
  overflow-x: hidden;
  height: 100%;
  width: 100%;
  flex-shrink: 1;
}
.embla__container {
  display: flex;
  width: 100%;
}   
.embla__slide {
    position: relative;
    height: 352px;
    width: 252px;
    flex-shrink: 0;
    overflow-y: visible !important;
}
</style>
