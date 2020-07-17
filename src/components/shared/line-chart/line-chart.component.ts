import { Component, Vue } from "vue-property-decorator";
import { Line } from "vue-chartjs";

@Component({
  extends: Line
})
export default class LineChartComponent extends Vue {
  mounted() {
    // @ts-ignore
    this.renderChart({
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Data One',
          backgroundColor: '#f87979',
          data: [40, 39, 10, 40, 39, 80, 40]
        }
      ]
    }, {responsive: false, maintainAspectRatio: false});
  }
}
