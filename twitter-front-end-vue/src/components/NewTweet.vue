<template>
  <div>
    <div class="new-tweet-area d-flex p-3">
      <div class="image-area mr-3">
        <a>
          <div class="image-cropper">
            <img
              src="https://bbs.kamigami.org/uploads/monthly_2017_12/timg.jpg.3d7dc76f5ab8a4eb86da562e60e28b43.jpg"
              class="avatar"
            />
          </div>
        </a>
      </div>
      <div class="content-area w-100">
        <form class="w-100 d-flex flex-column align-items-end">
          <textarea class="w-100" name="text" id="text" cols="20" rows="1" placeholder="有什麼新鮮事？"></textarea>

          <div class="button-control mt-3">
            <div class="btn btn-primary post">推文</div>
          </div>
        </form>
      </div>
    </div>

    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <img src="../assets/Close.svg" />
            </button>
          </div>
          <div class="modal-body">
            <div class="modal-new-tweet-area d-flex">
              <div class="image-area mr-3">
                <a>
                  <div class="image-cropper">
                    <img
                      src="https://bbs.kamigami.org/uploads/monthly_2017_12/timg.jpg.3d7dc76f5ab8a4eb86da562e60e28b43.jpg"
                      class="avatar"
                    />
                  </div>
                </a>
              </div>
              <div class="content-area w-100">
                <form class="w-100 d-flex flex-column align-items-end">
                  <textarea
                    class="w-100"
                    name="text"
                    id="text"
                    cols="20"
                    rows="4"
                    placeholder="有什麼新鮮事？"
                  ></textarea>

                  <div class="button-control mt-3">
                    <div class="btn btn-primary post">推文</div>
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
export default {
  name: "NewTweet"
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

.new-tweet-area::after {
  content: "";
  width: 100%;
  height: 10px;
  background-color: #e6ecf0;
  position: absolute;
  top: 100%;
  left: 0;
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