'use client'
import { useState, useEffect } from 'react';

export function useSidebar() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  useEffect(() => {
    if (isSideBarOpen) {
      setIsSideBarOpen(false);
    }
  }, [isSideBarOpen]);

  const toggleSideBar = () => {
    setIsSideBarOpen((prevState) => !prevState);
  };

  return {
    isSideBarOpen,
    toggleSideBar,
  };
}
