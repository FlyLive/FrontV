<template>
    <div>
        <p v-on:click="showSomething('父组件')">{{count}}</p>
        <input v-model='params'/>
        <child :message="params" :show='showSomething'></child>
    </div>
</template>

<script>
import Child from './Childs'
export default {
    name: 'Father',
    // 技术上 data 的确是一个函数了，因此 Vue 不会警告，
    // 但是我们返回给每个组件的实例的却引用了同一个data对象
    data: function () {
        return {
            count: '我是父组件',
            params:'我是参数'
        }
    },
    methods:{
        showSomething:function(event){
            console.log('我是父组件定义的事件 事件源：' + event);
        }
    },
    components: {
        Child
    }
}
</script>