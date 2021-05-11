<template>
  <el-container
    class="layout"
  >
    <layout-header />
    <el-container class="layout-content">
      <layout-aside />
      <el-main class="layout-content-main">
        <el-breadcrumb class="layout-content-main-breadcrumb">
          <el-breadcrumb-item
            v-for="item in breadcrumb"
            :key="item"
          >
            {{ item }}
          </el-breadcrumb-item>
        </el-breadcrumb>
        <layout-content />
      </el-main>
    </el-container>
    <el-backtop
      target=".layout-content .layout-content-main"
      :visibility-height="10"
      :bottom="50"
    />
    <el-footer
      class="layout-footer"
      height="45px"
    >
      footer
    </el-footer>
  </el-container>
</template>

<script>
/**
 * Created by zane on 2021/4/17 上午11:22
 * @description .
 */
import LayoutHeader from './header'
import LayoutAside from './aside'
import LayoutContent from './content'

export default {
  name: 'Layout',
  components: {
    LayoutAside,
    LayoutHeader,
    LayoutContent
  },
  computed: {
    breadcrumb () {
      return this.$route.matched.map(i => i.meta.title)
    }
  }
}
</script>

<style lang="scss" scoped>
  .layout {
    $headHeight: 80px;
    $footerHeight: 45px;

    .layout-content {
      height: calc(100vh - #{$headHeight} - #{$footerHeight});

      .layout-content-main {
        height: 100%;
        overflow: auto;

        .layout-content-main-breadcrumb {
          padding: 20px 0;
        }
      }
    }

    .layout-footer {
      display: flex;
      align-items: center;
      justify-content: center;
      border-top: 1px solid $--border-color-base;
      background-color: $--background-color-base;
      color: $--color-text-primary;
      box-shadow: 0 -2px 12px 0 rgba(0, 0, 0, 0.1);
    }
  }
</style>
