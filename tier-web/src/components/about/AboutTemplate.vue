<template>
  <div class="about__container">
    <div class="about__picture">
      <div class="about__description">
        <h3 class="about__header">TIER</h3>
        <p class="about__content">Jesteśmy grupą filmowa założoną w 2014 roku przez trójkę wieloletnich przyjaciół, których połączyły wspólne pasje, w tym miłość do filmu i chęć realizowania się w tej formie sztuki. Odpowiadamy za produkcje filmowe o różnym charakterze, od klipów muzycznych, przez komercyjne filmy reklamowe, relacje wideo z festiwali i innych wydarzeń, po artystyczne produkcje konkursowe. Możemy pochwalić się realizacjami dla znanych marek i zespołów oraz wygranymi konkursami ogólnopolskimi. Nie boimy się wyzwań, ambitnych projektów i w każdą kolejną produkcję wykonujemy inaczej, sięgając po nowe motywy i inspiracje. Charakteryzuje nas ogromna dawka kreatywności, otwarcie, chęć łamania schematów i zabawy formą, a wszystko po to, aby wizualnie nasycić oko odbiorcy i komunikować się z nim obrazem.</p>
      </div>
    </div>
    <div class="partners__section">
      <h3 class="partners__header">nasi klienci</h3>
      <div class="partners__clients">
        <p
          class="clients__name"
          v-for="(client, index) in allClients"
          :key="index"
        >
          {{ client }}
        </p>
      </div>
      <div class="clients__logos">
        <div
          class="single__logo"
          :style="{backgroundImage: logo}"
          v-for="(logo, index) in allLogos"
          :key="index"
        >
        </div>
      </div>
    </div>
    <div class="info__section">
      <h3 class="about__header">nasz zespół</h3>
      <masonry
        class="info__crew"
        :cols="{ default: 2 }"
        :gutter="40"
      >
        <AboutItem
          v-for="(item, index) in aboutContent"
          :key="index"
          :item="item"
        />
      </masonry>
      </div>
  </div>
</template>

<script>
import aboutContent from '@/about-data/about-data'
import AboutItem from './AboutItem'

export default {
  data() {
    return {
      allClients: [
        'Silesia City Center',
        'Politechnika Śląska',
        'Fleshcold',
        'Kolory',
        'Wiper Drains',
        'Sunlaser',
        'Duda Clinic',
        'Mateo Colon',
        'Katowice Tattoo Convent',
        '+'
      ]
    }
  },
  computed: {
    aboutContent() {
      return aboutContent
    },
    allLogos() {
      return [
        `url(${require('images/logos/adidas.png')})`,
        `url(${require('images/logos/nike.png')})`,
        `url(${require('images/logos/nfm.png')})`,
        `url(${require('images/logos/dove.png')})`,
        `url(${require('images/logos/politechnika.png')})`,
        `url(${require('images/logos/bentley.jpeg')})`,
        `url(${require('images/logos/google.png')})`,
        `url(${require('images/logos/scc.png')})`,
        `url(${require('images/logos/dell.png')})`
      ]
    }
  },
  components: {
    AboutItem
  }
}
</script>
