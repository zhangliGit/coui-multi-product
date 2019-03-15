import DialogCom from './DialogCom/index'
import TabList from './TabList/index'

const Coui = {
    install: Vue => {
        Vue.component('DialogCom', DialogCom)
        Vue.component('tab-list', TabList)
    }
    
}
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}
export {
    DialogCom,
    TabList
}
export default Coui

