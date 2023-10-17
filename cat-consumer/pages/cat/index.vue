<template>
  <div>
    {{ cats }}
  </div>
</template>

<script setup lang="ts">
const cats = ref();
onMounted(async () => {
  const res = await $fetch("http://localhost:3000/api/cat", {
    method: "GET",
  });

  cats.value = res;
});
</script>
