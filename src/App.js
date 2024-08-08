import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import './App.css';
import { Navbar, Footer, Sidebar,themeSettings,ThemeSettings,currentMode } from './components';
import {
  Ecommerce,
  Order,
  Calendar,
  Employees,
  ColorPicker,
  Stacked,
  Line,
  Pyramid,
  Customer,
  
  Pie,
  Financial,
  ColorMap,
  Kanban,
  Area,
  Editor,
  Bar
} from './pages';
import { useStateContext, ContextProvider } from './context/ContextProvider';

const App = () => {
  const { activeMenu,setActiveMenu,themeSettings,setThemeSettings,currentColor,currentMode} = useStateContext();

  return (
    <div className={currentMode==='Dark'?'dark':''}>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
            <TooltipComponent content="Settings" position="Top">
              <button
                type="button"
                className="text-3xl p-3 hover:bg-light-gray text-white"
                onClick={()=> setThemeSettings(true)}
                style={{ background:currentColor, borderRadius: '50%' }}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
              <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
            </div>
          )}
          <div
            className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${
              activeMenu ? 'md:ml-72' : 'flex-2'
            }`}
          >
            <Navbar />
            
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
            
            
            {themeSettings && <ThemeSettings/>}
              <Routes>
                {/* Dashboard */}
                <Route path="/" element={<Ecommerce />} />
                <Route path="/ecommerce" element={<Ecommerce />} />
                {/* Pages */}
                <Route path="/orders" element={<Order />} />
                <Route path="/employees" element={<Employees />} />
                <Route path="/customers" element={<Customer />} />
                {/* Apps */}
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/kanban" element={<Kanban />} />
                <Route path="/editor" element={<Editor />} />
                <Route path="/color-picker" element={<ColorPicker />} />
                {/* Charts */}
                <Route path="/line" element={<Line />} />
                <Route path="/area" element={<Area />} />
                <Route path="/bar" element={<Bar/>} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/financial" element={<Financial />} />
                <Route path="/color-mapping" element={<ColorMap />} />
                <Route path="/pyramid" element={<Pyramid />} />
               {/* <Route path="/stacked" element={<Stacked />} /> */}
              </Routes>
            </div>
          </div>
     </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
