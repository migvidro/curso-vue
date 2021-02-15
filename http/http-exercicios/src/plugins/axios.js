import Vue from 'vue';
import axios from 'axios';

// axios.defaults.baseURL = 'https://curso-vue-fc937-default-rtdb.firebaseio.com/';
// axios.defaults.headers.common['Authorization'] = 'abc123';
// axios.defaults.headers.get['Accepts'] = 'application/json';

Vue.use({
    install(Vue){
        // Vue.prototype.$http = axios;
        Vue.prototype.$http = axios.create({
            baseURL: 'https://curso-vue-fc937-default-rtdb.firebaseio.com/',
            headers: {
                "Authorization": 'abc1234'
            }
        });
        Vue.prototype.$http.interceptors.request.use(config => {
            // eslint-disable-next-line
            console.log(config.method);
            // if(config.method == 'post'){
            //     config.method = 'put';
            // }
            return config;
        }, error => Promise.reject(error));

        // Vue.prototype.$http.interceptors.response.use(resp => {
        //     const array = [];
        //     for(let chave in resp.data){
        //         array.push({ id: chave, ...resp.data[chave] });
        //     }
        //     resp.data = array;
        //     return resp;
        // }, error => Promise.reject(error));
    }
});