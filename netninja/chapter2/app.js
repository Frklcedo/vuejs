const app = Vue.createApp({
  // template: '<h2>I am the template</h2>'
  data(){
    return {
      url: 'https://vuejs.org/guide/introduction.html',
      google: 'https://google.com',
      showBooks: false,
      books: [
        {title: 'The Lord Of The Rings', author: 'Tolkien'},
        {title: 'The Hobbit', author: 'Tolkien'},
        {title: 'La Vie Intellectuelle', author: 'Sertillanges'},
      ],
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
