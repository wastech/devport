<template>
  <div class="container">
    <hero />
    <service />
    <latestWorks />
    <experience />
    <testimonial />

  </div>
</template>

<script>
const hero = () => import('../components/hero.vue')
const service = () => import('../components/service.vue')
const latestWorks = () => import('../components/latestWorks.vue')
const testimonial = () => import('../components/testimonial.vue')
const experience = () => import('../components/experience.vue')
//const Footer = () => import('../components/Footer.vue')
export default {
  components: {
    hero,
    service,
    latestWorks,
    testimonial,
    experience,
   // Footer
  },
  data() {
    return {}
  }
}
</script>

<style scoped>
.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
