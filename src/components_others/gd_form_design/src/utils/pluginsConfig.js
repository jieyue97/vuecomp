const CDN = `${process.env.VUE_FORM_DESIBN_PATH}/`
// const CDN = '/node_modules/gd_vue_components/static/'
function splicingPluginUrl(PluginName, version, fileName) {
  return `${CDN}${PluginName}/${fileName}`
}
console.log(`${process.env.VUE_FORM_DESIBN_PATH}`, '${process.env.VUE_FORM_DESIBN_PATH}')
export default {
  beautifierUrl: splicingPluginUrl('js-beautify', '1.13.5', 'beautifier.min.js'),
  monacoEditorUrl: `${process.env.VUE_FORM_DESIBN_PATH}/monaco-editor/vs`,
  // monacoEditorUrl: `/node_modules/gd_vue_components/static/libs/monaco-editor/vs`,
  tinymceUrl: splicingPluginUrl('tinymce', '5.7.0', 'tinymce.min.js')
}
