<template>
  <div>
    {{ cat }}
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const cat = ref();
onMounted(async () => {
  // https://nuxt-backend.vercel.app/
  const res = await $fetch("http://localhost:3001/api/cat", {
    method: "GET",
    params: {
      name: route.params.name[0],
    },
  });

  cat.value = res;
});
</script>
