<script lang="ts" setup>
// @ts-nocheck
import TopBar from '@/components/TopBar.vue'
import { IMG_BASE_URL } from '@/constant'

const ctx = ref<UniNamespace.CanvasContext | null>()

function initCanvas() {
  ctx.value = uni.createCanvasContext('canvas')
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

const strokeTotal = ref(0)
const wordIndex = ref(0)
const stroke = ref(1)

// 下一笔
function next() {
  if (stroke.value < strokeTotal.value) {
    stroke.value += 1
  }
  else {
    stroke.value = 1
  }
}

// 上一笔
function prev() {
  if (stroke.value > 1) {
    stroke.value -= 1
  }
  else {
    stroke.value = strokeTotal.value
  }
}

function touchend() {
  points.value = []
  next()
}

function clear() {
  ctx.value!.clearRect(0, 0, 400, 400)
  ctx.value!.draw()
  ctx.value!.lineWidth = 4
  ctx.value!.lineCap = 'round'
  ctx.value!.lineJoin = 'round'
  ctx.value!.strokeStyle = 'blue'
}

onLoad((options) => {
  wordIndex.value = Number(options!.wordIndex)
  strokeTotal.value = Number(options!.stroke)
})
let interval: any = null
function auto() {
  interval = setInterval(() => {
    if (stroke.value !== strokeTotal.value) {
      next()
    }
    else {
      clearInterval(interval)
    }
  }, 1000)
}

// 是否手写
const isWrite = ref(false)

watchEffect(() => {
  if (isWrite.value) {
    initCanvas()
  }
  // 清空定时器
  if (interval) {
    clearInterval(interval)
  }
})

function startWrite() {
  isWrite.value = !isWrite.value
  stroke.value = 1
}

function resetWrite() {
  clear()
  stroke.value = 1
}

function exit() {
  isWrite.value = !isWrite.value
  stroke.value = 1
}
</script>

<template>
  <view class="fixed left-0 top-0 -z-10 size-full backdrop-blur" />
  <image src="/src/static/img/bg3.jpg" class="fixed left-0 top-0 -z-20 size-full" />
  <TopBar />
  <view class="mt-[30px] px-4">
    <view class="my-10 flex w-full flex-col gap-1 rounded-xl bg-white/20 p-4 backdrop-blur-md">
      <view class="flex w-full justify-center">
        <view class="relative size-[400rpx]">
          <image :src="`${IMG_BASE_URL}${wordIndex}/${stroke}.png`" class="absolute left-0 top-0 size-[400rpx] rounded-xl" mode="aspectFill" />
          <canvas
            v-if="isWrite"
            id="canvas"
            canvas-id="canvas"
            class="absolute left-0 top-0 h-full w-[400rpx]"
            disable-scroll
            @touchstart="touchstart"
            @touchmove="touchmove"
            @touchend="touchend"
          />
        </view>
      </view>
    </view>
    <view
      v-if="!isWrite"
      class="mb-1 mt-5 flex w-full justify-center rounded-xl bg-white/20 p-4 backdrop-blur-md"
      @tap="auto"
    >
      Auto Show
    </view>
    <view
      class="my-1 flex w-full justify-center rounded-xl bg-white/20 p-4 backdrop-blur-md"
      @tap="prev"
    >
      Prev
    </view>
    <view
      class="mb-5 mt-1 flex w-full justify-center rounded-xl bg-white/20 p-4 backdrop-blur-md"
      @tap="next"
    >
      Next
    </view>
    <view
      v-if="!isWrite"
      class="mb-1 mt-5 flex w-full justify-center rounded-xl bg-white/20 p-4 backdrop-blur-md"
      @tap="startWrite"
    >
      Write Practice
    </view>
    <view v-else>
      <view
        class="mb-1 mt-5 flex w-full justify-center rounded-xl bg-white/20 p-4 backdrop-blur-md"
        @tap="resetWrite"
      >
        Reset
      </view>
      <view
        class="my-1 flex w-full justify-center rounded-xl bg-white/20 p-4 backdrop-blur-md"
        @tap="exit"
      >
        Exit
      </view>
    </view>
  </view>
</template>
