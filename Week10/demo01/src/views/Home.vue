<template>
    <div>
        <h1>开放API</h1>
        <p>控制大小变化方法handleSize</p>
        <div style="text-align:center;margin:0 450px">
            <div style="display:flex;justify-content: space-between;">
                <tr-button @click="handleSize('default')">变大</tr-button>
                <tr-button size="medium" @click="handleSize('medium')">变中等</tr-button>
                <tr-button size="small" @click="handleSize('small')">变小</tr-button>
                <tr-button size="mini" @click="handleSize('mini')">变迷你</tr-button>
            </div>
        </div>
        <h1>按钮展示</h1>
        <tr-button :size="btnSize">按钮</tr-button>
    </div>
</template>
<script>
import trButton from './index.vue'
import {ref} from 'vue'
export default {
    setup(){
        const btnSize = ref('default')
        function handleSize(type){
            btnSize.value = type
        }
        return {
            handleSize,
            btnSize
        }
    },
    components:{
        trButton
    }
}

</script>
