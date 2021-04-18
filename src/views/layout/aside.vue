<template>
  <el-aside
    class="menu"
    width="200px"
  >
    <el-menu
      unique-opened
      router
      :default-active="defaultActive"
    >
      <el-submenu
        v-for="item in menu"
        :key="item.label"
        :index="item.label"
      >
        <template slot="title"><i class="el-icon-message"></i>{{item.label}}</template>
        <el-menu-item
          v-for="child in item.children"
          :key="child.label"
          :index="child.path"
        >{{child.label}}
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </el-aside>
</template>

<script>
/**
 * Created by zane on 2021/4/17 下午9:55
 * @description .
 */
import { routerConfig } from 'router'
import _ from 'lodash'

export default {
  name: 'LayoutAside',
  data () {
    return {
      menu: []
    }
  },
  created () {
    let project = routerConfig.routes.find(i => i.name === 'project')
    if (!_.isEmpty(project)) {
      this.menu = project.children.map(i => {
        return {
          label: i.meta.title,
          children: i.children.map(j => {
            return {
              label: j.meta.title,
              path: `/project/${i.path}/${j.path}`
            }
          })
        }
      })
    }
  },
  computed: {
    defaultActive () {
      console.log(this.$route)
      return this.$route.path
    }
  }
}
</script>

<style lang="scss" scoped>
  .menu {
    /deep/ .el-menu {
      height: 100%;
    }
  }
</style>
