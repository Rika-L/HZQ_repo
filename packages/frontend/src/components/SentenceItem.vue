<script lang="ts" setup>
interface Props {
  zhWord: string // 中文
  enWord: string // 英文
  zhSentence: string // 中文造句
  enExplanation: string // 英文解释
  culture: string | undefined // 相关文化
}

defineProps<Props>()
</script>

<template>
  <view class="my-2 flex w-full flex-col gap-1 rounded-xl bg-white/20 p-4 backdrop-blur-md">
    <view class="flex items-center gap-2">
      <view class="pinyin text-xl text-blue-700">
        {{ zhWord }}
      </view>
      <view class="text-xl text-blue-600">
        {{ enWord }}
      </view>
    </view>
    <view class="pinyin text-base text-gray-700">
      {{ zhSentence }}
    </view>
    <view class="text-sm text-gray-900">
      {{ enExplanation }}
    </view>
    <u-divider />
    <view class="text-sm font-semibold text-cyan-950/85">
      Related Cultures: {{ culture ? culture : 'None' }}
    </view>
  </view>
</template>
