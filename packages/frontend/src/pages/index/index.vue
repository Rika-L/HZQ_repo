<script lang="ts" setup>
import data from '@/main.json'

const keyword = ref('') // 定义keyword变量
const filteredData = ref(data) // 存储过滤后的数据
let show = Boolean(false) // 定义show变量
// 输入框按钮搜索触发
function filterData() {
  if (!keyword.value) {
    filteredData.value = data // 如果keyword为空，重置数据
  }
  else {
    filteredData.value = data.filter(item => item.chinese.includes(keyword.value)) // 过滤数据
  }
}
// 监听keyword变化
watchEffect(() => {
  if (!keyword.value) {
    filteredData.value = data
    show = false
  }
  else {
    show = true
  }
})
// 删除所有写的内容
function deleteData() {
  keyword.value = ''
  show = false
}

// 跳转的界面函数
function hdlTap(id: number) {
  uni.navigateTo({
    url: `/pages/word/word?index=${id}`,
  })
}

function toCheck() {
  uni.navigateTo({
    url: '/pages/check/check',
  })
}

function toVoice() {
  uni.navigateTo({
    url: '/pages/voice/voice',
  })
}
</script>

<template>
  <view class="fixed left-0 top-0 -z-10 size-full backdrop-blur" />
  <image src="/src/static/img/bg3.jpg" class="fixed left-0 top-0 -z-20 size-full" />
  <div class=" relative ml-[97rpx] mt-[100rpx] flex">
    <input v-model="keyword" type="text" class=" relative top-0 h-[70rpx] w-[430rpx] rounded-md bg-slate-200 pl-2 text-[26rpx] font-bold text-black opacity-75 shadow-inner shadow-[#888888]" placeholder="Please enter the Chinese" bindinput="inputChange" @confirm="filterData">
    <view class=" absolute left-[457rpx] top-0 h-[70rpx] w-[110rpx] rounded-lg bg-inherit" @tap="filterData">
      <div class=" size-full rounded-lg bg-slate-600 opacity-15" />
      <text class=" absolute left-[6px] top-[18rpx] text-[26rpx] font-semibold">
        Search
      </text>
    </view>
    <view v-show="show" class=" absolute left-[392rpx] top-[12rpx] flex size-[50rpx] opacity-40" hover-class="none" hover-stop-propagation="false" @tap="deleteData">
      <img src="/src/static/icon/delete.png" alt="" class="size-[50rpx]">
    </view>
  </div>
  <view class="my-2 px-[90rpx]">
    <view class="mb-2 flex items-center justify-between rounded-[30rpx] bg-green-900/50 p-2 text-white" @tap="toCheck">
      <view class="flex items-center gap-1">
        <view>Favorite Folders</view>
        <view class="i-mdi-favorite-box text-xl" />
      </view>
      <text class="i-mdi-arrow-right text-xl" />
    </view>
    <view class="flex flex-col gap-3 rounded-[30rpx] bg-green-900/50 p-2" @tap="toVoice">
      <view class="flex items-center gap-1 text-white">
        <view class="i-mdi-chat-question" /><text>小又</text>
      </view>
      <view class="p-px text-xs text-white">
        What is the meaning of "家"?
      </view>
      <view class="p-px text-xs text-white">
        How to learn Chinese?
      </view>
      <view class="p-px text-right text-xs text-white">
        Try to talk with AI Helper >
      </view>
    </view>
  </view>
  <scroll-view
    class=" absolute ml-[79rpx] mt-[10rpx] flex h-[1100rpx] w-full flex-wrap " scroll-x="false" scroll-y="true"
  >
    <view
      v-for="item in filteredData"
      :key="item.id"
      class=" relative left-[20rpx] mt-[30rpx] h-[150rpx] w-[580rpx] rounded-[30rpx] border-none bg-inherit"
      @tap="hdlTap(item.id)"
    >
      <div class="absolute h-full w-[550rpx] rounded-[30rpx] bg-slate-700/50" />
      <div class=" absolute left-[20rpx] top-[15rpx] size-[120rpx] rounded-[30rpx] bg-gray-200 opacity-75">
        <text class=" flex items-center justify-center text-[90rpx]" selectable="false" space="false" decode="false">
          {{ item.chinese }}
        </text>
      </div>
      <view class=" absolute left-[203rpx] top-[-15rpx] mt-[28rpx] flex flex-col items-center justify-center text-[30rpx]">
        <view>Level:{{ item.level }}</view>
        <view>Stroke:{{ item.stroke }}</view>
        <view>
          spell:
          <template v-if="item.syllables.length === 1">
            {{ item.syllables[0].spell }}
          </template>
          <template v-else>
            {{ item.syllables.map(syllable => syllable.spell).join('; ') }}
          </template>
        </view>
      </view>
    </view>
  </scroll-view>
</template>
