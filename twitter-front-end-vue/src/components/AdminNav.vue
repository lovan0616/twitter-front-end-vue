<template>
  <div class="nav-bar d-flex flex-wrap">
    <div>
      <img
        src="https://imgur.com/JVhBuMg.png"
        alt="alphitterLogo"
        class="alphitterLogo"
      />
    </div>
    <ul>
      <li>
        <router-link to="/admin/main" class="d-flex"
          ><img
            src="https://imgur.com/ucoP2Jy.png"
            alt="推文icon"
            class="tweeticon"
          />
          <h5 class="list">推文清單</h5></router-link
        >
      </li>
      <li>
        <router-link to="/admin/users" class="d-flex"
          ><img
            src="https://imgur.com/twOPjEE.png"
            alt="使用者icon"
            class="usericon"
          />
          <h5 class="user">使用者列表</h5></router-link
        >
      </li>
      <router-link to="/admin/login" class="logout d-flex">
        <img
          src="https://imgur.com/1JSzLaV.png"
          alt="登出icon"
          class="logout-icon"
        />
        <h5 class="logout-text">登出</h5>
      </router-link>
    </ul>
  </div>
</template>

<style scoped>
.nav-bar {
  border-right: 2px solid #e6ecf0;
  width: 35%;
  height: 700px;
  flex-direction: column;
}
li {
  list-style: none;
}
a:hover,
a:focus {
  text-decoration: none;
}
a {
  padding: 10px 5px 10px 5px;
  align-items: center;
}
h5 {
  margin: 0 10px 0 5px;
}
.alphitterLogo {
  margin: 0.5rem 0 2.5rem 3.5rem;
  width: 40px;
  height: 40px;
}
.tweeticon,
.usericon {
  margin: 10px;
  width: 24px;
  height: 24px;
}
.tweeticon:hover,
.usericon:hover,
.list:hover,
.user:hover {
  transform: scale(1.1);
  filter: invert(50%) sepia(100%) saturate(1383%) hue-rotate(360deg)
    brightness(102%) contrast(107%);
  /* https://www.zhangxinxu.com/sp/filter.html */
}
.list,
.user,
.logout-text {
  color: black;
}
.logout {
  position: absolute;
  bottom: 3%;
  margin: 10px 10px 10px 20px;
}
.logout-icon {
  margin: 0 15px;
}
</style>