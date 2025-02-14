<script setup lang="ts">
import { IMG_BASE_URL } from './constant'

onLaunch(() => {
  console.log('App Launch')
})
onShow(() => {
  console.log('App Show')
})
onHide(() => {
  console.log('App Hide')
})

uni.loadFontFace({
  family: 'iconfont',
  source: `url("${IMG_BASE_URL}2.ttc")`,
  global: true,
})
</script>

<style lang="scss">
@use 'tailwindcss/base';
@use 'tailwindcss/components';
@use 'tailwindcss/utilities';

.pinyin {
  font-family: 'iconfont' !important;
}
</style>
