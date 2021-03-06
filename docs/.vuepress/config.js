﻿const {
  mdConf,
  themeConf,
  localesConf,
} = require('./config/')

module.exports = {
  locales: localesConf,
  markdown: mdConf,
  themeConfig: themeConf,
  plugins: [
    require('./plugins/my-router'),
    require('./plugins/my-loader'),
    require('vuepress-plugin-viewer'),
    '@vuepress/back-to-top',
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: {
          message: "发现页面有新内容",
          buttonText: "刷新"
        }
      }
    ],
    // [
    //   'vuepress-plugin-comment',
    //   {
    //     choosen: 'gitalk', 
    //     options: {
    //       clientID: '9e6a8b01c4a751e3c819',
    //       clientSecret: process.env.clientSecret || '',
    //       repo: 'root-lucas.github.io',
    //       owner: 'root-lucas.github.io',
    //       admin: ['root-lucas.github.io'],
    //       id: '<%- frontmatter.commentid || frontmatter.permalink %>',      // Ensure uniqueness and length less than 50
    //       distractionFreeMode: false,  // Facebook-like distraction free mode
    //       labels: ['Gitalk', 'Comment'],
    //       title: '「评论」<%- frontmatter.title %>',
    //       body: '<%- frontmatter.title %>：<%- window.location.origin %><%- frontmatter.to.path || window.location.pathname %>'
    //     }
    //   }
    // ]
  ]
}