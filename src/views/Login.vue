<template>
  <div id="login-page">
    <Alert v-if="error.status" :message="error.message"></Alert>
    <div class="container-fluid">
        <div class="row mh-100vh">
            <div class="col-10 col-sm-8 col-md-6 col-lg-6 offset-1 offset-sm-2 offset-md-3 offset-lg-0 align-self-center d-lg-flex align-items-lg-center align-self-lg-stretch bg-white p-5 rounded rounded-lg-0 my-5 my-lg-0" id="login-block">
                <div class="m-auto w-lg-75 w-xl-50">
                    <h2 class="text-info font-weight-light mb-5"><i class="fa fa-diamond"></i> Login</h2>
                    <form @submit="submitForm">
                        <div class="form-group">
                          <label class="text-secondary">Email</label>
                          <input v-model="form.email" class="form-control" type="text" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}$" inputmode="email" />
                        </div>
                        <div class="form-group">
                          <label class="text-secondary">Password</label>
                          <input v-model="form.pass" class="form-control" type="password" required />
                        </div>
                        <button class="btn btn-info mt-2">Log In</button>
                    </form>
                    <p class="mt-3 mb-0"><a class="text-info small" href="#">Forgot your email or password?</a></p>
                    <p class="mt-3 mb-0"><router-link class="text-info small" to="/signup">I don't have an account</router-link></p>
                </div>
            </div>
            <div class="col-lg-6 d-flex align-items-end" id="bg-block"></div>
        </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Login',
    data() {
        return {
          baseUrl: "http://localhost:3000/users/", 
          form:{
            email: '',
            pass: ''
          },
          error: {
            status: false,
            message: 'help'
          },
        }
    },
    methods:{
      submitForm:function(e){
        e.preventDefault();
        let query = this.baseUrl + "?q="+this.form.email+"&password="+this.form.pass;

        this.$http.get(query)
        .then(data => {  
          if(data.data.length > 0){
            this.$emit('login', data.data[0])
          }else{
            this.error.status = true
            this.error.message = "Email/Password is incorrect!"
            this.closeError();
          }
        }).catch(error => {
            this.error.status = true
            this.error.message = "We seem to have a problem connecting to the servers. Please try again later"
            this.closeError();
        })        
      }, 
      closeError:function(time = 5000){
        let _this = this

        setTimeout(function(){
          _this.error.status = false;
          _this.error.message = ''
        }, time)
      }
    }
  }
</script>