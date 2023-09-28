/*
Esercizio di oggi: **Vue Slider**

nome repo: vue-slider

**Descrizione:**

Partendo dal markup della versione svolta in js plain, rifare lo slider ma questa volta usando Vue.
Al click su una thumb, visualizzare in grande l’immagine corrispondente

**Bonus:**

1- applicare l’autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente

2- quando il mouse va in hover sullo slider, bloccare l’autoplay e farlo riprendere quando esce
*/

const { createApp } = Vue;

createApp({
  data() {
    return {
      heroes: [
        {
          image: "01.webp",
          title: "Marvel's Spiderman Miles Morale",
          text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man."
        },
        {
          image: "02.webp",
          title: "Ratchet & Clank: Rift Apart",
          text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality."
        },
        {
          image: "03.webp",
          title: "Fortnite",
          text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos."
        },
        {
          image: "04.webp",
          title: "Stray",
          text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city"
        },
        {
          image: "05.webp",
          title: "Marvel's Avengers",
          text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay."
        }
      ],
      counter: 0,
      slider: null

    };
  },
  methods:{
upDown(isUp) {
    isUp ? this.counter-- : this.counter++;

    if(this.counter === this.heroes.length) {
        this.counter = 0;
    }

    if(this.counter < 0) {
        this.counter = this.heroes.length - 1;
    }
    
}
  },
  mounted() {
    this.slider = setInterval(this.upDown, 2000);
    console.log('MOUNTED');
  }
}).mount("#slider");
