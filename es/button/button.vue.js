import _sfc_main from "./button.vue2.js";
import { openBlock, createElementBlock, normalizeClass, renderSlot, createCommentVNode, toDisplayString } from "vue";
import "./button.vue3.js";
import _export_sfc from "../_virtual/_plugin-vue_export-helper.js";
const _hoisted_1 = {
  key: 0,
  class: "s-button-text"
};
const _hoisted_2 = { key: 1 };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("button", {
    class: normalizeClass(["custom-btn", _ctx.styleClass])
  }, [
    _ctx.slots.default ? (openBlock(), createElementBlock("span", _hoisted_1, [
      renderSlot(_ctx.$slots, "default")
    ])) : createCommentVNode("", true),
    _ctx.styleClass["s-button--btn-12"] === "btn-12" ? (openBlock(), createElementBlock("span", _hoisted_2, toDisplayString(_ctx.text) + " 123 ", 1)) : createCommentVNode("", true)
  ], 2);
}
const button = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  button as default
};
