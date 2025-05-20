import React, { useState, useEffect } from 'react';
import Editor from "react-simple-code-editor";
import prism from "prismjs";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import axios from 'axios';
import "prismjs/themes/prism-tomorrow.css";
import "highlight.js/styles/github-dark.css";

const CodeReview = () => {
  const [code, setCode] = useState(`function sum(){ 
  return 1+1
}`);
  const [review, setReview] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    prism.highlightAll();
  });

  const reviewCode = async () => {
    setLoading(true);
    setReview('');
    try {
      const response = await axios.post("http://localhost:5000/ai/get-review", { code });
      setReview(response.data);
    } catch (err) {
      setReview("Error fetching review. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div className="code-review-container">
      <main>
        <div className="left">
          <div className="code">
            <Editor
              value={code}
              onValueChange={code => setCode(code)}
              highlight={code => prism.highlight(code, prism.languages.javascript, "javascript")}
              padding={10}
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 16,
                borderRadius: "5px",
                border: "1px solid #444",
                color: "#ffffff",
                width: "100%",
                background: "transparent",
              }}
            />
            <button 
              onClick={reviewCode}
              className="review-button"
              disabled={loading} 
            >
              {loading ? "Reviewing..." : "Review Code"}
            </button>
          </div>
        </div>
        <div className="right">
          {loading ? (
            <div className="loading">Analyzing your code...</div>
          ) : (
            <div className="review-content">
              <Markdown rehypePlugins={[rehypeHighlight]}>
                {review}
              </Markdown>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default CodeReview; 