<template>
  <div>
    <div class="header">
      <b-container>
      <h1 style="text-align: center;">Networking Night</h1>
      <p
        style="font-size: 2rem; text-align: center; font-style: italic"
      >It’s that time of the year! SASE is excited to host our third annual Networking Night on October 23rd, 6:30-8:30PM EST virtually on Zoom. </p>
      <b-button
            pill
            class="join"
            variant="outline-dark"
            href="https://bostonu.zoom.us/j/93185004713?pwd=UlJZajVPMHpqVmVuTEI2cHlBYkpDUT09"
          >Zoom Link!</b-button>
      </b-container>
    </div>
    <div id="calendar">
      <b-container class="container">
        <div class="leftCard">
          <div class="pic one"></div>
          <div class="text">
            <h2>GE Aviation</h2>
            <p>GE Aviation, an operating unit of GE (NYSE: GE), is a world-leading provider of jet and turboprop engines, as well as integrated systems for commercial, military, business and general aviation aircraft. GE Aviation has a global service network to support these offerings. </p>
            <h5>Speakers: Shazif Shaikh & Kusha Ansari</h5>
              <p style="margin: 0">HPC Rotor Design Engineer.</p>
              <p style="margin: 0">Part of the GE Edison Engineering Development Program.</p>
          </div>
        </div>
        <div class="rightCard">
          <div class="text">
            <h2>P&G</h2>
            <p>Our brands are trusted in millions of living rooms, kitchens, laundry rooms, and bathrooms—and have been passed down from generation to generation. Over the course of 181 years, they’ve challenged convention, led innovation, and helped shape culture. But no matter how much we grow, we always keep ourselves grounded in our deep-rooted purpose, values, and principles. We’ve done it for over 66,000 days, and we don’t plan on stopping anytime soon.
            </p>
            <h5>Speakers: Larry Chan & Kristy Chan</h5>
              <p style="margin: 0">Larry works as the Director Metals Stamping and Blades Equipment Engineering at P&G.</p>
              <p style="margin: 0">Larry has been with P&G for 27 years.</p>
          </div>
           <div class="pic two"></div>
        </div>
        <div class="leftCard" style="margin-bottom: 0;">
          <div class="pic three"></div>
          <div class="text">
            <h2>Takeda</h2>
            <p>Takeda is a patient-focused, values-based, R&D-driven global biopharmaceutical company committed to bringing Better Health and a Brighter Future to people worldwide. Our passion and pursuit of potentially life-changing treatments for patients are deeply rooted in over 230 years of distinguished history in Japan.</p>
            <h5>Speaker: Ben Chew</h5>
              <p style="margin: 0">BU SASE Alum ‘20.</p>
              <p style="margin: 0">Works in the IT department for Takeda.</p>
               <b-button
            pill
            class="join"
            style="margin: 1rem 0 0 0; font-size: 1rem; width: 10rem; padding: .25rem;"
            variant="outline-dark"
            href="https://forms.gle/uAyyuGZMmP7RaKpJA"
          >Interest Form</b-button>
          </div>
        </div>
      </b-container>
    </div>
    <div id="gallery">
      <b-container class="container">
         <div class="rightCard" style="margin-top: 0;">
          <div class="text">
            <h2>Bloomberg</h2>
            <p>Bloomberg is the global leader in business and financial data, news and insight. Using the power of technology, we connect the world’s decision makers to accurate information on the financial markets – and help them make faster, smarter decisions.
            </p>
            <h5>Speakers: Jack "Hanchong" Jin</h5>
              <p style="margin: 0">BU SASE Alum ‘20.</p>
              <p style="margin: 0">Software Engineer at Bloomberg LP.</p>
          </div>
           <div class="pic four"></div>
        </div>
        <div class="leftCard">
          <div class="pic five"></div>
          <div class="text">
            <h2>Bank of America</h2>
            <p>At Bank of America, we have a clear purpose to help make financial lives better through the power of every connection. We fulfill this purpose through our commitment to responsible growth, which includes a focus on environmental, social and governance (ESG) leadership. Integrated across our eight lines of business — our ESG focus reflects our values, ensures we are holding ourselves accountable, presents tremendous business opportunity, and allows us to create shared success with our clients and communities. </p>
            <h5>Speaker: Rachel Yang</h5>
              <p style="margin: 0">BU SASE Alum ‘20.</p>
              <p style="margin: 0">Software Engineer at Bank of America.</p>
              <p style="margin: 0">Has interned with Northrop Grumman and Optum in the past.</p>
          </div>
        </div>
        <div class="rightCard">
          <div class="text">
            <h2>Boston Scientific</h2>
            <p>Boston Scientific is dedicated to transforming lives through innovative medical solutions that improve the health of patients around the world. Our work is guided by core values that define Boston Scientific culture and empower our employees.
            </p>
            <h5>Speaker: Aaron Silva</h5>
              <p style="margin: 0">Senior Software Engineer at Boston Scientific.</p>
              <p style="margin: 0">BU SASE Alum ‘14.</p>
              <p style="margin: 0">Biomedical Engineering Major.</p>
              <p style="margin: 0">President of the SASE Professional Boston Chapter.</p>
          </div>
           <div class="pic six"></div>
        </div>
      </b-container>
    </div>
  </div>
</template>

<script>
export default {
  name: "events",
};
</script>

<style scoped>
.header {
  background: #f1faee;
  padding-top: 8rem;
  padding-bottom: 3rem;
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

.join:hover {
  color: #ccc;
}

.leftCard, .rightCard {
  display: flex;
  flex-direction: row;
  background: white;
  padding: .5rem;
  border-radius: 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.rightCard{
  text-align: right;
}

.pic {
  flex: 0 0 400px;
}

.one {
  background: url("../assets/networking/GE.png") no-repeat center center/cover;
}
.two {
  background: url("../assets/networking/P&G.png") no-repeat center center/cover;
}
.three {
  background: url("../assets/networking/Takeda.png") no-repeat center center/cover;
}
.four {
  background: url("../assets/networking/Bloomberg.png") no-repeat center center/cover;
}
.five {
  background: url("../assets/networking/BOFA.png") no-repeat center center/cover;
}
.six {
  background: url("../assets/networking/BosSci.png") no-repeat center center/cover;
}

#calendar {
  background: #8cc43c;
  padding-top: 1rem;
  padding-bottom: .5rem;
}
#gallery {
  background: #0c6cb4;
  padding-top: .5rem;
  padding-bottom: 1rem;
}

@media screen and (max-width: 991px) {
  .leftCard, .rightCard {
    flex-direction: column;
    text-align: left;
  }

  .pic{ 
    flex: 0 0 200px;
  }

  .two {
    flex: 0 0 300px;
  }
  .three {
    flex: 0 0 300px;
  }
  .six {
    flex: 0 0 300px;
  }

  .rightCard .pic {
    order: 0;
  }
  .rightCard .text {
    order: 1;
  }
}

@media screen and (max-width: 991px) {
  .leftCard, .rightCard {
    flex-direction: column;
  }

  .pic{ 
    flex: 0 0 200px;
  }

  .rightCard .pic {
    order: 0;
  }
  .rightCard .text {
    order: 1;
  }
}
</style>