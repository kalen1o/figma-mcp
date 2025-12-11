import React from 'react';
import { 
  AppstoreOutlined, 
  RocketOutlined, 
  StarOutlined,
  ArrowRightOutlined,
  PlusOutlined,
  UserOutlined,
  FileTextOutlined,
  BarChartOutlined,
  SettingOutlined,
  BellOutlined,
  DatabaseOutlined
} from '@ant-design/icons';

const Homepage: React.FC = () => {
  const miniApps = [
    {
      id: 1,
      name: 'Task Manager',
      description: 'Manage your tasks and projects efficiently',
      icon: <FileTextOutlined className="text-2xl" />,
      color: 'bg-blue-500',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600',
      status: 'Active',
      users: 1250
    },
    {
      id: 2,
      name: 'Analytics Dashboard',
      description: 'Real-time analytics and insights',
      icon: <BarChartOutlined className="text-2xl" />,
      color: 'bg-green-500',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600',
      status: 'Active',
      users: 890
    },
    {
      id: 3,
      name: 'Customer Portal',
      description: 'Customer self-service portal',
      icon: <UserOutlined className="text-2xl" />,
      color: 'bg-purple-500',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600',
      status: 'Active',
      users: 2100
    },
    {
      id: 4,
      name: 'Document Center',
      description: 'Centralized document management',
      icon: <FileTextOutlined className="text-2xl" />,
      color: 'bg-orange-500',
      bgColor: 'bg-orange-50',
      iconColor: 'text-orange-600',
      status: 'Active',
      users: 750
    },
    {
      id: 5,
      name: 'Notification Hub',
      description: 'Manage all notifications',
      icon: <BellOutlined className="text-2xl" />,
      color: 'bg-pink-500',
      bgColor: 'bg-pink-50',
      iconColor: 'text-pink-600',
      status: 'Active',
      users: 3200
    },
    {
      id: 6,
      name: 'Report Generator',
      description: 'Generate custom reports',
      icon: <BarChartOutlined className="text-2xl" />,
      color: 'bg-indigo-500',
      bgColor: 'bg-indigo-50',
      iconColor: 'text-indigo-600',
      status: 'Active',
      users: 450
    }
  ];

  const stats = [
    { 
      label: 'Total Mini Apps', 
      value: '24', 
      change: '+12%',
      changeType: 'positive',
      icon: <AppstoreOutlined className="text-2xl" />, 
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600',
      borderColor: 'border-blue-200'
    },
    { 
      label: 'Active Users', 
      value: '8,640', 
      change: '+8%',
      changeType: 'positive',
      icon: <RocketOutlined className="text-2xl" />, 
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600',
      borderColor: 'border-green-200'
    },
    { 
      label: 'Total Requests', 
      value: '142K', 
      change: '+23%',
      changeType: 'positive',
      icon: <StarOutlined className="text-2xl" />, 
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600',
      borderColor: 'border-purple-200'
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Welcome Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Welcome back, Admin</h1>
              <p className="mt-2 text-gray-600">Manage your mini apps and monitor system performance</p>
            </div>
            <button className="flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium shadow-sm hover:shadow-md">
              <PlusOutlined />
              <span>Create New App</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-xl shadow-sm border ${stat.borderColor} p-6 hover:shadow-md transition-shadow`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 ${stat.bgColor} rounded-lg flex items-center justify-center ${stat.iconColor}`}>
                  {stat.icon}
                </div>
                <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                  stat.changeType === 'positive' 
                    ? 'bg-green-100 text-green-700' 
                    : 'bg-red-100 text-red-700'
                }`}>
                  {stat.change}
                </span>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">{stat.label}</p>
                <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mini Apps Section */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Mini Apps</h2>
              <p className="mt-1 text-sm text-gray-600">Manage and access your applications</p>
            </div>
            <button className="flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium transition-colors">
              <span>View All</span>
              <ArrowRightOutlined />
            </button>
          </div>
        </div>

        {/* Mini Apps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {miniApps.map((app) => (
            <div
              key={app.id}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-all cursor-pointer group hover:border-indigo-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-14 h-14 ${app.bgColor} rounded-xl flex items-center justify-center ${app.iconColor} group-hover:scale-110 transition-transform`}>
                  {app.icon}
                </div>
                <span className="px-2.5 py-1 text-xs font-semibold text-green-700 bg-green-100 rounded-full">
                  {app.status}
                </span>
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                {app.name}
              </h3>
              <p className="text-sm text-gray-600 mb-4 line-clamp-2">{app.description}</p>
              
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="flex items-center gap-1 text-sm text-gray-500">
                  <UserOutlined className="text-xs" />
                  <span className="font-medium">{app.users.toLocaleString()}</span>
                  <span>users</span>
                </div>
                <button className="text-indigo-600 hover:text-indigo-700 font-medium text-sm flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Open</span>
                  <ArrowRightOutlined className="text-xs" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Create New App Card */}
        <div className="bg-white rounded-xl shadow-sm border-2 border-dashed border-gray-300 p-8 text-center hover:border-indigo-400 hover:bg-indigo-50/30 transition-all cursor-pointer group">
          <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-indigo-100 group-hover:scale-110 transition-all">
            <PlusOutlined className="text-3xl text-gray-400 group-hover:text-indigo-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Create New Mini App</h3>
          <p className="text-sm text-gray-600 mb-6 max-w-md mx-auto">Build and deploy a new mini application to expand your platform capabilities</p>
          <button className="px-6 py-2.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium shadow-sm hover:shadow-md">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
