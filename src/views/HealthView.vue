<script setup>
import { ref, onMounted } from 'vue';
import { apiGet } from '../lib/api';

const status = ref('loading...');
const error = ref('');

onMounted(async () => {
  try {
    const data = await apiGet('/health'); // 백엔드의 /health 호출
    status.value = data?.status ?? JSON.stringify(data);
  } catch (e) {
    error.value = e.message;
  }
});
</script>

<template>
  <section style="padding:20px;">
    <h2>/health 상태</h2>
    <p v-if="error">❌ {{ error }}</p>
    <p v-else>✅ {{ status }}</p>
  </section>
</template>
