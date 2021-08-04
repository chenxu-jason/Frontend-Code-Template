<template>
  <div class="home">
    <div class="nav">
      <div class="header">book</div>
      <div class="catalog">
        <ul>
          <li
            v-for="item in list"
            :key="item.id"
            :data-id="item.id"
            :to="'sub-book?id=' + item.id"
            :class="{ active: id === item.id }"
            @click="goBook"
          >
            {{ item.title }}
          </li>
        </ul>
      </div>
    </div>
    <div class="main">
      <div id="divBook"></div>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import Mock from 'mockjs';
  import actions from '../qiankun/actions';
  @Component
  export default class Catalog extends Vue {
    list = [];
    id = 0;

    created() {
      const data = Mock.mock({
        'list|50': [
          {
            'id|+1': 1,
            title: '@ctitle(5,10)',
          },
        ],
      });
      this.list = data.list;
    }

    goBook(e: Event) {
      const id = Number((e.currentTarget as HTMLInputElement).dataset.id);
      this.id = id;
      actions.setGlobalState({ id });
      this.$router.push('sub-book?id=' + id);
    }
  }
</script>
<style lang="less" scoped>
  .home {
    width: 100%;
    height: 100%;
    display: flex;

    > .nav {
      flex-shrink: 0;
      width: 300px;
      height: 100%;
      box-sizing: border-box;
      border-right: 2px solid #fcca35;
      display: flex;
      flex-direction: column;

      > .header {
        flex-shrink: 0;
        padding: 0 20px;
        box-sizing: border-box;
        width: inherit;
        height: 80px;
        display: flex;
        align-items: center;
        font-size: 28px;
        font-weight: bold;
        border-bottom: 2px solid #fcca35;
      }

      > .catalog {
        flex: 1;
        overflow-y: auto;
        > ul {
          list-style: decimal;
          > li {
            cursor: pointer;
            &.active,
            &:hover {
              color: #fcca35;
            }
          }
        }
      }
    }

    > .main {
      flex: 1;
      height: 100%;
      background: #fff9e6;
      overflow-y: auto;
      padding: 20px;
      box-sizing: border-box;
    }
  }
</style>
