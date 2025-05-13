
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Download } from 'lucide-react';

interface AIFeedbackProps {
  loading?: boolean;
  correctedCode?: string;
  errors?: string[];
  securityIssues?: string[];
  performanceIssues?: string[];
  healthScore?: number;
  bestPractices?: string[];
}

const AIFeedback: React.FC<AIFeedbackProps> = ({
  loading = false,
  correctedCode = '',
  errors = [],
  securityIssues = [],
  performanceIssues = [],
  healthScore = 0,
  bestPractices = [],
}) => {
  // Health score color based on value
  const getHealthColor = (score: number) => {
    if (score >= 80) return 'bg-success text-white';
    if (score >= 60) return 'bg-warning text-white';
    return 'bg-error text-white';
  };

  if (loading) {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-t-primary border-r-primary border-b-transparent border-l-transparent"></div>
          <p className="mt-4 text-gray-500">Analyzing your code...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col">
      <Card className="flex-1 overflow-hidden flex flex-col">
        <CardHeader className="bg-primary-light/10 pb-2">
          <CardTitle className="text-lg flex items-center justify-between">
            <span>AI FEEDBACK</span>
            <div className="flex items-center gap-2">
              <span className="text-sm font-normal">Code Health:</span>
              <span className={`px-2 py-1 rounded-md text-xs font-medium ${getHealthColor(healthScore)}`}>
                {healthScore}/100
              </span>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0 flex-1 overflow-hidden">
          <Tabs defaultValue="corrected" className="h-full flex flex-col">
            <TabsList className="p-0 bg-transparent border-b border-gray-200 rounded-none">
              <TabsTrigger value="corrected" className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary">
                Corrected Code
              </TabsTrigger>
              <TabsTrigger value="errors" className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary">
                Errors & Fixes
              </TabsTrigger>
              <TabsTrigger value="security" className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary">
                Security
              </TabsTrigger>
              <TabsTrigger value="performance" className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary">
                Performance
              </TabsTrigger>
              <TabsTrigger value="practices" className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary">
                Best Practices
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="corrected" className="flex-1 overflow-y-auto p-4 mt-0 bg-gray-900 text-gray-100 font-mono">
              <pre className="whitespace-pre-wrap">{correctedCode || 'No corrected code available yet.'}</pre>
            </TabsContent>
            
            <TabsContent value="errors" className="flex-1 overflow-y-auto p-4 mt-0">
              <ul className="space-y-2">
                {errors.length > 0 ? (
                  errors.map((error, index) => (
                    <li key={index} className="bg-red-50 p-3 rounded border-l-4 border-red-400">
                      {error}
                    </li>
                  ))
                ) : (
                  <p className="text-gray-500">No errors detected.</p>
                )}
              </ul>
            </TabsContent>
            
            <TabsContent value="security" className="flex-1 overflow-y-auto p-4 mt-0">
              <ul className="space-y-2">
                {securityIssues.length > 0 ? (
                  securityIssues.map((issue, index) => (
                    <li key={index} className="bg-yellow-50 p-3 rounded border-l-4 border-yellow-400">
                      {issue}
                    </li>
                  ))
                ) : (
                  <p className="text-gray-500">No security issues detected.</p>
                )}
              </ul>
            </TabsContent>
            
            <TabsContent value="performance" className="flex-1 overflow-y-auto p-4 mt-0">
              <ul className="space-y-2">
                {performanceIssues.length > 0 ? (
                  performanceIssues.map((issue, index) => (
                    <li key={index} className="bg-blue-50 p-3 rounded border-l-4 border-blue-400">
                      {issue}
                    </li>
                  ))
                ) : (
                  <p className="text-gray-500">No performance issues detected.</p>
                )}
              </ul>
            </TabsContent>
            
            <TabsContent value="practices" className="flex-1 overflow-y-auto p-4 mt-0">
              <ul className="space-y-2">
                {bestPractices.length > 0 ? (
                  bestPractices.map((practice, index) => (
                    <li key={index} className="bg-green-50 p-3 rounded border-l-4 border-green-400">
                      {practice}
                    </li>
                  ))
                ) : (
                  <p className="text-gray-500">No best practices recommendations yet.</p>
                )}
              </ul>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
      
      <div className="mt-4 flex justify-end">
        <Button variant="outline" className="flex gap-2">
          <Download className="h-4 w-4" />
          Export as PDF
        </Button>
      </div>
    </div>
  );
};

export default AIFeedback;
