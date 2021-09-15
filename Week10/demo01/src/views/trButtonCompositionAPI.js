import {watchEffect,ref} from 'vue';
export function handleButton(props){
    const btnClass = ref('tr-button')
    watchEffect(()=>{
        btnClass.value= 'tr-button' + ' ' + 'tr-button-size-'+props.size
    })
    return {
        btnClass
    }
}
