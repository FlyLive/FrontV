<template>
    <div>
        <p>{{data}}</p>
    </div>
</template>

<<script>
export default {
  name:'Route',
  data:function(){
      return{
        data:this.$route.params.params
      }
  },
  watch:{
    '$route' (to, from) {
        this.data = this.$route.params.params
      }
  }
}
</script>
