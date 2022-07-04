<template>
    <p>hola</p>
</template>
<script setup>
import { useStore } from '../stores/mainStore'

const store = useStore()

const props = defineProps({
  code: String,
  state:String
})

console.log(props.code,props.state);

</script>