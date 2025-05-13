
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { History, Bookmark, Settings } from 'lucide-react';
import { cn } from '@/lib/utils';

const sidebarItems = [
  {
    title: 'My Code Reviews',
    icon: History,
    path: '/dashboard',
  },
  {
    title: 'Bookmarks',
    icon: Bookmark,
    path: '/dashboard/bookmarks',
  },
  {
    title: 'Settings',
    icon: Settings,
    path: '/dashboard/settings',
  },
];

const DashboardSidebar = () => {
  const location = useLocation();

  return (
    <aside className="hidden md:flex flex-col w-64 bg-white border-r border-gray-200 h-screen">
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-800">Dashboard</h2>
      </div>
      <nav className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-1 px-2">
          {sidebarItems.map((item) => (
            <li key={item.title}>
              <Link
                to={item.path}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors",
                  location.pathname === item.path && "bg-primary-light/10 text-primary font-medium"
                )}
              >
                <item.icon size={18} />
                <span>{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default DashboardSidebar;
