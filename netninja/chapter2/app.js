const app = Vue.createApp({
  // template: '<h2>I am the template</h2>'
  data(){
    return {
      url: 'https://vuejs.org/guide/introduction.html',
      google: 'https://google.com',
      showBooks: false,
      showBoxes: false,
      books: [
        {title: 'The Final Empire', author: 'Brandon Sanderson', img: 'assets/tfe.jpg', isFav: false},
        {title: 'Lord Of The Rings', author: 'Tolkien', img: 'assets/lotr.jpg', isFav: true},
        {title: 'The Hobbit', author: 'Tolkien', img: 'assets/hobbit.jpg', isFav: false},
        {title: 'La Vie Intellectuelle', author: 'Sertillanges', img: 'assets/lvi.jpg', isFav: true},
      ],
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
    },
    favBook(e, book){
      book.isFav = !book.isFav
    }
  },
})

app.mount('#app')
