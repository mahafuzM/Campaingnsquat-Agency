"use client";

import React, { useState, useMemo } from "react";
// @ts-ignore
import { ComposableMap, Geographies, Geography, Marker, Line, Graticule } from "react-simple-maps";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight,
  ShieldCheck,
  Sparkles,
  Zap,
  Activity,
  Radio,
} from "lucide-react";
import worldData from "world-atlas/countries-110m.json";

// ============ DATA ============
export interface GlobalNode {
  id: string;
  country: string;
  city: string;
  lat: number;
  lng: number;
  timezone: string;
  activeProjects: string;
  connectionType: string;
  description: string;
  flagUrl: string;
  isHQ?: boolean;
}

const globalNodes: GlobalNode[] = [
  {
    id: "node-bd",
    country: "Bangladesh",
    city: "Dhaka",
    lat: 23.8103,
    lng: 90.4125,
    timezone: "GMT+6",
    activeProjects: "45+ Active Deployments",
    connectionType: "Digital Headquarters",
    description:
      "Core digital engineering command center, architectural oversight, and global campaign execution core.",
    flagUrl: "https://flagcdn.com/w80/bd.png",
    isHQ: true,
  },
  {
    id: "node-us",
    country: "United States",
    city: "New York",
    lat: 40.7128,
    lng: -74.006,
    timezone: "EST",
    activeProjects: "32 Active Sprints",
    connectionType: "Enterprise Client",
    description:
      "High-scale enterprise client success, financial sector web apps, and data-driven marketing pipelines.",
    flagUrl: "https://flagcdn.com/w80/us.png",
  },
  {
    id: "node-gb",
    country: "United Kingdom",
    city: "London",
    lat: 51.5074,
    lng: -0.1278,
    timezone: "GMT",
    activeProjects: "28 Active Sprints",
    connectionType: "Strategic Partner",
    description:
      "European digital transformation hub, programmatic growth engines, and high-end brand architecture.",
    flagUrl: "https://flagcdn.com/w80/gb.png",
  },
  {
    id: "node-ae",
    country: "UAE",
    city: "Dubai",
    lat: 25.2048,
    lng: 55.2708,
    timezone: "GST",
    activeProjects: "24 Active Sprints",
    connectionType: "Strategic Partner",
    description:
      "MENA region digital strategy, luxury real-estate web ecosystems, and immersive brand activations.",
    flagUrl: "https://flagcdn.com/w80/ae.png",
  },
  {
    id: "node-ph",
    country: "Philippines",
    city: "Manila",
    lat: 14.5995,
    lng: 120.9842,
    timezone: "PST",
    activeProjects: "18 Active Sprints",
    connectionType: "Technology Partner",
    description:
      "APAC operational excellence hub and scalable software engineering development center.",
    flagUrl: "https://flagcdn.com/w80/ph.png",
  },
  {
    id: "node-au",
    country: "Australia",
    city: "Sydney",
    lat: -33.8688,
    lng: 151.2093,
    timezone: "AEST",
    activeProjects: "16 Active Sprints",
    connectionType: "Creative Collaboration",
    description:
      "Oceania creative direction, interactive media platforms, and full-stack digital campaign delivery.",
    flagUrl: "https://flagcdn.com/w80/au.png",
  },
];

// ============ COMPONENT ============
export default function InteractiveWorldMap() {
  const [activeNode, setActiveNode] = useState<GlobalNode | null>(null);

  const hq = useMemo(() => globalNodes.find((n) => n.isHQ)!, []);
  const arcs = useMemo(() => {
    return globalNodes
      .filter((n) => !n.isHQ)
      .map((node) => ({
        start: { lat: hq.lat, lng: hq.lng },
        end: { lat: node.lat, lng: node.lng },
      }));
  }, [hq]);

  const handleNodeClick = (node: GlobalNode) => setActiveNode(node);
  const closeModal = () => setActiveNode(null);

  return (
    <section
      id="global-reach"
      className="relative w-full bg-[#02050a] text-white min-h-screen pt-0 md:pt-32 pb-0 md:pb-24 overflow-hidden flex flex-col justify-center"
    >
      {/* Background with NO animation */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1400px] h-[600px] bg-gradient-to-r from-[#ff7a33]/20 via-[#3b82f6]/15 to-[#00ffff]/10 rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:2.5rem_2.5rem] pointer-events-none opacity-60" />

      {/* 2D Map Container - Full Width Responsive */}
      <div className="relative md:absolute md:inset-0 z-0 flex items-center justify-center w-full h-[450px] md:h-full mb-6 md:mb-0 px-2 md:px-0">
        <div className="relative w-full h-full flex items-center justify-center">
          <ComposableMap
            projection="geoMercator"
            projectionConfig={{ scale: 145, center: [10, 25] }}
            className="w-full h-full max-w-none"
          >
            <Graticule stroke="#ffffff15" strokeWidth={0.5} />
            <Geographies geography={worldData}>
              {({ geographies }: { geographies: any[] }) =>
                geographies.map((geo: any) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill="#02050a"
                    stroke="#f3e4cc"
                    strokeWidth={0.5}
                    style={{
                      default: { outline: "none" },
                      hover: {
                        fill: "#0a0f1d",
                        stroke: "#FFDDA1",
                        strokeWidth: 1,
                        outline: "none",
                      },
                      pressed: { outline: "none" },
                    }}
                  />
                ))
              }
            </Geographies>

            {/* Arcs */}
            {arcs.map((arc, idx) => (
              <Line
                key={idx}
                from={[arc.start.lng, arc.start.lat]}
                to={[arc.end.lng, arc.end.lat]}
                stroke="url(#arcGradient)"
                strokeWidth={1.5}
                strokeDasharray="4,4"
              />
            ))}

            <defs>
              <linearGradient id="arcGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ff7a33" />
                <stop offset="50%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#00ffff" />
              </linearGradient>
            </defs>

            {/* Markers */}
            {globalNodes.map((node) => (
              <Marker
                key={node.id}
                coordinates={[node.lng, node.lat]}
                onClick={() => handleNodeClick(node)}
              >
                <g
                  style={{ cursor: "pointer" }}
                  transform="translate(0, -25)"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.15)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                >
                  <circle
                    r={16}
                    fill="none"
                    stroke={node.isHQ ? "#ff7a33" : "#3b82f6"}
                    strokeWidth={2}
                    opacity={0.4}
                  >
                    <animate
                      attributeName="r"
                      from="16"
                      to="28"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="opacity"
                      from="0.5"
                      to="0"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                  </circle>
                  <circle
                    r={10}
                    fill="#02050a"
                    stroke={node.isHQ ? "#ff7a33" : "#3b82f6"}
                    strokeWidth={2}
                  />
                  <image
                    href={node.flagUrl}
                    width={14}
                    height={10}
                    x={-7}
                    y={-5}
                    style={{ borderRadius: "2px" }}
                  />
                  <text
                    y={20}
                    textAnchor="middle"
                    fill="#e5e7eb"
                    fontSize="8"
                    fontWeight="bold"
                    fontFamily="monospace"
                    letterSpacing="0.5"
                  >
                    {node.city}
                  </text>
                </g>
              </Marker>
            ))}
          </ComposableMap>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#02050a] via-transparent to-[#02050a] pointer-events-none md:hidden" />
      </div>

      {/* Bottom Content */}
      <div className="w-full max-w-7xl mx-auto px-2 md:px-8 relative z-10 -mt-6 md:mt-32 lg:mt-72">
        <div className="w-full max-w-5xl mx-auto mb-0 md:mb-10 bg-[#02050a]/15 backdrop-blur-[2px] p-4 sm:p-5 md:p-8 rounded-[10px] border border-white/15 shadow-[0_25px_60px_rgba(0,0,0,0.5)] relative overflow-hidden group md:mt-80">
          <div className="absolute inset-0 bg-gradient-to-r from-[#ff7a33]/5 via-transparent to-[#3b82f6]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

          {/* Top Section: Heading */}
          <div className="text-center pb-4 sm:pb-5 mb-4 sm:mb-5 border-b border-white/10 relative z-10">
            <h2 className="text-[18px] sm:text-[28px] md:text-[32px] font-black text-white tracking-tight leading-[1.2]">
              From Bangladesh to the World <br />
              <span
                className="text-transparent bg-clip-text drop-shadow-[0_0_35px_rgba(247,164,0,0.4)]"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #FFDDA1 0%, #F7A400 50%, #FFDDA1 100%)",
                }}
              >
                CampaignSquad Worldwide
              </span>
            </h2>
          </div>

          {/* Bottom Section: Stats Grid Inside the Same Border */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-2 gap-y-4 md:gap-0 relative z-10 mb-5 md:mb-6">
            {/* Stat 1 */}
            <div className="flex flex-col items-center justify-center text-center px-2 sm:px-3 border-r border-white/10 md:border-r md:border-white/10 transition-transform duration-300 hover:scale-105">
              <h3
                className="text-2xl sm:text-3xl md:text-5xl font-black text-transparent bg-clip-text mb-0.5 md:mb-1"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #FFDDA1 0%, #F7A400 50%, #FFDDA1 100%)",
                }}
              >
                6+
              </h3>
              <p className="text-gray-400 font-semibold text-[11px] sm:text-xs md:text-sm">
                Years of Excellence
              </p>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col items-center justify-center text-center px-2 sm:px-3 md:border-r md:border-white/10 transition-transform duration-300 hover:scale-105">
              <h3
                className="text-2xl sm:text-3xl md:text-5xl font-black text-transparent bg-clip-text mb-0.5 md:mb-1"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #FFDDA1 0%, #F7A400 50%, #FFDDA1 100%)",
                }}
              >
                600+
              </h3>
              <p className="text-gray-400 font-semibold text-[11px] sm:text-xs md:text-sm">
                Projects Delivered
              </p>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col items-center justify-center text-center px-2 sm:px-3 border-r border-white/10 md:border-r md:border-white/10 transition-transform duration-300 hover:scale-105">
              <h3
                className="text-2xl sm:text-3xl md:text-5xl font-black text-transparent bg-clip-text mb-0.5 md:mb-1"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #FFDDA1 0%, #F7A400 50%, #FFDDA1 100%)",
                }}
              >
                02+
              </h3>
              <p className="text-gray-400 font-semibold text-[11px] sm:text-xs md:text-sm">
                Countries are Located in
              </p>
            </div>

            {/* Stat 4 */}
            <div className="flex flex-col items-center justify-center text-center px-2 sm:px-3 transition-transform duration-300 hover:scale-105">
              <h3
                className="text-2xl sm:text-3xl md:text-5xl font-black text-transparent bg-clip-text mb-0.5 md:mb-1"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #FFDDA1 0%, #F7A400 50%, #FFDDA1 100%)",
                }}
              >
                10+
              </h3>
              <p className="text-gray-400 font-semibold text-[11px] sm:text-xs md:text-sm">
                Countries Served Worldwide
              </p>
            </div>
          </div>

          {/* CTA Inside the Same Border */}
          <div className="flex justify-center pt-4 sm:pt-5 border-t border-white/10 relative z-10">
            <a href="/contact-us">
              <button
                className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full text-black font-semibold text-[11px] md:text-[14px] hover:opacity-90 shadow-[0_0_25px_rgba(247,164,0,0.4)] transition-all duration-300 group cursor-pointer"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #FFDDA1 0%, #F7A400 50%, #FFDDA1 100%)",
                }}
              >
                <Zap className="w-3.5 h-3.5 text-black" />
                <span>Book a Consultation</span>
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {activeNode && (
          <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-fade-in">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#0a0f1d] text-white rounded-[36px] p-6 md:p-9 max-w-lg w-full shadow-[0_0_70px_rgba(255,122,51,0.4)] relative border-2 border-[#ff7a33]/50 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-[#ff7a33]/25 to-[#3b82f6]/25 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#00ffff]/10 rounded-full blur-3xl pointer-events-none" />

              <button
                onClick={closeModal}
                aria-label="Close modal"
                className="absolute top-6 right-6 w-9 h-9 rounded-full bg-white/10 hover:bg-[#ff7a33] flex items-center justify-center text-white font-bold transition-all duration-300 cursor-pointer z-10 shadow-md"
              >
                ✕
              </button>

              <div className="flex items-center gap-3.5 mb-4">
                <img
                  src={activeNode.flagUrl}
                  alt={activeNode.country}
                  className="w-10 h-7 object-cover rounded-md shadow-lg border border-white/30"
                />
                <div>
                  <span className="text-[10px] font-black text-[#ff7a33] uppercase tracking-widest bg-[#ff7a33]/10 px-2.5 py-1 rounded-full border border-[#ff7a33]/20">
                    {activeNode.connectionType}
                  </span>
                </div>
              </div>

              <h3 className="text-2xl md:text-3xl font-black text-white mb-1.5 tracking-tight">
                {activeNode.city}, {activeNode.country}
              </h3>
              <p className="text-xs text-[#00ffff] font-mono mb-5 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#00ffff]"></span>
                Timezone: {activeNode.timezone} • Coords:{" "}
                {activeNode.lat.toFixed(2)}°, {activeNode.lng.toFixed(2)}°
              </p>

              <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-6 bg-white/5 p-4 rounded-2xl border border-white/10 font-normal">
                {activeNode.description}
              </p>

              <div className="bg-gradient-to-r from-white/5 to-[#ff7a33]/10 p-4.5 rounded-2xl border border-white/15 mb-7 flex items-center gap-4 shadow-inner">
                <div className="w-12 h-12 rounded-2xl bg-[#ff7a33]/20 flex items-center justify-center text-[#ff7a33] border border-[#ff7a33]/40 shadow-lg">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] text-gray-400 block font-semibold uppercase tracking-wider">
                    Active Operations
                  </span>
                  <span className="text-sm md:text-base font-extrabold text-white">
                    {activeNode.activeProjects}
                  </span>
                </div>
              </div>

              <button
                onClick={closeModal}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#ff7a33] via-[#3b82f6] to-[#00ffff] text-white text-xs font-black uppercase tracking-widest hover:opacity-90 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-xl shadow-orange-500/30 hover:scale-[1.02]"
              >
                <span>Close Collaboration View</span>
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}