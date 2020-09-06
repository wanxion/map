<template>
  <a-modal
    :title="title"
    :visible="visible"
    @ok="handleOk"
    okText="确认"
    @cancel="handleCancel"
    cancelText="取消"
  >
    <a-input-group compact>
      <a-input style="width: 46%" placeholder="经度" />
      <a-input style="width: 46%" placeholder="纬度" />
      <a-popover style="width: 8%" title="地图信息" class="environment">
        <template slot="content">
          <sen-map />
        </template>
        <a-icon type="environment" />
      </a-popover>
    </a-input-group>
  </a-modal>
</template>

<script>
// import { mapMutations } from 'vuex'
import senMap from '@/components/AMap'
export default {
  props: {
    visible: Boolean,
    modalStatus: String
  },
  data() {
    return {
      lng: ''
    }
  },
  components: {
    senMap
  },
  computed: {
    title() {
      if (this.modalStatus === 'add') {
        return '添加数据'
      } else if (this.modalStatus === 'find') {
        return '查看数据'
      } else if (this.modalStatus === 'update') {
        return '修改数据'
      } else {
        return ''
      }
    }
  },
  methods: {
    onSearch() {},
    // ...mapMutations(['addColumns']),
    handleCancel() {
      this.$emit('closeModal')
    },
    handleOk() {
      this.$emit('closeModal')
    }
  }
}
</script>

<style lang="scss" scoped>
.environment {
  line-height: 30px;
  border: 1px solid #ccc;
}
</style>
