<template>
  <footer style=" background: #1C5F73">
    <b-container class="footerFlex">
      <a class="bhacksLogo" @click="home()" href="#">
        <img src="@/assets/white.png" alt style="height: 4rem" />
      </a>
      <div class="socialMedia">
        <a href="https://www.facebook.com/sasebuchapter">
          <img src="@/assets/fb.svg" alt class="icon" />
        </a>
        <a href="https://www.instagram.com/bu_sase/">
          <img src="@//assets/insta.svg" alt class="icon" style="margin-bottom: -.2rem" />
        </a>
      </div>
      <a href="busase@bu.edu" class="email">busase@bu.edu</a>
    </b-container>
  </footer>
</template>

<script>
export default {
  name: "Foot",
  data() {
    return {};
  },
  methods: {
    home() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.footerFlex {
  display: flex;
  padding: 3rem 0;
}
.socialMedia {
  margin-left: 2rem;
  margin-top: 0.5rem;
}
.icon {
  margin: 0 0.5rem;
}
.email {
  margin-left: auto;
  text-decoration: none;
  color: white !important;
  font-size: 1.5rem;
  height: 2rem;
  margin-top: 1rem;
}
@media (max-width: 48rem) {
  .footerFlex {
    flex-direction: column;
  }
  .bhacksLogo,
  .socialMedia,
  .email {
    margin: 0.25rem auto;
  }
}
</style>