// App 1
var app = new Vue({
    el: '#app',
    data: {
        firstName: 'Sonny',
        lastName: 'STP',
        age: 29
    }
}) 



// App 2
var app2 = new Vue({
    el: '#app-2',
    data: {
        okay: true
    }
})
// app2.okay = true


// App 3 
var app3 = new Vue({
    el: '#app-3',
    data: {
        python: [
            {framework: 'Django' },
            {framework: 'Flask' },
            {framework: 'Pyramid'}
        ]
    }
})


// App 4
var app4 = new Vue({
    el: '#app-4',
    data: {
        message: "Hello, NU students"
    },
    methods: {
        changeMessage: function() {
            this.message = this.message.split('').reverse().join('')
        }
    }
})


// App 5
var app5 = new Vue({
    el: '#app-5',
    data: {
        message: 'Hello'
    }
})

