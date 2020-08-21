<template>
  <div class="main">
    <b-container-fluid class="bv-example-row">
      <b-row >
        <b-col sm="6">
          <b-card bg-variant="dark" text-variant="white"  v-for="item in items" v-bind:key="item._id" class="mt-3">
            <b-card-text>
              <h2>{{item.title}} <span style="float:right"> <i :class="item.icon"></i></span></h2>
            </b-card-text>
            <p>{{item.description}}</p>
            <a href="#" variant="primary">{{item.project}} projects</a>
          </b-card>
        </b-col>

        <b-col >
          <div class="side">
            <small>introduce</small>
            <h1>Hello! I'm Aremu</h1>
            <h4>
              <i>Every great design begin with an even better story</i>
            </h4>
            <p>
              Welcome to the Dummy Text Generator!
              This handy tool helps you create dummy text for all your layout needs.
              We are gradually adding new functionality and we welcome your suggestions and feedback.
              Please feel free to send us any additional dummy texts.
            </p>
          </div>
        </b-col>

      </b-row>
    </b-container-fluid>
  </div>
</template>

<script>
export default {
   head: {
    link: [
      {
        rel: 'stylesheet',
        href: 'https://use.fontawesome.com/releases/v5.2.0/css/all.css',
      },
    ],
  },
  data() {
    return {
      items: [
        {
          title: 'Soft-Ware Developer',
          description: 'create digital product with unique ideas',
          project: '20',
          icon: 'fab fa-twitter'
        },
         {
          title: 'Soft-Ware Developer',
          description: 'create digital product with unique ideas',
          project: '20',
          icon: 'fab fa-twitter'
        },
       
      ],
    }
  },
}
</script>
<style  scoped>
.main {
  margin-top: 4em;
}
.card{
   -webkit-box-shadow: 3px 3px 5px 6px #ccc;  /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
  -moz-box-shadow:    3px 3px 5px 6px #ccc;  /* Firefox 3.5 - 3.6 */
  box-shadow:         3px 3px 5px 6px #ccc;  /* Opera 10.5, IE 9, Firefox 4+, Chrome 6+, iOS 5 */
}
.col-sm-6{
  max-width: 100% !important;
}
h2 {
  font-size: large;
  margin-top: 1rem;
}
h2:hover{
  color: #21bf73;
}
p {
  font-size: medium;
}
small {
  color: white;
}
h1 {
  color: white;
}
h4 {
  color: white;
}
p {
  color: white;
}
span{
  color: #21bf73;
}
.side{
  text-align: left;
  margin-left: 0.5em !important;
}
</style>