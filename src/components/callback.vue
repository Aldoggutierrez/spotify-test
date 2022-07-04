<template>
  <div>
    <p>code: {{ props.code }}</p>
    <p>state: {{ props.state }}</p>
    <p>token: {{ props.token }}</p>
  </div>
</template>
<script setup>
import { useStore } from '../stores/mainStore'

const store = useStore()

var data = new URLSearchParams();

data.append('code',props.code)
data.append('grant_type','authorization_code')
data.append('redirect_uri','http://localhost:3000/callback')


fetch('https://accounts.spotify.com/api/token',{
  method: 'POST',
  headers:{
    'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization': 'Basic YjQ1NTk1NjJjNWNjNDYxZmJjMDk4ODRkNjg5ZGJjODI6NjA3YThmZDQ1MmI0NGI0MTk3MmU3ZDI2NDkxMTljZmY='
  },   
  body: data
}).then((response)=>{
  console.log(response);
}).catch((error) =>{
  console.log(error);
})

const props = defineProps({
  code: String,
  state:String,
  token: String
})

console.log(props.code,props.state);

</script>