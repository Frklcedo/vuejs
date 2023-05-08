<template>
  <h1>{{ title }}</h1>
  <p>Welcome...</p>
  <teleport v-if="showModal" to=".modals">
      <Modal theme="sale" @close="toggleModal">
          <h1>{{ header }}</h1>
          <p>{{ text }}</p>
          <template v-slot:links>
              <a href="#">sign up now</a>
              <a href="#">more info</a>
          </template>
      </Modal>
  </teleport>
  <teleport v-if="showModalTwo" to=".modals">
      <Modal theme="" @close="toggleModalTwo">
          <h1>Newsletter</h1>
          <p>Subscribe to get the latest news</p>
          <template v-slot:links>
              <a href="#">subscribe to newsletter</a>
          </template>
      </Modal>
  </teleport>
  <button @click.alt="toggleModal">open modal (alt)</button>
  <button @click="toggleModalTwo">open modal two</button>
</template>

<script>
 import Modal from './components/Modal.vue'

 export default {
   name: 'App',
   components: {
     Modal
   },
   data(){
     return {
       title: 'My first Vue App :)',
       header: 'Sign up for the Giveaway!',
       text: 'Grab your ninja swag for half price!',
       showModal: false,
       showModalTwo: false,
     }
   },
   methods: {
     handleClick(){
       console.log(this.$refs.name)
       this.$refs.name.classList.add('active')
       this.$refs.name.focus()
       this.title = `Hi, ${ this.$refs.name.value }`
     },
     toggleModal(){
       this.showModal = !this.showModal
     },
     toggleModalTwo(){
       this.showModalTwo = !this.showModalTwo
     }
   }
 }
</script>

<style>
 #app, .modals {
   font-family: Avenir, Helvetica, Arial, sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   text-align: center;
   color: #2c3e50;
   margin-top: 60px;
 }
 h1{
   border-bottom: 1px solid #ddd;
   display: inline-block;
   padding-bottom: 10px;
 }
</style>
