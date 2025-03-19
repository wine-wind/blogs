module.exports = {
  base: "/blogs/", // 和仓库名称保持一致
  title: "小秦的博客",
  description: "小秦的博客",
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }], // 增加一个自定义的 favicon(网页标签的图标)
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  theme: "reco",
  themeConfig: {
    noFoundPageByTencent: true, // 是否开启404页面
    keyPage: {
      keys: ['e10adc3949ba59abbe56e057f20f883e'], // 123456 // 1.3.0 版本后需要设置为密文
      color: '#42b983', // 登录页动画球的颜色
      lineColor: '#42b983' // 登录页动画线的颜色
    },
    // 项目开始时间，只填写年份
    startYear: '2025',
    logo: "/imgs/7.jpg", // 导航栏logo
    authorAvatar: "/imgs/7.jpg", // 作者头像
    author: "小秦", // 作者
    type: "blog", // blog类型
    docsDir: "./docs", // 文档目录
    nav: [
      { text: "首页", link: "/" },
      {
        text: "前端技术",
        icon: "reco-document",
        items: [
          { text: "Vue", link: "https://v2.cn.vuejs.org/" },
          { text: "GitHub", link: "https://github.com/", icon: "reco-github" },
          {
            text: "前端组件",
            items:[
              { text: "Element", link: "https://element.eleme.cn/#/zh-CN" },
              { text: "Vant", link: "https://vant-ui.github.io/vant/#/zh-CN" },
              { text: "uView", link: "https://uviewui.com/" },
              { text: "微信官方文档", link: "https://developers.weixin.qq.com/doc/" }
            ]
          }
        ]
      }
    ],
    // 博客配置
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: "博客" // 默认文案 “分类”
      },
      technology: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: "前端技术" // 默认文案 “技术”
      },
      tag: {
        location: 4, // 在导航栏菜单中所占的位置，默认4
        text: "Tag" // 默认文案 “标签”
      }
    }

    /*
    * 侧边栏布局
    *  */
    // sidebar: [
    //   {
    //     title: "欢迎学习",
    //     path: "/",
    //     collapsable: false, // 是否折叠
    //     children: [
    //       { title: "博客简介", path: "/" }
    //     ]
    //   },
    //   {
    //     title: "基础篇",
    //     path: "/blogs/1",
    //     collapsable: true, // 是否折叠
    //     children: [
    //       { title: "第一篇", path: "/blogs/1/" },
    //       { title: "第二篇", path: "/blogs/2/" }
    //     ]
    //   }
    // ]
  },
  locales: {
    "/": {
      lang: "zh-CN",
    }
  },

  plugins: [
    // 樱花效果
    [
      "sakura",
      {
        num: 20, // 默认数量
        show: true, // 是否显示
        zIndex: -1, // 层级
        img: {
          replace: false, // false 默认图 true 换图，需要填写httpUrl地址
        },
      }
    ],
    // 鼠标特效
    [
      "cursor-effects",
      {
        size: 4, // size of the particle, default: 2
        shape: "star", // ["star", "circle"] // shape of the particle,  default: "star"
        zIndex: 999999999, // z-index property of the canvas, default: 999999999
      }
    ],
    // 音乐播放器
    [
      "@vuepress-reco/vuepress-plugin-bgm-player",
      {
        audios: [
          {
            name: "卡农",
            artist: "Johann Pachelbel",
            url: "/bgm/卡农.mp3",
            cover: "https://img2.baidu.com/it/u=3996379871,2634964997&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500",
          },
          {
            name: "广寒宫破阵曲",
            artist: "中国爱乐乐团",
            url: "/bgm/广寒宫破阵曲.mp3",
            cover:
              "https://img1.baidu.com/it/u=3046893799,659051878&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=500",
          },
        ],
        autoplay: true, // 是否自动播放
        // 是否默认缩小
        autoShrink: true,
        // 缩小时缩为哪种模式
        shrinkMode: "float",
        // 悬浮窗样式
        floatStyle: { bottom: "20px", "z-index": "999999" }
      }
    ],
    // 复制代码块
    ['vuepress-plugin-code-copy', {
      color: '#3eaf7c',
      backgroundTransition: true,
      backgroundColor: '#f0f0f0',
      successText: "复制成功"
    }],
    // 看板娘插件 todo:模型加载失败，暂时不展示
    // ['@vuepress-reco/vuepress-plugin-kan-ban-niang',{
    //   theme: ["miku"],
    //   clean: false,
    //   info: 'https://github.com/mengqiuleo',
    //   messages: {
    //     welcome: '',
    //     home: '心里的花，我想要带你回家',
    //     theme: '好吧，希望你能喜欢我的其他小伙伴。',
    //     close: '再见哦'
    //   }
    // }]
  ],
}
