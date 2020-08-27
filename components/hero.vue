<template>
 <b-container fluid>

    <b-row >
      <b-col sm="6" bg-red>
        <div class="description animate__animated animate__backInLeft">
          <span >{{title}}</span>
          <h1>{{description}}</h1>
          <p>{{text}}</p>
          <a href="https://api.whatsapp.com/send?phone=2348137632165">Let's Chat!</a>
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
          <small>PROJECTS COMPLETED </small>
        </div>
      </div>
    
    </div>
      </b-col>

      <b-col sm="6">
        <div class="image  animate__animated animate__backInRight">
          <img src="https://cdn.pixabay.com/photo/2017/02/04/12/25/man-2037255_1280.jpg" alt />
        </div>
      </b-col>
    </b-row>
 </b-container>
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

.row{
  margin-bottom: 4em;
}
.description {
  margin-top: 7em;
  text-align: left !important;
}
span {
  background-color: #21bf73;
  padding: 8px;
  font-size: large;
  text-align: center;
  color: black;
  width: 11em;
  font-weight: bold;
  border-radius: 0.4em;
}
h1 {
  color: white;
  padding: 5px;
  margin-top: 0.5em;
  font-stretch: ultra-condensed;
  font-weight: 100;
}
p {
  color: #dddddd;
  margin-top: 2em;
  margin-bottom: 2em;
  font-style: italic;
  font-family: Snell Roundhand, cursive;
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
  border-bottom: 3px solid #21bf73;

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
  font-style: italic;
  font-family: Snell Roundhand, cursive;
}
.year {
  font-size: small;
  margin-top: 3em;
  margin-left: 15px;
  font-style: italic;
  font-family: Snell Roundhand, cursive;
}
.project {
  display: flex;
  width: 20em !important;
  margin-left: 3em;
  font-style: italic;
  font-family: Snell Roundhand, cursive;
}
.year1 {
  font-size: small;
  margin-top: 3em;
  margin-left: 15px;
  font-style: italic;
  font-family: Snell Roundhand, cursive;
}
.combination {
  display: flex;
  margin-top: 1.5em;
}
@media only screen and (max-width: 768px) {
.description {
  margin-top: 1em;
  text-align: left !important;
}
span {
  background-color: #21bf73;
  padding: 8px;
  font-size: small;
  text-align: center;
  color: black;
  width: 11em;
  font-weight: bold;
  border-radius: 0.4em;
}
h1 {
  color: white;
  padding: 5px;
  margin-top: 0.5em;
  font-stretch: ultra-condensed;
  font-weight: 900;
  font-size:x-large;
  width: 100%;
}
p {
  color: #dddddd;
  margin-top: 0.3em;
  margin-bottom: 0.3em;
  font-style: italic;
  font-family: Snell Roundhand, cursive;
  font-weight: 100;
    font-size: large;
}
a {
  color: #21bf73;
  border-bottom: 1px solid #21bf73;
  font-weight: 500;
    font-size:medium;
    

}
h2 {
  color: white !important;
  margin-top: 0.5em;
  font-size: xx-large;
}
small {
  font-size: medium;
  color: white;
    font-size: small;
}
.experience {
  display: flex;
  width: 8em !important;
  font-style: italic;
  font-family: Snell Roundhand, cursive;
}
.year {
  font-size: small;
  margin-top: 3em;
  margin-left: 10px;
  font-style: italic;
  font-family: Snell Roundhand, cursive;
}
.project {
  display: flex;
  width: 50em !important;
  font-style: italic;
  font-family: Snell Roundhand, cursive;
}
.year1 {
  font-size: small;
  margin-top: 3em;
  margin-left: 3px;
  font-style: italic;
  font-family: Snell Roundhand, cursive;
  font-weight: 100;
}
.combination {
  display: flex;
  margin-top: 0.1em;
  justify-content:space-around;
}
img {
  margin-top: 1em;
  max-width: 100% !important;
  object-fit: cover;
  max-height: 20% !important;
   height: 10em;
   margin-bottom: 0 !important;
}

  
}
</style>