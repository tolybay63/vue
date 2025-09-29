<template>
  <div class="status-wrapper">
    <div
      v-if="showCheck || showMinus"
      class="icon-circle"
      :class="{ 'circle-green': showCheck, 'circle-red': showMinus }"
      :title="showCheck ? 'Работа выполнена' : 'Работа не выполнена'"
    >
      <UiIcon
        :name="showCheck ? 'Check' : 'Minus'"
        class="status-icon"
        :color="showCheck ? ICON_COLORS.green : ICON_COLORS.red"
      />
    </div>

    <div
      v-if="showHammer"
      class="icon-circle circle-blue"
      title="Зарегистрированы неисправности"
    >
      <UiIcon name="Hammer" class="status-icon" :color="ICON_COLORS.blue" />
    </div>

    <div
      v-if="showRuler"
      class="icon-circle circle-blue"
      title="Зарегистрированы параметры"
    >
      <UiIcon name="Ruler" class="status-icon" :color="ICON_COLORS.blue" />
    </div>
  </div>
</template>

<script setup>
import UiIcon from '@/components/ui/UiIcon.vue';

// Определяем цветовые константы для иконок
const ICON_COLORS = {
  green: '#005F00',
  red: '#D70C0C',
  blue: '#2286C8',
};

const props = defineProps({
  showCheck: {
    type: Boolean,
    default: false,
  },
  showMinus: {
    type: Boolean,
    default: false,
  },
  showHammer: {
    type: Boolean,
    default: false,
  },
  showRuler: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped>
.status-wrapper {
  display: flex;
  align-items: center;
  gap: 8px;
}

.icon-circle {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: grid;
  place-items: center;
}

.circle-green {
  background-color: #e9ffe4;
}

.circle-red {
  background-color: #fef2f2;
}

.circle-blue {
  background-color: #eff6ff;
}

.icon-circle :deep(.icon) {
  margin-right: 0;
  width: 18px;
  height: 18px;
}
</style>