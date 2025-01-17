module.exports = {
  title: "小秦的博客",
  description: "小秦的博客",
  theme: "reco",
  themeConfig: {
    logo: "/1.jpg", // 导航栏logo
    authorAvatar: "/1.jpg", // 作者头像
    author: "小秦", // 作者
    type: "blog", // blog类型
    nav: [
      { text: "首页", link: "/" },
      {
        text: "小秦的博客",
        items: [
          { text: "Vue", link: "https://v2.cn.vuejs.org/" },
          { text: "GitHub", link: "https://github.com/" }
        ]
      }
    ],
    // 博客配置
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: "博客" // 默认文案 “分类”
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
            name: "강남역 4번 출구",
            artist: "Plastic / Fallin` Dild",
            url: "https://assets.smallsunnyfox.com/music/2.mp3",
            cover: "https://assets.smallsunnyfox.com/music/3.jpg",
          },
          {
            name: "팔베개",
            artist: "최낙타",
            url: "https://assets.smallsunnyfox.com/music/3.mp3",
            cover:
              "https://p1.music.126.net/qTSIZ27qiFvRoKj-P30BiA==/109951165895951287.jpg?param=200y200",
          },
        ],
        // 是否默认缩小
        autoShrink: true,
        // 缩小时缩为哪种模式
        shrinkMode: "float",
        // 悬浮窗样式
        floatStyle: { bottom: "20px", "z-index": "999999" }
      }
    ]
  ],

  // 和仓库名称保持一致
  base: "/blogs/"
}
