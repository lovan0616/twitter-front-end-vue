<template>
  <div class="all-container">
    <h5 class="my-3">使用者列表</h5>
    <div class="usercontainer">
      <div class="usercard">
        <div class="row row-cols-1 row-cols-md-4 mx-2">
          <div class="col">
            <div class="card">
              <img
                :src="user.image | emptyImage"
                class="card-img-top"
                alt="..."
              />
              <img src="https://i.imgur.com/NZWqfN3.jpg" class="user-photo" />
              <div class="card-body">
                <h6 class="user-name">John Doe</h6>
                <h6 class="user-account">@heyjohn</h6>
                <div class="user-status d-flex">
                  <img
                    src="http://i.imgur.com/kbKBExh.png"
                    alt=""
                    class="user-chat"
                  />
                  <p class="chat-number">1.5k</p>
                  <img
                    src="http://i.imgur.com/0euPu42.png"
                    alt=""
                    class="user-like"
                  />
                  <p class="like-number">2k</p>
                </div>
                <div class="userfollowstatus d-flex">
                  <p class="user-following">34個</p>
                  <p>跟隨中</p>
                  <p class="user-follower">59位</p>
                  <p>跟隨者</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img
                :src="user.image | emptyImage"
                class="card-img-top"
                alt="..."
              />
              <img src="https://i.imgur.com/NZWqfN3.jpg" class="user-photo" />
              <div class="card-body">
                <h6 class="user-name">Robert Fox</h6>
                <h6 class="user-account">@robfox</h6>
                <div class="user-status d-flex">
                  <img
                    src="http://i.imgur.com/kbKBExh.png"
                    alt=""
                    class="user-chat"
                  />
                  <p class="chat-number">1.5k</p>
                  <img
                    src="http://i.imgur.com/0euPu42.png"
                    alt=""
                    class="user-like"
                  />
                  <p class="like-number">2k</p>
                </div>
                <div class="userfollowstatus d-flex">
                  <p class="user-following">34個</p>
                  <p>跟隨中</p>
                  <p class="user-follower">59位</p>
                  <p>跟隨者</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img
                :src="user.image | emptyImage"
                class="card-img-top"
                alt="..."
              />
              <img src="https://i.imgur.com/NZWqfN3.jpg" class="user-photo" />
              <div class="card-body">
                <h6 class="user-name">Leslie Alexander</h6>
                <h6 class="user-account">@lesAlex</h6>
                <div class="user-status d-flex">
                  <img
                    src="http://i.imgur.com/kbKBExh.png"
                    alt=""
                    class="user-chat"
                  />
                  <p class="chat-number">1.5k</p>
                  <img
                    src="http://i.imgur.com/0euPu42.png"
                    alt=""
                    class="user-like"
                  />
                  <p class="like-number">2k</p>
                </div>
                <div class="userfollowstatus d-flex">
                  <p class="user-following">34個</p>
                  <p>跟隨中</p>
                  <p class="user-follower">59位</p>
                  <p>跟隨者</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img
                :src="user.image | emptyImage"
                class="card-img-top"
                alt="..."
              />
              <img src="https://i.imgur.com/NZWqfN3.jpg" class="user-photo" />
              <div class="card-body">
                <h6 class="user-name">Arlene McCoy</h6>
                <h6 class="user-account">@alcoy</h6>
                <div class="user-status d-flex">
                  <img
                    src="http://i.imgur.com/kbKBExh.png"
                    alt=""
                    class="user-chat"
                  />
                  <p class="chat-number">1.5k</p>
                  <img
                    src="http://i.imgur.com/0euPu42.png"
                    alt=""
                    class="user-like"
                  />
                  <p class="like-number">2k</p>
                </div>
                <div class="userfollowstatus d-flex">
                  <p class="user-following">34個</p>
                  <p>跟隨中</p>
                  <p class="user-follower">59位</p>
                  <p>跟隨者</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img
                :src="user.image | emptyImage"
                class="card-img-top"
                alt="..."
              />
              <img src="https://i.imgur.com/NZWqfN3.jpg" class="user-photo" />
              <div class="card-body">
                <h6 class="user-name">John Doe</h6>
                <h6 class="user-account">@heyjohn</h6>
                <div class="user-status d-flex">
                  <img
                    src="http://i.imgur.com/kbKBExh.png"
                    alt=""
                    class="user-chat"
                  />
                  <p class="chat-number">1.5k</p>
                  <img
                    src="http://i.imgur.com/0euPu42.png"
                    alt=""
                    class="user-like"
                  />
                  <p class="like-number">2k</p>
                </div>
                <div class="userfollowstatus d-flex">
                  <p class="user-following">34個</p>
                  <p>跟隨中</p>
                  <p class="user-follower">59位</p>
                  <p>跟隨者</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img
                :src="user.image | emptyImage"
                class="card-img-top"
                alt="..."
              />
              <img src="https://i.imgur.com/NZWqfN3.jpg" class="user-photo" />
              <div class="card-body">
                <h6 class="user-name">Robert Fox</h6>
                <h6 class="user-account">@robfox</h6>
                <div class="user-status d-flex">
                  <img
                    src="http://i.imgur.com/kbKBExh.png"
                    alt=""
                    class="user-chat"
                  />
                  <p class="chat-number">1.5k</p>
                  <img
                    src="http://i.imgur.com/0euPu42.png"
                    alt=""
                    class="user-like"
                  />
                  <p class="like-number">2k</p>
                </div>
                <div class="userfollowstatus d-flex">
                  <p class="user-following">34個</p>
                  <p>跟隨中</p>
                  <p class="user-follower">59位</p>
                  <p>跟隨者</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img
                :src="user.image | emptyImage"
                class="card-img-top"
                alt="..."
              />
              <img src="https://i.imgur.com/NZWqfN3.jpg" class="user-photo" />
              <div class="card-body">
                <h6 class="user-name">Leslie Alexander</h6>
                <h6 class="user-account">@lesAlex</h6>
                <div class="user-status d-flex">
                  <img
                    src="http://i.imgur.com/kbKBExh.png"
                    alt=""
                    class="user-chat"
                  />
                  <p class="chat-number">1.5k</p>
                  <img
                    src="http://i.imgur.com/0euPu42.png"
                    alt=""
                    class="user-like"
                  />
                  <p class="like-number">2k</p>
                </div>
                <div class="userfollowstatus d-flex">
                  <p class="user-following">34個</p>
                  <p>跟隨中</p>
                  <p class="user-follower">59位</p>
                  <p>跟隨者</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img
                :src="user.image | emptyImage"
                class="card-img-top"
                alt="..."
              />
              <img src="https://i.imgur.com/NZWqfN3.jpg" class="user-photo" />
              <div class="card-body">
                <h6 class="user-name">Arlene McCoy</h6>
                <h6 class="user-account">@alcoy</h6>
                <div class="user-status d-flex">
                  <img
                    src="http://i.imgur.com/kbKBExh.png"
                    alt=""
                    class="user-chat"
                  />
                  <p class="chat-number">1.5k</p>
                  <img
                    src="http://i.imgur.com/0euPu42.png"
                    alt=""
                    class="user-like"
                  />
                  <p class="like-number">2k</p>
                </div>
                <div class="userfollowstatus d-flex">
                  <p class="user-following">34個</p>
                  <p>跟隨中</p>
                  <p class="user-follower">59位</p>
                  <p>跟隨者</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img
                :src="user.image | emptyImage"
                class="card-img-top"
                alt="..."
              />
              <img src="https://i.imgur.com/NZWqfN3.jpg" class="user-photo" />
              <div class="card-body">
                <h6 class="user-name">John Doe</h6>
                <h6 class="user-account">@heyjohn</h6>
                <div class="user-status d-flex">
                  <img
                    src="http://i.imgur.com/kbKBExh.png"
                    alt=""
                    class="user-chat"
                  />
                  <p class="chat-number">1.5k</p>
                  <img
                    src="http://i.imgur.com/0euPu42.png"
                    alt=""
                    class="user-like"
                  />
                  <p class="like-number">2k</p>
                </div>
                <div class="userfollowstatus d-flex">
                  <p class="user-following">34個</p>
                  <p>跟隨中</p>
                  <p class="user-follower">59位</p>
                  <p>跟隨者</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img
                :src="user.image | emptyImage"
                class="card-img-top"
                alt="..."
              />
              <img src="https://i.imgur.com/NZWqfN3.jpg" class="user-photo" />
              <div class="card-body">
                <h6 class="user-name">Robert Fox</h6>
                <h6 class="user-account">@robfox</h6>
                <div class="user-status d-flex">
                  <img
                    src="http://i.imgur.com/kbKBExh.png"
                    alt=""
                    class="user-chat"
                  />
                  <p class="chat-number">1.5k</p>
                  <img
                    src="http://i.imgur.com/0euPu42.png"
                    alt=""
                    class="user-like"
                  />
                  <p class="like-number">2k</p>
                </div>
                <div class="userfollowstatus d-flex">
                  <p class="user-following">34個</p>
                  <p>跟隨中</p>
                  <p class="user-follower">59位</p>
                  <p>跟隨者</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img
                :src="user.image | emptyImage"
                class="card-img-top"
                alt="..."
              />
              <img src="https://i.imgur.com/NZWqfN3.jpg" class="user-photo" />
              <div class="card-body">
                <h6 class="user-name">Leslie Alexander</h6>
                <h6 class="user-account">@lesAlex</h6>
                <div class="user-status d-flex">
                  <img
                    src="http://i.imgur.com/kbKBExh.png"
                    alt=""
                    class="user-chat"
                  />
                  <p class="chat-number">1.5k</p>
                  <img
                    src="http://i.imgur.com/0euPu42.png"
                    alt=""
                    class="user-like"
                  />
                  <p class="like-number">2k</p>
                </div>
                <div class="userfollowstatus d-flex">
                  <p class="user-following">34個</p>
                  <p>跟隨中</p>
                  <p class="user-follower">59位</p>
                  <p>跟隨者</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img
                :src="user.image | emptyImage"
                class="card-img-top"
                alt="..."
              />
              <img src="https://i.imgur.com/NZWqfN3.jpg" class="user-photo" />
              <div class="card-body">
                <h6 class="user-name">Arlene McCoy</h6>
                <h6 class="user-account">@alcoy</h6>
                <div class="user-status d-flex">
                  <img
                    src="http://i.imgur.com/kbKBExh.png"
                    alt=""
                    class="user-chat"
                  />
                  <p class="chat-number">1.5k</p>
                  <img
                    src="http://i.imgur.com/0euPu42.png"
                    alt=""
                    class="user-like"
                  />
                  <p class="like-number">2k</p>
                </div>
                <div class="userfollowstatus d-flex">
                  <p class="user-following">34個</p>
                  <p>跟隨中</p>
                  <p class="user-follower">59位</p>
                  <p>跟隨者</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { emptyImageFilter } from "../utils/mixins";

const user = {
  image: "",
};
export default {
  name: "AdminUserCard",
  mixins: [emptyImageFilter],
  data() {
    return {
      user: {
        image: "",
      },
    };
  },
  methods: {
    fetchUserImage() {
      this.user.image = user.image;
    },
  },
};
</script>

<style scoped>
h5 {
  border-bottom: 1px solid #e6ecf0;
  padding: 0 10px 10px 30px;
}
.all-container {
  width: 90%;
}
.card {
  height: 350px;
  min-width: 200px;
  background-color: #f6f7f8;
  border-radius: 10px;
  border: none;
  position: relative;
  margin-bottom: 10px;
  overflow: hidden;
}
.user-name {
  margin-top: 3rem;
  text-align: center;
  font-weight: 700;
}
.user-account {
  text-align: center;
  color: #657786;
}
p {
  height: 100%;
  font-size: 8px;
  color: #657786;
  margin-top: 1rem;
}
.user-status {
  height: 40px;
  align-items: center;
  justify-content: center;
}
.user-following {
  color: black;
  font-weight: 700;
}
.user-follower {
  margin-left: 5px;
  color: black;
  font-weight: 700;
}
.user-chat,
.user-like {
  width: 20px;
  height: 18.9px;
}
.like-number,
.chat-number {
  font-size: 14px;
  color: black;
  line-height: 40px;
  margin: 0 1rem 0 5px;
}
.userfollowstatus {
  justify-content: center;
}
.user-photo {
  border-radius: 50%;
  border: 2px solid white;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 100px;
  width: 100px;
}
</style>