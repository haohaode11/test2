<template>
    <div id="app">
      <Navbar />
  
      <main class="content">
        <h1>用户列表</h1>
        <!-- 姓名和账号的输入框 -->
        <div class="input-group">
            <span>姓名：</span>
          <input v-model="name" placeholder="请输入姓名" />
            <span>账号：</span>
          <input v-model="account" placeholder="请输入账号" />
          <!-- 查询按钮和添加按钮 -->
          <button @click="query">查询</button>
          <button @click="addToList">向列表添加数据</button>
        </div>
  
        <!-- 用户列表 -->
        <ul class="user-list">
          <li v-for="(user, index) in users" :key="index">
            <span>{{ user.name }} - {{ user.account }}</span>
            <button @click="removeFromList(index)">删除</button>
          </li>
        </ul>
      </main>
    </div>
  </template>
  
  <script>
  import Navbar from '../components/Navbar.vue';
  
  export default {
    name: 'Home',
    components: {
      Navbar,
    },
    data() {
      return {
        name: '',
        account: '',
        users: []  // 存储用户列表的数组
      }
    },
    methods: {
      // 添加用户到列表的方法
      addToList() {
        if (this.name && this.account) {
          this.users.push({
            name: this.name,
            account: this.account,
            status: '启动中'
          });
          // 清空输入框内容
          this.name = '';
          this.account = '';
        }
      },
      // 从列表中删除用户的方法
      removeFromList(index) {
        this.users.splice(index, 1);
      },
      // 查询按钮的功能（此处可根据需求实现具体逻辑）
      query() {
        // 查询功能的逻辑
      }
    }
  }
  </script>
  
  <style scoped>
  html, body, #app {
    height: 100vh; /* 使用视口高度 */
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  #app {
    display: flex;
    flex-direction: column;
    width: 100vw; /* 使用视口宽度 */
  }
  
  main.content {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    padding: 20px;
    width: 100%; /* 确保内容区占满整个宽度 */
  }
  
  .input-group {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
    flex-wrap: wrap;
  }
  
  .input-group input {
    flex:2; /* 输入框占更多的空间 */
    min-width: 150px; /* 设置最小宽度 */
  }
  
  .input-group button {
    flex: 1; /* 按钮占较少的空间 */
    min-width: 40px; /* 设置最小宽度 */
    padding: 5px 10px; /*设置按钮内边距
  }
  
  .user-list {
    list-style-type: none;
    padding: 0;
    margin: 0;
    width: 100%; /* 用户列表占满整个宽度 */
    display: block; /* 确保列表项默认块级显示 */
  }
  
  .user-list li {
    margin-bottom: 10px;
    border-bottom: 1px solid #ccc;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: auto; /* 取消宽度限制 */
    max-width: 100%; /* 最大宽度为父元素的宽度 */
  }
  
  .user-list li span {
    flex: 1; /* 用户信息部分占据剩余的宽度 */
  }
  
  button {
    margin-left: 5px;
  }
  </style>
  