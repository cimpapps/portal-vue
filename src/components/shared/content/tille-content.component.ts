import {Component, Prop, Vue} from "vue-property-decorator";
import {Types} from "@/components/shared/content/types";
import BarChartComponent from "@/components/shared/bar-chart/BarChartComponent.vue";
import LineChartComponent from "@/components/shared/line-chart/line-chart.component";

@Component({
  components: {
    'BAR': BarChartComponent,
    'LineChart' : LineChartComponent
  }
})
export default class TilleContent extends Vue{

  @Prop() type!: Types;

}
