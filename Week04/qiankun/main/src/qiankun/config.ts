export const apps = [
  {
    name: 'sub-book',
    entry: '//localhost:7778',
    container: '#divBook',
    activeRule: 'sub-book',
    props: {},
    loader: (boolean: boolean) => {
      console.log(`loading状态${boolean}`);
    },
  },
];

export const defaultActiveRule = '';
