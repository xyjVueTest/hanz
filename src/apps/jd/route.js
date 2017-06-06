export const name = {
  name: 'hanz-jd',
  path: 'jd',
  component: r => require.ensure([], () => r(require('./index.vue')), 'hanz-jd'),
  redirect: 'jd/intro',
  children: [
    {
      name: 'jd-intro',
      path: 'intro',
      component: r => require.ensure([], () => r(require('./intro.vue')), 'hanz-jd')
    }
  ]
}
