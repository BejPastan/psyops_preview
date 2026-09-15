<script setup lang="ts">
import Btn from '../components/Btn.vue';
import SlideContainer from '../components/SlideContainer.vue';
import Text from '../components/Text.vue';
import router from '../router';



</script>

<template>
    <div class="header">
        <Text text="OPERACJA S.I.G.M.A." :size="'title'" :textStyle="'primary'" :onClick="() => { router.push('/') }"/>
        <Text text="karciana gra szkoleniowa" :size="'header'" :textStyle="'primary'"/>
    </div>
    <div class="content">
        <div class="content-container">
          <SlideContainer :threshold="400" :direction="'left'">
            <Text text="Faza Wydarzeń" :size="'header'" :textStyle="'primary'"/>
            <Text text="Odkrywana i rozpatrywana jest wierzchnia karta z talii Wydarzeń. W przypadku rozgrywki ze Scenariuszem, zamiast tego, dobierane jest wskazane w nim Wydarzenie oraz jego opis." :size="'content'" :textStyle="'primary'"/>
          </SlideContainer>
        </div>
        <div class="content-container">
          <SlideContainer :threshold="400" :direction="'right'">
            <Text text="Faza Manewrów" :size="'header'" :textStyle="'primary'"/>
            <Text text="Gracze rozgrywają fazę manewrów w kolejności zgodnej z ruchem wskazówek zegara. Rozgrywający gracz wykonuje manewry jednostkami - może bez ponoszenia żadnych kosztów umieszczać jednostki ze Strefy Anonsów w polach na Planszy Ośrodków lub wycofywać je z planszy na rękę." :size="'content'" :textStyle="'primary'"/>
          </SlideContainer>
        </div> 
        <div class="content-container">
          <SlideContainer :threshold="400" :direction="'left'">
            <Text text="Faza Akcji" :size="'header'" :textStyle="'primary'"/>
            <Text text="Gracz ma w tej fazie do dyspozycji dwa punkty akcji. Za każdy punkt akcji gracz może wykonać jedną akcję, zagrać kartę akcji wystawić jednostkę, wykorzystać umiejętności jednostek" :size="'content'" :textStyle="'primary'"/>
          </SlideContainer>
        </div> 
        <div class="content-container">
          <SlideContainer :threshold="400" :direction="'right'">
            <Text text="Faza Rozpatrzenia" :size="'header'" :textStyle="'primary'"/>
            <Text text="Przyznawane zostają Punkty Wpływu, następnie gracze dobierają karty jednostek do pełnej ręki (4 karty). Jeżeli przez dwie Fazy Rozpatrzenia z rzędu wszystkie Ośrodki są zapełnione gra się kończy i wygrywa osoba z największą liczbą Punktów Wpływu." :size="'content'" :textStyle="'primary'"/>
          </SlideContainer>
        </div> 
        <div class="content-container">
            <Btn :type="'primary'" :onClick="() => { router.push('/') }">
                <Text text="Wróć do strony głównej" :textStyle="'secondary'"/>
            </Btn>
        </div>
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