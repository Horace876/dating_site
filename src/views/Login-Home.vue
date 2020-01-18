<template>
  <div id="dashboard">
    <div class="container-fluid">
        <div class="px-lg-5">
            <div class="row">
                <div class="col-xl-3 col-lg-4 col-md-6 mb-4" v-for="x in items" :key="x">
                    <div class="bg-white rounded shadow-sm">
                        <router-link :to="{ name: 'profile', query: { id: x.id } }"><img :src="getImages(x.id)" alt class="img-fluid card-img-top" /></router-link>
                        <div class="p-4">
                            <h5><router-link :to="{ name: 'profile', query: { id: x.id } }" class="text-dark">{{x.fname + ' ' + x.lname}}</router-link></h5>
                            <p class="small text-muted mb-0">{{x.description}}</p>
                            <div class="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4">
                                <LikeButton></LikeButton>
                                <div class="badge badge-danger px-3 rounded-pill font-weight-normal">Message</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CardHolder', 
    props: {
        login: Boolean, 
        user: Object,
    },
    data() {
        return {
            items: [],
            liked:[], 
            hover: false
        }
    },
    created(){
        this.checkLogin();
        
        this.$http.get('http://localhost:3000/users/?id_ne='+this.user.id)
        .then(data => {
            this.items = data.data
        }).catch(error => {
            console.log(error)
        })
    },
    methods: {
        getImages: (img)=>{
            try{
                return require("../assets/dp/th-0"+img+".jpg")
            }catch(e){
                return require("../assets/dp/th-01.jpg")
            }
        },
        like:function(id){
            this.liked.push(id);
        },
        unlike:function(id){
            this.liked = this.liked.filter(x=>x!==id);
        }, 
        checkliked:function(id){
            return this.liked.includes(id) ? false : true;
        },
        checkLogin:function(){
            if(!this.login){
                this.$router.push('/')
            }
        }
    }
  }
</script>