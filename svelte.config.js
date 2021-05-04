const production = process.env.NODE_ENV === 'production'
function babelOptions() {
    plugins: production ? ["transform-remove-console"] : []
}

module.exports = {
    preprocess: require('svelte-preprocess')({
        scss: {
            prependData: '@import "./src/scss/main.scss";'
        },
        postcss: {
            plugins: [
                require('autoprefixer')()
            ]
        },
        //스벨트 컴포넌트의 스크립트 태그를 변환할 수 있는 기능 제공(콘솔도 정상적으로 삭제가능)
        babel: babelOptions()
    })
}