<template>
  <b-container class="bv-example-row">
    <div class="title animate__animated animate__slideOutUp">latest works</div>
    <b-row>
      <b-col sm="6" v-for="item in items" v-bind:key="item.id">
        <div>
          <!--<b-card
            overlay
            :img-src="item.image"
            text-variant="white"
            :title="item.title"
            :sub-title="item.language"
          > <a href="item.link"></a>
          </b-card>-->

          <div class="card bg-dark text-white">
            <img :src="item.image" class="card-img shadow" alt="item.title" />
            <div class="card-img-overlay">
              <h5 class="card-title ">{{item.title}}</h5>
              <p class="card-text shadow ">{{item.description}}</p>
              <p class="card-text-shadow">{{item.icon}}</p>
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
  max-width: 95% !important;
  margin-top: -4em;
}
.title {
  color: white;
  font-family: Trattatello, fantasy;
  font-variant: small-caps;
  font-size: 2.5em;
  font-stretch: extra-condensed;
  text-shadow: 0px 10px 10px #234D3C;
}

.card-title {
  font-size: medium;
  color: red;
  text-shadow: 0px 10px 10px #234D3C;
}
.card-img {
  object-fit: cover;
  height: 15em;
  width: 100% !important;
}
.card .text-white {
  margin-top: 4em;
  text-shadow: 0px 10px 10px #234D3C;
}
.col-sm-6 {
  margin-top: 3em;
}
h1 {
  color: red;
}
@media only screen and (max-width: 768px) {
  .container {
    max-width: 95% !important;
    margin-top: -6em;
  }
  .col-sm-6 {
    margin-top: 1em;
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
}
</style>