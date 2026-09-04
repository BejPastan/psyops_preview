<script setup lang="ts">
import { onMounted } from 'vue';

// Initialising the canvas

var canvas:HTMLCanvasElement;
var ctx:CanvasRenderingContext2D;
onMounted(() => {
    try{
        canvas = document.getElementById('bg_canvas') as HTMLCanvasElement;
        ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
    }
    catch (error) {
        console.error('Error initializing canvas:', error);
        throw error; // Rethrow the error to prevent further execution
    }

    
// Setting the width and height of the canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Setting up the letters
var letters = ['Giełda', 'Sabotaż', 'Dezinformacja', 'Propaganda', 'Manipulacja', 'Psychologia', 'Wojna informacyjna', 'Operacje psychologiczne', 'Kampania dezinformacyjna', 'Walka informacyjna', 'PsyOps', 'Social Media', 'Fake news', 'Memes', 'Influencer', 'Trolling', 'Clickbait', 'Viral marketing', 'Wojna Kognitywna'];

// Setting up the columns
const fontSize = 16;
const columns = Math.min(letters.length, 20);
const columnWidth = canvas.width / columns;

// Setting up the drops
var drops: number[] = [];
var textIndex: number[] = [];

for (var i = 0; i < columns; i++) {
  drops[i] = 1;
  textIndex[i] = Math.floor(Math.random() * letters.length);
}

// Setting up the draw function
function draw() {
  ctx.fillStyle = 'rgba(0, 0, 0, .1)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  for (var i = 0; i < drops.length; i++) {
    var text = letters[textIndex[i]];
    ctx.fillStyle = '#007000';
    ctx.font = fontSize + 'px arial';
    ctx.fillText(text, i * columnWidth, drops[i] * fontSize);
    drops[i]++;
    if (drops[i] * fontSize > canvas.height && Math.random() > .95) {
        drops[i] = 0;
        textIndex[i] = Math.floor(Math.random() * letters.length);
    }
  }
}

// Loop the animation
setInterval(draw, 66);
})

</script>


<template>
    <div id="bg_container">
        <canvas id="bg_canvas"></canvas>
    </div>
</template>

<style>
#bg_container {
    position: fixed;
    top: 0;
    left: 0;
    width: 0;
    height: 0;
    z-index: -1000;
    overflow: visible;
}
#bg_canvas {
    width: 100dvw;
    height: 100dvh;
    background: #000;
}
</style>