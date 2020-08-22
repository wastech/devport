<template>
  <div class="container">
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="#">Abdulfata Abdulwasiu</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="mx-auto order-0 text-center">
          <b-nav-item href="#" v-for="link in links" v-bind:key="link._id"><span>  &lt; </span> {{link.item}}<span> &gt;</span> </b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#" v-for="link in links" v-bind:key="link._id">
       <i :class="link.icon"></i>
           {{link.net}} 
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
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
      links: [
        { item: 'service', icon: 'fab fa-twitter', net: 'twitter' },
        { item: 'works', icon: 'fab fa-github', net: 'github' },
        { item: 'notes',icon:'far fa-envelope'},
      ],
    }
  },
}
</script>

<style scoped>
.bg-dark {
  background-color: #1b262c !important;
}
b-navbar-nav {
  background-color: #1b262c;
}
a {
  color: #ffffff !important;
}

a:hover{
   color: #21bf73 !important;
}

.container{
  max-width: 90%;
}
@media only screen and (max-width: 768px) {
.navbar-brand {
  font-size: small;
}

  
}
</style>