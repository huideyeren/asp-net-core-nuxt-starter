<template lang="pug">
header
  v-toolbar(
    dark
    color="primary"
  )
    v-toolbar-side-icon
    v-spacer
    v-toolbar-title Title
    v-spacer
    v-btn(icon)
      v-icon search
</template>

<style lang="scss" scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}
</style>