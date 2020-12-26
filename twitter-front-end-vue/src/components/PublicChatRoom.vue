<template>
  <div class="chat-container">
    <div class="chat-message-container"></div>
    <div class="chat-text-container d-flex">
      <form
        class="form d-flex justify-content-center mx-2"
        @click.stop.prevent="handleMessageSubmit"
      >
        <input
          class="text-input"
          type="text"
          placeholder="say hi to everyone!"
        />
        <button type="submit" class="send-out-btn">
          <img
            src="../assets/send-message.svg"
            alt="send-out-the-text"
            class="send-out"
          />
        </button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.chat-container {
  height: 100%;
}

.chat-message-container {
  height: 80%;
}

.chat-text-container {
  width: 100%;
  border-top: 1px solid #e6ecf0;
}

.form {
  width: 100%;
  margin-top: 1rem;
}

.text-input {
  width: 90%;
  margin-right: 1rem;
  border: none;
  background-color: #f0f0f0;
  border-radius: 20px;
  padding: 10px;
}

.send-out-btn {
  all: unset;
}

.send-out {
  width: 30px;
  height: 30px;
}

.send-out:hover {
  cursor: pointer;
  filter: invert(42%) sepia(19%) saturate(6136%) hue-rotate(2deg)
    brightness(106%) contrast(105%);
}
</style>>