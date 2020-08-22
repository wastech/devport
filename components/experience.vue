<template>
  <div class="container">
    <div class="title">experiences</div>
    <h3 class="card-title">Timeline Style</h3>
    <div class="row">
      <div class="col-md-12">
        <div class="main-timeline3">
          <div class="timeline">
            <div class="timeline-icon">
              <span class="year">2018</span>
            </div>
            <div class="timeline-content">
              <h3 class="title">Web Desginer</h3>
              <p
                class="description"
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi ultrices, luctus nunc ut, commodo enim. Vivamus sem erat.</p>
            </div>
          </div>
          <div class="timeline">
            <div class="timeline-icon">
              <span class="year">2017</span>
            </div>
            <div class="timeline-content">
              <h3 class="title">Web Developer</h3>
              <p
                class="description"
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi ultrices, luctus nunc ut, commodo enim. Vivamus sem erat.</p>
            </div>
          </div>
          <div class="timeline">
            <div class="timeline-icon">
              <span class="year">2016</span>
            </div>
            <div class="timeline-content">
              <h3 class="title">Web Desginer</h3>
              <p
                class="description"
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi ultrices, luctus nunc ut, commodo enim. Vivamus sem erat.</p>
            </div>
          </div>
          <div class="timeline">
            <div class="timeline-icon">
              <span class="year">2015</span>
            </div>
            <div class="timeline-content">
              <h3 class="title">Web Developer</h3>
              <p
                class="description"
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi ultrices, luctus nunc ut, commodo enim. Vivamus sem erat.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.main-timeline3 {
  overflow: hidden;
  position: relative;
}
.title {
  color: white;
  font-family: Trattatello, fantasy;
  font-variant: small-caps;
  font-size: 2.5em;
  font-stretch: extra-condensed;
  margin-top: 1em;
}

.main-timeline3 .timeline {
  position: relative;
  margin-top: -79px;
}

.main-timeline3 .timeline:first-child {
  margin-top: 0;
}

.main-timeline3 .timeline-icon,
.main-timeline3 .year {
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

.main-timeline3 .timeline:after,
.main-timeline3 .timeline:before {
  content: '';
  display: block;
  width: 100%;
  clear: both;
}

.main-timeline3 .timeline:before {
  content: '';
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
}

.main-timeline3 .timeline-icon {
  width: 210px;
  height: 210px;
  border-radius: 50%;
  border: 25px solid transparent;
  border-top-color: #f44556;
  border-right-color: #f44556;
  z-index: 1;
  transform: rotate(45deg);
}

.main-timeline3 .year {
  display: block;
  width: 110px;
  height: 110px;
  line-height: 110px;
  border-radius: 50%;
  background: #fff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
  font-size: 30px;
  font-weight: 700;
  color: #f44556;
  text-align: center;
  transform: rotate(-45deg);
}

.main-timeline3 .timeline-content {
  width: 35%;
  float: right;
  background: #f44556;
  padding: 30px 20px;
  margin: 50px 0;
  box-shadow: 0 10px 25px -10px rgba(72, 29, 99, 0.3);
  z-index: 1;
  position: relative;
}

.main-timeline3 .timeline-content:before {
  content: '';
  width: 20%;
  height: 15px;
  background: #f44556;
  position: absolute;
  top: 50%;
  left: -20%;
  z-index: -1;
  transform: translateY(-50%);
}

.main-timeline3 .title {
  font-size: 20px;
  font-weight: 700;
  color: #fff;
  margin: 0 0 10px;
}

.main-timeline3 .description {
  font-size: 16px;
  color: #fff;
  line-height: 24px;
  margin: 0;
}

.main-timeline3 .timeline:nth-child(2n) .timeline-icon {
  transform: rotate(-135deg);
  border-top-color: #e97e2e;
  border-right-color: #e97e2e;
}

.main-timeline3 .timeline:nth-child(2n) .year {
  transform: rotate(135deg);
  color: #e97e2e;
}

.main-timeline3 .timeline:nth-child(2n) .timeline-content {
  float: left;
}

.main-timeline3 .timeline:nth-child(2n) .timeline-content:before {
  left: auto;
  right: -20%;
}

.main-timeline3 .timeline:nth-child(2n) .timeline-content,
.main-timeline3 .timeline:nth-child(2n) .timeline-content:before {
  background: #e97e2e;
}

.main-timeline3 .timeline:nth-child(3n) .timeline-icon {
  border-top-color: #13afae;
  border-right-color: #13afae;
}

.main-timeline3 .timeline:nth-child(3n) .year {
  color: #13afae;
}

.main-timeline3 .timeline:nth-child(3n) .timeline-content,
.main-timeline3 .timeline:nth-child(3n) .timeline-content:before {
  background: #13afae;
}

.main-timeline3 .timeline:nth-child(4n) .timeline-icon {
  border-top-color: #105572;
  border-right-color: #105572;
}

.main-timeline3 .timeline:nth-child(4n) .year {
  color: #105572;
}

.main-timeline3 .timeline:nth-child(4n) .timeline-content,
.main-timeline3 .timeline:nth-child(4n) .timeline-content:before {
  background: #105572;
}

@media only screen and (max-width: 1199px) {
  .main-timeline3 .timeline {
    margin-top: -103px;
  }
  .main-timeline3 .timeline-content:before {
    left: -18%;
  }
  .main-timeline3 .timeline:nth-child(2n) .timeline-content:before {
    right: -18%;
  }
}

@media only screen and (max-width: 990px) {
  .main-timeline3 .timeline {
    margin-top: -127px;
  }
  .main-timeline3 .timeline-content:before {
    left: -2%;
  }
  .main-timeline3 .timeline:nth-child(2n) .timeline-content:before {
    right: -2%;
  }
}

@media only screen and (max-width: 767px) {
  .main-timeline3 .timeline {
    margin-top: 0;
    overflow: hidden;
  }
  .title {
    color: white;
    font-family: Trattatello, fantasy;
    font-variant: small-caps;
    font-size: 1.5em;
    font-stretch: extra-condensed;
  }
  .row{
    margin-top: -3em;
  }
  .main-timeline3 .timeline:before,
  .main-timeline3 .timeline:nth-child(2n):before {
    box-shadow: none;
  }
  .main-timeline3 .timeline-icon,
  .main-timeline3 .timeline:nth-child(2n) .timeline-icon {
    margin-top: -30px;
    margin-bottom: 20px;
    position: relative;
    transform: rotate(135deg);
  }
  .main-timeline3 .timeline:nth-child(2n) .year,
  .main-timeline3 .year {
    transform: rotate(-135deg);
  }
  .main-timeline3 .timeline-content,
  .main-timeline3 .timeline:nth-child(2n) .timeline-content {
    width: 100%;
    float: none;
    border-radius: 0 0 20px 20px;
    text-align: center;
    padding: 25px 20px;
    margin: 0 auto;
  }
  .main-timeline3 .timeline-content:before,
  .main-timeline3 .timeline:nth-child(2n) .timeline-content:before {
    width: 15px;
    height: 25px;
    position: absolute;
    top: -22px;
    left: 50%;
    z-index: -1;
    transform: translate(-50%, 0);
  }
}
@media only screen and (max-width: 768px) {
  .container {
  }
}
</style>
