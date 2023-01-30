"use strict";
const button_vue_vue_type_script_lang = require("./button.vue2.js");
const vue = require("vue");
require("./button.vue3.js");
const _pluginVue_exportHelper = require("../_virtual/_plugin-vue_export-helper.js");
const _hoisted_1 = {
  key: 0,
  class: "s-button-text"
};
const _hoisted_2 = { key: 1 };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("button", {
    class: vue.normalizeClass(["custom-btn", _ctx.styleClass])
  }, [
    _ctx.slots.default ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_1, [
      vue.renderSlot(_ctx.$slots, "default")
    ])) : vue.createCommentVNode("", true),
    _ctx.styleClass["s-button--btn-12"] === "btn-12" ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_2, vue.toDisplayString(_ctx.text) + " 123 ", 1)) : vue.createCommentVNode("", true)
  ], 2);
}
const button = /* @__PURE__ */ _pluginVue_exportHelper(button_vue_vue_type_script_lang, [["render", _sfc_render]]);
module.exports = button;
