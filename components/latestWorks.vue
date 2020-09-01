<template>
  <b-container class="bv-example-row">
    <div class="title animate__animated animate__slideOutUp">latest works</div>
    <b-row>
      <b-col sm="4" v-for="item in items" v-bind:key="item.id">
        <div>
         <div class="card" >
  <img :src="item.image" class="" alt="">
  <div class="card-body">
    <h5 class="title1">Card title</h5>
    <p class="text">Some quick example text to build on ththe bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">view project</a>
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
          title: 'Soft-Ware Developer',
          image: 'https://picsum.photos/1000/500/?image=3',
          project: '20',
          icon: 'fab fa-twitter',
          description:
            'this is the first ever nuxtjs app to carry out and i also really enjoy it',
        },
        {
          title: 'Soft-Ware Developer',
          image: 'https://picsum.photos/1000/500/?image=3',
          project: '20',
          icon: 'fab fa-twitter',
          language: 'javascript javascript',
        },
        {
          title: 'Soft-Ware Developer',
          image: 'https://picsum.photos/1000/500/?image=3',
          project: '20',
          icon: 'fab fa-twitter',
          language: 'javascript javascript',
        },
      ],
    }
  },
}
</script>
<style scoped>
.container {
  max-width: 100% !important;
  width: 100%;
  margin-top: 1em;
}
.title {
  color: white;
  font-family: Trattatello, fantasy;
  font-variant: small-caps;
  font-size: 2.5em;
  font-stretch: extra-condensed;
  text-shadow: 0px 10px 10px #234D3C;
}
.card{
     background: linear-gradient(135deg, rgba(0,0,0,0.22), rgba(255,255,255,0.25));
}
.title1 {
  font-size: medium;
  color: red;
  text-shadow: 0px 10px 10px #234D3C;
  background: #0e8dbc;
  color: white;
  text-shadow: 0 1px 0 #ccc,
               0 2px 0 #c9c9c9,
               0 3px 0 #bbb,
               0 4px 0 #b9b9b9,
               0 5px 0 #aaa,
               0 6px 1px rgba(0,0,0,.1),
               0 0 5px rgba(0,0,0,.1),
               0 1px 3px rgba(0,0,0,.3),
               0 3px 5px rgba(0,0,0,.2),
               0 5px 10px rgba(0,0,0,.25),
               0 10px 10px rgba(0,0,0,.2),
               0 20px 20px rgba(0,0,0,.15);
}
.text{
   font-size: large;
  color: red;
  text-shadow: 0px 10px 10px #234D3C;
}
img {
  object-fit: cover;
  height: 13em !important;
  width: 100% !important;
}

.col-sm-6 {
  margin-bottom: 6em;
}
h1 {
  color: red;
}
.btn{
 background: linear-gradient(-45deg, rgba(0,0,0,0.22), rgba(255,255,255,0.25));}
@media only screen and (max-width: 768px) {
  .container {
    max-width: 95% !important;
    margin-top: -6em;
  }
  .col-sm-6 {
  margin-bottom: 2em;
  }
  .title {
    color: white;
    font-family: Trattatello, fantasy;
    font-variant: small-caps;
    font-size: 1.5em;
    font-stretch: extra-condensed;
    margin-bottom: 2em;
    margin-top: -3em;
  }
  img {
  object-fit: cover;
  height: 30% !important;
  width: 100% !important;
}
}
</style>
