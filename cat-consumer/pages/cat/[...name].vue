<template>
  <div>
    {{ cat }}
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const cat = ref();
onMounted(async () => {
  const res = await $fetch("http://localhost:3000/api/cat", {
    method: "GET",
    params: {
      name: route.params.name[0],
    },
  });

  cat.value = res;
});
</script>
