<template>
  <div>
    <router-view></router-view>
    <h1>{{ msg }}</h1>
    <input v-model='msg' />
    <Button v-on:click="counter" type="primary">增加1</Button>
    <p>该按钮点击了{{count}}次</p>
    <a href="/#/Father">到Father</a>
    <router-link :to="{name:'Route',params:{id:123}}">转到Route</router-link>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data: function () {
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
