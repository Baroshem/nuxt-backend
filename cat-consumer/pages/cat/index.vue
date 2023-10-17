<template>
  <div>
    {{ cats }}
  </div>
</template>

<script setup lang="ts">
const cats = ref();
onMounted(async () => {
  // https://nuxt-backend.vercel.app/
  const res = await $fetch("http://localhost:3001/api/cat", {
    method: "GET",
  });

  cats.value = res;
});
</script>
