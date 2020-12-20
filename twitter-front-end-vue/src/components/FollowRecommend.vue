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
            <img :src="recommend.image" class="avatar">
          </div>          
          </div>
          <div class="info-text d-flex flex-column justify-content-center">
            <strong class="name">{{ recommend.name }}</strong>
            <p class="account">{{ recommend.account }}</p>
          </div>
        </div>
        <div class="follow-badge ml-auto">
          <div class="following badge badge-pill badge-primary" v-if="recommend.isFollowed">正在跟隨</div>
          <div class="deleteFollow badge badge-pill" v-if="recommend.isFollowed" @click.stop.prevent="deleteFollow(recommend)">取消跟隨</div>
          <div class="unfollow badge badge-pill badge-outline-primary" v-else @click.stop.prevent="follow(recommend)">跟隨</div>
        </div>
        </router-link>
      </div>
    </div>
    <div class="card-footer more" @click.stop.prevent="showAllRecommends" v-if="!recommendsAllShowed">顯示更多</div>
  </div>
</template>

<script>
//Todo: 需要替換為API撈回資料
const dummyData = {
  recommends: [
    {
      id: 1,
      name: '蠟筆小新',
      account: '@canyon',
      image: 'https://bbs.kamigami.org/uploads/monthly_2017_12/timg.jpg.3d7dc76f5ab8a4eb86da562e60e28b43.jpg',
      isFollowed: true
    },
    {
      id: 2,
      name: '蠟筆小新',
      account: '@canyon',
      image: 'https://bbs.kamigami.org/uploads/monthly_2017_12/timg.jpg.3d7dc76f5ab8a4eb86da562e60e28b43.jpg',
      isFollowed: true
    },
    {
      id: 3,
      name: '蠟筆小新',
      account: '@canyon',
      image: 'https://bbs.kamigami.org/uploads/monthly_2017_12/timg.jpg.3d7dc76f5ab8a4eb86da562e60e28b43.jpg',
      isFollowed: false
    },
    {
      id: 4,
      name: '蠟筆小新',
      account: '@canyon',
      image: 'https://bbs.kamigami.org/uploads/monthly_2017_12/timg.jpg.3d7dc76f5ab8a4eb86da562e60e28b43.jpg',
      isFollowed: false
    },
    {
      id: 5,
      name: '蠟筆小新',
      account: '@canyon',
      image: 'https://bbs.kamigami.org/uploads/monthly_2017_12/timg.jpg.3d7dc76f5ab8a4eb86da562e60e28b43.jpg',
      isFollowed: false
    },
    {
      id: 6,
      name: '蠟筆小新',
      account: '@canyon',
      image: 'https://bbs.kamigami.org/uploads/monthly_2017_12/timg.jpg.3d7dc76f5ab8a4eb86da562e60e28b43.jpg',
      isFollowed: false
    },
    {
      id: 7,
      name: '蠟筆小新',
      account: 'canyon',
      image: 'https://bbs.kamigami.org/uploads/monthly_2017_12/timg.jpg.3d7dc76f5ab8a4eb86da562e60e28b43.jpg',
      isFollowed: false
    },
    {
      id: 8,
      name: '蠟筆小新',
      account: '@canyon',
      image: 'https://bbs.kamigami.org/uploads/monthly_2017_12/timg.jpg.3d7dc76f5ab8a4eb86da562e60e28b43.jpg',
      isFollowed: false
    },
    {
      id: 9,
      name: '蠟筆小新',
      account: '@canyon',
      image: 'https://bbs.kamigami.org/uploads/monthly_2017_12/timg.jpg.3d7dc76f5ab8a4eb86da562e60e28b43.jpg',
      isFollowed: false
    },
    {
      id: 10,
      name: '蠟筆小新',
      account: '@canyon',
      image:'https://bbs.kamigami.org/uploads/monthly_2017_12/timg.jpg.3d7dc76f5ab8a4eb86da562e60e28b43.jpg',
      isFollowed: false
    },
  ]
}
export default {
  data() {
    return {
      recommends: [],
      recommendsAllShowed: false
    }
  },
  methods: {
    fetchData(amount) {
      this.recommends = [...dummyData.recommends].filter((recommend, index, self) => self.indexOf(recommend) < amount)
    },
    showAllRecommends() {
      this.recommendsAllShowed = true
      this.fetchData(10)
    },
    follow(recommend) {
      recommend.isFollowed = true
    },
    deleteFollow(recommend) {
      recommend.isFollowed = false
    }
  },
  created() {
    this.fetchData(6)
  }
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