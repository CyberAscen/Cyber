import React from 'react';
// Icons from lucide-react
import {
    Brain, Cpu, Bot, Hexagon, GitBranch, Workflow, Network, Activity, Shield,
    CuboidIcon as Cube // Renaming import as used in original code
} from "lucide-react";
// Shadcn UI components (ensure paths are correct)
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// Recharts components
import {
  ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell, // Added Cell for potential gradient fill
  LineChart, Line, AreaChart, Area, PieChart, Pie, Legend // Importing others for context if needed
} from "recharts";
import Spline from '@splinetool/react-spline'

// --- Helper Function for Card Styling ---
// (Assuming this function is defined elsewhere or include it here)
const getCardStyles = (borderColor = 'border-slate-700/60', shadowColor = 'shadow-indigo-900/10', hoverBorderColor = 'hover:border-slate-500/70', hoverShadowColor = 'hover:shadow-indigo-700/20') => {
  return `bg-gradient-to-br from-slate-900/70 to-slate-800/60 backdrop-blur-sm ${borderColor} rounded-lg shadow-lg ${shadowColor} ${hoverBorderColor} ${hoverShadowColor} transition-all duration-300 flex flex-col`;
};

// --- Component Props Interface ---
interface TechnologyTabProps {
  // Define structure for compute power data if needed, using any for flexibility here
  computePowerData: Array<{ name: string; value: number }>;
}

// --- TechnologyTab Component ---
const TechnologyTab: React.FC<TechnologyTabProps> = ({ computePowerData }) => {
  return (
    // Main container with compact spacing
    <div className="space-y-4 md:space-y-5 text-slate-300 font-sans">

{/* --- New Card: Chat Interface & Inspira UI --- */}
 
      {/* Card 1: Core Technology Architecture */}
      <div className={getCardStyles()}>
        <CardHeader className="p-3 pb-1.5">
          <CardTitle className="text-sm font-semibold text-slate-100">Core Technology Architecture</CardTitle>
          <CardDescription className="text-[11px] text-slate-400 -mt-1">The foundational tech stack of Cyber Ascension</CardDescription>
        </CardHeader>
        <CardContent className="p-3 flex-grow">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3"> {/* Reduced gap */}

            {/* Pillar 1: Neural Mapping */}
            <div className="flex flex-col items-center text-center p-3 bg-slate-800/50 rounded-lg border border-blue-500/30">
              <div className="rounded-full bg-blue-500/20 p-2 mb-3"> {/* Adjusted padding/margin */}
                <Brain className="h-6 w-6 text-blue-300" /> {/* Adjusted size */}
              </div>
              <h3 className="text-base font-semibold mb-1 text-blue-200">Neural Mapping</h3> {/* Adjusted size/margin */}
              <p className="text-xs text-slate-300">
                High-precision brain scanning & digitalizing neural patterns.
              </p>
            </div>

            {/* Pillar 2: NFT Blockchain Storage */}
            <div className="flex flex-col items-center text-center p-3 bg-slate-800/50 rounded-lg border border-purple-500/30">
              <div className="rounded-full bg-purple-500/20 p-2 mb-3">
                <Hexagon className="h-6 w-6 text-purple-300" />
              </div>
              <h3 className="text-base font-semibold mb-1 text-purple-200">NFT Blockchain Storage</h3>
              <p className="text-xs text-slate-300">
                Securing consciousness data as immutable blockchain assets.
              </p>
            </div>

            {/* Pillar 3: Robotic Embodiment */}
            <div className="flex flex-col items-center text-center p-3 bg-slate-800/50 rounded-lg border border-cyan-500/30">
              <div className="rounded-full bg-cyan-500/20 p-2 mb-3">
                <Bot className="h-6 w-6 text-cyan-300" />
              </div>
              <h3 className="text-base font-semibold mb-1 text-cyan-200">Robotic Embodiment</h3>
              <p className="text-xs text-slate-300">
                Providing physical interaction capabilities for digital minds.
              </p>
            </div>
          </div>
        </CardContent>
      </div>

      {/* Grid for Bar Chart and Process Steps */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        {/* Card 2: Compute Power Allocation Chart */}
        <div className={getCardStyles()}>
          <CardHeader className="p-3 pb-1.5">
            <CardTitle className="text-sm font-semibold text-slate-100">Compute Power Allocation</CardTitle>
            <CardDescription className="text-[11px] text-slate-400 -mt-1">Daily resource utilization trend</CardDescription>
          </CardHeader>
          <CardContent className="p-0 px-1 pb-2 flex-grow">
            <div className="h-[260px]"> {/* Adjusted height */}
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={computePowerData} margin={{ top: 5, right: 5, left: -30, bottom: 0 }}> {/* Adjusted margins */}
                  <defs>
                    <linearGradient id="computeGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#00C49F" stopOpacity={0.8} /> {/* Original color */}
                      <stop offset="100%" stopColor="#00a080" stopOpacity={0.9} /> {/* Darker shade */}
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#475569" opacity={0.3}/>
                  <XAxis dataKey="name" stroke="#64748b" fontSize={9} tickLine={false} axisLine={false}/>
                  <YAxis stroke="#64748b" fontSize={9} tickLine={false} axisLine={false}/>
                  <Tooltip
                    contentStyle={{ backgroundColor: 'rgba(15, 23, 42, 0.85)', borderColor: '#00C49F', borderRadius: '4px', padding: '6px 8px' }}
                    labelStyle={{ color: '#e2e8f0', fontSize: '11px', marginBottom: '4px' }}
                    itemStyle={{ color: '#cbd5e1', fontSize: '11px', padding: '1px 0' }}
                    cursor={{ fill: 'rgba(0, 196, 159, 0.1)' }} // Subtle cursor fill
                    formatter={(value: number) => [`${value.toLocaleString()} Units`, 'Compute Power']}
                  />
                  <Bar dataKey="value" fill="url(#computeGradient)" radius={[3, 3, 0, 0]} name="Compute Power" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </div>

        {/* Card 3: Technology Integration Process */}
        <div className={getCardStyles()}>
          <CardHeader className="p-3 pb-1.5">
            <CardTitle className="text-sm font-semibold text-slate-100">Technology Integration Process</CardTitle>
            <CardDescription className="text-[11px] text-slate-400 -mt-1">Key stages of implementation</CardDescription>
          </CardHeader>
          <CardContent className="p-3 flex-grow">
            <div className="flex flex-col space-y-2"> {/* Reduced spacing */}

              {/* Step 1 */}
              <div className="flex items-center space-x-3 p-2 bg-slate-800/40 rounded-lg border border-blue-500/30"> {/* Adjusted padding/spacing */}
                <div className="bg-blue-500/20 p-1.5 rounded-full flex-shrink-0"> {/* Adjusted padding */}
                  <GitBranch className="h-4 w-4 text-blue-300" /> {/* Adjusted size */}
                </div>
                <div>
                  <h4 className="text-xs font-medium text-blue-200">1. Neural Data Acquisition & Processing</h4> {/* Adjusted size */}
                  <p className="text-[11px] text-slate-300">Scanning and analyzing neural patterns.</p> {/* Adjusted size */}
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-center space-x-3 p-2 bg-slate-800/40 rounded-lg border border-yellow-500/30">
                <div className="bg-yellow-500/20 p-1.5 rounded-full flex-shrink-0">
                  <Workflow className="h-4 w-4 text-yellow-300" />
                </div>
                <div>
                  <h4 className="text-xs font-medium text-yellow-200">2. Consciousness Model Construction</h4>
                  <p className="text-[11px] text-slate-300">Generating the digital consciousness model.</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-center space-x-3 p-2 bg-slate-800/40 rounded-lg border border-pink-500/30">
                <div className="bg-pink-500/20 p-1.5 rounded-full flex-shrink-0">
                  <Hexagon className="h-4 w-4 text-pink-300" />
                </div>
                <div>
                  <h4 className="text-xs font-medium text-pink-200">3. NFT Minting & Blockchain Storage</h4>
                  <p className="text-[11px] text-slate-300">Encrypting and storing data immutably.</p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex items-center space-x-3 p-2 bg-slate-800/40 rounded-lg border border-green-500/30">
                <div className="bg-green-500/20 p-1.5 rounded-full flex-shrink-0">
                  <Network className="h-4 w-4 text-green-300" />
                </div>
                <div>
                  <h4 className="text-xs font-medium text-green-200">4. Distributed Compute Network</h4>
                  <p className="text-[11px] text-slate-300">Providing the operational environment.</p>
                </div>
              </div>

              {/* Step 5 */}
              <div className="flex items-center space-x-3 p-2 bg-slate-800/40 rounded-lg border border-purple-500/30">
                <div className="bg-purple-500/20 p-1.5 rounded-full flex-shrink-0">
                  <Bot className="h-4 w-4 text-purple-300" />
                </div>
                <div>
                  <h4 className="text-xs font-medium text-purple-200">5. Robotic Entity Integration</h4>
                  <p className="text-[11px] text-slate-300">Connecting consciousness to hardware.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </div>
      </div>

      {/* Card 4: Technical Challenges & Solutions */}
      <div className={getCardStyles()}>
        <CardHeader className="p-3 pb-1.5">
          <CardTitle className="text-sm font-semibold text-slate-100">Technical Challenges & Solutions</CardTitle>
          <CardDescription className="text-[11px] text-slate-400 -mt-1">Addressing key hurdles in Cyber Ascension</CardDescription>
        </CardHeader>
        <CardContent className="p-3 flex-grow">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3"> {/* Reduced gap */}

            {/* Challenge 1 */}
            <div className="border border-blue-500/30 rounded-lg p-3 bg-slate-800/50"> {/* Adjusted styles */}
              <h3 className="text-sm font-semibold mb-1.5 flex items-center text-blue-200"> {/* Adjusted styles */}
                <Cube className="h-4 w-4 mr-1.5 text-blue-300" /> {/* Adjusted size/margin */}
                Consciousness Integrity
              </h3>
              <p className="text-xs text-slate-300 mb-2"> {/* Adjusted styles */}
                Ensuring no loss of personality or memory during digitalization.
              </p>
              <div className="bg-slate-800/60 p-2 rounded border border-blue-600/40"> {/* Adjusted styles */}
                <h4 className="text-xs font-medium mb-1 text-blue-300">Solution Approach</h4> {/* Adjusted styles */}
                <p className="text-[11px] text-slate-300"> {/* Adjusted styles */}
                  Quantum redundancy, multi-verification, adaptive repair algorithms.
                </p>
              </div>
            </div>

            {/* Challenge 2 */}
             <div className="border border-green-500/30 rounded-lg p-3 bg-slate-800/50">
              <h3 className="text-sm font-semibold mb-1.5 flex items-center text-green-200">
                <Activity className="h-4 w-4 mr-1.5 text-green-300" />
                Compute Sustainability
              </h3>
              <p className="text-xs text-slate-300 mb-2">
                Maintaining long-term, high compute power for digital consciousness.
              </p>
              <div className="bg-slate-800/60 p-2 rounded border border-green-600/40">
                <h4 className="text-xs font-medium mb-1 text-green-300">Solution Approach</h4>
                <p className="text-[11px] text-slate-300">
                  Distributed nets, renewables, hibernation modes, algo optimization.
                </p>
              </div>
            </div>

            {/* Challenge 3 */}
             <div className="border border-red-500/30 rounded-lg p-3 bg-slate-800/50">
              <h3 className="text-sm font-semibold mb-1.5 flex items-center text-red-300"> {/* Adjusted color */}
                <Shield className="h-4 w-4 mr-1.5 text-red-400" /> {/* Adjusted color */}
                Security & Privacy
              </h3>
              <p className="text-xs text-slate-300 mb-2">
                Protecting digital consciousness from threats and ensuring privacy.
              </p>
              <div className="bg-slate-800/60 p-2 rounded border border-red-600/40">
                <h4 className="text-xs font-medium mb-1 text-red-400">Solution Approach</h4> {/* Adjusted color */}
                <p className="text-[11px] text-slate-300">
                  Multi-layer crypto, ZK proofs, decentralized access, self-defense mechs.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </div>
    </div>
  );
};

export default TechnologyTab;