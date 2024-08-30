<template>
    <div class="home">
      <Navbar />
      <h1>Welcome to Haohao Page</h1>
      <router-view />
    </div>
  </template>
  
  <script>
  import Navbar from '../components/Navbar.vue';
  
  export default {
    name: 'Home',
    components: {
      Navbar,
    },
  };
  </script>
  
  <style scoped>
  .home {
    text-align: center;
    margin-top: 50px;
  }
  
  h1 {
    font-size: 2.5em;
    color: #333;
  }
  </style>
  