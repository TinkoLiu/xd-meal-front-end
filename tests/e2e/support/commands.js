// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
const profile = {
  avatar:
    'http://wework.qpic.cn/bizmail/kpJvlBl5kX2wm8gGLbflXO4pAaANXaovWIHFibJAmAReyzBI6eWEMTg/0',
  config: {
    advance: true,
    randomBtn: true,
    buffetBtn: true,
    randomForNoSpicy: true,
    randomForEmpty: false,
  },
  _id: '122222222',
  username: 'icepro',
  wework_userid: 'icepro',
  wechat_corpid: 'xd',
  role: 2,
  department: '1',
  email: 'icepro@xindong.com',
  createTime: '2020-01-01T08:11:12.430Z',
  updateTime: '2020-03-25T09:24:38.593Z',
  __v: 0,
};
const orders = {
  ordered: [
    {
      _id: '5e746a270190441dbe47255c',
      uid: '5e0c5420e65c5469dcf063a6',
      dining_id: '5e71e53c0190441dbe470b63',
      menu_id: '5e71e5220190441dbe470b62',
      picked: false,
      createTime: '2020-03-20T07:00:55.573Z',
      updateTime: '2020-03-20T07:00:55.573Z',
      __v: 0,
    },
    {
      _id: '5e746a270190441dbe47255d',
      uid: '5e0c5420e65c5469dcf063a6',
      dining_id: '5e71e56f0190441dbe470b64',
      menu_id: '5e71e554ae74b91dc0622296',
      picked: false,
      createTime: '2020-03-20T07:00:55.573Z',
      updateTime: '2020-03-20T07:00:55.573Z',
      __v: 0,
    },
    {
      _id: '5e746a270190441dbe47255e',
      uid: '5e0c5420e65c5469dcf063a6',
      dining_id: '5e71e5a1ae74b91dc0622299',
      menu_id: '5e71e58dae74b91dc0622298',
      picked: false,
      createTime: '2020-03-20T07:00:55.574Z',
      updateTime: '2020-03-20T07:00:55.574Z',
      __v: 0,
    },
    {
      _id: '5e746a270190441dbe47255f',
      uid: '5e0c5420e65c5469dcf063a6',
      dining_id: '5e71e6290190441dbe470b67',
      menu_id: '5e1eae86623bc9589663614d',
      picked: false,
      createTime: '2020-03-20T07:00:55.574Z',
      updateTime: '2020-03-20T07:00:55.574Z',
      __v: 0,
    },
  ],
  dinings: [
    {
      _id: '5e71e53c0190441dbe470b63',
      title: '3月26日午餐',
      order_start: '2020-03-19T00:00:00.000Z',
      order_end: '2020-03-20T08:00:00.000Z',
      pick_start: '2020-03-26T02:00:00.000Z',
      pick_end: '2020-03-26T05:30:00.000Z',
      stat_type: 1,
      menu: [
        {
          _id: '5e1eae86623bc9589663614d',
          title: '今天不吃饭',
          desc: '选择此项将不在本餐次为您提供餐品',
          supplier: '心动网络',
        },
        {
          _id: '5e71e5220190441dbe470b62',
          title: '套餐一',
          desc:
            '干锅牛蛙（微辣）+农家小酥肉+麻婆豆腐（微辣）+香菇青菜+青菜羹汤',
          supplier: '彼众餐饮',
        },
        {
          _id: '5e71e537ae74b91dc0622295',
          title: '套餐二',
          desc: '红烧带鱼+私房菜猪肉炖粉条+包菜炒鸡片+红椒秋葵+青菜羹汤',
          supplier: '红采餐饮',
        },
      ],
      createTime: '2020-03-18T09:09:16.300Z',
      updateTime: '2020-03-18T09:09:16.300Z',
      __v: 0,
    },
    {
      _id: '5e71e56f0190441dbe470b64',
      title: '3月26日晚餐',
      order_start: '2020-03-19T00:00:00.000Z',
      order_end: '2020-03-20T08:00:00.000Z',
      pick_start: '2020-03-26T09:00:00.000Z',
      pick_end: '2020-03-26T10:30:00.000Z',
      stat_type: 1,
      menu: [
        {
          _id: '5e1eae86623bc9589663614d',
          title: '今天不吃饭',
          desc: '选择此项将不在本餐次为您提供餐品',
          supplier: '心动网络',
        },
        {
          _id: '5e71e554ae74b91dc0622296',
          title: '套餐一',
          desc: '千岛酱仔排+香酥鸡腿+孜然烤面筋+清炒杭白菜+西湖牛肉羹',
          supplier: '彼众餐饮',
        },
        {
          _id: '5e71e56aae74b91dc0622297',
          title: '套餐二',
          desc:
            '美人椒爆炒鸭块（微辣）+烤猪蹄+葱油炖蛋+酸辣藕丁（微辣）+西湖牛肉羹',
          supplier: '红采餐饮',
        },
      ],
      createTime: '2020-03-18T09:10:07.343Z',
      updateTime: '2020-03-18T09:10:07.343Z',
      __v: 0,
    },
    {
      _id: '5e71e5a1ae74b91dc0622299',
      title: '3月27日午餐',
      order_start: '2020-03-19T00:00:00.000Z',
      order_end: '2020-03-20T08:00:00.000Z',
      pick_start: '2020-03-27T02:00:00.000Z',
      pick_end: '2020-03-27T05:30:00.000Z',
      stat_type: 1,
      menu: [
        {
          _id: '5e1eae86623bc9589663614d',
          title: '今天不吃饭',
          desc: '选择此项将不在本餐次为您提供餐品',
        },
        {
          _id: '5e71e58dae74b91dc0622298',
          title: '套餐一',
          desc: '上海红烧肉+特色黄焖鸡+西芹炒蛋+茼蒿菜+菠菜蛋汤',
        },
        {
          _id: '5e71e5a00190441dbe470b65',
          title: '套餐二',
          desc:
            '孜然鸡胸肉+香辣小排（微辣）+肉末豆腐+酸辣土豆丝（微辣）+菠菜蛋汤',
        },
      ],
      createTime: '2020-03-18T09:10:57.287Z',
      updateTime: '2020-03-18T09:11:18.887Z',
      __v: 0,
    },
    {
      _id: '5e71e6290190441dbe470b67',
      title: '3月27日晚饭',
      order_start: '2020-03-19T00:00:00.000Z',
      order_end: '2020-03-20T08:00:00.000Z',
      pick_start: '2020-03-27T09:00:00.000Z',
      pick_end: '2020-03-27T10:30:00.000Z',
      stat_type: 1,
      menu: [
        {
          _id: '5e1eae86623bc9589663614d',
          title: '今天不吃饭',
          desc: '选择此项将不在本餐次为您提供餐品',
          supplier: '心动网络',
        },
        {
          _id: '5e71e5f0ae74b91dc062229a',
          title: '套餐一',
          desc:
            '孜然牙签肉（微辣）+豆花鱼（微辣）+上汤娃娃菜+家乡素合菜+酒酿小丸子',
          supplier: '彼众餐饮',
        },
        {
          _id: '5e71e6010190441dbe470b66',
          title: '套餐二',
          desc: '脆皮鸡+红烧大排+香辣土豆片鸡片（微辣）+三色豆芽+酒酿小丸子',
          supplier: '红采餐饮',
        },
      ],
      createTime: '2020-03-18T09:13:13.510Z',
      updateTime: '2020-03-18T09:13:13.510Z',
      __v: 0,
    },
    {
      _id: '5e7b048cb920eb59a934fb0c',
      title: '3月28日加班午餐',
      order_start: '2020-03-26T00:00:00.000Z',
      order_end: '2020-03-27T08:00:00.000Z',
      pick_start: '2020-03-28T02:00:00.000Z',
      pick_end: '2020-03-28T05:30:00.000Z',
      stat_type: 1,
      menu: [
        {
          _id: '5e1eae86623bc9589663614d',
          title: '今天不吃饭',
          desc: '选择此项将不在本餐次为您提供餐品',
          supplier: '心动网络',
        },
        {
          _id: '5e7b046ab920eb59a934fb0b',
          title: '毛血旺（微辣）',
          desc: '毛血旺+小荤+米饭',
          supplier: '加班餐',
        },
        {
          _id: '5e7b047b250d0759abdb95a2',
          title: '炒河粉',
          desc: '炒河粉+冬瓜排骨汤',
          supplier: '加班餐',
        },
      ],
      createTime: '2020-03-25T07:13:16.763Z',
      updateTime: '2020-03-25T07:13:16.763Z',
      __v: 0,
    },
    {
      _id: '5e7b04ef250d0759abdb95a4',
      title: '3月28日加班晚餐',
      order_start: '2020-03-26T00:00:00.000Z',
      order_end: '2020-03-27T08:00:00.000Z',
      pick_start: '2020-03-28T09:00:00.000Z',
      pick_end: '2020-03-28T10:30:00.000Z',
      stat_type: 1,
      menu: [
        {
          _id: '5e1eae86623bc9589663614d',
          title: '今天不吃饭',
          desc: '选择此项将不在本餐次为您提供餐品',
          supplier: '心动网络',
        },
        {
          _id: '5e7b04db250d0759abdb95a3',
          title: '红烧大排',
          desc: '红烧大排+小荤+米饭',
          supplier: '加班餐',
        },
        {
          _id: '5e7b04e9b920eb59a934fb0d',
          title: '奥尔良鸡翅根',
          desc: '奥尔良鸡翅根+小荤+米饭',
          supplier: '加班餐',
        },
      ],
      createTime: '2020-03-25T07:14:55.875Z',
      updateTime: '2020-03-25T07:14:55.875Z',
      __v: 0,
    },
    {
      _id: '5e7b0513b920eb59a934fb0e',
      title: '3月29日加班午餐',
      order_start: '2020-03-26T00:00:00.000Z',
      order_end: '2020-03-27T08:00:00.000Z',
      pick_start: '2020-03-29T02:00:00.000Z',
      pick_end: '2020-03-29T05:30:00.000Z',
      stat_type: 1,
      menu: [
        {
          _id: '5e1eae86623bc9589663614d',
          title: '今天不吃饭',
          desc: '选择此项将不在本餐次为您提供餐品',
          supplier: '心动网络',
        },
        {
          _id: '5e7b046ab920eb59a934fb0b',
          title: '毛血旺（微辣）',
          desc: '毛血旺+小荤+米饭',
          supplier: '加班餐',
        },
        {
          _id: '5e7b047b250d0759abdb95a2',
          title: '炒河粉',
          desc: '炒河粉+冬瓜排骨汤',
          supplier: '加班餐',
        },
      ],
      createTime: '2020-03-25T07:15:31.216Z',
      updateTime: '2020-03-25T07:15:31.216Z',
      __v: 0,
    },
    {
      _id: '5e7b0522250d0759abdb95a5',
      title: '3月29日加班晚餐',
      order_start: '2020-03-26T00:00:00.000Z',
      order_end: '2020-03-27T08:00:00.000Z',
      pick_start: '2020-03-29T09:00:00.000Z',
      pick_end: '2020-03-29T10:30:00.000Z',
      stat_type: 1,
      menu: [
        {
          _id: '5e1eae86623bc9589663614d',
          title: '今天不吃饭',
          desc: '选择此项将不在本餐次为您提供餐品',
          supplier: '心动网络',
        },
        {
          _id: '5e7b04db250d0759abdb95a3',
          title: '红烧大排',
          desc: '红烧大排+小荤+米饭',
          supplier: '加班餐',
        },
        {
          _id: '5e7b04e9b920eb59a934fb0d',
          title: '奥尔良鸡翅根',
          desc: '奥尔良鸡翅根+小荤+米饭',
          supplier: '加班餐',
        },
      ],
      createTime: '2020-03-25T07:15:46.383Z',
      updateTime: '2020-03-25T07:15:46.383Z',
      __v: 0,
    },
    {
      _id: '5e7b1144250d0759abdb95a6',
      title: '3月30日午餐',
      order_start: '2020-03-26T00:00:00.000Z',
      order_end: '2020-03-27T08:00:00.000Z',
      pick_start: '2020-03-30T02:00:00.000Z',
      pick_end: '2020-03-30T05:30:00.000Z',
      stat_type: 1,
      menu: [
        {
          _id: '5e1eae86623bc9589663614d',
          title: '今天不吃饭',
          desc: '选择此项将不在本餐次为您提供餐品',
          supplier: '心动网络',
        },
        {
          _id: '5e7b0b15b920eb59a934fb0f',
          title: '套餐一',
          desc: '卤牛肉热拌黄瓜+蜜汁叉烧肉+韭黄炒蛋+清炒杭白菜+菠菜蛋汤',
          supplier: '彼众餐饮',
        },
        {
          _id: '5e7b113ab920eb59a934fb10',
          title: '套餐二',
          desc: '卤牛肉热拌黄瓜+蜜汁叉烧肉+韭黄炒蛋+清炒杭白菜+菠菜蛋汤',
          supplier: '红采餐饮',
        },
      ],
      createTime: '2020-03-25T08:07:32.109Z',
      updateTime: '2020-03-25T08:07:32.109Z',
      __v: 0,
    },
    {
      _id: '5e7b11f1250d0759abdb95a8',
      title: '3月30日晚餐',
      order_start: '2020-03-26T00:00:00.000Z',
      order_end: '2020-03-27T08:00:00.000Z',
      pick_start: '2020-03-30T09:00:00.000Z',
      pick_end: '2020-03-30T10:30:00.000Z',
      stat_type: 1,
      menu: [
        {
          _id: '5e1eae86623bc9589663614d',
          title: '今天不吃饭',
          desc: '选择此项将不在本餐次为您提供餐品',
          supplier: '心动网络',
        },
        {
          _id: '5e7b1160b920eb59a934fb11',
          title: '套餐一',
          desc: '椒盐带鱼+私房红烧肉+番茄炒蛋+清炒茼蒿菜+海带小排汤',
          supplier: '彼众餐饮',
        },
        {
          _id: '5e7b1174250d0759abdb95a7',
          title: '套餐二',
          desc:
            '啤酒鸭+线椒烧肉片（微辣）+蒜苔肉丝+干锅牛心菜（微辣）+海带小排汤',
          supplier: '红采餐饮',
        },
      ],
      createTime: '2020-03-25T08:10:25.160Z',
      updateTime: '2020-03-25T08:10:25.160Z',
      __v: 0,
    },
    {
      _id: '5e7b1230250d0759abdb95aa',
      title: '3月31日午餐',
      order_start: '2020-03-26T00:00:00.000Z',
      order_end: '2020-03-27T08:00:00.000Z',
      pick_start: '2020-03-31T02:00:00.000Z',
      pick_end: '2020-03-31T05:30:00.000Z',
      stat_type: 1,
      menu: [
        {
          _id: '5e1eae86623bc9589663614d',
          title: '今天不吃饭',
          desc: '选择此项将不在本餐次为您提供餐品',
          supplier: '心动网络',
        },
        {
          _id: '5e7b1218b920eb59a934fb13',
          title: '套餐一',
          desc:
            '特色黄焖鸡+糖醋小排+酸豆角肉末（微辣）+酸辣海带丝（微辣）+西湖牛肉羹',
          supplier: '彼众餐饮',
        },
        {
          _id: '5e7b122ab920eb59a934fb14',
          title: '套餐二',
          desc: '青椒爆炒五花肉+上海熏鱼+番茄炒蛋+菠菜+西湖牛肉羹',
          supplier: '红采餐饮',
        },
      ],
      createTime: '2020-03-25T08:11:28.971Z',
      updateTime: '2020-03-25T08:11:28.971Z',
      __v: 0,
    },
    {
      _id: '5e7b1262b920eb59a934fb16',
      title: '3月31日晚餐',
      order_start: '2020-03-26T00:00:00.000Z',
      order_end: '2020-03-27T08:00:00.000Z',
      pick_start: '2020-03-31T09:00:00.000Z',
      pick_end: '2020-03-31T10:30:00.000Z',
      stat_type: 1,
      menu: [
        {
          _id: '5e1eae86623bc9589663614d',
          title: '今天不吃饭',
          desc: '选择此项将不在本餐次为您提供餐品',
          supplier: '心动网络',
        },
        {
          _id: '5e7b1248b920eb59a934fb15',
          title: '套餐一',
          desc: '馋嘴蛙（微辣）+桂花盐水鸭+肉末粉丝+香菇青菜+大骨头汤',
          supplier: '彼众餐饮',
        },
        {
          _id: '5e7b1258250d0759abdb95ab',
          title: '套餐二',
          desc: '樱桃肉+炸鸡+玉米炒蛋+盐水西兰花+大骨头汤',
          supplier: '红采餐饮',
        },
      ],
      createTime: '2020-03-25T08:12:18.202Z',
      updateTime: '2020-03-25T08:12:18.202Z',
      __v: 0,
    },
    {
      _id: '5e7b12a4250d0759abdb95ad',
      title: '4月1日晚餐',
      order_start: '2020-03-26T00:00:00.000Z',
      order_end: '2020-03-27T08:00:00.000Z',
      pick_start: '2020-04-01T09:00:00.000Z',
      pick_end: '2020-04-01T10:30:00.000Z',
      stat_type: 1,
      menu: [
        {
          _id: '5e1eae86623bc9589663614d',
          title: '今天不吃饭',
          desc: '选择此项将不在本餐次为您提供餐品',
          supplier: '心动网络',
        },
        {
          _id: '5e7b128b250d0759abdb95ac',
          title: '套餐一',
          desc: '奥尔良炸翅根+鹌鹑蛋烧肉+木须肉+素什锦+紫菜蛋汤',
          supplier: '彼众餐饮',
        },
        {
          _id: '5e7b129db920eb59a934fb17',
          title: '套餐二',
          desc: '湘味牛肉（微辣）+香辣碎碎鸭（微辣）+家常豆腐+地三鲜+紫菜蛋汤',
          supplier: '红采餐饮',
        },
      ],
      createTime: '2020-03-25T08:13:24.789Z',
      updateTime: '2020-03-25T08:13:24.789Z',
      __v: 0,
    },
    {
      _id: '5e7b12d1b920eb59a934fb19',
      title: '4月1日午餐',
      order_start: '2020-03-26T00:00:00.000Z',
      order_end: '2020-03-27T08:00:00.000Z',
      pick_start: '2020-04-01T02:00:00.000Z',
      pick_end: '2020-04-01T05:30:00.000Z',
      stat_type: 1,
      menu: [
        {
          _id: '5e1eae86623bc9589663614d',
          title: '今天不吃饭',
          desc: '选择此项将不在本餐次为您提供餐品',
          supplier: '心动网络',
        },
        {
          _id: '5e7b12beb920eb59a934fb18',
          title: '套餐一',
          desc: '黄飞鸿香辣虾（微辣）+清汤荠菜肉圆+京酱鸡丁+清炒菜芨+番茄蛋汤',
          supplier: '彼众餐饮',
        },
        {
          _id: '5e7b12cc250d0759abdb95ae',
          title: '套餐二',
          desc: '柠檬鸭+米粉蒸肉+青椒肉丝+三色冬瓜+番茄蛋汤',
          supplier: '红采餐饮',
        },
      ],
      createTime: '2020-03-25T08:14:09.484Z',
      updateTime: '2020-03-25T08:14:09.484Z',
      __v: 0,
    },
    {
      _id: '5e7b1304250d0759abdb95b0',
      title: '4月2日午餐',
      order_start: '2020-03-26T00:00:00.000Z',
      order_end: '2020-03-27T08:00:00.000Z',
      pick_start: '2020-04-02T02:00:00.000Z',
      pick_end: '2020-04-02T05:30:00.000Z',
      stat_type: 1,
      menu: [
        {
          _id: '5e1eae86623bc9589663614d',
          title: '今天不吃饭',
          desc: '选择此项将不在本餐次为您提供餐品',
          supplier: '心动网络',
        },
        {
          _id: '5e7b12ed250d0759abdb95af',
          title: '套餐一',
          desc: '红烧琵琶腿+家乡豆腐卷烧肉+肉末茄子+芹菜香干+酒酿小丸子',
          supplier: '彼众餐饮',
        },
        {
          _id: '5e7b12fcb920eb59a934fb1a',
          title: '套餐二',
          desc:
            '小炒黄牛肉（微辣）+咸蛋黄排条+肉末麻婆豆腐（微辣）+青菜+酒酿小丸子',
          supplier: '红采餐饮',
        },
      ],
      createTime: '2020-03-25T08:15:00.641Z',
      updateTime: '2020-03-25T08:15:00.641Z',
      __v: 0,
    },
    {
      _id: '5e7b132eb920eb59a934fb1c',
      title: '4月2日晚餐',
      order_start: '2020-03-26T00:00:00.000Z',
      order_end: '2020-03-27T08:00:00.000Z',
      pick_start: '2020-04-02T09:00:00.000Z',
      pick_end: '2020-04-02T10:30:00.000Z',
      stat_type: 1,
      menu: [
        {
          _id: '5e1eae86623bc9589663614d',
          title: '今天不吃饭',
          desc: '选择此项将不在本餐次为您提供餐品',
          supplier: '心动网络',
        },
        {
          _id: '5e7b131ab920eb59a934fb1b',
          title: '套餐一',
          desc:
            '糖醋排条+山东辣子鸡（微辣）+麻婆豆腐（微辣）+爆炒黄豆芽+酸辣汤',
          supplier: '彼众餐饮',
        },
        {
          _id: '5e7b1327250d0759abdb95b1',
          title: '套餐二',
          desc: '香酥鸭+虾仁滑蛋+山药木耳肉片+手撕包菜+酸辣汤',
          supplier: '红采餐饮',
        },
      ],
      createTime: '2020-03-25T08:15:42.647Z',
      updateTime: '2020-03-25T08:15:42.647Z',
      __v: 0,
    },
    {
      _id: '5e7b135f250d0759abdb95b3',
      title: '4月3日晚餐',
      order_start: '2020-03-26T00:00:00.000Z',
      order_end: '2020-03-27T08:00:00.000Z',
      pick_start: '2020-04-03T09:00:00.000Z',
      pick_end: '2020-04-03T10:30:00.000Z',
      stat_type: 1,
      menu: [
        {
          _id: '5e1eae86623bc9589663614d',
          title: '今天不吃饭',
          desc: '选择此项将不在本餐次为您提供餐品',
          supplier: '心动网络',
        },
        {
          _id: '5e7b1347250d0759abdb95b2',
          title: '套餐一',
          desc: '红酒小牛腩+农家灶台鱼+鱼香肉丝+青椒土豆丝+山药玉米排骨汤',
          supplier: '彼众餐饮',
        },
        {
          _id: '5e7b135ab920eb59a934fb1d',
          title: '套餐二',
          desc:
            '梅干菜扣肉+香辣鸡块（微辣）+冬瓜炒火腿+线椒烧茄子（微辣）+山药玉米排骨汤',
          supplier: '红采餐饮',
        },
      ],
      createTime: '2020-03-25T08:16:31.091Z',
      updateTime: '2020-03-25T08:16:31.091Z',
      __v: 0,
    },
    {
      _id: '5e7b1396b920eb59a934fb1f',
      title: '4月3日午餐',
      order_start: '2020-03-26T00:00:00.000Z',
      order_end: '2020-03-27T08:00:00.000Z',
      pick_start: '2020-04-03T02:00:00.000Z',
      pick_end: '2020-04-03T05:30:00.000Z',
      stat_type: 1,
      menu: [
        {
          _id: '5e1eae86623bc9589663614d',
          title: '今天不吃饭',
          desc: '选择此项将不在本餐次为您提供餐品',
          supplier: '心动网络',
        },
        {
          _id: '5e7b1379b920eb59a934fb1e',
          title: '套餐一',
          desc:
            '干锅牛蛙（微辣）+太阳蛋蒸肉饼+肉末双味鸭血（微辣）+青椒豆皮+冬瓜虾皮汤',
          supplier: '彼众餐饮',
        },
        {
          _id: '5e7b138f250d0759abdb95b4',
          title: '套餐二',
          desc: '菌姑炖土鸡+双豆五花肉+美人椒咸菜肉片+香辣海带+冬瓜虾皮汤',
          supplier: '红采餐饮',
        },
      ],
      createTime: '2020-03-25T08:17:26.201Z',
      updateTime: '2020-03-25T08:17:26.201Z',
      __v: 0,
    },
  ],
};
const list = {
  dinings: [
    {
      _id: '5e7b1144250d0759abdb95a6',
      title: '3月30日午餐',
      order_start: '2020-03-26T00:00:00.000Z',
      order_end: '2020-03-27T08:00:00.000Z',
      pick_start: '2020-03-30T02:00:00.000Z',
      pick_end: '2020-03-30T05:30:00.000Z',
      stat_type: 1,
      menu: [
        {
          _id: '5e1eae86623bc9589663614d',
          title: '今天不吃饭',
          desc: '选择此项将不在本餐次为您提供餐品',
          supplier: '心动网络',
        },
        {
          _id: '5e7b0b15b920eb59a934fb0f',
          title: '套餐一',
          desc: '卤牛肉热拌黄瓜+蜜汁叉烧肉+韭黄炒蛋+清炒杭白菜+菠菜蛋汤',
          supplier: '彼众餐饮',
        },
        {
          _id: '5e7b113ab920eb59a934fb10',
          title: '套餐二',
          desc: '卤牛肉热拌黄瓜+蜜汁叉烧肉+韭黄炒蛋+清炒杭白菜+菠菜蛋汤',
          supplier: '红采餐饮',
        },
      ],
      createTime: '2020-03-25T08:07:32.109Z',
      updateTime: '2020-03-25T08:07:32.109Z',
      __v: 0,
    },
    {
      _id: '5e7b11f1250d0759abdb95a8',
      title: '3月30日晚餐',
      order_start: '2020-03-26T00:00:00.000Z',
      order_end: '2020-03-27T08:00:00.000Z',
      pick_start: '2020-03-30T09:00:00.000Z',
      pick_end: '2020-03-30T10:30:00.000Z',
      stat_type: 1,
      menu: [
        {
          _id: '5e1eae86623bc9589663614d',
          title: '今天不吃饭',
          desc: '选择此项将不在本餐次为您提供餐品',
          supplier: '心动网络',
        },
        {
          _id: '5e7b1160b920eb59a934fb11',
          title: '套餐一',
          desc: '椒盐带鱼+私房红烧肉+番茄炒蛋+清炒茼蒿菜+海带小排汤',
          supplier: '彼众餐饮',
        },
        {
          _id: '5e7b1174250d0759abdb95a7',
          title: '套餐二',
          desc:
            '啤酒鸭+线椒烧肉片（微辣）+蒜苔肉丝+干锅牛心菜（微辣）+海带小排汤',
          supplier: '红采餐饮',
        },
      ],
      createTime: '2020-03-25T08:10:25.160Z',
      updateTime: '2020-03-25T08:10:25.160Z',
      __v: 0,
    },
    {
      _id: '5e7b1230250d0759abdb95aa',
      title: '3月31日午餐',
      order_start: '2020-03-26T00:00:00.000Z',
      order_end: '2020-03-27T08:00:00.000Z',
      pick_start: '2020-03-31T02:00:00.000Z',
      pick_end: '2020-03-31T05:30:00.000Z',
      stat_type: 1,
      menu: [
        {
          _id: '5e1eae86623bc9589663614d',
          title: '今天不吃饭',
          desc: '选择此项将不在本餐次为您提供餐品',
          supplier: '心动网络',
        },
        {
          _id: '5e7b1218b920eb59a934fb13',
          title: '套餐一',
          desc:
            '特色黄焖鸡+糖醋小排+酸豆角肉末（微辣）+酸辣海带丝（微辣）+西湖牛肉羹',
          supplier: '彼众餐饮',
        },
        {
          _id: '5e7b122ab920eb59a934fb14',
          title: '套餐二',
          desc: '青椒爆炒五花肉+上海熏鱼+番茄炒蛋+菠菜+西湖牛肉羹',
          supplier: '红采餐饮',
        },
      ],
      createTime: '2020-03-25T08:11:28.971Z',
      updateTime: '2020-03-25T08:11:28.971Z',
      __v: 0,
    },
    {
      _id: '5e7b1262b920eb59a934fb16',
      title: '3月31日晚餐',
      order_start: '2020-03-26T00:00:00.000Z',
      order_end: '2020-03-27T08:00:00.000Z',
      pick_start: '2020-03-31T09:00:00.000Z',
      pick_end: '2020-03-31T10:30:00.000Z',
      stat_type: 1,
      menu: [
        {
          _id: '5e1eae86623bc9589663614d',
          title: '今天不吃饭',
          desc: '选择此项将不在本餐次为您提供餐品',
          supplier: '心动网络',
        },
        {
          _id: '5e7b1248b920eb59a934fb15',
          title: '套餐一',
          desc: '馋嘴蛙（微辣）+桂花盐水鸭+肉末粉丝+香菇青菜+大骨头汤',
          supplier: '彼众餐饮',
        },
        {
          _id: '5e7b1258250d0759abdb95ab',
          title: '套餐二',
          desc: '樱桃肉+炸鸡+玉米炒蛋+盐水西兰花+大骨头汤',
          supplier: '红采餐饮',
        },
      ],
      createTime: '2020-03-25T08:12:18.202Z',
      updateTime: '2020-03-25T08:12:18.202Z',
      __v: 0,
    },
    {
      _id: '5e7b12a4250d0759abdb95ad',
      title: '4月1日晚餐',
      order_start: '2020-03-26T00:00:00.000Z',
      order_end: '2020-03-27T08:00:00.000Z',
      pick_start: '2020-04-01T09:00:00.000Z',
      pick_end: '2020-04-01T10:30:00.000Z',
      stat_type: 1,
      menu: [
        {
          _id: '5e1eae86623bc9589663614d',
          title: '今天不吃饭',
          desc: '选择此项将不在本餐次为您提供餐品',
          supplier: '心动网络',
        },
        {
          _id: '5e7b128b250d0759abdb95ac',
          title: '套餐一',
          desc: '奥尔良炸翅根+鹌鹑蛋烧肉+木须肉+素什锦+紫菜蛋汤',
          supplier: '彼众餐饮',
        },
        {
          _id: '5e7b129db920eb59a934fb17',
          title: '套餐二',
          desc: '湘味牛肉（微辣）+香辣碎碎鸭（微辣）+家常豆腐+地三鲜+紫菜蛋汤',
          supplier: '红采餐饮',
        },
      ],
      createTime: '2020-03-25T08:13:24.789Z',
      updateTime: '2020-03-25T08:13:24.789Z',
      __v: 0,
    },
    {
      _id: '5e7b12d1b920eb59a934fb19',
      title: '4月1日午餐',
      order_start: '2020-03-26T00:00:00.000Z',
      order_end: '2020-03-27T08:00:00.000Z',
      pick_start: '2020-04-01T02:00:00.000Z',
      pick_end: '2020-04-01T05:30:00.000Z',
      stat_type: 1,
      menu: [
        {
          _id: '5e1eae86623bc9589663614d',
          title: '今天不吃饭',
          desc: '选择此项将不在本餐次为您提供餐品',
          supplier: '心动网络',
        },
        {
          _id: '5e7b12beb920eb59a934fb18',
          title: '套餐一',
          desc: '黄飞鸿香辣虾（微辣）+清汤荠菜肉圆+京酱鸡丁+清炒菜芨+番茄蛋汤',
          supplier: '彼众餐饮',
        },
        {
          _id: '5e7b12cc250d0759abdb95ae',
          title: '套餐二',
          desc: '柠檬鸭+米粉蒸肉+青椒肉丝+三色冬瓜+番茄蛋汤',
          supplier: '红采餐饮',
        },
      ],
      createTime: '2020-03-25T08:14:09.484Z',
      updateTime: '2020-03-25T08:14:09.484Z',
      __v: 0,
    },
    {
      _id: '5e7b1304250d0759abdb95b0',
      title: '4月2日午餐',
      order_start: '2020-03-26T00:00:00.000Z',
      order_end: '2020-03-27T08:00:00.000Z',
      pick_start: '2020-04-02T02:00:00.000Z',
      pick_end: '2020-04-02T05:30:00.000Z',
      stat_type: 1,
      menu: [
        {
          _id: '5e1eae86623bc9589663614d',
          title: '今天不吃饭',
          desc: '选择此项将不在本餐次为您提供餐品',
          supplier: '心动网络',
        },
        {
          _id: '5e7b12ed250d0759abdb95af',
          title: '套餐一',
          desc: '红烧琵琶腿+家乡豆腐卷烧肉+肉末茄子+芹菜香干+酒酿小丸子',
          supplier: '彼众餐饮',
        },
        {
          _id: '5e7b12fcb920eb59a934fb1a',
          title: '套餐二',
          desc:
            '小炒黄牛肉（微辣）+咸蛋黄排条+肉末麻婆豆腐（微辣）+青菜+酒酿小丸子',
          supplier: '红采餐饮',
        },
      ],
      createTime: '2020-03-25T08:15:00.641Z',
      updateTime: '2020-03-25T08:15:00.641Z',
      __v: 0,
    },
    {
      _id: '5e7b132eb920eb59a934fb1c',
      title: '4月2日晚餐',
      order_start: '2020-03-26T00:00:00.000Z',
      order_end: '2020-03-27T08:00:00.000Z',
      pick_start: '2020-04-02T09:00:00.000Z',
      pick_end: '2020-04-02T10:30:00.000Z',
      stat_type: 1,
      menu: [
        {
          _id: '5e1eae86623bc9589663614d',
          title: '今天不吃饭',
          desc: '选择此项将不在本餐次为您提供餐品',
          supplier: '心动网络',
        },
        {
          _id: '5e7b131ab920eb59a934fb1b',
          title: '套餐一',
          desc:
            '糖醋排条+山东辣子鸡（微辣）+麻婆豆腐（微辣）+爆炒黄豆芽+酸辣汤',
          supplier: '彼众餐饮',
        },
        {
          _id: '5e7b1327250d0759abdb95b1',
          title: '套餐二',
          desc: '香酥鸭+虾仁滑蛋+山药木耳肉片+手撕包菜+酸辣汤',
          supplier: '红采餐饮',
        },
      ],
      createTime: '2020-03-25T08:15:42.647Z',
      updateTime: '2020-03-25T08:15:42.647Z',
      __v: 0,
    },
    {
      _id: '5e7b135f250d0759abdb95b3',
      title: '4月3日晚餐',
      order_start: '2020-03-26T00:00:00.000Z',
      order_end: '2020-03-27T08:00:00.000Z',
      pick_start: '2020-04-03T09:00:00.000Z',
      pick_end: '2020-04-03T10:30:00.000Z',
      stat_type: 1,
      menu: [
        {
          _id: '5e1eae86623bc9589663614d',
          title: '今天不吃饭',
          desc: '选择此项将不在本餐次为您提供餐品',
          supplier: '心动网络',
        },
        {
          _id: '5e7b1347250d0759abdb95b2',
          title: '套餐一',
          desc: '红酒小牛腩+农家灶台鱼+鱼香肉丝+青椒土豆丝+山药玉米排骨汤',
          supplier: '彼众餐饮',
        },
        {
          _id: '5e7b135ab920eb59a934fb1d',
          title: '套餐二',
          desc:
            '梅干菜扣肉+香辣鸡块（微辣）+冬瓜炒火腿+线椒烧茄子（微辣）+山药玉米排骨汤',
          supplier: '红采餐饮',
        },
      ],
      createTime: '2020-03-25T08:16:31.091Z',
      updateTime: '2020-03-25T08:16:31.091Z',
      __v: 0,
    },
    {
      _id: '5e7b1396b920eb59a934fb1f',
      title: '4月3日午餐',
      order_start: '2020-03-26T00:00:00.000Z',
      order_end: '2020-03-27T08:00:00.000Z',
      pick_start: '2020-04-03T02:00:00.000Z',
      pick_end: '2020-04-03T05:30:00.000Z',
      stat_type: 1,
      menu: [
        {
          _id: '5e1eae86623bc9589663614d',
          title: '今天不吃饭',
          desc: '选择此项将不在本餐次为您提供餐品',
          supplier: '心动网络',
        },
        {
          _id: '5e7b1379b920eb59a934fb1e',
          title: '套餐一',
          desc:
            '干锅牛蛙（微辣）+太阳蛋蒸肉饼+肉末双味鸭血（微辣）+青椒豆皮+冬瓜虾皮汤',
          supplier: '彼众餐饮',
        },
        {
          _id: '5e7b138f250d0759abdb95b4',
          title: '套餐二',
          desc: '菌姑炖土鸡+双豆五花肉+美人椒咸菜肉片+香辣海带+冬瓜虾皮汤',
          supplier: '红采餐饮',
        },
      ],
      createTime: '2020-03-25T08:17:26.201Z',
      updateTime: '2020-03-25T08:17:26.201Z',
      __v: 0,
    },
  ],
  orders: [],
};
Cypress.Commands.add('doLogin', function() {
  cy.setCookie('XD-MEAL-SESSION', '111111');
});
Cypress.Commands.add('defaultRouter', function() {
  cy.server();
  cy.route('/api/v1/orders', {
    dinings: [],
    ordered: [],
  });
  cy.route('api/v1/user/profile', profile);
  cy.route('/api/v1/dining/list', {
    dinings: [],
    orders: [],
  });
  cy.route('/api/v1/myDish', {});
});
Cypress.Commands.add('orderRouter', function() {
  cy.server();
  cy.route('/api/v1/orders', orders);
  cy.route('api/v1/user/profile', profile);
  cy.route('/api/v1/dining/list', list);
  cy.route('/api/v1/myDish', {});
});
Cypress.Commands.add('emptyRouter', function() {
  cy.server();
  cy.route('/api/v1/orders', orders);
  cy.route('api/v1/user/profile', profile);
  cy.route('/api/v1/dining/list', {
    dinings: [],
    orders: [],
  });
  cy.route('/api/v1/myDish', {});
});
