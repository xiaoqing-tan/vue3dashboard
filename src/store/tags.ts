import { ref } from "vue";
import { defineStore } from "pinia";

type tagsProps = {
  name: string;
  path: string;
};

export const useTags = defineStore("tags", () => {
  const tags = ref<tagsProps[]>([{ name: "dashboard", path: "/dashboard" }]);
  const add = (tag: tagsProps) => {
    let hasTag: boolean = false;
    tags.value.forEach(({ name }: { name: string }) => {
      if (name === tag.name) {
        hasTag = true;
      }
    });
    if (!hasTag && tag.name !== "login") {
      tags.value.push(tag);
    }
  };
  const del = ({ name }: { name: string }) => {
    tags.value = tags.value.filter((item: tagsProps) => item.name !== name);
  };
  return { tags, add, del };
});
