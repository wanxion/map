export default function MapLoader() {
  return new Promise((resolve, reject) => {
    if (window.AMap) {
      resolve(window.AMap)
    } else {
      const aMapApi = document.createElement('script')
      aMapApi.charset = 'utf-8'
      aMapApi.src =
        'https://webapi.amap.com/maps?v=1.4.15&key=525dcfe782327f7486c61819c57a60bd&plugin=AMap.Geocoder,AMap.Autocomplete,AMap.PlaceSearch,AMap.Geolocation&callback=initAMap'
      aMapApi.onerror = reject
      document.head.appendChild(aMapApi)
    }
    window.initAMap = () => {
      resolve(window.AMap)
    }
  })
}
