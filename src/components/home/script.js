import HelloWorld from "../HelloWorld.vue";
export default {
  data() {
    return {
      name: "Home",
    };
  },
  components: {
    HelloWorld,
  },
  mounted: function() {},
  methods: {
    increment() {
      this.$store.commit("increment");
      console.log(this.$store.state.count);
      console.log(this.$store)
    },
    storeClick() {
      this.increment();
    },
  },
};
