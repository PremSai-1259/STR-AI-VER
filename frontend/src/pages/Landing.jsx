import React from 'react';
import styles from './Landing.module.css';
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/clerk-react";
import Dashboard from './Udashboard';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigate=useNavigate()
  return (
    <div className={styles.main}>
      <header className={styles.header}>StrAiVer</header>

      <section className={styles.info}>
        <h1 className={styles.infoh}>
          Crack DSA with <span className={styles.span}>AI-powered prep</span>
        </h1>
        <p className={styles.infop}>
          Get personalized roadmaps, instant code hints, and ace your interviews with StraiVer — the smartest way to prepare.
        </p>
      </section>

      <section className={styles.features}>
        <div className={styles.card}>
          <h3>AI Chat for Hints</h3>
          <p>Ask doubts and get instant help from your AI mentor.</p>
        </div>
        <div className={styles.card}>
          <h3>Personal Roadmaps</h3>
          <p>Study only what you need. Based on your skill level.</p>
        </div>
        <div className={styles.card}>
          <h3>Live Leaderboard</h3>
          <p>Stay motivated by competing with peers in real time.</p>
        </div>
      </section>

      <div className="flex justify-center items-center gap-8">
         <SignedOut>
        <SignInButton>
          <button className="border-2 border-[#38bdf8] w-[150px] h-[60px] mx-[30px] text-[20px] bg-[#38bdf8] rounded-2xl hover:bg-sky-700 hover:border-sky-700 }">Sign In</button>
        </SignInButton>
        <SignUpButton>
          <button className="border-2 border-[#38bdf8] w-[150px] h-[60px] mx-[30px] text-[20px] bg-[#38bdf8] rounded-2xl hover:bg-sky-700  hover:border-sky-700">Sign Up</button>
        </SignUpButton>
      </SignedOut>

      <SignedIn>
         <button onClick={() => navigate("/dashboard")} className="border-2 border-[#7cd375] w-[150px] h-[60px] mx-[30px] text-[20px] text-black
          bg-[#7cd375] rounded-2xl hover:bg-green-700  hover:border-green-700">
          Go to Dashboard
        </button>
      </SignedIn>
      </div>

      <footer className={styles.footer}>
        <p>&copy;2025 StraiVer. Built for future engineers.</p>
      </footer>
    </div>
  )
}

export default LandingPage
