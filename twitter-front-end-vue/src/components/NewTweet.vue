<template>
  <div>
    <div class="root new-tweet-area d-flex p-3">
      <div class="image-area mr-3">
        <a>
          <div class="image-cropper" v-if="currentUser !== ''">
            <img :src="currentUser.avatar" class="avatar" />
          </div>
        </a>
      </div>
      <div class="content-area w-100">
        <form
          class="w-100 d-flex flex-column align-items-end"
          @submit.stop.prevent="handleSubmit"
        >
          <textarea
            class="w-100"
            name="description"
            id="text"
            cols="20"
            rows="1"
            placeholder="有什麼新鮮事？"
            v-model="description"
          ></textarea>

          <div class="button-control mt-3">
            <button
              type="submit"
              class="btn btn-primary post"
<<<<<<< HEAD
              :disabled="!description"
=======
>>>>>>> a0c9e063de7ff632e142c2d9623af01c9012bedd
            >
              推文
            </button>
          </div>
        </form>
      </div>
    </div>
    <div class="divider"></div>

    <!-- Modal -->
    <div
      class="modal fade"
      id="postModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="postModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <img src="../assets/Close.svg" />
            </button>
          </div>
          <div class="modal-body">
            <div class="modal-new-tweet-area d-flex">
              <div class="image-area mr-3">
                <a>
                  <div class="image-cropper" v-if="currentUser !== ''">
                    <img :src="currentUser.avatar" class="avatar" />
                  </div>
                </a>
              </div>
              <div class="content-area w-100">
                <form
                  class="w-100 d-flex flex-column align-items-end"
                  @submit.stop.prevent="handleSubmit"
                >
                  <textarea
                    class="w-100"
                    name="description"
                    id="description"
                    cols="20"
                    rows="4"
                    placeholder="有什麼新鮮事？"
                    v-model="description"
                  ></textarea>

                  <div class="button-control mt-3">
                    <button
                      type="submit"
                      class="btn btn-primary post"
                      :disabled="!description"
                    >
                      推文
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
<<<<<<< HEAD
=======
import { Toast } from '../utils/helpers';
>>>>>>> a0c9e063de7ff632e142c2d9623af01c9012bedd
export default {
  name: "NewTweet",
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      description: "",
      currentUser: "",
    };
  },
  methods: {
    handleSubmit() {
<<<<<<< HEAD
      if (!this.description.trim()) return;
=======
      if (!this.description.trim()) {
        Toast.fire({
          icon: 'warning',
          title: '推文不能為空白'
        })
        $("#postModal").modal("hide");
        return
      }
>>>>>>> a0c9e063de7ff632e142c2d9623af01c9012bedd
      // const form = e.target;
      // const formData = new FormData(form);
      // for (let [key, value] of formData.entries()) {
      //   console.log(key + ", " + value);
      // }
      const description = this.description;
      console.log(description);
      this.$emit("after-post-submit", description);
      // 發文後清空收入欄、關閉彈跳視窗
      this.description = "";
      $("#postModal").modal("hide");
    },
  },
  watch: {
    user(newValue) {
      this.currentUser = {
        ...this.currentUser,
        ...newValue,
      };
    },
  },
};
</script>

<style scoped>
.image-cropper {
  width: 50px;
  height: 50px;
  position: relative;
  overflow: hidden;
  border-radius: 50%;
}

.avatar {
  width: auto;
  display: inline;
  height: 100%;
}
.new-tweet-area {
  border-top: 1px solid #e6ecf0;
  position: relative;
}

.root.new-tweet-area {
  border-right: 1px solid #e6ecf0;
  border-left: 1px solid #e6ecf0;
}

/* .new-tweet-area::after {
  content: "";
  width: 100%;
  height: 10px;
  background-color: #e6ecf0;
  position: absolute;
  top: 100%;
  left: 0;
} */

.divider {
  width: 100%;
  height: 10px;
  background-color: #e6ecf0;
}

textarea {
  border: hidden;
  resize: none;
  -moz-appearance: none;
  outline: 0px none transparent;
}

textarea:focus {
  outline: 0;
}

.post {
  border-radius: 20px;
}

.modal-content {
  border: hidden;
  border-radius: 15px;
}

.modal-header .close {
  padding: 1rem 1rem;
  margin: -1rem auto -1rem -1rem;
}
</style>