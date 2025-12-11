import { useState } from 'react';
import Header from './components/Header';
import Drawer from './components/Drawer';
import Homepage from './components/Homepage';

function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onMenuClick={toggleDrawer} />
      <Drawer isOpen={isDrawerOpen} onClose={closeDrawer} />
      <main className="lg:ml-0">
        <Homepage />
      </main>
    </div>
  );
}

export default App;
