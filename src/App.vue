<template>
  <div id="app" class="ct-App">
    <div class="ct-App-topbar">
      <img src="./assets/control-logo.svg">
      <div class="ct-App-topbar-title">
        Welcome, {{ user }}
      </div>
    </div>
    <div class="ct-App-router-container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'app',
  data () {
    return {
      //
    }
  },
  computed: {
    ...mapGetters([
      'user'
    ])
  }
}
</script>

<style lang="scss">
  // Variables
  $primary:     #3a98f3;
  $topbar:      #FAFAFA;
  $font-family: 'Lato', -apple-system, BlinkMacSystemFont,
                "Segoe UI", "Roboto", "Oxygen",
                "Ubuntu", "Cantarell", "Fira Sans",
                "Droid Sans", "Helvetica Neue", sans-serif;

  // Normalize
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }


  .ct-App {
    font-family: $font-family;

    &-topbar {
      background: $topbar;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 3rem;

      &-title {
        letter-spacing: 0.5px;
      }
    }

    &-router-container {
      display: flex;
      width: 100%;
      padding-top: 5rem;
      justify-content: center;
    }
  }
</style>
