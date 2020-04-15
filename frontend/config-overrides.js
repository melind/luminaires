const { override, fixBabelImports, addLessLoader } = require ('customize-cra');


module.exports = override(
   fixBabelImports('import', {
     libraryName: 'antd',
     libraryDirectory: 'es',
     style: true,
   }),
   addLessLoader({
   javascriptEnabled: true,
   modifyVars: { 
     '@primary-color': '#04e804',
     '@menu-dark-color': '#047b27',
     '@menu-item-color': '#047b27',
     //'@menu-dark-selected-item-icon-color': '#04e804',
     '@menu-dark-selected-item-text-color': '#04e804',
     '@menu-dark-highlight-color': '#04e804',
     '@menu-dark-item-active-bg': 'transparent',
     '@label-color': '#047b27',
     }
 })
 );