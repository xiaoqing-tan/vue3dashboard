<script setup lang="ts">
import { useRouter } from "vue-router";
import { useSettingStore, useUserStore } from "@/store";
import { i18next } from "@/i18n";

const router = useRouter();
const settingStore = useSettingStore();
const userStore = useUserStore();
const handleSidebarStatus = () => {
  settingStore.setSidebarStatus();
};
const handleLanguage = (language: string) => {
  settingStore.setLanguage(language);
  i18next.changeLanguage(language);
};
const handleAction = (type: string) => {
  userStore.logout();
  router.push("/login");
};
</script>
<template>
  <div
    class="vd-header z-40 h-[60px] transition-all flex items-center justify-between border-b bg-gray-50 border-gray-200 px-4"
  >
    <div class="flex items-center justify-between">
      <el-icon
        class="cursor-pointer"
        @click.stop="handleSidebarStatus"
        color="text-gray-900"
      >
        <vd-icon
          :icon="settingStore.setting.sidebarStatus ? 'Expand' : 'Fold'"
        />
      </el-icon>
      <vd-breadcrumb />
    </div>

    <div class="flex">
      <el-dropdown @command="handleLanguage" trigger="click">
        <p class="flex items-center cursor-pointer">
          <vd-svg-icon color="#333" name="language" />
        </p>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="zh">中文</el-dropdown-item>
            <el-dropdown-item command="en">English</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <el-dropdown @command="handleAction" trigger="click">
        <p class="flex items-center cursor-pointer">
          <el-icon><vd-icon icon="User" /></el-icon>
          <span class="text-slate-500 pl-2 text-base">admin</span>
        </p>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="logout" icon="SwitchButton">
              {{ $t("logout") }}
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>
