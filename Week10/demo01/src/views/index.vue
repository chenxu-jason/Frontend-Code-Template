<template>
    <button :class="btnClass">
        <span><slot></slot></span>
    </button>
</template>
<script>
import {ref, computed, watchEffect,} from 'vue'
import {handleButton} from './trButtonCompositionAPI'
export default {
    props: {
        size: String
    },
    setup(props){
        const {btnClass} = handleButton(props)
        return {btnClass}
    },
}

</script>
<style>
.tr-button{
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    border: 1px solid #dcdfe6;
    color: #606266;
    text-align: center;
    box-sizing: border-box;
    margin: 0;
    transition: .3s;
    font-weight: 500;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
}
.tr-button:focus, .tr-button:hover {
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
}
.tr-button-size-medium{
    padding: 10px 20px;
    font-size: 14px;
    border-radius: 4px;
}
.tr-button-size-small{
    padding: 9px 15px;
    font-size: 12px;
    border-radius: 3px;
}
.tr-button-size-mini{
    padding: 7px 15px;
    font-size: 12px;
    border-radius: 3px;
}
</style>
