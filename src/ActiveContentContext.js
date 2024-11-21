import React, { createContext, useContext, useState } from 'react';

const ActiveContentContext = createContext();

export const useActiveContent = () => useContext(ActiveContentContext);

export const ActiveContentProvider = ({ children }) => {
    const [activeContent, setActiveContent] = useState(null);

    return (
        <ActiveContentContext.Provider value={{ activeContent, setActiveContent }}>
            {children}
        </ActiveContentContext.Provider>
    );
};

/*
 Custom useState hook for Review.jsx and Home.jsx
 index.js - wrap custom hook <ActiveContentProvider>
 Review.jsx - import useActiveContent used via toggleContent
 Home.jsx - import useActiveContent used via setActiveContent with <Link>
 * 
 */


