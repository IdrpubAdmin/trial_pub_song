const app = new Vue({
    el: '#app',
    data: {
        message: '안녕하세요 Vue!'
    }
});
app.message = 'new message'

const app2 = new Vue({
    el: '#app-2',
    data: {
        message: '이 페이지는 ' + new Date() + ' 에 로드 되었습니다'
    }
});

const app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true
    }
});
//app3.seen = false -> 이거하면 메세지가 사라짐

var app4 = new Vue({
    el: '#app-4',
    data: {
        list: [
            { text: 'JavaScript 배우기' },
            { text: 'Vue 배우기' },
            { text: '무언가 멋진 것을 만들기' }
        ]
    }
});
app4.list.push({ text: 'New item' }); // 리스트 추가
app4.list.unshift({ text: 'html 배우기' }); // 맨앞에 추가

var app5 = new Vue({
    el: '#app-5',
    data: {
        message: '안녕하세요! Vue.js!'
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        }
    }
})

var app6 = new Vue({
    el: '#app-6',
    data: {
        message: '안녕하세요 Vue!'
    }
})


Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})

var app7 = new Vue({
    el: '#app-7',
    data: {
        groceryList: [
            { id: 0, text: 'Vegetables' },
            { id: 1, text: 'Cheese' },
            { id: 2, text: 'Whatever else humans are supposed to eat' }
        ]
    }
})


var obj = {
    foo: 'bar'
}
//Object.freeze(obj)  이걸 작성하면 버튼을 클릭해도 obj의 bar는 변경이 되지않는다
new Vue({
    el: '#app-8',
    data: obj
})

