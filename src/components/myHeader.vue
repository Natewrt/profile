<template>
  <div class="header">
    <div class="menu-item" v-for="menu in menuList" @click="changeRoute(menu.route)">
      {{menu.name}}
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        menuList: [
          {
            name: 'Home',
            route: 'index'
          },
          {
            name: 'Profile',
            route: 'profile'
          },
          {
            name: 'Portfolio',
            route: 'portfolio'
          }
        ]
      }
    },
    methods: {
      changeRoute (routeName) {
        this.$router.push({ name: routeName })
      }
    }
  }
</script>


<style scoped>
  .header {
      background: transparent;
      color: white;
  }
  .menu-item {
    display: inline-block;
    padding: 20px;
    font-weight: bold;
    font-size: 18px;
  }
  .menu-item:hover {
    cursor: pointer;
    opacity: 0.9;
  }
</style>
