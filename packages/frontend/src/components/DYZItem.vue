<script lang="ts" setup>
/**
 * @Author Rika
 * @Description 多音字子项
 */
interface Props {
  spell: string // 拼音
  zhExplain: string // 中文释义
  enExplain: string // 英文释义
}

defineProps<Props>()
</script>

<template>
  <view class="my-2 flex w-full flex-col gap-1 rounded-xl bg-white/20 p-4 backdrop-blur-md">
    <view class="flex items-center gap-4 text-xl text-blue-700">
      <view>{{ spell }}</view>
      <view class="i-mdi-speakerphone text-red-700" />
      <view class="i-mdi-star-outline text-yellow-700" />
    </view>
    <view class="pinyin text-[18px]">
      {{ zhExplain }}
    </view>
    <view class="pt-[40rpx] text-[14px] text-gray-500">
      {{ enExplain }}
    </view>
    <view class="flex items-center justify-end text-gray-800">
      <text>More</text>
      <text class="i-mdi-arrow-right" />
    </view>
  </view>
</template>
