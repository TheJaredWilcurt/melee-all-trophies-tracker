<template>
  <div class="login-view-wrapper">
    <div class="login-view">
      <button
        class="start-new-session-button"
        @click="resume"
      >
        Resume Session
      </button>
      <button
        class="start-new-session-button"
        @click="wsCreate"
      >
        Start New Session
      </button>
      <div class="past-sessions-container">
        <ul>
          <li
            v-for="session in sessions"
          >
            {{ session }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SessionLogin',
  methods: {
    resume: function () {
      return;
    },
    ...Pinia.mapActions(store, [
      'wsCreate'
    ])
  },
  computed: {
    ...Pinia.mapState(store, [
      'sessions'
    ])
  }
};
</script>
