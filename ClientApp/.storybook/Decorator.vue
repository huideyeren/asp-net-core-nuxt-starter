<template lang='pug'>
  .decoarator
    slot(
      name='story'
    )
</template>
<script lang='ts'>
  export default {
    name: 'decorator'
  }
</script>

<style lang='scss'> // ここにimportしたいファイルを入れます。
@import '@assets/variables.scss';
@import '@assets/app.scss';
</style>