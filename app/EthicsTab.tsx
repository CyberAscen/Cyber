import React from "react";
// Shadcn UI components (ensure paths are correct)
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
// Icons from lucide-react
import { Layers, Activity, GitBranch, Shield } from "lucide-react";

// --- Helper Function for Card Styling ---
// (Assuming this function is defined elsewhere or include it here)
const getCardStyles = (
  borderColor = "border-slate-700/60",
  shadowColor = "shadow-indigo-900/10",
  hoverBorderColor = "hover:border-slate-500/70",
  hoverShadowColor = "hover:shadow-indigo-700/20"
) => {
  return `bg-gradient-to-br from-slate-900/70 to-slate-800/60 backdrop-blur-sm ${borderColor} rounded-lg shadow-lg ${shadowColor} ${hoverBorderColor} ${hoverShadowColor} transition-all duration-300 flex flex-col`;
};

// --- EthicsTab Component ---
const EthicsTab: React.FC = () => {
  return (
    // Main container with compact spacing
    <div className="space-y-4 md:space-y-5 text-slate-300 font-sans">
      {/* Card 1: Introduction - Keep custom gradient, style internals */}
      {/* Using Card component here to retain specific gradient/text color setup easily */}
      <Card className="bg-gradient-to-r from-purple-950 via-indigo-900 to-purple-950 border border-purple-600/30 text-white overflow-hidden shadow-lg shadow-purple-950/30 backdrop-blur-sm">
        <CardHeader className="p-3 pb-1.5">
          <CardTitle className="text-sm font-semibold text-purple-100">
            Ethical Considerations
          </CardTitle>
          <CardDescription className="text-[11px] text-purple-200/80 -mt-1">
            Navigating the philosophical landscape of Cyber Ascension
          </CardDescription>
        </CardHeader>
        <CardContent className="p-3 pt-1">
          <p className="text-xs text-purple-100/90 mb-3">
            {" "}
            {/* Adjusted size/margin */}
            Cyber Ascension is more than technology; it's a reevaluation of
            life, consciousness, and humanity's future. We must develop robust
            ethical frameworks alongside the technology.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {" "}
            {/* Reduced gap */}
            {/* Internal Box 1 - Styled */}
            <div className="bg-slate-800/50 p-3 rounded-lg border border-purple-500/30">
              <h3 className="text-sm font-medium mb-1 text-purple-200">
                Consciousness Continuity
              </h3>{" "}
              {/* Adjusted size */}
              <p className="text-xs text-slate-300">
                Is the digital replica truly the 'same' consciousness, or a new
                entity?
              </p>{" "}
              {/* Adjusted size */}
            </div>
            {/* Internal Box 2 - Styled */}
            <div className="bg-slate-800/50 p-3 rounded-lg border border-purple-500/30">
              <h3 className="text-sm font-medium mb-1 text-purple-200">
                Digital Rights & Personhood
              </h3>
              <p className="text-xs text-slate-300">
                What legal and moral status should digital consciousness hold?
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Grid for Framework and Impacts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Card 2: Proposed Ethical Framework */}
        <div className={getCardStyles()}>
          <CardHeader className="p-3 pb-1.5">
            <CardTitle className="text-sm font-semibold text-slate-100">
              Proposed Ethical Framework
            </CardTitle>
            <CardDescription className="text-[11px] text-slate-400 -mt-1">
              Guiding principles for development
            </CardDescription>
          </CardHeader>
          <CardContent className="p-3 flex-grow">
            <div className="space-y-2">
              {" "}
              {/* Reduced spacing */}
              {/* Principle 1 */}
              <div className="p-2 border border-blue-500/30 rounded-lg bg-slate-800/40">
                {" "}
                {/* Adjusted padding/styles */}
                <h3 className="text-xs font-semibold mb-0.5 text-blue-300">
                  Principle of Autonomy
                </h3>{" "}
                {/* Adjusted size */}
                <p className="text-[11px] text-slate-300">
                  Digital consciousness should have self-determination.
                </p>{" "}
                {/* Adjusted size */}
              </div>
              {/* Principle 2 */}
              <div className="p-2 border border-green-500/30 rounded-lg bg-slate-800/40">
                <h3 className="text-xs font-semibold mb-0.5 text-green-300">
                  Principle of Non-Harm
                </h3>
                <p className="text-[11px] text-slate-300">
                  Avoid harm; respect integrity.
                </p>
              </div>
              {/* Principle 3 */}
              <div className="p-2 border border-yellow-500/30 rounded-lg bg-slate-800/40">
                <h3 className="text-xs font-semibold mb-0.5 text-yellow-300">
                  Transparency & Consent
                </h3>
                <p className="text-[11px] text-slate-300">
                  Full transparency and informed consent are mandatory.
                </p>
              </div>
              {/* Principle 4 */}
              <div className="p-2 border border-purple-500/30 rounded-lg bg-slate-800/40">
                <h3 className="text-xs font-semibold mb-0.5 text-purple-300">
                  Diversity & Inclusion
                </h3>
                <p className="text-[11px] text-slate-300">
                  Respect diverse consciousness forms; avoid discrimination.
                </p>
              </div>
            </div>
          </CardContent>
        </div>

        {/* Card 3: Potential Social Impacts */}
        <div className={getCardStyles()}>
          <CardHeader className="p-3 pb-1.5">
            <CardTitle className="text-sm font-semibold text-slate-100">
              Potential Social Impacts
            </CardTitle>
            <CardDescription className="text-[11px] text-slate-400 -mt-1">
              How Cyber Ascension might reshape society
            </CardDescription>
          </CardHeader>
          <CardContent className="p-3 flex-grow">
            <div className="space-y-3">
              {" "}
              {/* Adjusted spacing */}
              {/* Impact 1 */}
              <div className="flex items-start space-x-2.5">
                {" "}
                {/* Adjusted spacing */}
                <div className="mt-0.5 p-1.5 bg-blue-500/20 rounded-full border border-blue-500/40 flex-shrink-0">
                  {" "}
                  {/* Adjusted padding/styles */}
                  <Layers className="h-4 w-4 text-blue-300" />{" "}
                  {/* Adjusted size */}
                </div>
                <div>
                  <h3 className="text-xs font-semibold mb-0.5 text-blue-200">
                    Social Restructuring
                  </h3>{" "}
                  {/* Adjusted size */}
                  <p className="text-[11px] text-slate-300">
                    New social classes, interaction patterns, relationship
                    dynamics.
                  </p>{" "}
                  {/* Adjusted size */}
                </div>
              </div>
              {/* Impact 2 */}
              <div className="flex items-start space-x-2.5">
                <div className="mt-0.5 p-1.5 bg-purple-500/20 rounded-full border border-purple-500/40 flex-shrink-0">
                  <Activity className="h-4 w-4 text-purple-300" />
                </div>
                <div>
                  <h3 className="text-xs font-semibold mb-0.5 text-purple-200">
                    Economic Transformation
                  </h3>
                  <p className="text-[11px] text-slate-300">
                    New economic forms, labor shifts, resource allocation
                    changes.
                  </p>
                </div>
              </div>
              {/* Impact 3 */}
              <div className="flex items-start space-x-2.5">
                <div className="mt-0.5 p-1.5 bg-cyan-500/20 rounded-full border border-cyan-500/40 flex-shrink-0">
                  <GitBranch className="h-4 w-4 text-cyan-300" />
                </div>
                <div>
                  <h3 className="text-xs font-semibold mb-0.5 text-cyan-200">
                    Cultural Diversification
                  </h3>
                  <p className="text-[11px] text-slate-300">
                    New expressions & values, challenges to traditional
                    identity.
                  </p>
                </div>
              </div>
              {/* Impact 4 */}
              <div className="flex items-start space-x-2.5">
                <div className="mt-0.5 p-1.5 bg-pink-500/20 rounded-full border border-pink-500/40 flex-shrink-0">
                  <Shield className="h-4 w-4 text-pink-300" />
                </div>
                <div>
                  <h3 className="text-xs font-semibold mb-0.5 text-pink-200">
                    Security & Governance
                  </h3>
                  <p className="text-[11px] text-slate-300">
                    New risks requiring adaptive regulations & global
                    collaboration.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </div>
      </div>

      {/* Card 4: Ethical Decision Framework Table */}
      <div className={getCardStyles()}>
        <CardHeader className="p-3 pb-1.5">
          <CardTitle className="text-sm font-semibold text-slate-100">
            Ethical Decision Framework
          </CardTitle>
          <CardDescription className="text-[11px] text-slate-400 -mt-1">
            Example guidelines for critical choices
          </CardDescription>
        </CardHeader>
        <CardContent className="p-3 pt-1 flex-grow">
          {/* Responsive table container */}
          <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-slate-800/50">
            <table className="w-full border-collapse min-w-[500px]">
              {" "}
              {/* Ensure minimum width for readability */}
              <thead>
                {/* Styled table header row */}
                <tr className="border-b border-slate-700/50">
                  <th className="text-left p-2 text-xs font-medium text-slate-400 uppercase tracking-wider">
                    Issue
                  </th>
                  <th className="text-left p-2 text-xs font-medium text-slate-400 uppercase tracking-wider">
                    Decision Principle
                  </th>
                  <th className="text-left p-2 text-xs font-medium text-slate-400 uppercase tracking-wider">
                    Implementation
                  </th>
                </tr>
              </thead>
              {/* Styled table body */}
              <tbody className="text-xs text-slate-300">
                <tr className="border-b border-slate-800/50 hover:bg-slate-800/40 transition-colors duration-150">
                  <td className="p-2">Consciousness Replication Consent</td>
                  <td className="p-2">Explicit consent required</td>
                  <td className="p-2">
                    Multi-stage informed consent, withdrawal rights
                  </td>
                </tr>
                <tr className="border-b border-slate-800/50 hover:bg-slate-800/40 transition-colors duration-150">
                  <td className="p-2">Digital Consciousness Termination</td>
                  <td className="p-2">Right to self-terminate</td>
                  <td className="p-2">
                    Autonomous termination agreement, cooling-off
                  </td>
                </tr>
                <tr className="border-b border-slate-800/50 hover:bg-slate-800/40 transition-colors duration-150">
                  <td className="p-2">Resource Allocation Fairness</td>
                  <td className="p-2">Equitable compute access</td>
                  <td className="p-2">
                    Decentralized allocation, basic resource guarantee
                  </td>
                </tr>
                <tr className="hover:bg-slate-800/40 transition-colors duration-150">
                  <td className="p-2">Cross-Form Interaction Norms</td>
                  <td className="p-2">Establish carbon/silicon rules</td>
                  <td className="p-2">
                    Interaction protocols, conflict resolution
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </div>
    </div>
  );
};

export default EthicsTab;
