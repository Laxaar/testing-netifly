var website = "http://www.laxaar.com/"
docute.init({
    url: location.origin,
    routerMode: 'hash',
    // ...config goes here
    toc: './summary.md',
    nav: [
        {title: 'Home', path: '/'},
        {title: 'Who are we', path: website+'about'},
        {title: 'Our Services', path: website+'services'},
        {title: 'Technologies we work on', path: website+'technology'},
        {title: 'Hire Us', path: website+'contact'},

    ],
    plugins: [
        docsearch({
            appId: 'BH4D9OD16A',
            apiKey: '65360cf9a91d87cd455d2b286d0d89ee',
            indexName: 'docute',
            tags: ['english', 'zh-Hans', 'zh-Hant', 'ja'],
            url: 'https://v3.docute.org'
        })
    ]
})
if (window.netlifyIdentity) {
    window.netlifyIdentity.on("init", user => {
        if (!user) {
            window.netlifyIdentity.on("login", () => {
                document.location.href = "/admin/";
            });
        }
    });
}