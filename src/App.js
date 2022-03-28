import { Routes, Route } from "react-router-dom"
import MainState from './Context/MainState'
import {
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  UsersIcon,
} from '@heroicons/react/outline'
import Home from './Pages/Home'
import Sigin from './Pages/Sigin'
import Header from './Components/Header'
import SidebarDekstop from './Components/SidebarDekstop'
import SidebarMobile from './Components/SidebarMobile'

const navigation = [
  { name: 'Dashboard', href: '#', icon: HomeIcon, current: true },
  { name: 'Team', href: '#', icon: UsersIcon, current: false },
  { name: 'Projects', href: '#', icon: FolderIcon, current: false },
  { name: 'Calendar', href: '#', icon: CalendarIcon, current: false },
  { name: 'Documents', href: '#', icon: InboxIcon, current: false },
  { name: 'Reports', href: '#', icon: ChartBarIcon, current: false },
]

export default function App() {

  return (
    <MainState>
      <div>
        {/* <SidebarMobile navigation={navigation}/> */}

        <SidebarDekstop navigation={navigation}/>

        <div className="md:pl-64 flex flex-col flex-1">
          <Header/>
            <main>
              <div className="py-6">
                <div className="hidden max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                  <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                  <div className="py-4">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/signin" element={<Sigin />} />
                  </Routes>
                  </div>
                </div>
              </div>
            </main>
        </div>
      </div>
    </MainState>
  )
}
