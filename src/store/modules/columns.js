export default {
  state: () => ({
    name: 'columns',
    columns: [
      {
        title: '地址',
        dataIndex: 'address',
        key: 'address'
      },
      {
        title: '经度',
        dataIndex: 'lng',
        key: 'lng'
      },
      {
        title: '纬度',
        dataIndex: 'lat',
        key: 'lat'
      },
      {
        title: '操作',
        key: 'action',
        scopedSlots: { customRender: 'action' }
      }
    ]
  }),
  mutations: {
    addColumns(state, address) {
      state.columns.push(address)
    }
  }
}
