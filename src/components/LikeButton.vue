<template>
  <div id="like-button">
    <p class="small mb-0">
        <a class="like" v-if="checkliked()" @click="like()">
            <i class="fa fa-heart mr-2"></i>
            <span class="font-weight-bold">Like</span>
        </a>
        <a class="liked" v-else  @click="unlike()">
            <i class="fas fa-heart-broken mr-2"></i><span  class="font-weight-bold">Unlike</span>
        </a>
    </p>
  </div>
</template>


<script>

  export default {
    name: 'LikeButton', 
    //props: ['likeStatus'],
    data() {
        return {
            items: [
              { name: 'Foo Bar', description: "Phones" },
              { name: 'Bar Foo', description: "Computers" },
              { name: 'Bar Fight', description: "Foo" },
              { name: 'Foo Base', description: "Drea" }
            ],
            liked:[], 
            hover: false, 
            id: this.$route.query.id,
        }
    },
    methods: {
        like:function(){
            this.liked.push(this.id);
        },
        unlike:function(){
            this.liked = this.liked.filter(x=>x!==this.id);
        }, 
        checkliked:function(){
            return this.liked.includes(this.id) ? false : true;
        }
    }
  }
</script>