<template>
  <UiButton
    text="Завершить работу"
    @click.stop="onClickHandler"
  />
</template>

<script setup>
import { defineProps } from 'vue';
import UiButton from '@/components/ui/UiButton.vue';


const props = defineProps({
  row: {
    type: Object,
    required: true,
  },
});

const openConfirmationModal = (row) => {

  emit('complete', row);
};

const emit = defineEmits(['complete']);

const onClickHandler = () => {
  emit('complete', props.row);
};
</script>

<style scoped>
.index-icon-wrap {
  display: flex;
  align-items: center;
  gap: 8px;
}

.cell-content {
  margin-left: 8px;
}

.data-row {
  transition: background 0.2s;
  cursor: pointer;
}
.data-row:hover {
  background-color: #f9fafb;
}
.cell {
  padding: 14px 16px;
  font-size: 14px;
  color: #1a202c;
  vertical-align: middle;
}
.index-icon-wrap {
  display: inline-flex;
  align-items: center;
  gap: 8px;
}
.row-index {
  font-weight: 500;
}
.expand-icon {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
}
</style>