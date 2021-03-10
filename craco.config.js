/* eslint-disable @typescript-eslint/no-var-requires */
const CracoAlias = require('craco-alias')
const path = require('path')

module.exports = {
    plugins: [
        {
            plugin: CracoAlias,
            options: {
                source: 'tsconfig',
                baseUrl: './',
                tsConfigPath: './tsconfig.paths.json',
            },
            aliases: {
                '@': path.resolve(__dirname, './src'),
            },
        },
    ],
    style: {
        postcss: {
            plugins: [require('tailwindcss'), require('autoprefixer')],
        },
    },
}
