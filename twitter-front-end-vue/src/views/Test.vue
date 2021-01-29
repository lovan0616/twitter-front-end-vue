<template>
  <div class="test">
    <div class="block"></div>
  </div>
</template>

<style lang="scss" scoped>
@mixin color-box($width, $height, $color) {
  width: $width;
  height: $height;
  background-color: $color;
}

.block {
  @include color-box(300px, 100px, blue);
}
</style>