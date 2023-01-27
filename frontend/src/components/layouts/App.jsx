import { ProSidebarProvider } from "react-pro-sidebar";
import { Outlet } from "react-router-dom";
import SidebarComponent from "./SidebarComponent";
import NavbarComponent from "./NavbarComponent";
import { Toaster } from "react-hot-toast";
function App() {

    return (
        <ProSidebarProvider>
            <main className="main">
                <Toaster />
                <div className="d-flex ">
                    <div>
                        <SidebarComponent />
                    </div>
                    <div className="w-100">
                        <NavbarComponent />
                        <div id="detail">
                            <Outlet />
                        </div>
                    </div>
                </div>
            </main>
        </ProSidebarProvider>
    );
}

export default App;
