<template>
  <div>
    <div class="header">
      <h1 style="text-align: center;">Our Events</h1>
      <p
        style="font-size: 2rem; text-align: center; font-style: italic"
      >Stay up to date with our calendar and see past events.</p>
    </div>
    <div id="calendar">
      <b-container class="container">
        <h2 style="color: white; font-weight: bold; text-align: center">Event Calendar</h2>
        <br />
        <iframe
          src="https://calendar.google.com/calendar/embed?src=bu.edu_6mqpq7s0mle0lf3s73an74meeo%40group.calendar.google.com&ctz=America%2FNew_York"
          style="border: 0; display: block; margin: auto;"
          width="95%"
          height="600"
          frameborder="0"
          scrolling="no"
        ></iframe>
      </b-container>
    </div>
    <div id="gallery">
      <b-container class="container">
        <h2 style="color: white; font-weight: bold; text-align: center">Past Events</h2>
        <br />
        <b-row>
          <b-col md="6">
            <img src="@/assets/gallery/1.png" alt class="gimage" />
          </b-col>
          <b-col md="6">
            <img src="@/assets/gallery/2.png" alt class="gimage" />
          </b-col>
        </b-row>
        <b-row>
          <b-col md="6">
            <img src="@/assets/gallery/3.png" alt class="gimage" />
          </b-col>
          <b-col md="6">
            <img src="@/assets/gallery/4.png" alt class="gimage" />
          </b-col>
        </b-row>
        <b-row>
          <b-col md="6">
            <img src="@/assets/gallery/5.png" alt class="gimage" />
          </b-col>
          <b-col md="6">
            <img src="@/assets/gallery/6.png" alt class="gimage" />
          </b-col>
        </b-row>
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

.container {
  padding-top: 4rem !important;
  padding-bottom: 4rem !important;
}

.gimage {
  width: 100%;
  margin: 0.5rem 0;
}

#calendar {
  background: #8cc43c;
}
#gallery {
  background: #0c6cb4;
}
</style>