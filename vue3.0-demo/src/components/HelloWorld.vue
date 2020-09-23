<!--
 * @Author: your name
 * @Date: 2020-09-21 14:48:13
 * @LastEditTime: 2020-09-23 16:50:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Vue3.0/vue3.0-demo/src/components/HelloWorld.vue
-->
<template>
    <h1>{{ msg }}</h1>
    <button @click="count++">count is: {{ count }}</button>
    <p>
        Edit
        <code>components/HelloWorld.vue</code> to test hot module replacement.
    </p>
    <h2 :style="{background:color}">x:{{position.x}} y:{{position.y}}</h2>
</template>

<script>
import { watch, reactive, toRefs, onMounted, isRef, ref, computed } from "vue";

export default {
    name: "HelloWorld",
    /**
     * @description: setup Vue3.0组件 Composition API入口
     * @param {type}  props:父组件传的值  context
     * @return {type}
     */
    props: {
        msg: String,
    },
    setup(props, context) {
        let count = ref(7);
        console.log(count.value);
        console.log(isRef(count));
        const position = reactive({});//创建响应式数据
        window.addEventListener("mousemove", (e) => {
            //不断变化的数据
            // console.log("mousemove", e.pageX, e.pageX);
            position.x = e.pageX;
            position.y = e.pageY;
        });

        /**
         * @description: 计算属性
         * @param {type} 
         * @return {type} 
         */
        const color = computed(()=>{
            const hex = num =>(num % 255).toString(16);
            return `#${hex(position.x) + hex(position.y) + '00'} `;
        })
        return {
            count,
            position,
            color
        };
    },
};
</script>
