<script>
 export default {
     props: ['delay'],
     data(){
         return {
             showBlock: false,
         }
     },
     mounted(){
         console.log('component mounted')
         setTimeout(() => {
             this.showBlock = true
         }, this.delay)
     },
     updated(){
         console.log(`component updated in ${ this.delay }ms`)
     },
     unmounted(){
         console.log('component unmounted')
     }
 }
</script>

<template>
    <div class="block" v-if="showBlock">
        <span>click me</span>
    </div>
</template>

<style>
 .block{
     max-height: 400px;
     border-radius: 20px;
     background-color: #0faf87;
     color: white;
     text-align: center;
     padding: 100px 0;
     margin: 40px auto;
 }
</style>
