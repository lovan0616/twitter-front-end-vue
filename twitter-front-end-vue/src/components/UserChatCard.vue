<template>
  <div class="user-container">
    <div class="user-chat-card d-flex">
      <div class="image-wrapper">
        <img
          src="https://loremflickr.com/320/240/avatar/?random=87.13309242457343"
          class="user-photo"
        />
      </div>
      <div class="user-info d-flex">
        <strong class="user-name">Apple</strong>
        <h6 class="user-account">@apple</h6>
      </div>
    </div>
    <div class="user-chat-card d-flex">
      <div class="image-wrapper">
        <img
          src="https://loremflickr.com/320/240/avatar/?random=87.13309242457343"
          class="user-photo"
        />
      </div>
      <div class="user-info d-flex">
        <strong class="user-name">Apple</strong>
        <h6 class="user-account">@apple</h6>
      </div>
    </div>
    <div class="user-chat-card d-flex">
      <div class="image-wrapper">
        <img
          src="https://loremflickr.com/320/240/avatar/?random=87.13309242457343"
          class="user-photo"
        />
      </div>
      <div class="user-info d-flex">
        <strong class="user-name">Apple</strong>
        <h6 class="user-account">@apple</h6>
      </div>
    </div>
    <div class="user-chat-card d-flex">
      <div class="image-wrapper">
        <img
          src="https://loremflickr.com/320/240/avatar/?random=87.13309242457343"
          class="user-photo"
        />
      </div>
      <div class="user-info d-flex">
        <strong class="user-name">Apple</strong>
        <h6 class="user-account">@apple</h6>
      </div>
    </div>
    <div class="user-chat-card d-flex">
      <div class="image-wrapper">
        <img
          src="https://loremflickr.com/320/240/avatar/?random=87.13309242457343"
          class="user-photo"
        />
      </div>
      <div class="user-info d-flex">
        <strong class="user-name">Apple</strong>
        <h6 class="user-account">@apple</h6>
      </div>
    </div>
  </div>
</template>

<style scoped>
.user-chat-card {
  border-bottom: 1px solid #e6ecf0;
}

.image-wrapper {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  margin: 1rem 0.2rem 1rem 1rem;
}

.user-photo {
  display: inline;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.user-name,
.user-account {
  margin: auto 0.2rem;
}

.user-account {
  color: #657786;
}
</style>