import Vue from 'vue'
const validateForm = (yzForm, form, callback) => {
  for (let val in form) {
    if (yzForm.hasOwnProperty(val)) {
      if (form[val] === '' || JSON.stringify(form[val]) === '[]' || JSON.stringify(form[val]).indexOf('请选择') > -1) {
        Vue.$vux.toast.show({
          text: yzForm[val],
          time: 1500,
          isShowMask: true,
          type: 'text'
        })
        return
      }
    }
  }
  callback()
}
export default validateForm
