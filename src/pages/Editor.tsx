
import React, { useState } from 'react';
import Logo from '@/components/Logo';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';
import { Download, Github, Moon, Sun, User } from 'lucide-react';
import LanguageSelector from '@/components/editor/LanguageSelector';
import CodeEditor from '@/components/editor/CodeEditor';
import AIFeedback from '@/components/editor/AIFeedback';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Editor = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [language, setLanguage] = useState<string>('javascript');
  const [projectName, setProjectName] = useState<string>('Untitled Project');
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);
  const [showAIFeedback, setShowAIFeedback] = useState<boolean>(false);
  
  // Sample AI feedback data
  const feedbackData = {
    correctedCode: `function calculateTotal(items) {
  // Use reduce for cleaner summation
  return items.reduce((total, item) => {
    return total + (item.price * item.quantity);
  }, 0);
}`,
    errors: [
      'Line 3: Using for loop for summation is less efficient than using reduce',
      'Line 5: Unnecessary variable declaration inside loop'
    ],
    securityIssues: [
      'No input validation for the items parameter',
      'Consider using Number.isFinite() to check numeric values'
    ],
    performanceIssues: [
      'Avoiding nested loops would improve performance',
      'Consider memoizing results for repeated calculations'
    ],
    healthScore: 78,
    bestPractices: [
      'Use meaningful variable names',
      'Add proper JSDoc comments for better documentation',
      'Consider using TypeScript for better type safety'
    ]
  };

  const handleCodeSubmit = (code: string) => {
    setIsAnalyzing(true);
    // Simulate API call for analysis
    setTimeout(() => {
      setIsAnalyzing(false);
      setShowAIFeedback(true);
    }, 2000);
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    // In a real app, you would apply dark mode to the document here
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
      {/* Header */}
      <header className={`py-4 px-6 flex items-center justify-between border-b ${darkMode ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-white'}`}>
        <div className="md:hidden">
          {/* Mobile menu button would go here */}
        </div>

        <div className="mx-auto md:mx-0">
          <Logo />
        </div>
        
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full">
            {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <User className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link to="/dashboard" className="w-full">Dashboard</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link to="/" className="w-full cursor-pointer">Logout</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>

      {/* Editor Toolbar */}
      <div className={`py-3 px-6 border-b ${darkMode ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-white'}`}>
        <div className="flex flex-wrap gap-3 items-center justify-between">
          <div className="flex items-center gap-3 flex-grow">
            <Input
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              className="max-w-xs font-medium"
            />
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" className="flex items-center gap-1">
              <Download className="h-4 w-4" />
              <span className="hidden sm:inline-block">Save Draft</span>
            </Button>
            <Button className="flex items-center gap-1">
              <Github className="h-4 w-4" />
              <span className="hidden sm:inline-block">Sync with GitHub</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Main Editor Area */}
      <div className="container mx-auto py-6 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Panel - Code Input */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex-grow">
                <label className="text-sm font-medium mb-1 block">Language</label>
                <LanguageSelector value={language} onChange={setLanguage} />
              </div>
            </div>
            
            <CodeEditor onSubmit={handleCodeSubmit} />
          </div>
          
          {/* Right Panel - AI Feedback */}
          <div>
            {showAIFeedback ? (
              <AIFeedback 
                loading={isAnalyzing}
                correctedCode={feedbackData.correctedCode}
                errors={feedbackData.errors}
                securityIssues={feedbackData.securityIssues}
                performanceIssues={feedbackData.performanceIssues}
                healthScore={feedbackData.healthScore}
                bestPractices={feedbackData.bestPractices}
              />
            ) : (
              <div className="h-full flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg border border-dashed border-gray-300 dark:border-gray-700">
                <div className="text-center p-6">
                  <div className="w-16 h-16 rounded-full bg-primary-light/10 mx-auto flex items-center justify-center mb-4">
                    <span className="text-primary text-2xl font-bold">AI</span>
                  </div>
                  <h3 className="text-lg font-medium mb-2">AI Feedback</h3>
                  <p className="text-gray-500 max-w-xs mx-auto">
                    Analyze your code to get AI-powered feedback on errors, security, performance, and best practices.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editor;
