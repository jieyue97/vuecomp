export function defaultHtml() {
  return '<div></div>'
}
export function defaultJs() {
  return `export default {
    components: {},
    data () {
      return {
      }
    },
    computed: {},
    watch: {},
    created () {
    },
    mounted () {},
    methods: {
    }
  }`
}
export function defaultCss() {
  return '.demo {}'
}
