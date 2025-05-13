
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface CodeCardProps {
  id: string;
  title: string;
  language: string;
  healthScore: number;
  updatedAt: string;
}

const CodeCard: React.FC<CodeCardProps> = ({ id, title, language, healthScore, updatedAt }) => {
  // Health score color based on value
  const getHealthColor = (score: number) => {
    if (score >= 80) return 'bg-green-500';
    if (score >= 60) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <Card className="h-full hover:shadow-md transition-shadow">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg font-medium">{title}</CardTitle>
          <Badge variant="outline">{language}</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center mt-2 mb-4">
          <div className="text-sm text-gray-500">Health Score:</div>
          <div className="ml-2 flex items-center">
            <span className={`inline-block w-8 h-8 rounded-full ${getHealthColor(healthScore)} text-white flex items-center justify-center text-xs font-medium`}>
              {healthScore}
            </span>
          </div>
          <div className="text-xs text-gray-400 ml-auto">
            Updated {updatedAt}
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link to={`/editor/${id}`}>Open Editor</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CodeCard;
