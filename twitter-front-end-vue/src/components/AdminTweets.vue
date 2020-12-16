<template>
  <div class="all-container">
    <h5 class="my-3">推文清單</h5>
    <div class="tweetscontainer">
      <div class="tweetscard d-flex">
        <div class="userphoto mx-2 ml-3">
          <img
            src="https://imgur.com/JVhBuMg.png"
            alt="userpic"
            class="userpic"
          />
        </div>
        <div class="contentcontainer d-flex">
          <div class="userinfo d-flex">
            <div class="username">Apple</div>
            <div class="useraccount">@apple</div>
            <div class="dot">·</div>
            <div class="tweettime">3小時</div>
          </div>
          <div class="tweetcontent">
            Nulla Lorem mollitcupidatat irure. Laborum magna!!Nulla Lorem
            mollitcupidatat irure. Laborum magna!!Nulla Lorem mollitcupidatat
            irure. Laborum magna!!Nulla Lorem mollitcupidatat irure. Laborum
            magna!!
          </div>
        </div>
        <div class="delete">Ｘ</div>
      </div>
      <div class="tweetscard d-flex">
        <div class="userphoto mx-2 ml-3">
          <img
            src="https://imgur.com/JVhBuMg.png"
            alt="userpic"
            class="userpic"
          />
        </div>
        <div class="contentcontainer d-flex">
          <div class="userinfo d-flex">
            <div class="username">Apple</div>
            <div class="useraccount">@apple</div>
            <div class="dot">·</div>
            <div class="tweettime">3小時</div>
          </div>
          <div class="tweetcontent">
            Nulla Lorem mollitcupidatat irure. Laborum magna!!Nulla Lorem
            mollitcupidatat irure. Laborum magna!!Nulla Lorem mollitcupidatat
            irure. Laborum magna!!Nulla Lorem mollitcupidatat irure. Laborum
            magna!!
          </div>
        </div>
        <div class="delete">Ｘ</div>
      </div>
      <div class="tweetscard d-flex">
        <div class="userphoto mx-2 ml-3">
          <img
            src="https://imgur.com/JVhBuMg.png"
            alt="userpic"
            class="userpic"
          />
        </div>
        <div class="contentcontainer d-flex">
          <div class="userinfo d-flex">
            <div class="username">Apple</div>
            <div class="useraccount">@apple</div>
            <div class="dot">·</div>
            <div class="tweettime">3小時</div>
          </div>
          <div class="tweetcontent">
            Nulla Lorem mollitcupidatat irure. Laborum magna!!Nulla Lorem
            mollitcupidatat irure. Laborum magna!!Nulla Lorem mollitcupidatat
            irure. Laborum magna!!Nulla Lorem mollitcupidatat irure. Laborum
            magna!!
          </div>
        </div>
        <div class="delete">Ｘ</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.tweetscontainer {
  width: 100%;
}
.tweetscard {
  border-bottom: 1px solid #e6ecf0;
  margin-top: 1rem;
}
.contentcontainer {
  flex-direction: column;
  width: 100%;
  margin: 0 10px 10px 0;
  padding: 0 0 2rem 5px;
}
.userphoto {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #c4c4c4;
}
.userpic {
  width: 60px;
  height: 60px;
}
h5 {
  border-bottom: 1px solid #e6ecf0;
  padding: 0 10px 10px 30px;
}
.userinfo {
  margin: 0 10px 5px 0;
}
.username,
.dot {
  font-weight: 700;
}
.username {
  margin-right: 5px;
}
.useraccount,
.tweettime,
.dot {
  margin: 0 3px;
  color: #657786;
}
.useraccount,
.tweettime {
  font-weight: 500;
}
.delete {
  margin-left: 20px;
}
</style>