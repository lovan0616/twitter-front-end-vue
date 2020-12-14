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
        <a href="" class="d-flex"
          ><img
            src="https://imgur.com/UkjEsBp.png"
            alt="推文icon"
            class="tweeticon"
          />
          <h5 class="list">推文清單</h5></a
        >
      </li>
      <li>
        <a href="" class="d-flex"
          ><img
            src="https://imgur.com/twOPjEE.png"
            alt="使用者icon"
            class="usericon"
          />
          <h5 class="user">使用者列表</h5></a
        >
      </li>
      <a href="" class="logout d-flex">
        <img
          src="https://imgur.com/1JSzLaV.png"
          alt="登出icon"
          class="logout-icon"
        />
        <h5 class="logout-text">登出</h5>
      </a>
    </ul>
  </div>
</template>

<style scoped>
.nav-bar {
  border-right: 2px solid #f0f0f0;
  width: 35%;
  height: 700px;
  flex-direction: column;
  position: relative;
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
.list {
  color: #ff8800;
}
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