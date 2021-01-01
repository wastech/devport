<template>
  <b-container fluid>
    <b-row>
      <b-col sm="6" bg-red>
        <div class="description animate__animated animate__backInLeft">
          <span>{{ title }}</span>
          <h3>{{ description }}</h3>
          <p>{{ text }}</p>
          <a href="a href='https://wa.me/+2348137632165' "

            >Let's Chat!</a

          >

        </div>

        <div class="combination">
          <div class="experience">
            <div class="head">
              <h4>3</h4>
            </div>
            <div class="year">
              <small>YEARS EXPERIENCE</small>
            </div>
          </div>

          <div class="project">
            <div class="head1">
              <h4>15</h4>
            </div>
            <div class="year1">
              <small>PROJECTS COMPLETED </small>
            </div>
          </div>
        </div>
      </b-col>

      <b-col sm="6">
        <div class="image animate__animated animate__backInRight">
          <img
            src="/aremu.jpg"
            alt
          />
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
export default {
  data() {
    return {
      title: 'Javascript Developer',
      description: 'talk is cheap. show the code',
      text:
        'I was responsible for building real life application web development and design, building backend APIs with nodejs framework and express library',
    }
  },
}
</script>

<style scoped>
.row {
  margin-bottom: 3em;
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
h3 {
  color: white;
  padding: 3px;
  margin-top: 0.5em;
  text-align: left;
  font-stretch: ultra-condensed;
  font-size: xx-large;
  font-weight: 100;
  color: white;
  text-shadow: 0 1px 0 #ccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9,
    0 5px 0 #aaa, 0 6px 1px rgba(0, 0, 0, 0.1), 0 0 5px rgba(0, 0, 0, 0.1),
    0 1px 3px rgba(0, 0, 0, 0.3), 0 3px 5px rgba(0, 0, 0, 0.2),
    0 5px 10px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.2),
    0 20px 20px rgba(0, 0, 0, 0.15);
}
p {
  color: #dddddd;
  margin-top: 1em;
  margin-bottom: 1em;
  font-style: italic;
  font-size: large;
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
  border-bottom: 1px solid #21bf73;
  font-size: medium;
}
h4 {
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
  margin-top: 2em;
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
  margin-top: 2em;
  margin-left: 15px;
  font-style: italic;
  font-family: Snell Roundhand, cursive;
}
.combination {
  display: flex;
  margin-top: 1em;
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
  img {
    display: none;
  }
  h3 {
    color: white;

    margin-top: 1.3em;
    text-align: center;
    font-size: x-large;
    font-weight: 500;
    color: white;
    text-shadow: 0 1px 0 #ccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9,
      0 5px 0 #aaa, 0 6px 1px rgba(0, 0, 0, 0.1), 0 0 5px rgba(0, 0, 0, 0.1),
      0 1px 3px rgba(0, 0, 0, 0.3), 0 3px 5px rgba(0, 0, 0, 0.2),
      0 5px 10px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.2),
      0 20px 20px rgba(0, 0, 0, 0.15);
  }
  h1 {
    color: white;
    padding: 5px;
    margin-top: 0.5em;
    font-stretch: ultra-condensed;
    font-weight: 900;
    font-size: x-large;
    width: 100%;
  }
  p {
    color: #dddddd;
    margin-top: 0.3em;
    margin-bottom: 0.3em;
    font-family: Snell Roundhand, cursive;
    font-weight: 100;
    font-size: medium;
    text-align: center;
  }
  a {
    color: #21bf73;
    border-bottom: 1px solid #21bf73;
    font-weight: 500;
    font-size: medium;
    display: none;
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
    display: none;
    justify-content: space-around;
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
