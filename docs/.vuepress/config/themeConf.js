const sidebar = require("./sidebar-auto.js");

module.exports = {
  repo: "root-lucas/root-lucas.github.io",
  navbar: true,
  editLinks: true,
  editLinkText: "在 GitHub 上编辑此页",
  lastUpdated: "lastUpdated",
  sidebar,
  logo: '/edit-tools.png',
  nav: [
    // 前端
    { text: '首页', link: '/' },
    {
      text: "前端",
      items: [
        { text: "JavaScript", link: "/passages/2019-03-26-javascript-first/"},
        { text: "TypeScript",link: "/passages/2019-08-27-typescript-notes/"},
        { text: "ES6", link: "/passages/2019-04-09-es6/" },
        { text: "HTML5", link: "/passages/2019-04-10-html5-drag-drop/" },
        { text: "浏览器与安全", link: "/passages/2019-05-15-browser/" },
		{
          text: "前端框架",
          items: [
			{ text: "Vue", link: "/passages/2018-11-02-vuex-use/"},
			{ text: "React", link: "/passages/2019-04-08-react-components-communication/"},
			{ text: "WX小程序", link: "/passages/2019-11-27-wechat-applet-introduce/"},
          ]
        }
      ]
    },
    // UI
    {
      text: "UI",
      items: [
        { text: "css", link: "/passages/2018-06-05-border-sizing/" },
        { text: "scss", link: "/passages/2019-05-17-why-i-stopped-using-sass/"},
        { text: "动画", link: "/passages/2019-07-16-font-animation/" }
      ]
    },
    // 算法
    {
      text: "算法",
      items: [
        {
          text: "剑指offer",
          link: "/passages/2019-06-23-algorithm-offer/"
        },
        {
          text: "设计模式",
          link: "/passages/2018-10-23-singleton-pattern/"
        },
        {
          text: "面试宝典",
          link: "/passages/2018-10-09-singleton-interview/"
        }
      ]
    },
    // 后端
    {
      text: "后端",
      items: [
        { text: "Node", link: "/passages/2019-06-21-deep-in-koa/" },
        { text: "测试", link: "/passages/2019-05-04-jest-base/" },
		{ text: "数据库使用", link: "/passages/2019-7-11-fontend-mysql-use/" }
      ]
    },
   //计算机基础
    {
      text: "计算机基础",
      items: [
        { text: "Linux", link: "/passages/2019-5-09-Linux-command/" },
		{ text: "C语言", link: "/passages/2019-11-23-C-language-introduce/" },
		{ text: "OSI七层", link: "/passages/2019-11-27-OSI-introduce/" },
        { text: "网络技术", link: "/passages/2019-11-27-network-introduce/" }

      ]
    },
    // 其它
    {
      text: "其它",
      items: [
        {
          text: "文章归档",
          link: "/guide/"
        },
        {
          text: "学习笔记",
          link: "/passages/2019-7-09-whatever-notes/"
        },
        {
          text: "友情链接",
          link: "/friends/"
        }
      ]
    }
  ]
};
