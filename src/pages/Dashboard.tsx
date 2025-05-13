
import React from 'react';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import CodeCard from '@/components/dashboard/CodeCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';
import { PlusCircle, Search } from 'lucide-react';

// Sample data for demonstration
const codeSamples = [
  { 
    id: '1', 
    title: 'Authentication API', 
    language: 'JavaScript', 
    healthScore: 85, 
    updatedAt: '2 days ago' 
  },
  { 
    id: '2', 
    title: 'Data Processing Script', 
    language: 'Python', 
    healthScore: 62, 
    updatedAt: '1 week ago' 
  },
  { 
    id: '3', 
    title: 'User Interface Components', 
    language: 'React', 
    healthScore: 78, 
    updatedAt: '3 days ago' 
  },
  { 
    id: '4', 
    title: 'Database Schema', 
    language: 'SQL', 
    healthScore: 91, 
    updatedAt: '1 day ago' 
  },
];

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      <DashboardSidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader username="John" />
        
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
              <h1 className="text-2xl font-bold text-gray-800">My Projects</h1>
              
              <div className="flex w-full sm:w-auto gap-4">
                <div className="relative flex-1 sm:w-64">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
                  <Input placeholder="Search projects..." className="pl-8" />
                </div>
                
                <Button asChild>
                  <Link to="/editor/new" className="whitespace-nowrap">
                    <PlusCircle className="h-4 w-4 mr-2" />
                    New Project
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {codeSamples.map((code) => (
                <CodeCard key={code.id} {...code} />
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
