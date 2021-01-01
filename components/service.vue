<template>
  <div class="main">
    <b-container fluid class="bv-example-row">
      <b-row>
        <b-col sm="6" class="animate__animated animate__fadeInDown">
          <b-card
            bg-variant="dark"
            text-variant="white"
            v-for="item in items"
            v-bind:key="item._id"
            class="mt-3"
          >
            <b-card-text>
              <h2>
                {{ item.title }}
                <span style="float:right"> <i :class="item.icon"></i></span>
              </h2>
            </b-card-text>
            <p>{{ item.description }}</p>
            <a href="#" variant="primary">{{ item.project }} projects</a>
          </b-card>
        </b-col>

        <b-col>
          <div class="side animate__animated animate__fadeInDown">
            <h3> <code>Hello! I'm Aremu</code></h3>
            <h4>
              <i>Every great design begin with an even better story</i>
            </h4>
            <p class="discription">
              I am a tech enthusiast with a flair for exploring new technologies.
               I strongly recognize that efficient communication between team
               members is the holy grail of true team success.
                highly motivated team player with analytical, critical thinking
                 and problem solving skills, I am always looking for opportunities
                  to gain relevant
                experience by handling challenging roles within diverse teams to contribute
                immense strategic value
            </p>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  head: {
    link: [
      {
        rel: 'stylesheet',
        href: 'https://use.fontawesome.com/releases/v5.2.0/css/all.css'
      }
    ]
  },
  data() {
    return {
      items: [
        {
          title: 'Full stack software Developer',
          description: 'I was responsible for building real life application web development and design, building backend APIs with nodejs framework and express library. I also worked on building frontend applications with vuejs framework',
          project: '15',
          icon: "fas fa-code"
        },
        {
          title: 'Back End Devloper',
          description: 'I am a proficient back-end web developer for over 3 years with healthy skill sets in JavaScript, Express js, Node js,Mongodb,sequelize, and python programming language.',
          project: '15',
          icon: 'fas fa-database'
        }
      ]
    }
  }
}
</script>
<style scoped>
.main {
  margin-top: 4em;
}
.card {
  -webkit-box-shadow: 3px 3px 5px 6px #ccc; /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
  -moz-box-shadow: 3px 3px 5px 6px #ccc; /* Firefox 3.5 - 3.6 */
  box-shadow: 3px 3px 5px 6px #ccc; /* Opera 10.5, IE 9, Firefox 4+, Chrome 6+, iOS 5 */
}
.col-sm-6 {
  max-width: 100% !important;
}
h2 {
  font-size: large;

}
h2:hover {
  color: #21bf73;
}
p {
  font-size: small;
  margin-bottom: 0em;
}
a{
  font-size: small;
}
small {
  color: #eeeeee;
}
h3 {
  color: white;
  margin-top: 0.3em;
}
h4 {
  color: white;
  padding-top: 1em;
  padding-bottom: 1em;
  font-size: medium;
  font-style: oblique;
  font-weight: 600;
  font-variant: small-caps;
  font-stretch: ultra-condensed;
}
p.discription {
  color: white;
  font-size: Avantgarde, TeX Gyre Adventor, URW Gothic L, sans-serif;
  padding-top: 1em;
  padding-bottom: 1em;
  font-size: medium;
  font-style: italic;
  font-weight: 300;
  font-variant: normal;
  font-stretch: extra-condensed;

}
span {
  color: #21bf73;
}
.side {
  text-align: left;
  margin-left: 0.5em !important;

}
@media only screen and (max-width: 768px) {
  h4 {
  color: white;

  font-size: medium;
  font-style: oblique;
  font-weight: 600;
  margin: 0em;
  padding: 0em;
  font-variant: small-caps;
  font-stretch: ultra-condensed;
}
  p.discription {
  color: white;
  font-size: Avantgarde, TeX Gyre Adventor, URW Gothic L, sans-serif;
  font-size: medium;
  font-style: italic;
  font-weight: 300;
  font-variant: normal;
  font-stretch: extra-condensed;

}
  .col-sm-6 {
    margin-top: -3em !important;
  }
  .card-body {
    flex: 1 1 auto;
    min-height: 1px;
    padding: 0.6em;
    margin-top: 0.1em !important;
  }

  .side[data-v-1e8b94ca] {
    text-align: left;
    margin-left: 0.5em !important;
    margin-top: 3em;
  }
  small {
    color: white;
    font-size: x-large;
    font-weight: bold;
    font-family: Snell Roundhand, cursive;
  }
  h1 {
    color: white;
    font-size: xx-large;
    font-weight: bold;
    margin-top: 0.6em;
    font-variant: small-caps;
    font-family: Snell Roundhand, cursive;
  }
  h4 {
    color: white;
    color: white;
    font-size: x-large;
    font-weight: 500;
    margin-top: 0.6em;
    font-style: italic;
    font-variant: small-caps;
    font-family: Snell Roundhand, cursive;
  }
  h3 {
  color: white;
  margin-top: 0.1em;
}
h3, .h3 {
     font-size: 0em;
}
code{
  font-size: xx-large;
  font-weight: bold;
}
}
</style>
