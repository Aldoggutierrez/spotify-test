import { defineStore } from "pinia";

export const useStore = defineStore('main',{
    state: () => {
        return {
            state:'',
            code: ''
        }
    },
    actions: {
        setCallback (data) {
            this.state = data.state
            this.code = data.code
            console.log(data);
            // sessionStorage.setItem('state',date.state)
            // sessionStorage.setItem('code',data.code)
        }
    }
})