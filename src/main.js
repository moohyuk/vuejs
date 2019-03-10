var app = new Vue({
    el: '#app',
    data: {
        todos: [
            { text: 'Vue.js 튜토리얼 작성하기' },
            { text: 'Webpack2 알아보기'},
            { text: '사이드 프로젝트 진행하기' }
        ],
        name: 'Vue',
        feelsgood: 'https://avatars3.githubusercontent.com/u/6947055',
        rabbit: true,
        value: 0
    }
});