<script lang="ts" setup>
import TopBar from '@/components/TopBar.vue'
</script>

<template>
  <image src="/src/static/img/bg3.jpg" class="fixed left-0 top-0 -z-20 size-full" />
  <TopBar :show-menu="true" />
  <view class="fixed bottom-[100rpx] left-1/2 z-10 flex size-[128rpx] -translate-x-1/2 items-center justify-center rounded-full bg-green-900/50">
    <view class="i-mdi-microphone-outline text-5xl text-white" />
  </view>
  <view class="mt-[10px] px-4">
    <view class="flex w-full flex-col justify-center gap-1  rounded-xl bg-white/20  p-2 backdrop-blur-md">
      <view class="text-sm font-bold text-green-900">
        Please repeat the following sentence
      </view>
      <view class="pinyin text-3xl font-bold">
        弘扬中华传统文化
      </view>
    </view>
    <view class="my-[30px] flex w-full flex-col justify-center  gap-1 rounded-xl  bg-white/20 p-2 backdrop-blur-md">
      <view class="text-sm">
        Your answer:
      </view>
      <view class="flex items-center justify-between gap-2 rounded-xl bg-green-900/50 p-2 text-white">
        <view>
          <view class="i-game-icons-sound-waves text-3xl" />
          <view class="i-game-icons-sound-waves text-3xl" />
          <view class="i-game-icons-sound-waves text-3xl" />
          <view class="i-game-icons-sound-waves text-3xl" />
          <view class="i-game-icons-sound-waves text-3xl" />
        </view>
        <view class="flex items-center gap-1">
          <view class="i-solar-headphones-round-sound-bold" />
          <view>12S</view>
        </view>
      </view>
    </view>
    <view class="my-[30px] flex w-full flex-col justify-center  gap-1 rounded-xl  bg-white/20 p-2 backdrop-blur-md">
      <view class="flex gap-1">
        <text class="i-mdi-award text-xl font-bold" /><text class="flex items-center gap-1">
          <text>You score:</text><text class="text-xl font-bold text-yellow-500">
            72
          </text>
        </text>
      </view>
      <view class="h-px w-full bg-gray-700" />
      <view>
        <view class="font-bold  text-green-900">
          Orthoepy:
        </view>
        <view class="my-[10px] flex items-center justify-between gap-2 rounded-xl bg-green-900/50 p-2 text-white">
          <view>
            <view class="i-game-icons-sound-waves text-3xl" />
            <view class="i-game-icons-sound-waves text-3xl" />
            <view class="i-game-icons-sound-waves text-3xl" />
          </view>
          <view class="flex items-center gap-1">
            <view class="i-solar-headphones-round-sound-bold" />
            <view>5S</view>
          </view>
        </view>
      </view>
      <view>
        <view class="font-bold  text-green-900">
          Pronunciation:
        </view>
        <view>
          &nbsp;&nbsp;&nbsp;&nbsp;You're doing a fantastic job, please keep it up. However, there are still some issues with your pronunciation:<br>
          &nbsp;&nbsp;&nbsp;&nbsp;1. The intonation is too flat, lacking the rise and fall of pitch.<br>
          &nbsp;&nbsp;&nbsp;&nbsp;2. Some words are pronounced as if they are glued together; in Chinese pronunciation, it's best to minimize the use of liaison. <br>
          &nbsp;&nbsp;&nbsp;&nbsp; To address these issues, you can listen to Chinese podcasts regularly and then try to imitate the pronunciation.
        </view>
      </view>
      <view class="h-px w-full bg-gray-700" />
      <view>
        <view class="font-bold  text-green-900">
          Pace:
        </view>
        <view>
          &nbsp;&nbsp;&nbsp;&nbsp;I think you are a little short in speaking speed, which may be because you are not familiar with Chinese characters.<br>
          &nbsp;&nbsp;&nbsp;&nbsp;Lack of understanding of Chinese characters can cause you to speak too slowly or stop completely. Please finish the pronunciation of the last character when you do not know the next one, rather than dragging out the pronunciation.<br>
        </view>
      </view>
    </view>
  </view>
</template>
