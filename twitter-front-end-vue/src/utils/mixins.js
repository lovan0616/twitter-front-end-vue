import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/zh-tw'

export const fromNowFilter = {
  filters: {
    fromNow(datetime) {
      dayjs.extend(relativeTime)
      return datetime ? dayjs().locale("zh-tw").from(datetime) : '-'
    }
  }
}