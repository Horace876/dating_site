<template>
  <div id="app" v-if="isLoaded">
    <Navbar :login="checkLoginStatus()" v-on:logout="logout" :ext="getExt()"></Navbar>

    <router-view v-on:login="login" :login="checkLoginStatus()" :ext="getExt()" />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      loginstat: false,
      loginstat: false,
      ext: {
        user: {},
        baseUrl:
          "http://localhost:3000/users/" ||
          "https://dating-server876.herokuapp.com/users/"
      },
      isLoaded: false
    };
  },
  beforeMount() {
    this.checkLogin();
  },
  methods: {
    logout: function() {
      this.loginstat = false;
      this.ext.user = null;
      localStorage.clear();
      this.$router.push("/"); // use replace?
    },
    login: function(values) {
      this.loginstat = true;
      this.ext.user = values;
      localStorage.setItem("userId", values._id);
      if (this.$route.path === "/" || this.$route.path === "/login") {
        this.$router.push("/dashboard");
      }
    },
    checkLoginStatus: function() {
      return this.loginstat;
    },
    checkLogin() {
      let id = localStorage.getItem("userId");
      if (!id) {
        this.isLoaded = true;
      } else {
        this.axios
          .get(this.ext.baseUrl + id)
          .then(data => {
            data = data.data;
            this.login(data);
            this.isLoaded = true;
          })
          .catch(() => {});
      }
    },
    getExt: function() {
      return this.ext;
    }
  }
};
</script>