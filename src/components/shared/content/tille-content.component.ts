import {Component, Prop, Vue} from "vue-property-decorator";
import {Types} from "@/components/shared/content/types";
import BarChartComponent from "@/components/shared/graph/BarChartComponent.vue";
import ListComponent from "@/components/shared/list/ListComponent.vue";

@Component({
  components: {
    'LIST': ListComponent
  }
})
export default class TilleContent extends Vue{

  @Prop() type!: Types;
/// v-bind:key="value"
  //v-bind= obj
  data = {
    elements : ['A', 'B', 'C'],

  };
  //data => get bin be pt fiecare => data {elements : dataBarChart}
  // data{elements : listNews}

}
