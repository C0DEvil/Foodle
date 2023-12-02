import React from 'react';
import ReactDOM  from 'react-dom/client';

const root=ReactDOM.createRoot(document.getElementById('root'));
const heading1=React.createElement('h1',{id:"firstChild"},"Hi1 from React!");
const heading2=React.createElement('h1',{id:"secondChild"},"Hi2 from React!");
const headingParent=React.createElement('div',{id:"headingParent"},[heading1,heading2]);
root.render(headingParent);
