<template>
  <el-dialog
    destroy-on-close
    :title="$t(title)"
    v-model="isModelVisible"
    :style="{
      borderRadius: '10px',
    }"
    width="500px"
  >
    <el-form
      v-loading="loading"
      ref="formRef"
      :model="form"
      label-width="120px"
      :rules="rules"
    >
      <vd-field
        name="ID"
        prop="id"
        type="text"
        v-model:val="form.id"
        size="large"
      />
      <vd-field
        name="Email"
        prop="email"
        type="text"
        v-model:val="form.email"
        size="large"
      />
      <vd-field
        name="First Name"
        prop="first_name"
        type="text"
        v-model:val="form.first_name"
        size="large"
      />
      <vd-field
        name="Avatar"
        prop="avatar"
        type="text"
        v-model:val="form.avatar"
        size="large"
      >
        <img :src="form.avatar" class="w-20 h-20 rounded" />
      </vd-field>
    </el-form>
    <template #footer>
      <el-button
        size="large"
        @click="onSubmit(formRef)"
        auto-insert-space
        type="primary"
      >
        {{ $t("confirm") }}
      </el-button>
      <el-button
        size="large"
        @click="onReset(formRef)"
        auto-insert-space
        type="default"
      >
        {{ $t("reset") }}
      </el-button>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { FormInstance } from "element-plus";

defineProps(["title"]);

const isModelVisible = ref<boolean>(false);
const loading = ref(false);
const formRef = ref<FormInstance>();

type formProps = {
  [key: string]: any;
};

const form = ref<formProps>({});

const rules = {
  id: [{ required: true }],
  type: [{ required: true }],
};

const onSubmit = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  try {
    loading.value = true;
    await formEl.validate();
    isModelVisible.value = false;
    console.log(form);
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
};

const onReset = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};

const showForm = (item = { id: "", type: "" }) => {
  isModelVisible.value = true;
  form.value = { ...item };
};

defineExpose({
  showForm,
});
</script>
