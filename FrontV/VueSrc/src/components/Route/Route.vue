<template>
    <div>
        <p>{{}}</p>
    </div>
</template>

<<script>
export default {
  name:'route',
  data:function(){
      return{
        data:s
      }
  },
  watch:{
      '$route'(to,from){
        this.data = from
      }
  }
}
</script>
