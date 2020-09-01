module.exports = {
    // ...
    plugins: [
        [
            'module-resolver',
            {
                root: ['./mobile'],
                extensions: ['*'],
                alias: {
                    react: './node_modules/react',
                },
            },
        ],
        // ...
    ],
};