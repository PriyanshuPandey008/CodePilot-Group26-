
import React from 'react';
import { Card, CardContent } from './ui/card';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description }) => {
  return (
    <Card className="border border-gray-200 hover:border-primary-accent transition-all duration-300 h-full">
      <CardContent className="pt-6">
        <div className="mb-4 bg-primary/5 p-3 rounded-full w-12 h-12 flex items-center justify-center">
          <Icon className="text-primary-accent" size={24} />
        </div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
