<template>
  <div class="home">
    <div class="home-content">
      <a-button type="primary" @click="add">添加数据</a-button>
      <a-table
        :columns="columns"
        :dataSource="dataSource"
        :rowKey="row => row.id"
      >
        <div slot="action" slot-scope="text, record">
          <a-button @click="find(record)" size="small">查看</a-button>
          <a-divider type="vertical" />
          <a-button @click="update(record)" size="small">修改</a-button>
          <a-divider type="vertical" />
          <a-button @click="del(record)" size="small">删除</a-button>
        </div>
      </a-table>
      <edit-address
        :visible="visible"
        :modalStatus="modalStatus"
        @closeModal="closeModal"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import EditAddress from './components/EditAddress'
export default {
  name: 'Home',
  data() {
    return {
      visible: false,
      modalStatus: ''
    }
  },
  components: { EditAddress },
  computed: {
    ...mapState({
      columns: state => state.columns.columns,
      dataSource: state => state.dataSource.dataSource
    })
  },
  methods: {
    closeModal() {
      this.visible = false
    },
    del(row) {
      console.log(row.id)
    },
    add() {
      this.modalStatus = 'add'
      this.visible = true
    },
    find(row) {
      this.modalStatus = 'find'
      this.visible = true
    },
    update(row) {
      this.modalStatus = 'update'
      this.visible = true
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  padding-top: 100px;
}
.home-content {
  width: 800px;
  margin: 0 auto;
}
</style>
