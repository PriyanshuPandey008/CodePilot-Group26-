
import React, { useState } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

interface CodeEditorProps {
  onSubmit: (code: string) => void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ onSubmit }) => {
  const [code, setCode] = useState<string>('');

  const handleSubmit = () => {
    if (code.trim()) {
      onSubmit(code);
    }
  };

  return (
    <div className="flex flex-col h-full">
      <Textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        className="flex-1 font-mono text-sm resize-none min-h-[500px] bg-gray-900 text-gray-100 p-4"
        placeholder="Paste or write your code here..."
      />
      <div className="mt-4 flex justify-end">
        <Button onClick={handleSubmit}>Analyze Code</Button>
      </div>
    </div>
  );
};

export default CodeEditor;
