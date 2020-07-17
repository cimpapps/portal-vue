import {Component, Prop, Vue} from "vue-property-decorator";

@Component
export default class Tille extends Vue {

  @Prop({default: '*'}) numberOfItems!: number;
  @Prop({default: 'Salut'}) title!: string;
  @Prop() image!: string;
  @Prop() subTitle!: string;
}
