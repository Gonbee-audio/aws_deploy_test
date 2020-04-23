import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
    text: '',
    password: '',
    checkbox: false,
    radio: false,
    },
    mutations:{
        setText(state,str){
            state.text = str.text
        },
        setPassword(state,str){
            state.password = str.password
        },
        setCheckbox(state,boolean){
            state.cheakbox = boolean.checkbox
        },
        setRadio(state,boolean){
            state.radio = boolean.radio
        }
    },
    actions:{
            setText(context, str){
                context.commit('setText')
            },
            setPassword(context, str){
                context.commit('setPassword')
            },
            setCheckbox(context, boolean){
                context.commit('setCheckbox')
            },
            setRadio(context, boolean){
                context.commit('setRadio')

        }
    },

})