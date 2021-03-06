import {useContext} from 'react'
import {classNames} from '../Helpers/Index'
import MainContext from '../Context/MainContext'

function Sidebar({navigation}) {

  const { toggleSidebar } = useContext(MainContext)

  if(!toggleSidebar){
      return <></>
  }else{
      return (
        <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
            <div className="border-r border-gray-200 pt-5 flex flex-col flex-grow bg-white overflow-y-auto">
            <div className="flex-shrink-0 px-4 flex items-center">
                <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"
                alt="Workflow"
                />
            </div>
            <div className="flex-grow mt-5 flex flex-col">
                <nav className="flex-1 px-2 pb-4 space-y-1">
                {navigation.map((item) => (
                    <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                        item.current ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                        'group rounded-md py-2 px-2 flex items-center text-sm font-medium'
                    )}
                    >
                    <item.icon
                        className={classNames(
                        item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                        'mr-3 flex-shrink-0 h-6 w-6'
                        )}
                        aria-hidden="true"
                    />
                    {item.name}
                    </a>
                ))}
                </nav>
            </div>
            </div>
        </div>
      )
  }
}

export default Sidebar