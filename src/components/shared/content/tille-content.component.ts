import {Component, Prop, Vue} from "vue-property-decorator";
import {Types} from "@/components/shared/content/types";
import BarChartComponent from "@/components/shared/graph/BarChartComponent.vue";

@Component({
  components: {
    'BAR': BarChartComponent
  }
})
export default class TilleContent extends Vue{

  @Prop() type!: Types;

}
