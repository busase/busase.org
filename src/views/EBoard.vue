<template>
  <div>
    <div class="header">
      <h1 style="text-align: center;">Our Executive Board</h1>
      <p
        style="font-size: 2rem; text-align: center; font-style: italic"
      >Meet the people behind BU SASE.</p>
    </div>
    <section id="members1">
      <b-container class="container">
        <h2 style="color: white; font-weight: bold; text-align: center">Core Members</h2>
        <b-row>
          <b-col md="6" class="down">
            <b-card class="h-100">
              <img class="circle" src="../assets/eboard/aj.jpg" alt />
              <h3 class="center">Amartya 'AJ' Naik</h3>
              <h5 class="center">President</h5>
              <b-card-text class="center">
                <i>Biomedical Engineering | Class of 2021</i>
                <p>I'm your typical anime and manga geek, love design & engineering and am a HUGE Lindsey Stirling fan!</p>
              </b-card-text>
            </b-card>
          </b-col>
          <b-col md="6" class="down">
            <b-card class="h-100">
              <img class="circle" src="../assets/eboard/parker_vr.png" alt />
              <h3 class="center">Parker Van Roy</h3>
              <h5 class="center">Vice President</h5>
              <b-card-text class="center">
                <i>Computer Engineering | Class of 2021</i>
                <p>I love tech and music! Feel free to talk to me any time.</p>
              </b-card-text>
            </b-card>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="6" class="down">
            <b-card class="h-100">
              <img class="circle" src="../assets/eboard/lisa_wu.png" alt />
              <h3 class="center">Lisa Wu</h3>
              <h5 class="center">Secretary</h5>
              <b-card-text class="center">
                <i>Health Sciences | Class of 2023</i>
                <p>I like bubble tea and going to concerts!</p>
              </b-card-text>
            </b-card>
          </b-col>
          <b-col md="6" class="down">
            <b-card class="h-100">
              <img class="circle" src="../assets/eboard/paul_kim.png" alt />
              <h3 class="center">Seonghoo 'Paul' Kim</h3>
              <h5 class="center">Treasurer</h5>
              <b-card-text class="center">
                <i>Computer Science + Statistics | Class of 2023</i>
                <p>I really like drinking boba and playing Animal Crossing!</p>
              </b-card-text>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section id="members2">
      <b-container class="container">
        <h2 style="color: white; font-weight: bold; text-align: center">Chair Members</h2>
        <b-row>
          <b-col md="6" class="down">
            <b-card class="h-100">
              <img class="circle" src="../assets/eboard/allen_zou.png" alt />
              <h3 class="center">Allen Zou</h3>
              <h5 class="center">Corporate Relations Chair</h5>
              <b-card-text class="center">
                <i>Computer Engineering | Class of 2022</i>
                <p>II am a junior studying Computer Engineering! I love long skates and hammock sessions on the esplanade.</p>
              </b-card-text>
            </b-card>
          </b-col>
          <b-col md="6" class="down">
            <b-card class="h-100">
              <img class="circle" src="../assets/eboard/jason_kim.png" alt />
              <h3 class="center">Jason Kim</h3>
              <h5 class="center">Marketing Chair</h5>
              <b-card-text class="center">
                <i>Computer Engineering | Class of 2023</i>
                <p>My hands are my literally my life as I play the piano, type, and cardistry.</p>
              </b-card-text>
            </b-card>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="6" class="down">
            <b-card class="h-100">
              <img class="circle" src="../assets/eboard/kelton_nguyen.png" alt />
              <h3 class="center">Kelton Nguyen</h3>
              <h5 class="center">Mentorship Chair</h5>
              <b-card-text class="center">
                <i>Biomedical Engineering | Class of 2023</i>
                <p>SASE is my life!</p>
              </b-card-text>
            </b-card>
          </b-col>
          <b-col md="6" class="down">
            <b-card class="h-100">
              <img class="circle" src="../assets/eboard/steph_aw.png" alt />
              <h3 class="center">Stephanie 'Steph' Aw</h3>
              <h5 class="center">Fundraising Chair</h5>
              <b-card-text class="center">
                <i>Human Anatomy | Class of 2023</i>
                <p>I like to create mixtapes or play sudoku in my free time.</p>
              </b-card-text>
            </b-card>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="6" class="down">
            <b-card class="h-100">
              <img class="circle" src="../assets/eboard/wang_sudan.png" alt />
              <h3 class="center">Wang Sudan</h3>
              <h5 class="center">Technology Media Chair</h5>
              <b-card-text class="center">
                <i>Psychology + Computer Science | Class of 2021</i>
                <p>I really like green tea. It is always been green tea, green tea ice cream, green tea mochi etccc... HMU with suggestions for matcha recipe!</p>
              </b-card-text>
            </b-card>
          </b-col>
          <b-col md="6" class="down">
            <b-card class="h-100">
              <img class="circle" src="../assets/eboard/jon_yoshihara.png" alt />
              <h3 class="center">Jon Jon Yoshihara</h3>
              <h5 class="center">Event Director</h5>
              <b-card-text class="center">
                <i>Biology + CMG | Class of 2023</i>
                <p>I’m someone who’s very ambitious and loves spending time with their friends.</p>
              </b-card-text>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data: () => ({
    //
  }),
};
</script>

<style scoped>
.header {
  background: #f1faee;
  padding-top: 8rem;
  padding-bottom: 3rem;
}

#members1 {
  background: #8cc43c;
}
#members2 {
  background: #0c6cb4;
}

h3.center {
  margin-bottom: 0;
}

.container {
  padding-top: 4rem !important;
  padding-bottom: 4rem !important;
}

.top {
  margin-top: 2rem !important;
}
.bottom {
  margin-top: 3rem !important;
}
.rounded {
  padding: 0.25rem 0.65rem 0.25rem 0.5rem;
  background: #30a8ba;
  border-radius: 0.75rem !important;
}
.link {
  text-decoration: none;
  color: white;
  font-style: italic;
}
.circle {
  margin-left: 30%;
  width: 40%;
  border-radius: 50%;
  margin-top: -25%;
}
.image {
  width: 100%;
}
.pale-bg {
  /* background: #96d5de !important; */
  background: #30a8ba !important;
  color: white !important;
}
.light-bg {
  background: #eee !important;
  color: black !important;
}
.break {
  display: none;
}
.mb {
  text-decoration: none;
  color: white;
}
.h-100 {
  color: black;
}
.down {
  margin-top: 8rem;
}
.center {
  text-align: center;
}
h3.center {
  margin-top: 0.75rem;
}
@media screen and (max-width: 991px) {
  .circle {
    margin-left: 20%;
    width: 60%;
    border-radius: 50%;
    margin-top: -35%;
  }
  .top {
    margin-top: 0rem !important;
  }
  .image {
    margin-top: 2.25rem;
  }
}
@media screen and (max-width: 767px) {
  .down {
    margin-top: 10rem;
  }
  .image {
    margin: auto;
  }
  .top {
    text-align: center;
  }
  .bottom {
    text-align: center;
  }
  .break {
    display: block;
    height: 0.75rem;
  }
  .circle {
    width: 60% !important;
    margin-left: 20%;
  }
  .mb {
    margin-top: 0.5rem !important;
    margin-bottom: 1.5rem;
    font-size: 1.7rem;
  }
}
@media screen and (max-width: 429px) {
  .down {
    margin-top: 7rem;
  }
}
</style>
