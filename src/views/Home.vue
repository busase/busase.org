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
            href="https://docs.google.com/forms/d/e/1FAIpQLSd97STQdGRzF_XyJZNkFebqxPz_RAx5cKw7shV7vOiIJfyb2Q/viewform?usp=sf_link"
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
          <h2 style="margin: 0;">General Body Meeting 1</h2>
          <i style="font-size: 1.2rem;">Date: February 5th | Time: 7-8 PM EST</i>
          <br />
          <br />
          <p
            style="font-size: 1.25rem"
          >SASE will host its first General Body Meeting of 2021 on Friday, February 5th at 7 - 8 PM EST. Meet our wonderful e-board, mingle with past and present members, and come learn more about our upcoming events at BU SASE. We have some fun icebreakers planned, a quick raffle to win a $20 gift card, and some important event announcements for the semester. Hope to see you there soon!</p>
        </div>
        <div class="right-photo" id="gbm1"></div>
      </div>
      <div class="flexc">
        <div class="left-photo" id="nerc"></div>
        <div class="right-text">
          <h2 style="margin: 0;">NERC 2021</h2>
          <i style="font-size: 1.2rem;">Date: February 27th + March 6th</i>
          <br />
          <br />
          <p style="font-size: 1.25rem">
            The Northeast Regional Conference 2021 is upon us within a month! The STEM conference will be held on Saturday, February 27th and the virtual STEM Career Fair will be held on Saturday, March 6th. Every year, NERC provides you a professional platform to meet other SASE affiliates and company representatives across the northeast. This is a wonderful opportunity to search for internships and full-time job offers as well as improve your overall networking skills. Darrion Nguyen, deemed the "Bill Nye of Millenials" for his excellence in blending comedic skits with scientific thought will be the conference's main keynote speake. Finally, the list of companies for the career fair are as follows: University of Michigan, Lockheed Martin, GE Aviation, FENIX International Group, Drexel University Engineering, MIT Lincoln Labs, Exelon, Stonefield Engineering & Design, Boston Scientific, FDNY, Drexel CCI, and Dell Boomi.
          </p>
          <p style="font-size: 1.25rem">
            If interested, please sign our 
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfHld37ng07Cl2UW7OOl-JBvgMEl4EjDZ72K9l5dgQCRMgbIQ/viewform"
              style="color: white; text-decoration: underline"
            >interest form</a> to be eligible for our chapter package registration discount. For more information about the conference, you can visit 
            <a
              href="http://saseneregion.weebly.com/"
              style="color: white; text-decoration: underline"
            >this website</a>.
          </p>
        </div>
      </div>
      <div class="flexc">
        <div class="left-text">
          <h2 style="margin: 0;">Innovation Symposium</h2>
          <i style="font-size: 1.2rem;">Date: February 26th | Time: 6:30-8:30 PM EST</i>
          <br />
          <br />
          <p
            style="font-size: 1.25rem"
          >Save the date as SASE will be hosting its annual Innovation Symposium on Friday, February 26th from 6:30 - 8:30 PM! Innovation Symposium is a forum where we invite professors, students and company representatives across the greater Boston area to present their research and discuss the contributions of their field to the advancement of STEM. For those students looking to get involved in research, this event provides you with an inside-scoop of some of the latest efforts in STEM research across various fields of study. Speakers and representatives will be announced in the coming weeks so stay tuned!</p>
        </div>
        <div class="right-photo" id="innovation"></div>
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
#nerc {
  background: url("../assets/nerc.jpg") center center / cover;
}
#innovation {
  background: url("../assets/innovation.jpg") center bottom / cover;
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
