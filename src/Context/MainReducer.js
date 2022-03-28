// import {SHOW_SIDEBAR} from './MainType'

const MainReducer = (state, {type, payload}) => {
    return{
        ...state,
        toggleSidebar: payload
    }
}

export default MainReducer