<template>
  <div class="card">
    <div class="card-header">
      <strong>跟隨誰</strong>
    </div>
    <div class="card-body">
      <div class="recommend" v-for="recommend in recommends" :key="recommend.id">
        <router-link :to="{
          name: 'user-profile',
          params: {id: recommend.id}
        }" class="d-flex">
        <div class="info d-flex align-items-center">
          <div class="image-area mr-2">
            <div class="image-cropper">
            <img :src="recommend.avatar | emptyImage" class="avatar">
          </div>          
          </div>
          <div class="info-text d-flex flex-column justify-content-center">
            <strong class="name">{{ recommend.name }}</strong>
            <p class="account">{{ recommend.account }}</p>
          </div>
        </div>
        <div class="follow-badge ml-auto">
          <div class="following badge badge-pill badge-primary" v-if="recommend.isFollowed">正在跟隨</div>
          <div class="deleteFollow badge badge-pill" v-if="recommend.isFollowed" @click.stop.prevent="unfollow(recommend)">取消跟隨</div>
          <div class="unfollow badge badge-pill badge-outline-primary" v-else @click.stop.prevent="follow(recommend)">跟隨</div>
        </div>
        </router-link>
      </div>
    </div>
    <div class="card-footer more" @click.stop.prevent="showAllRecommends" v-if="!recommendsAllShowed">顯示更多</div>
  </div>
</template>

<script>
import usersAPI from '../apis/users'
import followshipAPI from '../apis/followship'
import { Toast } from '../utils/helpers'
import { emptyImageFilter } from '../utils/mixins'
export default {
  data() {
    return {
      recommends: [],
      recommendsAllShowed: false
    }
  },
  mixins: [emptyImageFilter],
  methods: {
    async fetchData(amount) {
      try {
        const response = await usersAPI.readTopUsers()

        if(response.statusText !== 'OK') {
          throw new Error(response.statusText)
        }

        const { data } = response
        this.recommends = [...data].filter((recommend, index, self) => self.indexOf(recommend) < amount)

      } catch(error) {
        console.log(error)
        Toast.fire({
          icon: 'error',
          title: '無法取得推薦名單，請稍後再試'
        })
      }
    },
    showAllRecommends() {
      this.recommendsAllShowed = true
      this.fetchData(10)
    },
    async follow(recommend) {
      try {
        const { id } = recommend
        console.log(id)
        const response = await followshipAPI.follow({id})
        if(response.statusText !== 'OK') {
          throw new Error(response.statusText)
        }
        recommend.isFollowed = true

        this.recommends = [...this.recommends]

      } catch(error) {
        console.log(error)
        Toast.fire({
          icon: 'error',
          title: '無法成功跟隨，請稍後再試'
        })
      }
    },
    async unfollow(recommend) {
      try {
        const { id } = recommend
        const response = await followshipAPI.unfollow({id})
        if(response.statusText !== 'OK') {
          throw new Error(response.statusText)
        }
        recommend.isFollowed = false

        this.recommends = [...this.recommends]

      } catch(error) {
        console.log(error)
        Toast.fire({
          icon: 'error',
          title: '無法成功跟隨，請稍後再試'
        })
      }
    }
  },
  created() {
    this.fetchData(6)
  },
}
</script>

<style scoped>
  .card, .card-header, .card-footer {
    background-color: #F5F8FA;
    border-radius: 14px;
    border: hidden;
  }

  .card {
    margin-top: 15px;
  }

  .card-body {
    padding: 0;
  }
  
  .image-cropper {
    width: 50px;
    height: 50px;
    position: relative;
    overflow: hidden;
    border-radius: 50%;
    margin-left: 20px;
  }

  .avatar {
    width: auto;
    height: 100%;
    display: inline;
  }

  .info-text p {
    line-height:12px;
    color: #657786;
  }

  .recommend {
    padding: 10px 0 10px 0;
    border-bottom: 1px solid #E6ECF0;
  }

  .recommend:first-child {
    border-top: 1px solid #E6ECF0;
  }

  .recommend p {
    margin-bottom: 0;
  }

  .recommend a {
    text-decoration: none;
    color: #000000;
  }

  .recommend:hover, .card-footer:hover {
    background-color: #EBEEF0;
  }

  .card-footer {
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
  }

  .badge-pill {
    padding: 7px 16px;
    cursor: pointer;
    margin-right: 20px ;
  }

  .deleteFollow {
    background-color: #c82456;
    color: #ffffff;
    display: none
  }

  .following:hover {
    display: none;
  }

  .following:hover ~ .deleteFollow {
    display: block;
  }

  .unfollow:hover {
  background-color: #ffede0;
}

  .more {
    color: #ff6600;
    cursor: pointer;
  }

</style>