export const name = {
  name: 'hanz-jj',
  path: 'jj',
  component: r => require.ensure([], () => r(require('./index.vue')), 'hanz-jj'),
  redirect: 'jj/intro',
  children: [
    {
      name: 'jj-intro',
      path: 'intro',
      component: r => require.ensure([], () => r(require('./intro.vue')), 'hanz-jj')
    }
  ]
}
