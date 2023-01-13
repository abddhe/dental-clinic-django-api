import Navbar from "../layouts/Navbar";
import { ProSidebarProvider } from "react-pro-sidebar";
import { Slider } from "../layouts/Slider";
import { Outlet } from "react-router-dom";
function App() {
    return (
        <ProSidebarProvider>
            <main className="main">
                <div className="d-flex ">
                    <div>
                        <Slider />
                    </div>
                    <div className="w-100">
                        <Navbar />
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
