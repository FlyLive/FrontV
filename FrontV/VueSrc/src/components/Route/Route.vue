<template>
    <div>
        <p>路由参数:{{data}}</p>
    </div>
</template>

<<script>
export default {
  name:'Route',
  data:function(){
      return{
        data:this.$route.params.id
      }
  },
  watch:{
    '$route' (to, from) {
        this.data = this.$route.params.id
      }
  }
}
</script>
