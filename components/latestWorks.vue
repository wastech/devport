<template>
  <b-container fluid class="bv-example-row mt-5">
    <div class="title">
      latest works
    </div>
    <b-row>
      <b-col sm="6" v-for="item in items" v-bind:key="item">
        <div>
          <b-card
            overlay
            :img-src="item.image"
            text-variant="white"
            :title="item.title"
            :sub-title="item.language"
          > <a href="item.link"></a></b-card>
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
          language: 'javascript javascript',
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
.title{
  color: white;
  font-family: Trattatello, fantasy;
  font-variant: small-caps	;
  font-size: 2.5em;
  font-stretch: extra-condensed	;
}
.projects{
  color: green;
  margin-top: 6em;
  margin-right: -8em;
}
.text-muted {
  font-size: medium;
  text-align: right;
  margin-top: -2em;
  color: red;
}
.card-title {
  font-size: medium;
}
.card-img{
  
  object-fit: cover;
}
.card .text-white {
  margin-top: 4em;
}
.col-sm-6 {
  margin-top: 3em;
}
h1 {
  color: red;
}
@media only screen and (max-width: 768px) {
  .row {
    margin-top: -4em;
  }
  .col-sm-6 {
    margin-top: 1em;
  }
  .title{
  color: white;
  font-family: Trattatello, fantasy;
  font-variant: small-caps	;
  font-size: 1.5em;
  font-stretch: extra-condensed	;
  margin-bottom: 2em;
    margin-top: -3em;
}
}
</style>