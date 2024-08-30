<template>
    <div class="test2">
      <Navbar />
      <h1>Test2 Page</h1>
    </div>
  </template>
  
  <script>
  import Navbar from '../components/Navbar.vue';
  
  export default {
    name: 'Test2',
    components: {
      Navbar,
    },
  };
  </script>
  
  <style scoped>
  .test2 {
    text-align: center;
    margin-top: 50px;
  }
  
  h1 {
    font-size: 2.5em;
    color: #333;
  }
  </style>
  