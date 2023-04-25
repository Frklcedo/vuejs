const app = Vue.createApp({
  // template: '<h2>I am the template</h2>'
  data(){
    return {
      showBooks: false,
      title: 'The Final Empire',
      author: 'Brandon Sanderson',
      age: 45,
      x: false,
      y: false,
    }
  },
  methods: {
    // changeTitle(title){
    //   this.title = title
    //   // this.title = 'Words of Randiance'
    // }
    toggleShowBooks(){
      this.showBooks = !this.showBooks
    },
    handleEvent(e, data){
      console.log(e, e.type)
      if(data){
        console.log(data)
      }
    },
    handleMouseMove(e){
      this.x = e.offsetX
      this.y = e.offsetY
    }
  },
})

app.mount('#app')
