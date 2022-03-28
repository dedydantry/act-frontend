import {useContext, useEffect} from 'react'
import MainContext from '../Context/MainContext'

function Sign() {
  const {toggleSidebar, setToggleSidebar } = useContext(MainContext)

  useEffect( () => {
    setToggleSidebar(false)
    console.log(toggleSidebar, 'toggleSidebar')
  }, [])

  return (
    <div>Sign</div>
  )
}

export default Sign