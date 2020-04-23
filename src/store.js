/* eslint-disable */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    text: [],
    password: [],
    checkbox: false,
    radio: false,
    },
    mutations:{
        setText(state,strText){
            state.text = strText;
        },
        setPassword(state,strPassword){
            state.password = strPassword;
        },
        setCheckbox(state,booleanCheckbox){
            state.cheakbox = booleanCheckbox;
        },
        setRadio(state,booleanRadio){
            state.radio = booleanRadio;
        }
    },
    actions:{
            setText(context, text){
                context.commit('setText');
            },
            setPassword(context, password){
                context.commit('setPassword');
            },
            setCheckbox(context, cheakbox){
                context.commit('setCheckbox');
            },
            setRadio(context, setradio){
                context.commit('setRadio');

        }
    },

})