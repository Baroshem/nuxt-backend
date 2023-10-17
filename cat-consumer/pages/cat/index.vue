<template>
  <div>
    <ul>
      <li v-for="cat in cats" :key="cat.id">
        <img :src="cat.image" />
        <h2>{{ cat.name }}</h2>
      </li>
    </ul>
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
