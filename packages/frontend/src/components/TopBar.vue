<script lang="ts" setup>
defineProps<{ showMenu?: boolean }>()
const statusBarHeightValue = ref(20)
const topBarHeight = computed(() => statusBarHeightValue.value + 44)
const menuButtonLeft = ref(281)
onLoad(() => {
  const res = uni.getSystemInfoSync()
  statusBarHeightValue.value = res.statusBarHeight as number
  const menuButtonInfo = uni.getMenuButtonBoundingClientRect()
  menuButtonLeft.value = menuButtonInfo.left
})

function back() {
  uni.navigateBack()
}
</script>

<template>
  <view class="text-gray-300" :style="{ height: `${topBarHeight}px` }">
    <view :style="{ height: `${statusBarHeightValue}px` }" />
    <view
      class="flex h-[44px] items-center justify-between pl-4 pr-2"
      :style="{ width: `${menuButtonLeft}px` }"
    >
      <view class="flex items-center gap-2">
        <view class="i-mdi-arrow-back text-xl" @click="back" />
      </view>
      <view class="flex items-center justify-end gap-2">
        <view v-show="!showMenu" class="i-mdi-star-outline text-xl" />
        <view v-show="!showMenu" class="i-mdi-trash-can-outline text-xl" />
        <view v-show="!showMenu" class="i-solar-menu-dots-bold text-xl" />
      </view>
    </view>
  </view>
</template>
