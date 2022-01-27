import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counterStore', {
    state: () => ({
        count: 0,
        name: 'ryan'
    }),
    
    getters: {
        doubleCount: (state) => {
            state.count * 2
        }
    },
    
    actions: {
        reset() {
            this.count = 0
        },
        addOne() {
            this.count++
        }
    }
})
