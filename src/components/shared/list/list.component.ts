import {Component, Prop, Vue} from "vue-property-decorator";

@Component
export default class ListComponent extends Vue {
  @Prop({default: []}) elements!: string[];

  constructor() {
    super();
    console.log(this.$slots)
    console.log(this.elements)
  }
};
