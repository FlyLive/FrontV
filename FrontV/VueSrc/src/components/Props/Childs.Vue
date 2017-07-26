<template>
    <div>
        <h1>{{name}}</h1>
        <p v-on:click="shows">{{message}}</p>
        <p>{{paramsChanslate}}</p>
    </div>
</template>

<script>
export default {
    name: 'Childs',
    // 声明 props
    props: ['message','show'],
    // 就像 data 一样，prop 可以用在模板内
    // 同样也可以在 vm 实例中像“this.message”这样使用
    data: function () {
        return {
            name: '我是子组件',
            paramsChanslate:this.message+'重构'
        }
    },
    methods:{
        shows:function(){
            this.show('子组件')
        }
    },
    render:function(){
        
    }
}

</script>