import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const MarkdownEditor = () => {
  const [markdown, setMarkdown] = useState('');
  const handleInputChange = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdown(e.target.value);
  };
  return (
    <div className="markdown-editor w-full max-w-xs md:max-w-2xl my-2">
      <div className="editor">
        <textarea
          name="content"
          className='textarea textarea-primary w-full max-w-xs md:max-w-2xl'
          placeholder="Write your Markdown here..."
          value={markdown}
          onChange={handleInputChange}
        />
      </div> <br />
      <div className="preview textarea textarea-primary w-full max-w-xs md:max-w-2xl">
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </div>
  );
};
export default MarkdownEditor;