<template>
    <div id="CardHolder">
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-lg-3 card-item" v-for="x in 3" :key="x">
                    <div class="card border-dark">
                        <div class="card-header text-light">
                            <h5 class="m-0"><router-link to="\profile">{{items[x-1].name}}</router-link></h5>
                        </div>
                            <img class="img-fluid card-img w-100 d-block rounded-0" src="../assets/dp/th-01.jpg" />
                        <div class="card-body">
                            <p class="card-text">{{items[x-1].description}}</p>
                        </div>
                        <div class="d-flex card-footer">
                            <button class="btn btn-dark btn-sm like" type="button"><i class="fa fa-heart"></i> Like</button>
                            <button class="btn btn-outline-dark btn-sm ml-auto message" type="button"><i class="fa fa-envelope"></i> Message</button>
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
    data() {
        return {
            items: [
              { name: 'Foo Bar', description: "Phones" },
              { name: 'Bar Foo', description: "Computers" },
              { name: 'Bar Fight', description: "Foo" },
              { name: 'Foo Base', description: "Drea" }
            ],
        }
    },
    methods: {
    }
  }
</script>