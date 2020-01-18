<template>
  <div id="app">
    <Navbar :login="checkLoginStatus()" v-on:logout="logout" :user="getUser()"></Navbar>
    
    <router-view v-on:login="login" :login="checkLoginStatus()" :user="getUser()"/>
  </div>
</template>

<script>
  export default {
    name:"App",
    data() {
        return {
          loginstat: false, 
          loginstat: false,
          user:{}
        }
    },
    created(){
        this.checkLogin();
    },
    methods:{
        logout:function(){
            this.loginstat = false
            this.user = {}
            this.$router.push('/')
        },
        login:function(values){
            this.loginstat = true
            this.user = values
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
        getUser:function(){
          return this.user
        }
    }
  }
</script>