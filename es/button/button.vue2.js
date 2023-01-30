import { defineComponent, computed, useSlots } from "vue";
import { buttonProps } from "./types.js";
const _sfc_main = defineComponent({
  name: "s-button",
  props: buttonProps,
  setup(props) {
    console.log(props);
    const { text } = props;
    const styleClass = computed(() => {
      return {
        [`s-button--${props.type}`]: props.type,
        "is-plain": props.plain,
        "is-round": props.round,
        "is-disabled": props.disabled,
        [`s-button--${props.size}`]: props.size
      };
    });
    console.log(styleClass);
    console.log(text);
    const slots = useSlots();
    return {
      styleClass,
      // Icon,
      // iconFont,
      text,
      slots
    };
  }
});
export {
  _sfc_main as default
};
