<template>
  <p>
    {{ name }}
    <meter max="7" :value="value">{{ level }}</meter>
  </p>
</template>

<script>
export default {
  props: {
    name: { type: String, default: null },
    value: { type: Number, default: null },
    level: { type: String, default: null },
  },
}
</script>
