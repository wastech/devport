<template>
  <b-container class="bv-example-row">
    <div class="title ">latest works</div>
    <b-row>
      <b-col sm="4" v-for="item in items" v-bind:key="item.id">
        <div>

       <!--  <div class="card" >
           <a :href="item.link">
  <img :src="item.image"  class="" alt="">
  </a>
  <div class="card-body">
    <h1 class="title1">{{item.title}}</h1>
    <p class="text">{{item.description}}</p>

  </div>
</div>-->

<b-container class="con">
  <div class="card">
<div class="imgBx">
  <img :src="item.image" alt="">
</div>

<div class="content">
  <h2>{{item.title}}</h2>
  <p>{{item.description}}</p>
</div>
  </div>
</b-container>



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
            'A Quiz App  built with HTML, CSS, and JavaScript',
        },
         {
          title: 'vue-music app',
          image: '/port5.PNG',
          link:'https://vuemusicapp.netlify.app/',
          description:
            ' Built with vuejs',
         }

      ],
    }
  },
}
</script>
<style scoped>
.title {
  color: white;
  font-family: Trattatello, fantasy;
  font-variant: small-caps;
  font-size: xxx-large;
  font-stretch: extra-condensed;
  text-shadow: 0px 10px 10px #234D3C;
  margin-top: 1em;
}
.con {
  position: relative;
  width: 100%;
  display: flex;

  padding: 30px;

}
img {
    /* vertical-align: middle; */
    /* border-style: none; */

    object-fit: contain;
    height: 4em;
    width: 100%;

}
 .card{
  position: relative;
  max-width: 100%;
  height: 100px;
  background: #fff;
  margin: 30px 10px;
  padding: 20px 15px;
  box-shadow: 0 5px 202px rgba (0,0,0,0.5);
  transition: 0.3s ease-in-out;
}
h2{
  font-size: x-large;
  font-weight: bolder;
}
p{
  font-size: medium;
}
 .card:hover{
  height: 250px ;
}
 .imgBx{
  position: relative;
  width: 90%;
  height: auto;
  text-align: center;
  top: -60px;
  left: 13px;
  z-index: 1;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
}
.con .card .imgBx img{
  max-width: 100%;
  border-radius: 4px;
}
.con .card .content{
  position: relative;
  margin-top: -180px;
  padding: 5px 10px;
  text-align: center;
  color: #111;;
  visibility: hidden;
  opacity: 0;
  transition: 0.3s ease-in-out;
}
.card:hover .content{
  visibility: visible;
  opacity: 1;
  margin-top: -50px;
  transition-delay: 0.3s;
}

@media only screen and (max-width: 768px) {
.con {
  position: relative;
  width: 100%;
  display: flex;

  padding: 10px;

}
.title {
  color: white;
  font-family: Trattatello, fantasy;
  font-variant: small-caps;
  font-size: xx-large;
  font-stretch: extra-condensed;
  text-shadow: 0px 10px 10px #234D3C;
  margin-top: 0em;
}
.imgBx{
  position: relative;
  width: 90%;
  height: auto;
  text-align: center;
  top: -60px;
  left: 13px;
  z-index: 1;

}
img {
    /* vertical-align: middle; */
    /* border-style: none; */

    object-fit: contain;
    height: 4em;
    width: 100%;

}
}
</style>
