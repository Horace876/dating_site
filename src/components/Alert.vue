<template>
    <div id="Alert">
        <div class="alert alert-danger alert-dismissible fade show text-center" style="position: absolute; z-index: 999; width: 100%; border-radius: 0;">
            {{message}}
        </div>
    </div>
</template>

<script>

  export default {
    name: 'Alert',
    props: {
        message: String
    },
    data() {
        return {
            
        }
    },
    methods: {
    }
  }
</script>