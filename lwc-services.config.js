module.exports = {
    resources: [{ from: 'src/resources', to: 'dist/resources' },
    {
        from: 'node_modules/@salesforce-ux/design-system/',
        to: 'src'
    },
    {
        from: 'node_modules/@salesforce-ux/design-system/',
        to: 'dist'
    }]
};
