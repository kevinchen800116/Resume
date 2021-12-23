<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar href="#">
        <img src="../assets/title.jpg" alt="Circle Image" class="bar_picture"
      /></b-navbar>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">自我介紹</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav>
          <b-nav-item href="#/WorkExp">工作經歷</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav>
          <b-nav-item href="#/WorkExp2">工作經歷2</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown text="作品集" right>
            <b-dropdown-item href="https://kevinchen800116.github.io/twhome/"
              >童玩民宿-練習</b-dropdown-item
            >
            <b-dropdown-item href="https://kevinchen800116.github.io/login/"
              >待辦清單-練習(TodoList)</b-dropdown-item
            >
          </b-nav-item-dropdown>
          <b-navbar-nav>
            <b-nav-item href="https://www.youtube.com/watch?v=BBHkvn4HdfQ"
              >聯絡方式</b-nav-item
            >
          </b-navbar-nav>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>