module.exports = {
    future: {
        // removeDeprecatedGapUtilities: true,
        // purgeLayersByDefault: true,
    },

    purge: [],
    theme: {
        fontFamily: {
            ubuntu: ['Ubuntu', 'sans-serif']
        },
        extend: {},
    },

    variants: {},

    plugins: [require('tailwindcss-brand-colors')],
}
