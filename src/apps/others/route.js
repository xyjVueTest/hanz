export const name = {
  name: 'hanz-other',
  path: 'other',
  component: r => require.ensure([], () => r(require('./index.vue')), 'hanz-other'),
  children: [
    {
      name: 'other-chart',
      path: 'intro',
      component: r => require.ensure([], () => r(require('./chart.vue')), 'hanz-other')
    }
  ]
}
