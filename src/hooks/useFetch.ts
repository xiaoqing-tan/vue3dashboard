import { watch, ref, isRef } from "vue";
import { request } from "@/api";

export function useFetch(URL: string) {
  const dataSource = ref({});
  const loading = ref<boolean>(false);
  const reload = async () => {
    loading.value = true;
    const { result } = await request.get(URL);
    dataSource.value = result;
    loading.value = false;
  };
  if (isRef(URL)) {
    watch(URL, reload);
  }
  reload();
  return { dataSource, loading, reload };
}
