import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  RedirectToSignIn,
  UserButton,
} from "@clerk/clerk-react";
import LandingPage from "./pages/Landing";
import Dashboard from "./pages/Udashboard";
import Roadmap from "./pages/Roadmap";
import Practice from "./pages/Practice";
import { Route,Routes } from "react-router-dom";

function App() {
  return (
     <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route
        path="/dashboard"
        element={
          <>
            <SignedIn>
              <Dashboard />
            </SignedIn>
            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
          </>
        }
        />
        <Route path="/roadmap" 
        element={
          <>
          <SignedIn>
              <Roadmap/>
          </SignedIn>
          <SignedOut>
              <RedirectToSignIn />
          </SignedOut>
          </>
        }
        />
        <Route path="/practice"
        element={
          <>
          <SignedIn>
              <Practice/>
          </SignedIn>
          <SignedOut>
              <RedirectToSignIn />
          </SignedOut>
          </>
        }
        />
    </Routes>
  );
}

export default App;