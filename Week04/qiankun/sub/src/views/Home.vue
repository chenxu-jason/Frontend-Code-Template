<template>
  <div class="home">
    <h1>第{{ id }}章</h1>
    <p v-for="(content, index) in list" :key="index">{{ content }}</p>
  </div>
</template>

<script>
  // @ is an alias to /src
  import Mock from 'mockjs';
  import actions from '../qiankun/actions';
  export default {
    name: 'Home',
    data() {
      return {
        id: 0,
        list: '',
      };
    },
    created() {
      const idMatch = location.search.match(/[?|&]?id=(\d+)/i);
      if (!idMatch) return;
      this.getData(idMatch[1]);
    },

    mounted() {
      actions.onGlobalStateChange(({ id }) => {
        if (this.id == id || !id) return;
        this.getData(id);
      }, true);
    },

    methods: {
      getData(id) {
        this.id = id;
        const data = Mock.mock({
          'list|30-50': ['@cparagraph(2,10)'],
        });
        this.list = data.list;
      },
    },
  };
</script>
<style lang="less" scoped>
  h1 {
    text-align: center;
  }
</style>
