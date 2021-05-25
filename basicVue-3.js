
var app = new Vue ({
    el: '#app',
    data () {
        return {
            info: null,
            errored: false
        }
    },
    mounted () {
        axios.get('http://127.0.0.1:8000/api/tasks/')
        .then(response => {this.info = response.data
        })
        .catch(error => {
            console.log(error)
            this.errored = true
        })
    },
})

// title, description, created_on, complete