module.exports = {
    purge: {
        enabled: process.env.WEBPACK_DEV_SERVER === 'true' && process.argv.join(' ').indexOf('build') !== -1,
        content: ['./src/**/*.{html,ts}'],
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                yellow: {
                    50: '#ffedd7',
                    100: '#ffe5c6',
                    200: '#ffdcb1',
                    300: '#ffcf94',
                    400: '#ffc379',
                    500: '#f79d31',
                    600: '#ff9a1e',
                    700: '#ee8b12',
                    800: '#df7f09',
                    900: '#cc7000',
                },
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
