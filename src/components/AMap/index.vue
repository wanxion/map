<template>
  <div>
    <input type="text" class="tipinput" ref="tipinput" placeholder="快捷搜索" />
    <div class="container" ref="container" />
    <div>{{ address }}</div>
    <div>{{ lng + ' - ' + lat }}</div>
  </div>
</template>

<script>
import amap from '@/utils/amap'
export default {
  data() {
    return {
      lat: '',
      lng: '',
      address: ''
    }
  },
  mounted() {
    this.aMapInit()
  },
  methods: {
    async aMapInit() {
      const AMap = await amap()

      // 构造地图
      this.map = new AMap.Map(this.$refs.container, {
        resizeEnable: true,
        zoom: 11,
        center: [116.397428, 39.90923]
      })

      // 定位
      const options = {
        showButton: true, // 是否显示定位按钮
        buttonPosition: 'LB', // 定位按钮的位置
        buttonOffset: new AMap.Pixel(10, 20), // 定位按钮距离对应角落的距离
        showMarker: true, // 是否显示定位点
        showCircle: true, // 是否显示定位精度圈
        circleOptions: {
          strokeColor: '#0093FF',
          noSelect: true,
          strokeOpacity: 0.5,
          strokeWeight: 1,
          fillColor: '#02B0FF',
          fillOpacity: 0.25
        },
        zoomToAccuracy: true // 定位成功后是否自动调整地图视野到定位点
      }

      const geolocation = new AMap.Geolocation(options)
      this.map.addControl(geolocation)
      geolocation.getCurrentPosition()

      // 搜索框自动提示
      const autocomplete = new AMap.Autocomplete({
        input: this.$refs.tipinput
      })

      // 快速定位
      var placeSearch = new AMap.PlaceSearch({
        map: this.map
      })
      AMap.event.addListener(autocomplete, 'select', e => {
        placeSearch.setCity(e.poi.adcode)
        placeSearch.search(e.poi.name)
      })

      // 地图打点
      const marker = new AMap.Marker()
      const geocoder = new AMap.Geocoder()

      this.map.on('click', ev => {
        this.map.add(marker)
        marker.setPosition(ev.lnglat)
        const { lat, lng } = ev.lnglat
        this.lat = lat
        this.lng = lng

        geocoder.getAddress([this.lng, this.lat], (status, result) => {
          console.log(result)
          if (status === 'complete' && result.regeocode) {
            this.address = result.regeocode.formattedAddress
          } else {
            console.log('根据经纬度查询地址失败')
          }
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 600px;
  height: 400px;
}
.tipinput {
  width: 100%;
}
</style>
