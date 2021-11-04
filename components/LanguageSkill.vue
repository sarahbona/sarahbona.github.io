<template>
  <p>
    {{ lang }}
    <progress max="4" :value="value">{{ level }}</progress>
  </p>
</template>

<script>
export default {
  props: {
    lang: { type: String, default: null },
    value: { type: Number, default: null },
    level: { type: String, default: null },
  },
}
</script>
