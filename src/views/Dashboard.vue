<template>
  <div class="dashboard-page">
    <h1 class="page-title">Главная страница</h1>
    <p class="coming-soon-text">Этот раздел находится в разработке и скоро будет доступен.</p>
  </div>
</template>

<script setup>
</script>

<style scoped>
.dashboard-page {
  padding: 24px;
  background: #f7fafc;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: system-ui;
}
.page-title {
  font-size: 32px;
  font-weight: 600;
  color: #1a202c;
  margin-bottom: 16px;
}
.coming-soon-text {
  font-size: 18px;
  color: #718096;
}
</style>