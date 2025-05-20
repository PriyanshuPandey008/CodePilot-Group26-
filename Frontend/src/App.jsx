import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import CodeReview from './pages/CodeReview';
import ProtectedRoute from './pages/ProtectedRoute';
import { useState, useEffect } from 'react'
import "prismjs/themes/prism-tomorrow.css"
import "highlight.js/styles/github-dark.css";
import rehypeHighlight from "rehype-highlight"
import Editor from "react-simple-code-editor"
import prism from "prismjs"
import Markdown from "react-markdown"
import axios from 'axios'
import './App.css'
import { ThemeProvider } from './context/ThemeContext';
import ThemeToggle from './components/ThemeToggle';

const App = () => {
  const [count, setCount] = useState(0);

  const [code,setCode]=useState(`function sum(){ 
  return 1+1
}`)

const [review,setReview]=useState(``);
const [loading, setLoading] = useState(false);

 useEffect(() => {
  prism.highlightAll();
 })

async function reviewCode(){
  setLoading(true); 
  setReview("");    
  try {
    const response=await axios.post("http://localhost:3000/ai/get-review",{code});
    setReview(response.data);
  } catch (err) {
    setReview("Error fetching review.");
  }
  setLoading(false);
}

  return (
    <ThemeProvider>
      <Router>
        <ThemeToggle />
        <Routes>
          {/* Redirect root to login */}
          <Route path="/" element={<Navigate to="/login" replace />} />
          
          {/* Auth routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          
          {/* Protected route */}
          <Route 
            path="/code-review" 
            element={
              <ProtectedRoute>
                <CodeReview />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App
