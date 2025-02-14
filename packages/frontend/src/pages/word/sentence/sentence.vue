<script lang="ts" setup>
import SentenceItem from '@/components/SentenceItem.vue'
import TopBar from '@/components/TopBar.vue'
import data from '@/main.json'

const wordIndex = ref(0)
const syllableIndex = ref(0)

const syllableDetail = computed(() => {
  return data[wordIndex.value].syllables[syllableIndex.value]
})

onLoad((options) => {
  wordIndex.value = options!.wordIndex as number
  syllableIndex.value = options!.index as number
})
</script>

<template>
  <TopBar />
  <view class="fixed left-0 top-0 -z-10 size-full backdrop-blur" />
  <image src="/src/static/img/bg3.jpg" class="fixed left-0 top-0 -z-20 size-full" />
  <view class="mt-[30px] px-4">
    <SentenceItem
      v-for="(item, index) in syllableDetail.words"
      :key="index"
      :zh-word="item.zhWord"
      :en-word="item.enWord"
      :zh-sentence="item.zhSentence"
      :en-explanation="item.enExplanation"
      :culture="item.culture"
    />
  </view>
</template>
