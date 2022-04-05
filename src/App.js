import { Routes, Route } from "react-router-dom";
import MainState from "./Context/MainState";
import {
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  UsersIcon,
  AtSymbolIcon,
} from "@heroicons/react/outline";

import Home from "./Pages/Home";
import Sigin from "./Pages/Sigin";
import SignUp from "./Pages/Signup";
import Header from "./Components/Header";
import SidebarDekstop from "./Components/SidebarDekstop";
import SidebarMobile from "./Components/SidebarMobile";
import useAuthentication from "./Api/useAuthentication";
import ContactPage from "./Pages/ContactPage";
import ClientPage from "./Pages/ClientPage";
import ProfilePage from "./Pages/ProfilePage";

const navigation = [
  { name: "Dashboard", href: "/", icon: HomeIcon, current: true },
  { name: "Contact", href: "/contacts", icon: UsersIcon, current: false },
  { name: "Mail", href: "#", icon: AtSymbolIcon, current: false },
  // { name: "Calendar", href: "#", icon: CalendarIcon, current: false },
  // { name: "Documents", href: "#", icon: InboxIcon, current: false },
  // { name: "Reports", href: "#", icon: ChartBarIcon, current: false },
];

export default function App() {
  const user = useAuthentication();
  return (
    <MainState>
      <div>
        {/* <SidebarMobile navigation={navigation}/> */}

        <SidebarDekstop navigation={navigation} />

        <div className="md:pl-64 flex flex-col flex-1">
          <Header />
          <main>
            <div className="py-6">
              <div className="hidden max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                <h1 className="text-2xl font-semibold text-gray-900">
                  Dashboard
                </h1>
              </div>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                <div className="py-4">
                  {!user && (
                    <Routes>
                      <Route path="/signin" element={<Sigin />} />
                      <Route path="/signup" element={<SignUp />} />
                    </Routes>
                  )}
                  {user && (
                    <Routes>
                      <Route path="/client" element={<ClientPage />} />
                      <Route path="/" element={<Home />} />
                      <Route path="/contacts" element={<ContactPage />} />
                      <Route path="/profile" element={<ProfilePage />} />
                    </Routes>
                  )}
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </MainState>
  );
}
