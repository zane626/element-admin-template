<template>
  <el-header
    class="layout-header"
    height="80px"
  >
    <img
      src="@/assets/images/element-logo.svg"
      alt="element-logo"
      class="header-logo"
    >
    <ul
      class="header-operations"
    >
      <li />
      <li class="header-download" />
      <li />
      <li>
        <el-avatar
          size="large"
          :src="headerImage"
        />
      </li>
    </ul>
  </el-header>
</template>

<script>
/**
 * Created by zane on 2021/4/17 上午11:23
 * @description .
 */
export default {
  name: 'LayoutHeader',
  data () {
    return {
      headerImage: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
    }
  }
}
</script>

<style lang="scss" scoped>
  .layout-header {
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    background-color: $--color-primary;
  }
</style>
