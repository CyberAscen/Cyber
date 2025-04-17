"use client"

import React from 'react';
import {
    BarChart3, Settings, User, LogOut, Menu, X, Cpu, Shield, Brain
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel,
    DropdownMenuSeparator, DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import DNABackground from "./DNABackground";

interface SidebarProps {
    activeTab: string;
    setActiveTab: (tab: string) => void;
    isMobile: boolean;
    sidebarOpen: boolean;
    setSidebarOpen: (open: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
    activeTab,
    setActiveTab,
    isMobile,
    sidebarOpen,
    setSidebarOpen
}) => {

    const handleNavClick = (tab: string) => {
        setActiveTab(tab);
        if (isMobile) {
            setSidebarOpen(false);
        }
    };

    return (
        <div
            className={`${
            isMobile
                ? "fixed inset-0 z-50 transform transition-transform duration-300 ease-in-out"
                : "w-64 fixed inset-y-0 left-0"
            } ${
            isMobile && !sidebarOpen ? "-translate-x-full" : "translate-x-0"
            } bg-gray-950 border-r border-gray-800 flex flex-col`}
        >
             <DNABackground />

            {/* Mobile Close Button */}
            {isMobile && (
            <div className="flex justify-end p-4">
                <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(false)}>
                <X className="h-6 w-6" />
                </Button>
            </div>
            )}

            {/* Logo/Title */}
            <div className="p-4 border-b border-gray-800 flex items-center space-x-3">
                {/* Animated Logo */}
                <div className="relative w-8 h-16 flex-shrink-0 flex items-center justify-center">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-full h-full rounded-full border-2 border-blue-400/50 animate-spin-slow"></div>
                    </div>
                    <div className="absolute inset-[15%] flex items-center justify-center">
                        <div className="w-full h-full rounded-full border border-purple-400/70 animate-reverse-spin"></div>
                    </div>
                    <div className="absolute inset-[25%] flex items-center justify-center">
                        <div className="w-full h-full rounded-full bg-cyan-500/20 animate-pulse blur-md"></div>
                    </div>
                    <div className="z-10 bg-slate-900/70 p-1 rounded-full border border-blue-300/50 shadow-xl">
                        <Brain className="h-6 w-6 text-blue-200" />
                    </div>
                </div>
                {/* Title and Subtitle */}
                <div>
                    <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                        Cyber Ascension
                    </h1>
                    <p className="text-xs text-gray-400">Digital Consciousness Portal</p>
                </div>
            </div>

            {/* Navigation */}
            <div className="flex-1 py-4 overflow-y-auto">
                <nav className="space-y-1 px-2">
                    <button
                        onClick={() => handleNavClick("overview")}
                        className={`flex items-center w-full px-4 py-3 text-sm font-medium rounded-lg ${
                            activeTab === "overview"
                            ? "bg-blue-900/30 text-blue-400 border border-blue-900/50"
                            : "text-gray-400 hover:bg-gray-900 hover:text-gray-300"
                        }`}
                    >
                        <BarChart3 className="mr-3 h-5 w-5" />
                        Overview
                    </button>
                    <button
                        onClick={() => handleNavClick("technology")}
                         className={`flex items-center w-full px-4 py-3 text-sm font-medium rounded-lg ${
                            activeTab === "technology"
                            ? "bg-blue-900/30 text-blue-400 border border-blue-900/50"
                            : "text-gray-400 hover:bg-gray-900 hover:text-gray-300"
                        }`}
                    >
                        <Cpu className="mr-3 h-5 w-5" />
                        Technology Architecture
                    </button>
                    <button
                         onClick={() => handleNavClick("ethics")}
                         className={`flex items-center w-full px-4 py-3 text-sm font-medium rounded-lg ${
                            activeTab === "ethics"
                            ? "bg-blue-900/30 text-blue-400 border border-blue-900/50"
                            : "text-gray-400 hover:bg-gray-900 hover:text-gray-300"
                        }`}
                    >
                        <Shield className="mr-3 h-5 w-5" />
                        Ethical Considerations
                    </button>
                </nav>
            </div>

            {/* User Profile / Footer */}
            <div className="p-4 border-t border-gray-800">
                <div className="flex items-center">
                    <Avatar className="h-8 w-8 mr-2">
                        {/* Add a real image source if available */}
                        <AvatarImage src="/placeholder-user.jpg" />
                        <AvatarFallback className="bg-blue-900">CA</AvatarFallback>
                    </Avatar>
                    <div className="flex-grow flex flex-col space-y-1 items-start">
                        {/* 确保 appkit-button 是一个有效的自定义元素或 React 组件 */}
                        {/* 添加了一些基本的类来控制大小和边距，你可以根据需要调整 */}
                        <appkit-button />
                    </div>

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="ml-auto">
                                <Settings className="h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-56 bg-gray-900 text-[#ddd] border-gray-800">
                            <DropdownMenuLabel>My Digital Consciousness</DropdownMenuLabel>
                            <DropdownMenuSeparator className="bg-gray-800" />
                            <DropdownMenuItem className="focus:bg-gray-800 text-[#ddd]">
                                <User className="mr-2 h-4 w-4" />
                                <span>Profile</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem className="focus:bg-gray-800 text-[#ddd]">
                                <Settings className="mr-2 h-4 w-4" />
                                <span>Settings</span>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator className="bg-gray-800" />
                            <DropdownMenuItem className="focus:bg-gray-800 text-[#ddd]">
                                <LogOut className="mr-2 h-4 w-4" />
                                <span>Disconnect</span>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;