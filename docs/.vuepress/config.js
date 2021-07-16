module.exports = {
	base:'/docs/',
    title: "VuePress",
    themeConfig: {
        logo: '/assets/img/hero.png',
        // navbar: false,
        nav: [
            { text: 'Home', link: '/' },
            { text: 'About', link: '/about' },
            { text: 'CSS', link: '/css/' },
            {
                text: 'Languages',
                items: [{
                        text: 'Group1',
                        items: [
                            { text: 'Home', link: '/' },
                            { text: 'About', link: '/about' },
                        ]
                    },
                    {
                        text: 'Group2',
                        items: [
                            { text: 'Home', link: '/' },
                            { text: 'About', link: '/about/', target: '_blank' },
                        ]
                    }
                ]
            },
            { text: 'External', link: 'https://google.com' },
        ],
        // sidebar: [
        // 	'/',
        //   '/about',
        //   '/about1',
        //   {
        //     title: '美丽的 css',   // 必要的
        //     path: '/css/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        //     collapsable: false, // 可选的, 默认值是 true,
        //     sidebarDepth: 1,    // 可选的, 默认值是 1
        //     children: [
        //       '/css/c-aaa',
        //       '/css/c-bbb',
        //       '/css/c-ddd',
        //     ]
        //   },
        // ],
        sidebar: {
            "/css/": [
                'c-aaa',
                'c-bbb',
                'c-ddd',
            ]
        },
        lastUpdated: 'Last Updated'
    }
}