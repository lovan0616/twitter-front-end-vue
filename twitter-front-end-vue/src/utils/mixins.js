import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime';

export const fromNowFilter = {
  filters: {
    fromNow(datetime) {
      dayjs.extend(relativeTime)
      return datetime ? dayjs().from(datetime) : '--';
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