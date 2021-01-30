<template>
  <div style="position: absolute; width: 100%; z-index: 1">
    <!-- <b-navbar toggleable="md" type="light" variant="light" class="navBack">
      <b-navbar-brand>
        <router-link to="/">
          <img src="../assets/SASE.png" alt style="height: 2.5rem" />
        </router-link>
      </b-navbar-brand>
      <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>
      <b-collapse id="nav-text-collapse" is-nav>
        <b-navbar-nav style="margin-left: auto">
          <b-nav-text>
            <router-link to="networking" class="link">Networking Night</router-link>
          </b-nav-text>
          <b-nav-text>
            <router-link to="events" class="link">Events</router-link>
          </b-nav-text>
          <b-nav-text>
            <router-link to="eboard" class="link">E-Board</router-link>
          </b-nav-text>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar> -->
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
.navBack {
  background: rgba(255, 255, 255, 0) !important;
}

.link {
  color: black;
  text-decoration: none;
  padding: 0 1rem;
}

@media screen and (max-width: 767px) {
  .navBack {
    background: rgba(255, 255, 255) !important;
  }
}
</style>