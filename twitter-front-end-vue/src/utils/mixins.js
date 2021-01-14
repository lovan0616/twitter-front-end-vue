import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import LocalizedFormat from 'dayjs/plugin/localizedFormat'
import 'dayjs/locale/zh-tw'
dayjs.locale("zh-tw")


export const fromNowFilter = {
  filters: {
    fromNow(datetime) {
      dayjs.extend(relativeTime)
      return datetime ? dayjs().from(datetime) : '-'
    }
  }
}

export const timeNowFilter = {
  filters: {
    timeNow(timeStamp) {
      dayjs.extend(LocalizedFormat)
      return timeStamp ? dayjs(timeStamp).format('A h:mm') : '-'
    }
  }
}

export const emptyImageFilter = {
  filters: {
    emptyImage(src) {
      return src || 'https://via.placeholder.com/350x220/DFDFDF?text=No+Image'
    }
  }
}