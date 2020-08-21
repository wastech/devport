<template>
  <b-container-fluid class="bv-example-row mt-5">
    <b-row>
      <b-col sm="6" v-for="item in items" v-bind:key="item">
        <div>
          <b-card
            overlay
            :img-src="item.image"
            img-alt="Card Image"
            text-variant="white"
            :title="item.title"
            :sub-title="item.language"
          ></b-card>
        </div>
      </b-col>
    </b-row>
  </b-container-fluid>
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
.text-muted {
  font-size: medium;
  text-align: right;
  margin-top: -2em;
  color: red;
}
.card-title {
  font-size: medium;
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
</style>