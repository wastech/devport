<template>
  <b-container class="bv-example-row">
    <div class="title ">latest works</div>
    <b-row>
      <b-col sm="4" v-for="item in items" v-bind:key="item.id">
        <div>
         <div class="card" >
           <a :href="item.link">
  <img :src="item.image"  class="" alt="">
  </a>
  <div class="card-body">
    <h1 class="title1">{{item.title}}</h1>
    <p class="text">{{item.description}}</p>

  </div>
</div>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: 'MEVN-Blog App',
          image: '/port1.PNG',
          link:'https://mevnblog.herokuapp.com/',
          description:
            'Mevnblogapp is a well functioning  website, built with Node, Expressjs, Vuejs and Mongodb',
        },
        {
          title: 'dev-portfolio',
          image: '/port2.PNG',
          link:'http://devport.wastech.now.sh/',
          description:'dev-portfolio is a simple, minimal portfolio for developers, built with Vuejs',
        },
        {
          title: 'chat-app',
          image: '/port3.PNG',
          link:'https://github.com/wastech/chatapp',
          description:
            'Realtime chat app with rooms, built with express and socket.io',
        },
         {
          title: 'quize-app',
          image: '/port4.PNG',
           link:'https://github.com/wastech/quize-app',
           description:
            'a Quiz App  built with HTML, CSS, and JavaScript',
        },
         {
          title: 'vue-music app',
          image: '/port5.PNG',
          link:'https://vuemusicapp.netlify.app/',
          description:
            '  built with vuejs',
         }

      ],
    }
  },
}
</script>
<style scoped>
.container {
  max-width: 100% !important;
  width: 100%;

}
.title {
  color: white;
  font-family: Trattatello, fantasy;
  font-variant: small-caps;
  font-size: 2.5em;
  font-stretch: extra-condensed;
  text-shadow: 0px 10px 10px #234D3C;
  margin-top: 1em;
}
.card{
     background: linear-gradient(135deg, rgba(0,0,0,0.22), rgba(255,255,255,0.25));
}
.title1 {
  font-size: large;
  color: red;
  text-shadow: 0px 10px 10px #234D3C;
  color: white;
}
.text{
   font-size: large;
  color: #fff;
  text-shadow: 0px 10px 10px #234D3C;
}
img {
object-fit: cover;
  width: 100% !important;
  height: 15vh;
}

.col-sm-4 {
  margin-bottom: 2em;
}
h1 {
  color: red;
}
.btn{
 background: linear-gradient(-45deg, rgba(0,0,0,0.22), rgba(255,255,255,0.25));}
@media only screen and (max-width: 768px) {
  .container {
    max-width: 95% !important;
 margin-top: -1em;
  }
  .card {
  margin-bottom: 1em !important;
  }
  .title {
    color: white;
    font-family: Trattatello, fantasy;
    font-variant: small-caps;
    font-size: 1.5em;
    font-stretch: extra-condensed;
    margin-top: 0.2em;

  }
  .col-sm-4 {
  margin-bottom: 0.5em;
}
  img {
  height: 30% !important;
  width: 100% !important;
}
}
</style>
