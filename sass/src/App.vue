<template>
  <div>Loaded</div>

  <div class="first">Hello</div>
  <div class="first">Hello</div>
  <div class="first">Hello</div>
  <div class="first">Hello</div>
  <div class="first">Hello</div>
  <div class="first">Hello</div>
  <div class="first">Hello</div>

  <p class="second">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos aliquid
    sint, cumque enim debitis laborum sequi dolores voluptatum. Quam eaque id
    cupiditate. Corporis, aspernatur? Laborum perspiciatis tempore nihil
    adipisci culpa!
  </p>
  <p class="second">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos aliquid
    sint, cumque enim debitis laborum sequi dolores voluptatum. Quam eaque id
    cupiditate. Corporis, aspernatur? Laborum perspiciatis tempore nihil
    adipisci culpa!
  </p>
  <p class="second">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos aliquid
    sint, cumque enim debitis laborum sequi dolores voluptatum. Quam eaque id
    cupiditate. Corporis, aspernatur? Laborum perspiciatis tempore nihil
    adipisci culpa!
  </p>
  <p class="second">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos aliquid
    sint, cumque enim debitis laborum sequi dolores voluptatum. Quam eaque id
    cupiditate. Corporis, aspernatur? Laborum perspiciatis tempore nihil
    adipisci culpa!
  </p>
  <p class="second">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos aliquid
    sint, cumque enim debitis laborum sequi dolores voluptatum. Quam eaque id
    cupiditate. Corporis, aspernatur? Laborum perspiciatis tempore nihil
    adipisci culpa!
  </p>
  <p class="second">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos aliquid
    sint, cumque enim debitis laborum sequi dolores voluptatum. Quam eaque id
    cupiditate. Corporis, aspernatur? Laborum perspiciatis tempore nihil
    adipisci culpa!
  </p>
  <p class="second">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos aliquid
    sint, cumque enim debitis laborum sequi dolores voluptatum. Quam eaque id
    cupiditate. Corporis, aspernatur? Laborum perspiciatis tempore nihil
    adipisci culpa!
  </p>

  <h1 class="third">Hello</h1>
  <h1 class="third">Hello</h1>
  <h1 class="third">Hello</h1>
  <h1 class="third">Hello</h1>
  <h1 class="third">Hello</h1>
  <h1 class="third">Hello</h1>
  <h1 class="third">Hello</h1>

  <div class="grid">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<style lang="scss">
body {
  background-color: blue;
}
</style>

<style scoped lang="scss">
.first {
  background-color: red;
}

.second {
  background-color: yellow;
}

.third {
  background: linear-gradient(45deg, blue, red);
}

.grid {
  span {
    display: inline-block;
    width: 100px;
    height: 100px;
    background-color: orange;
    border-radius: 100%;
  }

  display: grid;
  grid-template-columns: auto auto auto auto;
  background-color: lightblue;
}
</style>
