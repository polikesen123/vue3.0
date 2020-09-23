# vue3.0学习
### Vite 初始化一个Vue3.0项目
```
    npm init vite-app 项目名
    cd 项目名
    npm run dev
```
### Vue3.0新特性
1. createApp
```
    import { createApp } from 'vue'
    import App from './App.vue'
    import './index.css'
    createApp(App).mount('#app')
```
2. template模板里可以使用多个根元素，不再限制为一个根元素
3. composition API
    - setup函数
    - ref 声明基本数据类型数据 ，如：数字，字符串
    - watch 监听器
    - watchEffect 监听props
    - computed 计算属性
    - reactive 创建响应式数据 ，如：声明单一对象
```
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
```