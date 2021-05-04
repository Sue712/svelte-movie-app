const production = process.env.NODE_ENV === 'production'
function babelOptions() {
    plugins: production ? ["transform-remove-console"] : []
}

module.exports = {
    mount: {
        public: '/',
        src: '/_dist_'
    },
    plugins: [
        '@snowpack/plugin-svelte',
        ['@snowpack/plugin-babel', {
            //일반 자바스크립트에서 콘솔지우는 옵션
            transformOptions: babelOptions()
        }],
        '@snowpack/plugin-sass',
        '@snowpack/plugin-dotenv',
        '@snowpack/plugin-optimize'
    ],
    alias: {
        '~': './src'
    },
}