<template>
  <section class="testimonial-section">
    <div class="container">
      <div class="title">latest works</div>
      <div class="row text-center ">
        <div class="col-12">
          <div class="h2">Testimonial</div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div id="testimonial-slider" class="owl-carousel">
            <div class="testimonial">
              <div class="pic">
                <img
                  src="https://images.pexels.com/photos/704955/pexels-photo-704955.jpeg?w=940&h=650&auto=compress&cs=tinysrgb"
                />
              </div>
              <p
                class="description"
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada vulputate nisi in fermentum. Vivamus ac libero quis nisi auctor pulvinar. Aenean sit amet lectus posuere, mattis massa eget, ullamcorper diam. Nunc sit amet felis eget arcu congue dictum.</p>
              <h3 class="title">Jessica</h3>
              <small class="post">- Archietect</small>
            </div>

            <div class="testimonial">
              <div class="pic">
                <img
                  src="https://images.pexels.com/photos/638700/pexels-photo-638700.jpeg?w=940&h=650&auto=compress&cs=tinysrgb"
                />
              </div>
              <p
                class="description"
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada vulputate nisi in fermentum. Vivamus ac libero quis nisi auctor pulvinar. Aenean sit amet lectus posuere, mattis massa eget, ullamcorper diam. Nunc sit amet felis eget arcu congue dictum.</p>
              <h3 class="title">Pearl</h3>
              <small class="post">- Engineer</small>
            </div>

            <div class="testimonial">
              <div class="pic">
                <img
                  src="https://images.pexels.com/photos/531139/pexels-photo-531139.jpeg?w=940&h=650&auto=compress&cs=tinysrgb"
                />
              </div>
              <p
                class="description"
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada vulputate nisi in fermentum. Vivamus ac libero quis nisi auctor pulvinar. Aenean sit amet lectus posuere, mattis massa eget, ullamcorper diam. Nunc sit amet felis eget arcu congue dictum.</p>
              <h3 class="title">Kellie</h3>
              <small class="post">- Graphic Designer</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.title {
  color: white;
  font-family: Trattatello, fantasy;
  font-variant: small-caps;
  font-size: 2.5em;
  font-stretch: extra-condensed;

}
.testimonial {
  border-right: 4px solid #29d18b;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
  padding: 30px 30px 30px 130px;
  margin: 0 7px 30px 15px;
  overflow: hidden;
  position: relative;
}
.testimonial:before {
  content: '';
  position: absolute;
  bottom: -4px;
  left: -17px;
  border-top: 25px solid #29d18b;
  border-left: 25px solid transparent;
  border-right: 25px solid transparent;
  transform: rotate(45deg);
}
.testimonial:after {
  content: '';
  position: absolute;
  top: -4px;
  left: -17px;
  border-top: 25px solid #29d18b;
  border-left: 25px solid transparent;
  border-right: 25px solid transparent;
  transform: rotate(135deg);
}
.testimonial .pic {
  display: inline-block;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
  position: absolute;
  top: 60px;
  left: 20px;
}
.testimonial .pic img {
  width: 100%;
  height: auto;
}
.testimonial .description {
  font-size: 15px;
  letter-spacing: 1px;
  color: #6f6f6f;
  line-height: 25px;
  margin-bottom: 15px;
}
.testimonial .title {
  display: inline-block;
  font-size: 20px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #29d18b;
  margin: 0;
}
.testimonial .post {
  display: inline-block;
  font-size: 17px;
  color: #29d18b;
  font-style: italic;
}
.owl-theme .owl-controls .owl-page span {
  border: 2px solid #2a3d7d;
  background: #fff !important;
  border-radius: 0 !important;
  opacity: 1;
}
.owl-theme .owl-controls .owl-page.active span,
.owl-theme .owl-controls .owl-page:hover span {
  background: #29d18b !important;
  border-color: #29d18b;
}
p.description {
  color: white !important;
}
@media only screen and (max-width: 767px) {
  .testimonial {
    padding: 20px;
    text-align: center;
  }
  .testimonial .pic {
    display: block;
    position: static;
    margin: 0 auto 15px;
  }
}
@media only screen and (max-width: 768px) {
 .title{
  color: white;
  font-family: Trattatello, fantasy;
  font-variant: small-caps	;
  font-size: 1.5em;
  font-stretch: extra-condensed	;
}
}
</style>