"use client"
import "../app/globals.css";
import React, { createContext, useRef, RefObject } from 'react';

type ScrollContextType = {
  home: RefObject<HTMLDivElement>;
  about: RefObject<HTMLDivElement>;
};

export const ScrollContext = createContext<ScrollContextType | null>(null);

const ScrollProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const home = useRef<HTMLDivElement>(null);
  const about = useRef<HTMLDivElement>(null);

  return (
    <ScrollContext.Provider value={{ home, about }}>
      <div className="overflow-auto scrollbar-hide">
        {children}
      </div>
    </ScrollContext.Provider>
  );
};

export default ScrollProvider;