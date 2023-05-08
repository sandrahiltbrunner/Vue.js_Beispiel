const HelloWorld = {
    template: '<h1>Hello World!</h1>'
  }
  
  Vue.createApp({
    components: {
      'hello-world': HelloWorld
    }
  }).mount('#app')
