<template>
  <div id="app">
    <Navbar :login="checkLoginStatus()" v-on:logout="logout" :ext="getExt()"></Navbar>
    
    <router-view v-on:login="login" :login="checkLoginStatus()" :ext="getExt()"/>
  </div>
</template>

<script>
  export default {
    name:"App",
    data() {
        return {
          loginstat: false, 
          loginstat: false,
          ext:{
            user:{},
            baseUrl: "https://dating-server876.herokuapp.com/users/", 
          }
        }
    },
    created(){
        this.checkLogin();
    },
    methods:{
        logout:function(){
            this.loginstat = false
            this.ext.user = {}
            this.$router.push('/')
        },
        login:function(values){
            this.loginstat = true
            this.ext.user = values
            this.$router.push('/dashboard')
        },
        checkLoginStatus:function(){
          return this.loginstat;
        },
        checkLogin:function(){
            if(!this.login){
                this.$router.push('/dashboard')
            }
        },
        getExt:function(){
          return this.ext
        }
    }
  }
</script>