<template>
 <b-container fluid class="bv-example-row">
  <b-row>
    <b-col>

      <div class="leftside">
        <div class="head">
          <h4 class="title">let's make something amazing together</h4>
          <h4 class="sub-title">started by <span class="sayHi">say hi!</span> </h4>
          <p class="name">wastec <span class="float"> &copy; all right reserve</span></p>
        </div>
      </div>

    </b-col>

    <b-col>

      <div class="rightside">
      <div class="leftside">
        <div class="head">
          <p class="p">information</p>
          <p class="street">laaro area ilobu osun state</p>
          <p class="adress">hello@wastech.com</p>
          <P class="li">services</P>
          <p class="li">works</p>
          <p  class="li">notes</p>
          <p class="li">contact</p>
          <p style="color:white;">wastec <span class="float"> &copy; all right reserve</span></p>
        </div>
      </div>
      </div>
      
      </b-col>
   
  </b-row>
</b-container>
</template>

<style scoped>
.row{
  margin-top:4em !important ;
  
}
h4.title{
  color: #ffffff;
  font-weight: lighter;
}
h4.sub-title{
   color: #ffffff;
  font-weight: lighter;
  margin-top: 2em;
}
p.name{
  color: #ffffff;
  font-weight: lighter;
  margin-top: 5em;
}
span.sayHi{
   color: #21bf73;
}
.float{
  font-size: small;
  margin-left: 4em;
}
.rightside{
  margin-left: 5em;
}
p.p{
  color: #ffffff;
  font-size: medium;
}
p.street{
  color: #ffffff;
  font-size: medium;
}
p.adress{
  color: #ffffff;
  font-weight:inherit;
  margin-top: 0.5em;
}
p.li{
  color: #ffffff;
  font-size: small;
  margin-top: 0.6em !important;
}
p.li:hover{
  color: #21bf73;
  
}
@media only screen and (max-width: 768px) {
.row{
  margin-top:1em !important ;
  
}
h4.title{
  color: #ffffff;
  font-weight: lighter;
  font-size: large;
  font-weight: 550;
}
h4.sub-title{
   color: #ffffff;
  font-weight: lighter;
  margin-top: 0.5em;
   font-size: large;
  font-weight: 550;
}
p.name{
  color: #ffffff;
  font-weight: lighter;
   margin-top: 0.5em;
   font-size: large;
  font-weight: 550;
}
.float{
  font-size: small;
}
.rightside{
  margin-left: 0;
}
}

</style>