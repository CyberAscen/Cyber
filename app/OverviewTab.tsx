import React, { useState } from "react";
// Shadcn components (ensure paths are correct)
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
// Use Card components for this specific layout as requested
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Hero from "./hero";

// Lucide React icons
import {
  Upload,
  Database,
  Zap,
  Activity,
  BrainCircuit,
  Network,
  CloudUpload,
  CheckCircle,
  Dna,
  TerminalSquare,
  Hexagon,
  Cpu,
  Bot,
  Brain,
} from "lucide-react";
import ChatInterface from "./ChatInterface"; // 根据实际路径调整

// Recharts components
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";
import Spline from "@splinetool/react-spline";

// --- Mock Data (Keep your existing data structure) ---
const consciousnessProgress = 78;
const syncProgress = 65;
const consciousnessData = [
  { name: "E1", neural: 4000, digital: 2400 },
  { name: "E2", neural: 3000, digital: 1398 },
  { name: "E3", neural: 2000, digital: 9800 },
  { name: "E4", neural: 2780, digital: 3908 },
  { name: "E5", neural: 1890, digital: 4800 },
  { name: "E6", neural: 2390, digital: 3800 },
  { name: "E7", neural: 3490, digital: 4300 },
];
const nftStorageData = [
  { name: "Q1", value: 120 },
  { name: "Q2", value: 300 },
  { name: "Q3", value: 200 },
  { name: "Q4", value: 278 },
  { name: "Q1'25", value: 189 },
  { name: "Q2'25", value: 239 },
  { name: "Q3'25", value: 349 },
];
const pieData = [
  { name: "Cognitive Core", value: 45 },
  { name: "Memory Matrix", value: 30 },
  { name: "Emotional Subs", value: 15 },
  { name: "Qualia Interface", value: 10 },
];
const COLORS = ["#06b6d4", "#34d399", "#f472b6", "#f59e0b"];
const roadmapSteps = [
  {
    title: "P1: Neural Calibration",
    description: "Stable bio-digital link.",
    status: "completed",
    icon: <BrainCircuit size={16} />,
  },
  {
    title: "P2: Memory Scaffolding",
    description: "Core memory map.",
    status: "completed",
    icon: <Dna size={16} />,
  },
  {
    title: "P3: Cognitive Transfer",
    description: "Migrating thought processes.",
    status: "in-progress",
    icon: <TerminalSquare size={16} />,
  },
  {
    title: "P4: Emotion Integration",
    description: "Replicating spectrum.",
    status: "pending",
    icon: <Activity size={16} />,
  },
  {
    title: "P5: Qualia Activation",
    description: "Subjective experience.",
    status: "pending",
    icon: <Network size={16} />,
  },
  {
    title: "P6: Full Sync & Backup",
    description: "Digital immortality.",
    status: "pending",
    icon: <CloudUpload size={16} />,
  },
];

// Base Card styling class generator
const getCardStyles = (
  borderColor = "border-slate-700/60",
  shadowColor = "shadow-indigo-900/10",
  hoverBorderColor = "hover:border-slate-500/70",
  hoverShadowColor = "hover:shadow-indigo-700/20"
) => {
  return `bg-gradient-to-br from-slate-900/70 to-slate-800/60 backdrop-blur-sm ${borderColor} rounded-lg p-3 shadow-lg ${shadowColor} ${hoverBorderColor} ${hoverShadowColor} transition-all duration-300 flex flex-col`; // Added flex flex-col
};

// 新增 FullscreenImage 组件
const FullscreenImage = ({ src, alt }: { src: string; alt: string }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  return (
    <>
      <img
        src={src}
        alt={alt}
        className="w-full cursor-pointer"
        style={{ height: "600px", objectFit: "contain" }}
        onClick={() => setIsFullscreen(true)}
      />
      {isFullscreen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center"
          onClick={() => setIsFullscreen(false)}
        >
          <img src={src} alt={alt} className="max-w-full max-h-full" />
        </div>
      )}
    </>
  );
};

// --- Futuristic Dashboard Component ---
const FuturisticDashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 p-4 md:p-5 text-slate-300 font-sans space-y-4 md:space-y-5">
      {/* --- Cyber Ascension Header Card --- */}
      <Card
        className="bg-slate-900/50 border border-blue-500/30 text-white overflow-hidden shadow-lg shadow-blue-900/30 backdrop-blur-sm"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(30, 58, 138, 0.7), rgba(109, 40, 217, 0.6)), url('/bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <CardContent className="p-5 md:p-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Text Content */}
            <div className="mb-6 md:mb-0 md:mr-6 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-blue-100">
                Cyber Ascension Protocol
              </h2>
              <p className="text-blue-200/90 text-sm mb-4 max-w-xl">
                Secure consciousness via immutable NFT storage, powered by
                distributed compute grids, embodied in advanced robotic
                platforms.
              </p>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                <Badge
                  variant="outline"
                  className="bg-blue-800/60 text-blue-100 border-blue-400/70 hover:bg-blue-700/60 cursor-pointer transition-colors"
                >
                  <Hexagon className="h-3 w-3 mr-1.5" />
                  NFT Storage
                </Badge>
                <Badge
                  variant="outline"
                  className="bg-purple-800/60 text-purple-100 border-purple-400/70 hover:bg-purple-700/60 cursor-pointer transition-colors"
                >
                  <Cpu className="h-3 w-3 mr-1.5" />
                  Digital Consciousness
                </Badge>
                <Badge
                  variant="outline"
                  className="bg-cyan-800/60 text-cyan-100 border-cyan-400/70 hover:bg-cyan-700/60 cursor-pointer transition-colors"
                >
                  <Bot className="h-3 w-3 mr-1.5" />
                  Robotic Embodiment
                </Badge>
              </div>
            </div>
            {/* Animated Graphic */}
            <div className="relative w-48 h-48 md:w-56 md:h-56 flex-shrink-0 flex items-center justify-center mt-4 md:mt-0">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full rounded-full border-2 border-blue-400/50 animate-spin-slow"></div>
              </div>
              <div className="absolute inset-[15%] flex items-center justify-center">
                <div className="w-full h-full rounded-full border border-purple-400/70 animate-reverse-spin"></div>
              </div>
              <div className="absolute inset-[25%] flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-cyan-500/20 animate-pulse blur-md"></div>
              </div>
              <div className="z-10 bg-slate-900/70 p-3 md:p-4 rounded-full border border-blue-300/50 shadow-xl">
                <Brain className="h-10 w-10 md:h-12 md:h-12 text-blue-200" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      <Hero />

      {/* --- Combined Metrics and Charts Row --- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {" "}
        {/* Use 3-column grid */}
        {/* Card 1: Combined System Metrics */}
        <Card
          className={getCardStyles(
            "border-indigo-600/40",
            "shadow-indigo-900/20",
            "hover:border-indigo-400/60",
            "hover:shadow-indigo-700/30"
          )}
        >
          {/* Use CardHeader/Content for structure */}
          <CardHeader className="p-3 pb-1.5">
            {" "}
            {/* Adjusted padding */}
            <CardTitle className="text-sm font-semibold text-indigo-200 uppercase tracking-wider">
              System Metrics Overview
            </CardTitle>
          </CardHeader>
          <CardContent className="p-3 pt-1.5 flex-grow">
            {" "}
            {/* Added flex-grow */}
            <div className="space-y-3">
              {" "}
              {/* Adjusted spacing */}
              {/* Consciousness Sync Progress */}
              <div>
                <div className="flex flex-row items-center justify-between pb-1">
                  <span className="text-xs font-medium text-cyan-300 uppercase">
                    Consciousness Sync
                  </span>
                  <Upload className="h-4 w-4 text-cyan-500 flex-shrink-0" />
                </div>
                <div className="text-xl font-bold text-cyan-200">
                  {consciousnessProgress}%
                </div>
                <Progress
                  value={consciousnessProgress}
                  className="h-1.5 mt-1.5 bg-slate-700 [&>div]:bg-gradient-to-r [&>div]:from-cyan-500 [&>div]:to-cyan-300"
                />
                <p className="text-[11px] text-slate-400 mt-1 tracking-wide">
                  Neural Map / Digital Tx
                </p>
              </div>
              {/* Divider */}
              <div className="border-t border-slate-700/50 my-2"></div>
              {/* NFT Storage Status */}
              <div>
                <div className="flex flex-row items-center justify-between pb-1">
                  <span className="text-xs font-medium text-lime-300 uppercase">
                    NFT Storage Sync
                  </span>
                  <Database className="h-4 w-4 text-lime-500 flex-shrink-0" />
                </div>
                <div className="text-xl font-bold text-lime-200">
                  {syncProgress}%
                </div>
                <Progress
                  value={syncProgress}
                  className="h-1.5 mt-1.5 bg-slate-700 [&>div]:bg-gradient-to-r [&>div]:from-lime-500 [&>div]:to-lime-300"
                />
                <p className="text-[11px] text-slate-400 mt-1 tracking-wide">
                  Blockchain Blocks: {Math.floor(syncProgress / 10)}/10 Conf.
                </p>
              </div>
              {/* Divider */}
              <div className="border-t border-slate-700/50 my-2"></div>
              {/* Computing Power Resources */}
              <div>
                <div className="flex flex-row items-center justify-between pb-1">
                  <span className="text-xs font-medium text-fuchsia-300 uppercase">
                    Compute Resources
                  </span>
                  <Zap className="h-4 w-4 text-fuchsia-500 flex-shrink-0" />
                </div>
                <div className="text-xl font-bold text-fuchsia-200">
                  1.45 <span className="text-base">PH/s</span>
                </div>
                <div className="flex items-center pt-0.5">
                  <span className="text-green-400 text-[11px] font-medium">
                    +12.5%
                  </span>
                  <span className="text-[11px] text-slate-400 ml-1.5">
                    vs ΔCycle
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 mt-1 tracking-wide">
                  Supports 32 Instances
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        {/* Card 2: Consciousness Transformation Trend Chart */}
        <Card className={getCardStyles()}>
          {" "}
          {/* Use base styles */}
          <CardHeader className="p-3 pb-1.5">
            <CardTitle className="text-sm font-semibold text-slate-200">
              Transformation Trend
            </CardTitle>
            <CardDescription className="text-[11px] text-slate-400 -mt-1">
              Neural Decay vs. Digital Ascent
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0 px-1 pb-2 flex-grow">
            {" "}
            {/* Minimal padding for chart, flex-grow */}
            <div className="h-[240px] md:h-[260px]">
              {" "}
              {/* Adjust height as needed */}
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={consciousnessData}
                  margin={{ top: 5, right: 5, left: -30, bottom: 0 }}
                >
                  <defs>
                    <linearGradient
                      id="neuralGradient"
                      x1="0"
                      y1="0"
                      x2="1"
                      y2="0"
                    >
                      <stop offset="0%" stopColor="#a855f7" stopOpacity={0.8} />
                      <stop
                        offset="100%"
                        stopColor="#ec4899"
                        stopOpacity={0.8}
                      />
                    </linearGradient>
                    <linearGradient
                      id="digitalGradient"
                      x1="0"
                      y1="0"
                      x2="1"
                      y2="0"
                    >
                      <stop offset="0%" stopColor="#22d3ee" stopOpacity={0.8} />
                      <stop
                        offset="100%"
                        stopColor="#34d399"
                        stopOpacity={0.8}
                      />
                    </linearGradient>
                  </defs>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="#475569"
                    opacity={0.3}
                  />
                  <XAxis
                    dataKey="name"
                    stroke="#64748b"
                    fontSize={9}
                    tickLine={false}
                    axisLine={false}
                  />
                  <YAxis
                    stroke="#64748b"
                    fontSize={9}
                    tickLine={false}
                    axisLine={false}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "rgba(15, 23, 42, 0.85)",
                      borderColor: "#0e7490",
                      borderRadius: "4px",
                      padding: "6px 8px",
                    }}
                    labelStyle={{
                      color: "#e2e8f0",
                      fontSize: "11px",
                      marginBottom: "4px",
                    }}
                    itemStyle={{
                      color: "#cbd5e1",
                      fontSize: "11px",
                      padding: "1px 0",
                    }}
                    cursor={{
                      stroke: "#06b6d4",
                      strokeWidth: 1,
                      strokeDasharray: "3 3",
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="neural"
                    stroke="url(#neuralGradient)"
                    strokeWidth={2}
                    name="Neural"
                    dot={{ r: 2, fill: "#a855f7", strokeWidth: 0 }}
                    activeDot={{ r: 4, stroke: "#fff", strokeWidth: 1 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="digital"
                    stroke="url(#digitalGradient)"
                    strokeWidth={2}
                    name="Digital"
                    dot={{ r: 2, fill: "#22d3ee", strokeWidth: 0 }}
                    activeDot={{ r: 4, stroke: "#fff", strokeWidth: 1 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        {/* Card 3: NFT Storage Growth Chart */}
        <Card className={getCardStyles()}>
          {" "}
          {/* Use base styles */}
          <CardHeader className="p-3 pb-1.5">
            <CardTitle className="text-sm font-semibold text-slate-200">
              Storage Growth
            </CardTitle>
            <CardDescription className="text-[11px] text-slate-400 -mt-1">
              Consciousness Shards (TB)
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0 px-1 pb-2 flex-grow">
            {" "}
            {/* Minimal padding for chart, flex-grow */}
            <div className="h-[240px] md:h-[260px]">
              {" "}
              {/* Adjust height as needed */}
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={nftStorageData}
                  margin={{ top: 5, right: 5, left: -30, bottom: 0 }}
                >
                  <defs>
                    <linearGradient
                      id="colorStorage"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.6} />
                      <stop
                        offset="95%"
                        stopColor="#0284c7"
                        stopOpacity={0.05}
                      />
                    </linearGradient>
                  </defs>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="#475569"
                    opacity={0.3}
                  />
                  <XAxis
                    dataKey="name"
                    stroke="#64748b"
                    fontSize={9}
                    tickLine={false}
                    axisLine={false}
                  />
                  <YAxis
                    stroke="#64748b"
                    fontSize={9}
                    tickLine={false}
                    axisLine={false}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "rgba(15, 23, 42, 0.85)",
                      borderColor: "#0ea5e9",
                      borderRadius: "4px",
                      padding: "6px 8px",
                    }}
                    labelStyle={{
                      color: "#e2e8f0",
                      fontSize: "11px",
                      marginBottom: "4px",
                    }}
                    itemStyle={{
                      color: "#cbd5e1",
                      fontSize: "11px",
                      padding: "1px 0",
                    }}
                    cursor={{
                      stroke: "#0ea5e9",
                      strokeWidth: 1,
                      strokeDasharray: "3 3",
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="#38bdf8"
                    strokeWidth={1.5}
                    fillOpacity={1}
                    fill="url(#colorStorage)"
                    name="Storage"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
      {/* --- End of Combined Row --- */}
      <div className="mt-4">
        <Card className={getCardStyles()}>
          <CardHeader className="p-3 pb-1.5 border-b border-slate-700">
            <CardTitle className="text-sm font-semibold text-slate-200">
              Chat & Cyber Body
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4">
            <div className="flex flex-col md:flex-row gap-4">
              {/* 左侧：聊天界面 */}
              <div className="md:w-1/2">
                <ChatInterface />
              </div>
              {/* 右侧：Inspira UI / Spline 动画 */}
              <div className="md:w-1/2">
                <div className="relative w-full overflow-hidden rounded-lg bg-black/[0.96]">
                  <div className="absolute flex w-full flex-col items-center justify-center gap-2 p-8 text-center font-heading text-white">
                    <span className="text-4xl font-semibold">Ascension</span>
                    <span className="font-sans font-light">
                      Build spline animations with Cyber.
                    </span>
                  </div>
                  <div className="flex">
                    <Spline
                      scene="scene.splinecode"
                      className="mt-24 w-full h-64"
                    />
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* --- Consciousness Components and Roadmap Row (Remains the same) --- */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
        {/* Consciousness Composition Pie Chart */}
        <div className={`${getCardStyles()} lg:col-span-2`}>
          {" "}
          {/* Use helper function */}
          <h3 className="text-sm font-semibold text-slate-200 mb-0.5 px-3 pt-3">
            Consciousness Composition
          </h3>
          <p className="text-[11px] text-slate-400 mb-2 px-3">
            Core Components (%)
          </p>
          <div className="flex-grow flex items-center justify-center h-[260px] min-h-[220px] px-1">
            {" "}
            {/* Adjusted padding */}
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={"85%"}
                  innerRadius={"55%"}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
                  fontSize={10}
                  stroke="none"
                >
                  {pieData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgba(15, 23, 42, 0.85)",
                    borderColor: "#4f46e5",
                    borderRadius: "4px",
                    padding: "6px 8px",
                  }}
                  labelStyle={{
                    color: "#e2e8f0",
                    fontSize: "11px",
                    marginBottom: "4px",
                  }}
                  itemStyle={{
                    color: "#cbd5e1",
                    fontSize: "11px",
                    padding: "1px 0",
                  }}
                  formatter={(value, name) => [`${value}%`, name]}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Cyber Ascension Roadmap */}
        <div className={`${getCardStyles()} lg:col-span-3`}>
          {" "}
          {/* Use helper function */}
          <h3 className="text-sm font-semibold text-slate-200 mb-0.5 px-3 pt-3">
            Cyber Ascension Roadmap
          </h3>
          <p className="text-[11px] text-slate-400 mb-3 px-3">
            Protocol v3.1 Status
          </p>
          <div className="space-y-1.5 px-3 pb-3">
            {" "}
            {/* Added padding */}
            {roadmapSteps.map((step, index) => (
              <div key={index} className="flex items-start">
                <div className="mr-3 flex flex-col items-center">
                  <div
                    className={`flex items-center justify-center rounded-full w-7 h-7 border ${
                      step.status === "completed"
                        ? "bg-green-600/20 text-green-400 border-green-500/50"
                        : step.status === "in-progress"
                        ? "bg-cyan-600/20 text-cyan-300 border-cyan-500/50 ring-1 ring-cyan-500/70 animate-pulse"
                        : "bg-slate-600/30 text-slate-400 border-slate-600/50"
                    }`}
                  >
                    {React.cloneElement(step.icon, { size: 14 })}
                  </div>
                  {index < roadmapSteps.length - 1 && (
                    <div
                      className={`w-0.5 grow mt-1 ${
                        step.status === "completed" &&
                        roadmapSteps[index + 1]?.status !== "pending"
                          ? "bg-gradient-to-b from-green-500 to-cyan-500"
                          : step.status === "completed" &&
                            roadmapSteps[index + 1]?.status === "pending"
                          ? "bg-gradient-to-b from-green-500 to-slate-600"
                          : step.status === "in-progress" &&
                            roadmapSteps[index + 1]?.status === "pending"
                          ? "bg-gradient-to-b from-cyan-500 to-slate-600"
                          : step.status === "in-progress"
                          ? "bg-cyan-500"
                          : "bg-slate-600"
                      }`}
                      style={{ minHeight: "2rem" }}
                    ></div>
                  )}
                </div>
                <div className="pt-0.5 flex-1">
                  <h4 className="text-xs font-medium text-slate-200 flex items-center">
                    {step.title}
                    {step.status === "completed" && (
                      <Badge
                        variant="outline"
                        className="ml-1.5 bg-green-900/60 text-green-300 border-green-700/50 text-[10px] px-1 py-0 font-mono"
                      >
                        DONE
                      </Badge>
                    )}
                    {step.status === "in-progress" && (
                      <Badge
                        variant="outline"
                        className="ml-1.5 bg-cyan-900/60 text-cyan-300 border-cyan-700/50 text-[10px] px-1 py-0 font-mono animate-pulse"
                      >
                        ACTIVE
                      </Badge>
                    )}
                    {step.status === "pending" && (
                      <Badge
                        variant="outline"
                        className="ml-1.5 bg-slate-700/70 text-slate-400 border-slate-600/70 text-[10px] px-1 py-0 font-mono"
                      >
                        QUEUED
                      </Badge>
                    )}
                  </h4>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* --- 修改后的全行卡片，分左右两部分 --- */}
      <div className="mt-4">
        <Card className={getCardStyles()}>
          <CardHeader className="p-3 pb-1.5 border-b border-slate-700">
            <CardTitle className="text-sm font-semibold text-slate-200">
              Consciousness Upload & NFT Minting Process
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 text-[13px] text-slate-300">
            <div className="flex flex-col md:flex-row gap-4">
              {/* 左侧: 图片 */}
              <div className="md:w-1/2">
                <img
                  src="/1.jpg"
                  alt="Process Illustration"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              {/* 右侧: 文本内容 */}
              <div className="md:w-1/2 space-y-3">
                <p>
                  <strong>Explanation:</strong> This flowchart illustrates a
                  conceptual process for digitizing human consciousness and
                  representing it as a unique digital asset (NFT) secured by
                  blockchain technology.
                </p>
                <p>
                  <strong>Input:</strong> The process starts with a Human User
                  providing their consciousness data via a specialized
                  Consciousness Upload Interface.
                </p>
                <p>
                  <strong>Digitization & Data Generation:</strong> The raw input
                  is processed by the Consciousness Digitization & Mapping
                  Engine to create a digital representation (Raw Consciousness
                  Data). This digital data is then used to generate more
                  detailed Fine-grained Life Data.
                </p>
                <p>
                  <strong>NFT Creation:</strong> The generated life data is fed
                  into the NFT Minting Module. This module creates two key
                  outputs:
                </p>
                <ul className="list-disc list-inside ml-4">
                  <li>
                    <strong>Digital Consciousness Container:</strong> The
                    primary digital representation of the uploaded
                    consciousness.
                  </li>
                  <li>
                    <strong>NFT (Non-Fungible Token):</strong> A unique
                    identifier and proof-of-ownership for the associated Digital
                    Consciousness Container.
                  </li>
                </ul>
                <p>
                  <strong>Storage & Ownership Recording:</strong> The NFT
                  Metadata & Token ID are linked to the Digital Consciousness
                  Container, which is stored securely and persistently on a
                  Decentralized Storage Network (like IPFS or Arweave). The NFT
                  Ownership Record itself is immutably registered on a
                  Blockchain Ledger, providing verifiable proof of ownership.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="mt-4">
        <Card className={getCardStyles()}>
          <CardHeader className="p-3 pb-1.5 border-b border-slate-700">
            <CardTitle className="text-sm font-semibold text-slate-200">
              Cyber Ecosystem
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 text-[13px] text-slate-300">
            <div className="flex flex-col md:flex-row gap-4">
              {/* 左侧: 图片 */}
              <div className="md:w-1/2">
                <img
                  src="/2.png"
                  alt="Process Illustration"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              {/* 右侧: 文本内容 */}
              <div className="md:w-1/2 space-y-3">
                <p>
                  <strong>Explanation:</strong> The Cyber Ecosystem showcases
                  how different participants interact through the use of the
                  Cyber Token and blockchain technology.
                </p>
                <p>
                  At its core, the system facilitates transactions where Users
                  utilize their wallets to pay for services (likely compute
                  resources) using Cyber Tokens. These payments are processed
                  through a Smart Contract, which then distributes the tokens to
                  Compute Providers. All movements of the Cyber Token are
                  securely recorded on the Blockchain Ledger.
                </p>
                <p>
                  The Cyber Token is central to the ecosystem, acting not only
                  as the payment medium but also as the fuel ("Powers") for the
                  Smart Contract itself and external functions like Compute
                  Scheduling. Furthermore, Token Holders and the Community play
                  an active role by participating in governance and staking
                  their tokens, interacting with both the token system and the
                  underlying Blockchain Ledger.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="mt-4">
        <Card className={getCardStyles()}>
          <CardHeader className="p-3 pb-1.5 border-b border-slate-700">
            <CardTitle className="text-sm font-semibold text-slate-200">
              Digital Consciousness
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 text-[13px] text-slate-300">
            <div className="flex flex-col md:flex-row gap-4">
              {/* 左侧: 图片 */}
              <div className="md:w-1/2">
                <img
                  src="/3.png"
                  alt="Process Illustration"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              {/* 右侧: 文本内容 */}
              <div className="md:w-1/2 space-y-3">
                <p>
                  <strong>Explanation:</strong> This flowchart depicts the
                  interaction mechanism between a Digital Consciousness and the
                  Physical World through a robotic system.
                </p>
                <p>
                  The process originates within the{" "}
                  <strong>Digital Consciousness Container (H)</strong>, which
                  holds the core digital mind. Optionally, this container sends
                  instructions down to the{" "}
                  <strong>Robot Control Interface (P)</strong> within the
                  Physical Interaction Layer.
                </p>
                <p>
                  The <strong>Robot Control Interface (P)</strong> acts as a
                  translator, converting the digital instructions into
                  actionable Control Signals sent to the{" "}
                  <strong>Customized Robot Body (Q)</strong>. This distinctly
                  styled component represents the physical hardware.
                </p>
                <p>
                  The <strong>Customized Robot Body (Q)</strong> then performs
                  Physical Interaction & Perception within the{" "}
                  <strong>Physical World (R)</strong>. It gathers sensory input
                  from the environment.
                </p>
                <p>
                  A feedback loop begins as{" "}
                  <strong>Sensor Data Feedback</strong> from the{" "}
                  <strong>Physical World (R)</strong> is relayed back to the
                  Robot Body (Q). The Robot Body sends this Feedback (likely
                  processed sensor data) up to the{" "}
                  <strong>Robot Control Interface (P)</strong>.
                </p>
                <p>
                  Finally, the <strong>Robot Control Interface (P)</strong>{" "}
                  uploads Status/Perception data back to the{" "}
                  <strong>Digital Consciousness Container (H)</strong>, closing
                  the loop. This allows the digital consciousness to receive
                  information about the robot's status and its perception of the
                  physical environment, enabling it to make further decisions
                  and send new instructions.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="mt-4">
        <Card className={getCardStyles()}>
          <CardHeader className="p-3 pb-1.5 border-b border-slate-700">
            <CardTitle className="text-sm font-semibold text-slate-200">
              Digital Consciousness & Physical Interaction
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 text-[13px] text-slate-300">
            <div className="flex flex-col md:flex-row gap-4">
              {/* 左侧: 图片 */}
              <div className="md:w-1/2">
                <img
                  src="/4.png"
                  alt="Process Illustration"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              {/* 右侧: 文本内容 */}
              <div className="md:w-1/2 space-y-3">
                <p>
                  <strong>Core Components:</strong>
                </p>
                <p>
                  <strong>Digital Consciousness Layer:</strong>
                </p>
                <p>
                  <strong>Digital Consciousness Container (H):</strong> This is
                  where the core intelligence resides, analogous to an AI or
                  digital mind. It is responsible for processing information,
                  making decisions, and optionally issuing instructions
                  downward.
                </p>
                <p>
                  <strong>Physical Interaction Layer:</strong> This layer
                  handles all connections and interactions with the real world.
                </p>
                <p>
                  <strong>Robot Control Interface (P):</strong> A crucial
                  intermediary (represented by a diamond, possibly indicating
                  decision-making or processing). It receives instructions from
                  the Digital Consciousness, translates them into control
                  signals understandable by the robot, and also receives
                  feedback information from the robot to upload back to the
                  Digital Consciousness.
                </p>
                <p>
                  <strong>Customized Robot Body (Q):</strong> This represents
                  the physical form of the robot (highlighted with special
                  styling). It receives control signals, executes specific
                  actions in the physical world, and perceives the external
                  environment through sensors.
                </p>
                <p>
                  <strong>Physical World (R):</strong> Represents the external
                  environment in which the robot operates, serving as the object
                  of interaction and perception.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FuturisticDashboard;

// Remember to define CSS animations (spin-slow, reverse-spin) in your global CSS file
// and ensure you have /bg.jpg in your public folder.
