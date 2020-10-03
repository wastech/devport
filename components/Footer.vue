<template>
  <b-container fluid class="bv-example-row">
    <b-row>
      <b-col>
        <div class="leftside">
          <div class="head">
            <h4 class="title">let's make something amazing together</h4>
            <h4 class="sub-title">
              started by <span class="sayHi">say hi!</span>
            </h4>
            <p class="name">
              Abdulfatai Abdulwasiu
            </p>
          </div>
        </div>
      </b-col>

      <b-col>
        <div class="rightside">
          <div class="leftside">
            <div class="head">
              <h1 class="p">information</h1>
              <p class="street"> Main Campus, Oke Baale Street, Area 210001, Osogbo</p>
              <p class="adress">fataiwasiu2@gmail.com</p>
              <p class="li">services</p>
              <p class="li">works</p>
              <p class="li">notes</p>
              <p class="li">contact</p>
              <span>
                <a href="https://twitter.com/wastech_a">
                <i class="fab fa-twitter"></i></a>
                <a href="mailto:fataiwasiu2@gmail.com">
               <i class="fas fa-envelope-square"></i></a>
               <a href="https://github.com/wastech">
                <i class="fab fa-github"></i></a>
                <a href="https://www.linkedin.com/in/abdulfatai-abdulwasiu-370582111/">
                <i class="fab fa-linkedin-in"></i></a>

              </span>

            </div>
          </div>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<style scoped>
.row {
  margin-top: 4em !important ;
}
h4.title {
  color: #ffffff;
  font-weight: lighter;
}
.fab, .fas{
  color: white;
  margin-left: 1em;
}
h4.sub-title {
  color: #ffffff;
  font-weight: lighter;
  margin-top: 2em;
}
p.name {
  color: #ffffff;
  font-weight: lighter;
  margin-top: 5em;
}
span.sayHi {
  color: #21bf73;
}
.float {
  font-size: small;
  margin-left: 4em;
}
.rightside {
  margin-left: 5em;
}
h1.p {
  color: #ffffff;
  font-size: large;
}
p.street {
  color: #ffffff;
  font-size: medium;
}
p.adress {
  color: #ffffff;
  font-weight: inherit;
  margin-top: 0.5em;
}
p.li {
  color: #ffffff;
  font-size: small;
  margin-top: 0.6em !important;
}
p.li:hover {
  color: #21bf73;
}
@media only screen and (max-width: 768px) {
  .row {
    margin-top: 1em !important ;
  }
  h4.title {
    color: #ffffff;
    font-weight: lighter;
    font-size: large;
    font-weight: 550;
  }
  h4.sub-title {
    color: #ffffff;
    font-weight: lighter;
    margin-top: 0.5em;
    font-size: large;
    font-weight: 550;
  }
  p.name {
    color: #ffffff;
    font-weight: lighter;
    margin-top: 0.5em;
    font-size: large;
    font-weight: 550;
  }
  .float {
    font-size: small;
  }
  .rightside {
    margin-left: 0;
  }
}
</style>
