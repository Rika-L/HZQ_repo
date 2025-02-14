interface WordItemType {
  zhWord: string // 中文
  enWord: string // 英文
  zhSentence: string // 中文造句
  enExplanation: string // 英文解释
  culture: string // 文化
}

interface SyllableItemType {
  spell: string // 拼音
  zhExplain: string // 中文释义
  enExplain: string // 英文释义
  words: WordItemType[] // 组词 多个
}

interface DataItemType {
  // 序号
  id: number
  // 字
  chinese: string
  // 字级
  level: string
  // 笔画
  stroke: number
  // 结构
  structure: string
  // 部首
  radical: string
  // 音节
  syllables: SyllableItemType[]
}

type DataType = DataItemType[]

export default DataType
