import HelloWorld from "../HelloWorld.vue";
import HeaderView from "../publicViews/header/HeaderView.vue"
import SearchBar from "../publicViews/searchBar/SearchBar.vue"
import TabBar from "../publicViews/tabBar/TabBar.vue"
import CarouselItem from "../publicViews/carousel/CarouselItem.vue"
export default {
  data() {
    return {
      name: "Home",
      currentDate: "百度同库携手求是网共同发布"
    };
  },
  components: {
    HelloWorld,
    HeaderView,
    SearchBar,
    TabBar,
    CarouselItem
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
