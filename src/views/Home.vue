<template>
  <div>
    <div class="back">
      <div style="height: 15vh"></div>
      <b-container class="center">
        <div>
          <h1
            style="font-size: 4rem; padding-bottom: 1rem; text-align: center;"
          >Boston University Chapter</h1>
          <b-button
            pill
            class="join"
            variant="outline-dark"
            href="https://docs.google.com/forms/d/e/1FAIpQLSeAh6CYRhact6711Ac4KNA6ZsXY3onUCs1xS-9K3dkzm8lJWQ/viewform"
          >Join BU SASE!</b-button>
        </div>
      </b-container>
      <div
        style="background-image: linear-gradient(to bottom, rgba(241, 250, 238,0), rgba(241, 250, 238,1)); height: 15vh;"
      ></div>
    </div>
    <section id="about" style="background: #F1FAEE; padding: 3rem 0">
      <b-container>
        <h2 style="text-align: center; font-size: 2.5rem;">What is SASE?</h2>
        <br />
        <p style="font-size: 1.25rem; text-align: center;">
          The Society of Asian Scientists and Engineers, also known as SASE, is dedicated to the advancement of Asian heritage scientists and engineers in education
          and employment so that they can achieve their full career potential.
          The Boston University chapter of SASE hosts events with focuses in:
          Pre-Professional Advising, Academics, STEM, Community Service, and Mentorship! Below, you can check out our plans for the Fall 2020 Semester!
        </p>
      </b-container>
    </section>
    <section id="fall-events">
      <div class="flexc">
        <div class="left-text">
          <h2 style="margin: 0;">General Board Meeting 1</h2>
          <i style="font-size: 1.2rem;">Date: September 18th | Time: TBD</i>
          <br />
          <br />
          <p
            style="font-size: 1.25rem"
          >Our first general body meeting of the year will feature fun virtual icebreakers and an overview of everything SASE-related for the entire semester. Come by to learn more about our club, our upcoming events, our Fall Mentorship Program and get to know your e-board and fellow SASE members! #SASEfam</p>
        </div>
        <div class="right-photo" id="gbm1"></div>
      </div>
      <div class="flexc">
        <div class="left-photo" id="nationals"></div>
        <div class="right-text">
          <h2 style="margin: 0;">Nationals 2020</h2>
          <i style="font-size: 1.2rem;">Date: October 9-10th</i>
          <br />
          <br />
          <p style="font-size: 1.25rem">
            Every year, our national organization hosts a conference dedicated to professional development and enriching the careers of collegiate chapters with job opportunities, keynote speeches and skill-based workshops. This year, the conference is going virtual! Learn more about the conference + career fair
            <a
              href="https://conference.saseconnect.org/?gclid=EAIaIQobChMIruikq9PO6wIVDb7ACh3DZQkKEAAYASAAEgLYbPD_BwE"
              style="color: white; text-decoration: underline"
            >here</a> and
            sign up on our
            <a
              href="https://forms.gle/QhvsH5nxXH4Yst6i6"
              style="color: white; text-decoration: underline"
            >interest form</a> if you’re interested! #SASENC2020 #VIRTUAL
          </p>
        </div>
      </div>
      <div class="flexc">
        <div class="left-text">
          <h2 style="margin: 0;">General Board Meeting 2 - Mentorship</h2>
          <i style="font-size: 1.2rem;">Date: TBD | Time: TBD</i>
          <br />
          <br />
          <p
            style="font-size: 1.25rem"
          >Our 2nd GBM of the semester will be held in October. The theme is all about Mentorship where our Fall Mentorship Program will officially begin with the reveal of our Mentors and Mentees. Save the date and in the meantime, sign up to be either a mentor or mentee if you’re interested!</p>
        </div>
        <div class="right-photo" id="gbm2"></div>
      </div>
      <div class="flexc">
        <div class="left-photo" id="networking"></div>
        <div class="right-text">
          <h2 style="margin: 0;">Networking Night</h2>
          <i style="font-size: 1.2rem;">Date: October 23rd | Time: 6:30-8:30 PM</i>
          <br />
          <br />
          <p
            style="font-size: 1.25rem"
          >This October, SASE will be hosting its annual Fall Networking Night virtually. As one of our biggest professional events of the semester, this event is a great opportunity to network with professionals from various industries in STEM and learn more about opportunities available in the current or future job market! Save the date and await more updates in the future!</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    // HelloWorld,
  },
};
</script>

<style scoped>
.back {
  background: url("../assets/BUback.png") top center/ cover;
  height: 100vh;
}

.center {
  display: grid;
  place-items: center;
  height: 70vh;
}

.join {
  background: rgba(255, 255, 255, 0.3);
  font-size: 1.5rem;
  padding: 0.5rem 1rem;
  font-weight: 500;
  display: block;
  margin: auto;
  width: 15rem;
}

.flexc {
  display: flex;
}

.left-text {
  width: 50%;
  text-align: right;
  padding: 3rem;
  padding-left: 6rem;
  background: #8cc43c;
}

.right-text {
  width: 50%;
  text-align: left;
  padding: 3rem;
  padding-right: 6rem;
  background: #0c6cb4;
  color: white;
}

.right-photo {
  width: 50%;
  border: 1rem #8cc43c solid;
}
.left-photo {
  width: 50%;
  border: 1rem solid #0c6cb4;
}

#gbm1 {
  background: url("../assets/gbm1.jpg") center center / cover;
}
#nationals {
  background: url("../assets/nationals.jpg") center center / cover;
}
#gbm2 {
  background: url("../assets/gbm2.jpg") center center / cover;
}
#networking {
  background: url("../assets/networking.jpg") center center / cover;
}

@media screen and (max-width: 991px) {
  .flexc {
    flex-direction: column;
  }
  .left-text,
  .right-text {
    width: 100%;
    text-align: center;
    padding: 2rem;
    padding-bottom: 1rem;
  }

  .right-photo {
    width: 100%;
    height: 20rem;
    border: 1rem #8cc43c solid;
  }

  .left-photo {
    width: 100%;
    height: 20rem;
    border: 1rem solid #0c6cb4;
    order: 2;
  }
}
</style>
