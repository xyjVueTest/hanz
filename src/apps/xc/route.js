export const name = {
  name: 'hanz-xc',
  path: 'xc',
  component: r => require.ensure([], () => r(require('./index.vue')), 'hanz-xc'),
  redirect: 'xc/intro',
  children: [
    {
      name: 'xc-intro',
      path: 'intro',
      component: r => require.ensure([], () => r(require('./intro.vue')), 'hanz-xc')
    }
  ]
}
