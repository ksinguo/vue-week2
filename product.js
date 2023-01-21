const app = Vue.createApp({
    data() {
        return {
               apiUrl: 'https://vue3-course-api.hexschool.io/v2',
               apiPath: 'ksin588',
               products:[],
               detail:{}

        }
    },
    methods: {
        getData(){
            axios(`${this.apiUrl}/api/${this.apiPath}/admin/products`)
            .then((res)=>{
                console.log(res.data.products)
                this.products = res.data.products
                console.log(this.products)
            })
            .catch((err)=>{
                console.log(err)
            })
        },
        check(){
            axios.post(`${this.apiUrl}/api/user/check`)
            .then((res)=>{
                console.log(res.data)
                this.getData();
            })
            .catch((err)=>{
                console.log(err.data)
                alert('身分驗證錯誤，請重新輸入帳號密碼')
                window.location='login.html'
            })
        }
    },
    mounted() {
        const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*\=\s*([^;]*).*$)|^.*$/, "$1")
        axios.defaults.headers.common['Authorization'] = token;
        this.check();
    },
})
app.mount('#app')