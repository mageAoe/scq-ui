"use strict";
const vue = require("vue");
const types = require("./types.js");
const _sfc_main = vue.defineComponent({
  name: "s-button",
  props: types.buttonProps,
  setup(props) {
    console.log(props);
    const { text } = props;
    const styleClass = vue.computed(() => {
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
    const slots = vue.useSlots();
    return {
      styleClass,
      // Icon,
      // iconFont,
      text,
      slots
    };
  }
});
module.exports = _sfc_main;
