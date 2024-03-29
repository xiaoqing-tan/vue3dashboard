import i18next from "i18next";
import I18NextVue from "i18next-vue";
import LanguageDetector from "i18next-browser-languagedetector";

const locales = {
  en: {
    home: "Home",
    dashboard: "Dashboard",
    confirm: "Confirm",
    cancel: "Cancel",
    login: "Login",
    logout: "Logout",
    "forget password?": "Forget password?",
    username: "Username",
    password: "Password",
    city: "City",
    gender: "Gender",
    nickname: "Nickname",
    intro: "Intro",
    add: "Add",
    create: "Create",
    edit: "Edit",
    del: "Del",
    view: "View",
    export: "Export",
    import: "Import",
    filter: "Filter",
    reset: "Reset",
    "Vue Dashboard, To create unique Saas platform.":
      "Vue Dashboard, To create unique Saas platform.",
    components: {
      index: "Components",
      form: "Form",
      list: "List",
      charts: "Charts",
      icons: "Icons",
      editor: "Editor",
      statistic: "Statistic",
    },
    setting: {
      index: "Setting",
      info: "Info",
      roles: "Roles",
      menu: "Menu",
      users: "Users",
      system: "Setting"
    },
    pages: {
      index: "Pages",
      price: "Price",
    },
    tableTitle: {
      id: "ID",
      name: "Name",
      color: "Color",
      pantone_value: "Pantone_value",
      year: "Year",
      operation: "Operation",
      permissions: "Permissions",
      path: "Path",
      icon: "Icon",
      email: "Email",
      first_name: "First Name",
      last_name: "Last Nname",
      username: "Username",
      avatar: "Avatar",
      type: "Type",
      roles: "Roles",
    },
    male: "Male",
    female: "Female",
    beijing: "BeiJing",
    shanghai: "ShangHai",
    guangzhou: "GuangZhou",
  },
  zh: {
    dashboard: "控制台",
    home: "首页",
    confirm: "确定",
    cancel: "取消",
    login: "登录",
    logout: "退出",
    "forget password?": "忘记密码?",
    username: "用户名",
    password: "密码",
    city: "城市",
    gender: "性别",
    nickname: "昵称",
    intro: "简介",
    add: "添加",
    create: "添加",
    edit: "编辑",
    del: "删除",
    view: "查看",
    export: "导出",
    import: "导入",
    filter: "过滤",
    reset: "重置",
    "Vue Dashboard, To create unique Saas platform!":
      "Vue Dashboard, 创造不一样的管理系统!.",
    components: {
      index: "组件",
      form: "表单",
      list: "列表",
      charts: "图表",
      icons: "图标",
      editor: "编辑器",
      statistic: "统计",
    },
    setting: {
      index: "设置",
      info: "个人中心",
      roles: "角色管理",
      routes: "菜单管理",
      users: "用户管理",
      system: "系统管理",
    },
    pages: {
      index: "页面",
      price: "价签",
    },
    tableTitle: {
      id: "ID",
      name: "标题",
      color: "颜色",
      pantone_value: "值",
      year: "年份",
      operation: "操作",
      permissions: "权限",
      path: "路径",
      icon: "图标",
      email: "邮箱",
      first_name: "名字",
      last_name: "姓",
      username: "用户名",
      avatar: "头像",
      type: "类型",
      roles: "权限",
    },
    male: "男",
    female: "女",
    beijing: "北京",
    shanghai: "上海",
    guangzhou: "广州",
  },
};

i18next.use(LanguageDetector).init({
  fallbackLng: "en",
  resources: {
    en: { translation: locales.en },
    zh: { translation: locales.zh },
  },
});

export { I18NextVue, i18next };
