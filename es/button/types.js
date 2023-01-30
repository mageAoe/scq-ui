const ButtonType = ["default", "primary", "success", "warning", "danger"];
const ButtonSize = ["large", "normal", "small", "mini"];
const buttonProps = {
  type: {
    type: String,
    values: ButtonType
  },
  size: {
    type: String,
    values: ButtonSize
  },
  text: {
    type: String,
    values: "Click"
  }
};
export {
  ButtonSize,
  ButtonType,
  buttonProps
};
