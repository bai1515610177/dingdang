<template>
  <el-container class="home-container">
    <el-aside width=":isCollapse?200px:40px">
      <!-- logo -->
      <div class="logo" :class="{smallLogo:!isCollapse}"></div>
      <!-- 导航栏 -->
      <div class="nav">
        <el-menu
          default-active="1"
          background-color="pink"
          text-color="#fff"
          active-text-color="brown"
          style="border-right:none"
          :collapse="isCollapse"
          router
        >
          <el-menu-item index="/">
            <i class="el-icon-s-home"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <el-menu-item index="/content">
            <i class="el-icon-document"></i>
            <span slot="title">内容管理</span>
          </el-menu-item>
          <el-menu-item index="/material">
            <i class="el-icon-picture"></i>
            <span slot="title">素材管理</span>
          </el-menu-item>
          <el-menu-item index="/publish">
            <i class="el-icon-s-promotion"></i>
            <span slot="title">发布文章</span>
          </el-menu-item>
          <el-menu-item index="/comment">
            <i class="el-icon-chat-dot-round"></i>
            <span slot="title">评论管理</span>
          </el-menu-item>
          <el-menu-item index="/fans">
            <i class="el-icon-present"></i>
            <span slot="title">粉丝管理</span>
          </el-menu-item>
          <el-menu-item index="/setting">
            <i class="el-icon-setting"></i>
            <span slot="title">个人设置</span>
          </el-menu-item>
        </el-menu>
      </div>
    </el-aside>
    <el-container>
      <el-header v-model="isCollapse">
        <i class="el-icon-s-fold icon" @click="toggleMenu" :label="false"></i>
        <span class="company">迪丽热巴后援会</span>
        <!-- 下拉组件 -->
        <el-dropdown class="userinfo" @command='handleCommand'>
          <img class="userheader" :src="photo" alt />
          <span class="username">
            {{name}}
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown" >
            <el-dropdown-item icon="el-icon-setting" command='setting'>个人设置</el-dropdown-item>
            <el-dropdown-item icon="el-icon-unlock" command='logout'>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-header>
      <!-- 二级路由视图 -->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import local from '@/utils/local'
export default {
  data () {
    return {
      isCollapse: false,
      name: '',
      photo: ''
    }
  },
  methods: {
    toggleMenu () {
      this.isCollapse = !this.isCollapse
    },
    handleCommand (command) {
      this[command]()
    },
    setting () {
      this.$router.push('/setting')
    },
    logout () {
      local.delUser()
      this.$router.push('/login')
    }
  },
  created () {
    const user = local.getUser() || {}
    this.photo = user.photo
    this.name = user.name
  }

}
</script>

<style scoped lang='less'>
.home-container {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  .smallLogo {
      background-image: url("../../assets/logo.jpg");
      background-size: 36px auto;
    }
  .el-aside {
    background: pink;
    .logo {
      width: 100%;
      height: 60px;
      background: url("../../assets/logo.jpg") no-repeat center / 140px auto;
    }
  }
  .el-header {
    border-bottom: 1px solid #ddd;
    line-height: 60px;
    .icon {
      font-size: 30px;
      vertical-align: middle;
    }
    .company {
      margin-left: 10px;
      vertical-align: middle;
    }
    .userinfo {
      float: right;
      .userheader {
        width: 30px;
        height: 30px;
        vertical-align: middle;
      }
      .username {
        margin-left: 5px;
        font-weight: bold;
        vertical-align: middle;
      }
    }
  }
}
</style>
