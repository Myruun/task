import { post } from './http'

// 获取一段句子
export function getSentence() {
  const url = '/sentence/index'
  return post(url)
}

// 获取任务
export function getTask() {
  const url = '/task/index'
  return post(url)
}

// 获取任务
export function addTask(data: object) {
  const url = '/task/add'
  return post(url, data)
}
