<template>
  <div class="container">
    <hero/>
    <service/>
    <latestWorks/>
    <experience/>
    <testimonial/>
    <Footer/>
  </div>
</template>

<script>
//import hero from '../components/hero'
const hero = () => import('../components/hero.vue')
//import service from '@/components/service'
const service = () => import('../components/service.vue')
//import latestWorks from '@/components/latestWorks'
const latestWorks = () => import('../components/latestWorks.vue')
//import testimonial from '@/components/testimonial'
const testimonial = () => import('../components/testimonial.vue')
//import experience from '@/components/experience'
const experience = () => import('../components/experience.vue')
//import Footer from '@/components/Footer'
const Footer = () => import('../components/Footer.vue')
export default {
  components:{
    hero,
    service,
    latestWorks,
    testimonial,
    experience,
    Footer
  },
  data() {
    return{

    }
  }
}
</script>

<style scoped>
/*.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}*/

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
