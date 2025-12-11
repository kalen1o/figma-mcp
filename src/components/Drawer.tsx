import React from 'react';
import { 
  HomeOutlined, 
  AppstoreOutlined, 
  SettingOutlined, 
  QuestionCircleOutlined,
  UserOutlined,
  FileTextOutlined,
  BarChartOutlined,
  TeamOutlined
} from '@ant-design/icons';

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

interface NavItem {
  icon: React.ReactNode;
  label: string;
  href: string;
  active?: boolean;
}

const Drawer: React.FC<DrawerProps> = ({ isOpen, onClose }) => {
  const navItems: NavItem[] = [
    { icon: <HomeOutlined />, label: 'Dashboard', href: '#', active: true },
    { icon: <AppstoreOutlined />, label: 'Mini Apps', href: '#' },
    { icon: <BarChartOutlined />, label: 'Analytics', href: '#' },
    { icon: <TeamOutlined />, label: 'Users', href: '#' },
    { icon: <FileTextOutlined />, label: 'Documents', href: '#' },
    { icon: <SettingOutlined />, label: 'Settings', href: '#' },
    { icon: <QuestionCircleOutlined />, label: 'Help & Support', href: '#' },
  ];

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"
        onClick={onClose}
      />
      
      {/* Drawer */}
      <div className={`fixed inset-y-0 left-0 w-64 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 h-16">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">DL</span>
            </div>
            <span className="text-lg font-semibold text-gray-900">DLKS Admin</span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
            aria-label="Close menu"
          >
            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        {/* Navigation */}
        <nav className="mt-4 px-2">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                onClose();
              }}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium transition-colors mb-1 ${
                item.active
                  ? 'bg-indigo-50 text-indigo-700'
                  : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              <span>{item.label}</span>
            </a>
          ))}
        </nav>

        {/* User Section */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
          <div className="flex items-center gap-3 px-2">
            <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
              <UserOutlined className="text-indigo-600 text-lg" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">Admin User</p>
              <p className="text-xs text-gray-500 truncate">admin@dlks.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Drawer;