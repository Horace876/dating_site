<template>
    <div id="navbar-page">
        <nav class="navbar navbar-light navbar-expand-md navigation-clean-button">
            <div class="container">
                <a class="navbar-brand" href="#">+One</a>
                <button data-toggle="collapse" class="navbar-toggler" data-target="#navcol-1">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navcol-1">
                    <ul class="nav navbar-nav mr-auto">
                        <li class="nav-item" role="presentation"><router-link class="nav-link" :to="!login ? '/' : '/dashboard'">Home</router-link></li>
                        <li class="nav-item" role="presentation"><router-link class="nav-link" to="/about">About</router-link></li>
                    </ul>
                    <span class="navbar-text actions">
                        <template v-if="!login">
                            <router-link class="login" to="/login">Login</router-link>
                            <router-link class="btn btn-light action-button" role="button" to="/signup">Sign Up</router-link>
                        </template>
                        <template v-else>
                            <router-link class="login" to="/profile">{{user.fname}}</router-link>
                            <a class="btn btn-light action-button" role="button" to="#" @click="$emit('logout')">Logout</a>
                        </template>
                    </span>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>

  export default {
    name: 'Navbar',
    props: {
        login: Boolean, 
        user: Object,
    },
    data() {
        return {

        }
    },
    methods:{
    }
  }
</script>