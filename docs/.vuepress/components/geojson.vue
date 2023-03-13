<template>
  <div class="container">
    <template v-for="(row, index) in option"
      ><div style="padding-bottom: 10px" class="container_item">
        {{ row.label }}
        <div class="content">
          <template v-for="item in row.list">
            <span class="downlink">
              <a :href="item.href" :download="item.url"> {{ item.alias }}</a></span
            >
          </template>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
const cacheCity = {}
const cacheProvince = {}
function importAll(r, cache) {
  r.keys().forEach(key => {
    cache[key] = key
  })
}
importAll(require.context('../public/geo/city', false, /\.json$/), cacheCity)
importAll(require.context('../public/geo/province', false, /\.json$/), cacheProvince)
const mapCityPlus = require(`./code2alias/cityPlus.json`) // 市县需要补充的额外行政区划信息数据
const mapCity = require(`./code2alias/city.json`) // 市县数据
export default {
  name: `geojson`,
  props: {},
  data() {
    return {
      option: [
        {
          label: '国家',
          list: [{ alias: '中国', url: 'geo/china.json', href: '/gdui/geo/china.json' }]
        },
        {
          label: '省',
          list: Object.keys(cacheProvince).map(item => {
            const temp = {}
            temp['id'] = item.substring(2)
            const province = mapCity.find(item => item.geo.split('/')[1] == temp['id'])
            temp['alias'] = province?.name
            temp['url'] = `geo/province/${item.substring(2)}`
            temp['href'] = `/gdui/geo/province/${item.substring(2)}`
            return temp
          })
        },
        {
          label: '市',
          list: Object.keys(cacheCity).map(item => {
            const temp = {}
            temp['id'] = item.substring(2).split('.')[0]
            const city = mapCity.find(item => item.id == temp['id'])
            temp['alias'] = city?.name || mapCityPlus[temp['id']]
            temp['url'] = `geo/city/${item.substring(2)}`
            temp['href'] = `/gdui/geo/city/${item.substring(2)}`
            return temp
          })
        }
      ]
    }
  },
  components: {},
  created() {},
  mounted() {},
  methods: {}
}
</script>
<style lang="scss" scoped>
.container {
  .container_item {
    font-size: 20px;
    color: #262626;
    margin-top: 40px;
    font-weight: 600;
    // width: 33%;
    width: 100%;
    .content {
      width: 100%;
      .downlink {
        margin-right: 20px;
        width: 200px;
        display: inline-block;
        font-size: 14px;
        a {
          color: #0172fc;
        }
      }
    }
  }
}
</style>
