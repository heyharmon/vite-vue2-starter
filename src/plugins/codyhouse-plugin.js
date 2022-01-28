export default {
  // called by Vue.use(FirstPlugin)
  install(Vue, options) {
    console.log('Hello from the Codyhouse plugin mixin');
    
    // create a mixin
    // Vue.mixin({
    //   created() {
    //     console.log('Hello from the Codyhouse plugin mixin');
    //   },
    // });
    
    // define a global property
    // Vue.CODYHOUSE_VERSION = "3.0.4";
  },
};
