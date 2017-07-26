<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <input v-model='msg' />
    <button v-on:click="counter">增加1</button>
    <p>该按钮点击了{{count}}次</p>
    <a href="/#/Father">到Props</a>
  </div>
</template>

<script>
export default {
  name:'Hello',
  data:function() {
    return {
      msg: 'Welcome to Your Vue.js App',
      count: 0
    }
  },
  methods: {
    counter: function () {
      this.count += 1;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
