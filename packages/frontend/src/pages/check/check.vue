<script lang="ts" setup>
import TopBar from '@/components/TopBar.vue'
import { IMG_BASE_URL } from '@/constant'

const ctx = ref<UniNamespace.CanvasContext | null>()

function initCanvas() {
  ctx.value = uni.createCanvasContext('check-canvas')
  ctx.value.lineWidth = 4
  ctx.value.lineCap = 'round'
  ctx.value.lineJoin = 'round'
  ctx.value.strokeStyle = 'blue'
}

onReady(() => {
  initCanvas()
})

const points = ref<{ X: number, Y: number }[]>([])

function draw() {
  const point1 = points.value[0]
  const point2 = points.value[1]
  points.value.shift()
  ctx.value!.moveTo(point1.X, point1.Y)
  ctx.value!.lineTo(point2.X, point2.Y)
  ctx.value!.stroke()
  ctx.value!.draw(true)
}

function touchstart(e: TouchEvent) {
  const startX = e.changedTouches[0].x as number
  const startY = e.changedTouches[0].y as number
  const startPoint = { X: startX, Y: startY }
  points.value.push(startPoint)
  ctx.value!.beginPath()
}

function touchmove(e: TouchEvent) {
  const moveX = e.changedTouches[0].x as number
  const moveY = e.changedTouches[0].y as number
  const movePoint = { X: moveX, Y: moveY }
  points.value.push(movePoint) // 存点
  const len = points.value.length
  if (len >= 2) {
    draw() // 绘制路径
  }
}

function touchend() {
  points.value = []
}
</script>

<template>
  <image src="/src/static/img/bg3.jpg" class="fixed left-0 top-0 -z-20 size-full" />
  <TopBar :show-menu="true" />
  <view class="mt-[30px] px-4">
    <view class="my-5 flex w-full flex-col gap-1 rounded-xl bg-white/20 p-4 backdrop-blur-md">
      <view class="flex w-full justify-center">
        <view class="relative size-[400rpx]">
          <image :src="`${IMG_BASE_URL}28/10.png`" class="absolute left-0 top-0 size-[400rpx] rounded-xl" mode="aspectFill" />
          <canvas
            id="check-canvas"
            canvas-id="check-canvas"
            class="absolute left-0 top-0 h-full w-[400rpx]"
            disable-scroll
            @touchstart="touchstart"
            @touchmove="touchmove"
            @touchend="touchend"
          />
        </view>
      </view>
    </view>
    <!-- 检查手写按钮 -->
    <view class="flex w-full justify-center gap-1  rounded-xl bg-green-900/50  p-2 backdrop-blur-md">
      Check Handwriting
    </view>
    <view class="my-5 flex w-full flex-col gap-1 rounded-xl bg-white/20 p-4 backdrop-blur-md">
      <view class="flex gap-1">
        <text class="i-mdi-award text-xl font-bold" /><text class="flex items-center gap-1">
          <text>You score:</text><text class="text-xl font-bold text-green-500">
            80
          </text>
        </text>
      </view>
      <view class="h-px w-full bg-gray-700" />
      <view class="text-base">
        &nbsp;&nbsp;&nbsp;&nbsp;You're doing a great job! Keep up the excellent work! Your strokes are smooth and confident, showing your clear effort in Chinese character writing.<br>
        &nbsp;&nbsp;&nbsp;&nbsp;However, there are a few small areas where we can work together to improve.<br>
        &nbsp;&nbsp;&nbsp;&nbsp;For instance, the stroke order of some Chinese characters requires special attention; the correct horizontal stroke should be from left to right, not from right to left. <br>
        &nbsp;&nbsp;&nbsp;&nbsp;Additionally, the beginning and end of some strokes need to be more precise to ensure the structure of each character is accurate. <br>
        &nbsp;&nbsp;&nbsp;&nbsp;Keep practicing, and over time, your grasp of the correct stroke order will improve, and your Chinese character writing skills will definitely advance.
      </view>
    </view>
  </view>
</template>
