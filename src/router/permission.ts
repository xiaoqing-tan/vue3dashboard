import NProgress from "nprogress";
import router from "@/router";
import { addRoutes } from "@/router/resolveRouter";
import { useUserStore, useRouterStore, useSettingStore } from "@/store";

import "nprogress/nprogress.css";

NProgress.configure({
  showSpinner: false,
});

const whiteList: string[] = ["/login"];

router.beforeEach(async (to) => {
  const userStore = useUserStore();
  const routerStore = useRouterStore();

  NProgress.start();

  if (whiteList.indexOf(to.path) !== -1) {
    return true;
  }

  if (!userStore.userInfo.token) {
    router.push("/login");
    return true;
  }

  if (routerStore.isLoaded) {
    return true;
  }

  await routerStore.getRoutes(userStore.userInfo.permissions);
  addRoutes(routerStore.routes);
  return to.fullPath;
});

router.afterEach((to) => {
  const store = useSettingStore();
  if (store.setting.deviceType === "mobile") {
    store.setSidebarStatus("close");
  }
  NProgress.done();
  document.title = `${to.meta.title} - VD`;
});
