"use client"

import { useState, useEffect } from "react"
import { Tabs, TabsContent } from "@/components/ui/tabs"
import { Menu, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

import Sidebar from "./Sidebar" // Assuming Sidebar is in the same directory
import Header from "./Header" // Assuming Header is in the same directory
import OverviewTab from "./OverviewTab" // Assuming OverviewTab is in the same directory
import TechnologyTab from "./TechnologyTab" // Assuming TechnologyTab is in the same directory
import EthicsTab from "./EthicsTab" // Assuming EthicsTab is in the same directory

// Sample data definitions (can be moved to a separate data file/service)
const consciousnessData = [
  { name: "Jan", neural: 40, digital: 24 }, { name: "Feb", neural: 45, digital: 28 }, { name: "Mar", neural: 55, digital: 35 }, { name: "Apr", neural: 60, digital: 45 }, { name: "May", neural: 65, digital: 55 }, { name: "Jun", neural: 75, digital: 65 }, { name: "Jul", neural: 85, digital: 75 },
];
const nftStorageData = [
  { name: "Week 1", value: 10 }, { name: "Week 2", value: 25 }, { name: "Week 3", value: 45 }, { name: "Week 4", value: 70 }, { name: "Week 5", value: 95 }, { name: "Week 6", value: 120 }, { name: "Week 7", value: 150 },
];
const computePowerData = [
  { name: "Mon", value: 4000 }, { name: "Tue", value: 3000 }, { name: "Wed", value: 5000 }, { name: "Thu", value: 2780 }, { name: "Fri", value: 1890 }, { name: "Sat", value: 2390 }, { name: "Sun", value: 3490 },
];
const pieData = [
  { name: "Neural Data", value: 35 }, { name: "Memory Storage", value: 25 }, { name: "Personality Matrix", value: 20 }, { name: "Sensory Processing", value: 15 }, { name: "Decision Logic", value: 5 },
];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884d8"];


export default function CyberAscensionDashboard() {
  const [activeTab, setActiveTab] = useState("overview")
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false) // New state for sidebar collapse
  const [isMobile, setIsMobile] = useState(false)
  const [consciousnessProgress, setConsciousnessProgress] = useState(0)
  const [syncProgress, setSyncProgress] = useState(0)

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768
      setIsMobile(mobile)
      if (!mobile) {
        setSidebarOpen(false) // Close mobile sidebar if resizing to desktop
      }
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setConsciousnessProgress((prev) => Math.min(prev + 1, 100))
      setSyncProgress((prev) => Math.min(prev + 2, 100))
    }, 300)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Mobile Sidebar Toggle */}
      {isMobile && !sidebarOpen && (
        <Button
          variant="outline"
          size="icon"
          className="fixed bottom-4 right-4 z-50 rounded-full h-12 w-12 shadow-lg bg-gray-900 border-gray-700"
          onClick={() => setSidebarOpen(true)}
        >
          <Menu className="h-6 w-6" />
        </Button>
      )}

      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isMobile={isMobile}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        collapsed={sidebarCollapsed} // Pass collapsed state to Sidebar
      />

      {/* Desktop Sidebar Collapse Button
      {!isMobile && (
        <Button
          variant="outline"
          size="icon"
          className={`absolute top-4 ${sidebarCollapsed ? "left-16" : "left-64"} z-50`} // 根据状态动态调整 left
          onClick={() => setSidebarCollapsed((prev) => !prev)}
        >
          {sidebarCollapsed ? (
            <ChevronRight className="h-5 w-5" />
          ) : (
            <ChevronLeft className="h-5 w-5" />
          )}
        </Button>
      )} */}

      {/* Adjust left padding based on collapse state */}
      <div className={`${isMobile ? "" : sidebarCollapsed ? "pl-16" : "pl-64"} min-h-screen flex flex-col`}>
        <Header
          activeTab={activeTab}
          isMobile={isMobile}
          setSidebarOpen={setSidebarOpen}
        />


        {/* Page Content */}
        <main className="flex-1 p-4 md:p-6 bg-gradient-to-b from-gray-950 to-black">
         
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsContent value="overview" className="mt-0">
              <OverviewTab
                consciousnessProgress={consciousnessProgress}
                syncProgress={syncProgress}
                consciousnessData={consciousnessData}
                nftStorageData={nftStorageData}
                pieData={pieData}
                COLORS={COLORS}
              />
            </TabsContent>
            <TabsContent value="technology" className="mt-0">
              <TechnologyTab computePowerData={computePowerData}/>
            </TabsContent>
            <TabsContent value="ethics" className="mt-0">
              <EthicsTab />
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}