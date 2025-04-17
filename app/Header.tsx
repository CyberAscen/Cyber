"use client"

import React from 'react';
import { Button } from "@/components/ui/button";
import { Menu, Clock, Upload } from "lucide-react";

interface HeaderProps {
    activeTab: string;
    isMobile: boolean;
    setSidebarOpen: (open: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ activeTab, isMobile, setSidebarOpen }) => {

    const getTitle = () => {
        switch (activeTab) {
            case 'overview': return 'Cyber Ascension Overview';
            case 'technology': return 'Technology Architecture';
            case 'ethics': return 'Ethical Considerations';
            default: return 'Cyber Ascension';
        }
    };

    return (
        <header className="bg-gray-900/50 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-40">
            <div className="flex items-center justify-between px-4 py-4">
                <div className="flex items-center">
                    {isMobile && (
                        <Button variant="ghost" size="icon" className="mr-2" onClick={() => setSidebarOpen(true)}>
                            <Menu className="h-5 w-5" />
                        </Button>
                    )}
                    <h1 className="text-xl font-semibold">{getTitle()}</h1>
                </div>
                <div className="flex items-center space-x-2">
                    <div className="hidden md:flex items-center bg-gray-800 rounded-full px-3 py-1">
                        <Clock className="h-4 w-4 mr-2 text-blue-400" />
                        {/* Replace with dynamic data if available */}
                        <span className="text-xs">Sync Time: 237d 12h</span>
                    </div>
                    <Button variant="outline" size="sm" className="border-gray-700 text-gray-300 hover:bg-gray-800">
                        <Upload className="h-4 w-4 mr-2" />
                        <span className="hidden md:inline">Sync Consciousness</span>
                        <span className="inline md:hidden">Sync</span> {/* Mobile friendly */}
                    </Button>
                </div>
            </div>
        </header>
    );
}

export default Header;