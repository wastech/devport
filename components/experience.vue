<template>
  <div class="container">
    <div class="title1"><h3> experiences </h3></div>
    <div class="row">
      <div class="col-md-12">
        <div class="main-timeline3">
          <div class="timeline">
            <div class="timeline-icon">
              <span class="year">2020</span>
            </div>
            <div class="timeline-content">
              <h3 class="title">Uniosun Data Science Lead</h3>
              <p class="description">
                I was among the volunteer developers Organising and conducting the
                Osogbo Data science Community with the aims of catering and training
                over 2 thousand students across the State.

              </p>
            </div>
          </div>
          <div class="timeline">
            <div class="timeline-icon">
              <span class="year">2019</span>
            </div>
            <div class="timeline-content">
              <h3 class="title">Professional Freelancer[Fiverr,Upwork,etc]</h3>
              <p class="description">
                I am working as a MEVN developer freelancer from last 2 years. I do the required task assigned by client to best of my abilities
              </p>
            </div>
          </div>
          <div class="timeline">
            <div class="timeline-icon">
              <span class="year">2019</span>
            </div>
            <div class="timeline-content">
              <h3 class="title">Macrowareltd Frontend Developer</h3>
              <p class="description">
               Macrowareltd is the leading nigeria IT company focused on innovation,
                because w believe the future we all anticipate starts in africa

              </p>
            </div>
          </div>
          <div class="timeline">
            <div class="timeline-icon">
              <span class="year">2020</span>
            </div>
            <div class="timeline-content">
              <h3 class="title"> full-stack-Developer @OIChub</h3>
              <p class="description">
                OIC hub is an IT Hub in Nigeria having location in Osogbo, Ibadan and Lagos. We offer consultancy and training services in digital skills.
                 Our area includes; website development, mobile app development,
                 software development, AI & data science, smart teacher training & kids tech club. We are your to-go digital skill trainer.

              </p>
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
.title1 {
  color: white;
  font-family: Trattatello, fantasy;
  font-variant: small-caps;
  font-size: xx-large;
  font-stretch: extra-condensed;
  text-shadow: 0px 10px 10px #234D3C;
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
  font-size: large;
  font-weight: 700;
  color: #fff;
  margin: 0 0 10px;
}

.main-timeline3 .description {
  font-size: small;
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
  .title1 {
  color: white;
  font-family: Trattatello, fantasy;
  font-variant: small-caps;
  font-size: xx-large;
  font-stretch: extra-condensed;
  text-shadow: 0px 10px 10px #234D3C;
  margin-top: 1em;
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
