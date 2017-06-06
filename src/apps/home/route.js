export const name = {
  name: 'hanz-home',
  path: 'home',
  component: r => require.ensure([], () => r(require('./home.vue')), 'hanz-home')
}
