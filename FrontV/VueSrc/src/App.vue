<template>
  <div class="layout">
    <Row type="flex">
      <i-col span="5" class="layout-menu-left">
        <Menu @on-select="as" active-name="1" theme="dark" width="auto" :open-names="['1']">
          <div class="layout-logo-left">云翳</div>
          <Submenu name="1">
            <template slot="title">
              <Icon type="ios-navigate"></Icon>
              导航一
            </template>
            <Menu-item name="1-1">选项 1</Menu-item>
            <Menu-item name="1-2">选项 2</Menu-item>
            <Menu-item name="1-3">选项 3</Menu-item>
          </Submenu>
          <Submenu name="2">
            <template slot="title">
              <Icon type="ios-keypad"></Icon>
              导航二
            </template>
            <Menu-item name="2-1">选项 1</Menu-item>
            <Menu-item name="2-2">选项 2</Menu-item>
          </Submenu>
          <Submenu name="3">
            <template slot="title">
              <Icon type="ios-analytics"></Icon>
              导航三
            </template>
            <Menu-item name="3-1">选项 1</Menu-item>
            <Menu-item name="3-2">选项 2</Menu-item>
          </Submenu>
        </Menu>
      </i-col>
      <i-col span="19">
        <div class="layout-header">
          <div class="layout-ceiling-main">
            <a href="#">注册登录</a> |
            <a href="#">帮助中心</a> |
            <a href="#">安全中心</a> |
            <a href="#">服务大厅</a>
          </div>
        </div>
        <!-- <div class="layout-breadcrumb">
            <Breadcrumb>
              <Breadcrumb-item href="#">首页</Breadcrumb-item>
              <Breadcrumb-item href="#">应用中心</Breadcrumb-item>
              <Breadcrumb-item>某应用</Breadcrumb-item>
            </Breadcrumb>
          </div> -->
        <div class="layout-content">
          <div class="layout-content-main">内容区域</div>
          <router-view></router-view>
        </div>
        <foot></foot>
      </i-col>
    </Row>
  </div>
</template>

<script>
import Foot from './components/Foot'

export default {
  name: 'app',
  components: {
    Foot
  },
  methods: {
    as: function (a) {
      alert(a)
    }
  }
}
</script>

<style scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
}

.layout-breadcrumb {
  padding: 10px 15px 0;
}

.layout-content {
  min-height: 550px;
  margin: 15px;
  overflow: hidden;
  background: #fff;
  border-radius: 4px;
}

.layout-content-main {
  padding: 10px;
}

.layout-copy {
  text-align: center;
  padding: 10px 0 20px;
  color: #9ea7b4;
}

.layout-menu-left {
  background: #464c5b;
}

.layout-header {
  height: 60px;
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
}

.layout-logo-left {
  width: 90%;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  margin: 15px auto;
  padding: 5px;
  color:ghostwhite;
  text-align: center
}

.layout-ceiling-main {
  float: right;
  margin-right: 15px;
  padding: 15px;
  font-size: 20px
}

.layout-ceiling-main a {
  color: #2d8cf0;
}
.layout-ceiling-main a:hover {
  color: #2d8cc5;
}
</style>