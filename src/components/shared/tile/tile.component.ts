import {Component, Prop, Vue} from "vue-property-decorator";
import TilleContent from "@/components/shared/content/TilleContent.vue";


@Component({
  components: {
    'mxm-tille-content': TilleContent
  }
})
export default class Tile extends Vue {

  @Prop({default: '*'}) numberOfItems!: number;
  @Prop({default: 'Salut'}) title!: string;
  @Prop() type!: string;
  @Prop() subTitle!: string;
}
