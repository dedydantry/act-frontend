import React, { useReducer } from "react"

import MainContext from "./MainContext"
import MainReducer from "./MainReducer"
import {SET_TOGGLE_SIDEBAR,GET_TOGGLE_SIDEBAR} from './MainType'

const MainState = ({ children }) => {
    
    const initialState = {
        toggleSidebar: true
    }

    const [state, dispatch] = useReducer(MainReducer, initialState)

    const setToggleSidebar = (payload) => {
        dispatch({ type: SET_TOGGLE_SIDEBAR, payload })
    }

    const getToggleSidebar = async (val) => {
        dispatch({ type: GET_TOGGLE_SIDEBAR, payload: val })
    }

    const { toggleSidebar } = state

    return (
        <MainContext.Provider
          value={{
            toggleSidebar,
            setToggleSidebar,
            getToggleSidebar
          }}
        >
          {children}
        </MainContext.Provider>
    )
}

export default MainState
