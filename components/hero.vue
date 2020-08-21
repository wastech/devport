<template>
  <div class="main">

    <b-row>
      <b-col sm="6" bg-red>
        <div class="description">
          <h5>{{title}}</h5>
          <h1>{{description}}</h1>
          <p>{{text}}</p>
          <a href="#">Let's Chat</a>
        </div>
        
    <div class="combination">
      <div class="experience">
        <div class="head">
          <h2>12</h2>
        </div>
        <div class="year">
          <small>YEARS EXPERIENCE</small>
        </div>
      </div>

      <div class="project">
        <div class="head1">
          <h2>165</h2>
        </div>
        <div class="year1">
          <small>PROJECTS COMPLETED ON 18 COUNTRIES</small>
        </div>
      </div>
      
    </div>
      </b-col>

      <b-col sm="6">
        <div class="image">
          <img src="https://cdn.pixabay.com/photo/2017/02/04/12/25/man-2037255_1280.jpg" alt />
        </div>
      </b-col>
    </b-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: 'Soft-Ware Developer',
      description: 'talk is cheap. show the code',
      text: 'i design and code beautiful simple things. and i love what i do',
    }
  },
}
</script>

<style  scoped>
.container {
  max-width: 100% !important;
}
.row{
  margin-bottom: 4em;
}
.description {
  margin-top: 7em;
  text-align: left !important;
}
h5 {
  background-color: #21bf73;
  padding: 3px;
  font-size: x-large;
  text-align: center;
  color: black;
  width: 11em;
  border-radius: 0.4em;
}
h1 {
  color: white;
  padding: 5px;
  margin-top: 0, 5em;
}
p {
  color: white;
  margin-top: 2em;
  margin-bottom: 2em;
}
img {
  margin-top: 7em;
  max-width: 100% !important;
  object-fit: cover;
  max-height: 20% !important;
   height: 21em;
}

a {
  color: #21bf73;
  border-bottom: 5px solid #21bf73;
}
h2 {
  color: white !important;
  margin-top: 0.5em;
}
small {
  font-size: medium;
  color: white;
}
.experience {
  display: flex;
  width: 6em !important;
}
.year {
  font-size: small;
  margin-top: 3em;
  margin-left: 15px;
}
.project {
  display: flex;
  width: 20em !important;
  margin-left: 3em;
}
.year1 {
  font-size: small;
  margin-top: 3em;
  margin-left: 15px;
}
.combination {
  display: flex;
}
</style>