<script lang="ts" setup>
import DYZItem from '@/components/DYZItem.vue'
import TopBar from '@/components/TopBar.vue'
import { IMG_BASE_URL } from '@/constant'
import data from '@/main.json'

const wordIndex = ref(0)

const wordDetail = computed(() => {
  return data[wordIndex.value]
})

onLoad((options) => {
  wordIndex.value = options!.index as number
})

function hdlClickSentence(index: number) {
  uni.navigateTo({
    url: `/pages/word/sentence/sentence?wordIndex=${wordIndex.value}&index=${index}`,
  })
}

function hdlClickWrite() {
  uni.navigateTo({
    url: `/pages/word/write/write?stroke=${wordDetail.value.stroke}&wordIndex=${wordIndex.value}`,
  })
}

function hdlClickPhrase() {
  uni.navigateTo({
    url: `/pages/word/phrase/phrase`,
  })
}
</script>

<template>
  <view class="fixed bottom-[20rpx] z-50 px-[20rpx]">
    <view class="flex h-12 w-[calc(100vw-40rpx)] items-center justify-between rounded-full bg-green-900/70 p-2 text-white backdrop-blur-sm">
      <view class="text-xs">
        Ask | How to comprehend the word?
      </view>
      <view class="flex items-center gap-1">
        <view class="i-mdi-search" />
        <view class="i-mdi-drag-vertical-variant" />
        <view class="i-mdi-camera" />
      </view>
    </view>
  </view>
  <view class="fixed left-0 top-0 -z-10 size-full backdrop-blur" />
  <image src="/src/static/img/bg3.jpg" class="fixed left-0 top-0 -z-20 size-full" />
  <TopBar />
  <view class="mt-[30px] px-4">
    <view class="flex items-start gap-4">
      <view class="rounded-md bg-white/50 p-2 text-7xl text-gray-900">
        {{ wordDetail.chinese }}
      </view>
      <view class="flex flex-col gap-0.5">
        <view>Level:{{ wordDetail.level }}</view>
        <view>Radical:{{ wordDetail.radical }}</view>
        <view>Stroke:{{ wordDetail.stroke }}</view>
        <view>Structure:{{ wordDetail.structure }}</view>
      </view>
    </view>
    <view class="my-10 flex w-full flex-col gap-1 rounded-xl bg-white/20 p-4 backdrop-blur-md" @tap="hdlClickWrite">
      <image :src="`${IMG_BASE_URL}${wordIndex}/main.png`" mode="widthFix" />
      <view class="flex items-center justify-end text-gray-800">
        <text>Practice</text>
        <text class="i-mdi-arrow-right" />
      </view>
    </view>
    <view class="my-5 flex w-full gap-1 rounded-xl bg-white/20 p-4 backdrop-blur-md" @tap="hdlClickPhrase">
      <view class="flex items-center justify-end text-gray-800">
        <text>Vocabulary practice</text>
        <text class="i-mdi-arrow-right" />
      </view>
    </view>
    <DYZItem
      v-for="(item, index) in wordDetail.syllables"
      :key="index"
      :spell="item.spell"
      :en-explain="item.enExplain"
      :zh-explain="item.zhExplain"
      @tap="hdlClickSentence(index)"
    />
  </view>
</template>

<style>
/* stylelint-disable-next-line selector-type-no-unknown */
page {
  padding-bottom: 300px;
}
</style>
