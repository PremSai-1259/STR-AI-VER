import React from "react";
import {
  Brain,
  Cpu,
  Zap,
  CircuitBoard,
  Wifi,
  Database,
} from "lucide-react";

export default function BrainLoading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <div className="relative w-80 h-80">
        {/* Central Brain */}
        <div className="relative z-10 flex items-center justify-center w-32 h-32 mx-auto bg-gradient-to-br from-purple-500 via-purple-400 to-cyan-400 rounded-2xl shadow-2xl border border-purple-300/30">
          <Brain className="w-16 h-16 text-white/90" strokeWidth={1.5} />
        </div>

        {/* Orbiting Icons */}
        {[Cpu, Zap, CircuitBoard, Database].map((Icon, i) => (
          <div
            key={i}
            className="absolute w-6 h-6 bg-gradient-to-br from-purple-400 to-cyan-400 rounded-full flex items-center justify-center shadow-lg animate-spin"
            style={{
              left: "50%",
              top: "50%",
              transform: `rotate(${i * 90}deg) translateY(-100px) rotate(-${i * 90}deg)`,
              animationDuration: "6s",
            }}
          >
            <Icon className="w-3 h-3 text-white" />
          </div>
        ))}

        {/* Orbiting Dots */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full animate-pulse"
            style={{
              left: "50%",
              top: "50%",
              backgroundColor: i % 2 === 0 ? "#a855f7" : "#22d3ee",
              transform: `rotate(${i * 45}deg) translateY(-120px) rotate(-${i * 45}deg)`,
              animationDelay: `${i * 0.15}s`,
              animationDuration: "2s",
            }}
          />
        ))}

        {/* Loading Text */}
        <div className="absolute bottom-[-80px] w-full text-center">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent">
            Stri-AI-ver
          </h3>
          <p className="text-white/80 text-base font-medium mb-2">AI × Dev Processing</p>
          <div className="flex justify-center gap-1">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-6 bg-gradient-to-t from-purple-500 to-cyan-400 rounded-full animate-pulse"
                style={{
                  animationDelay: `${i * 0.2}s`,
                  animationDuration: "1.5s",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
