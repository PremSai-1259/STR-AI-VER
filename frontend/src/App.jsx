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
import Arrays from "./pages/Array";
import Vectors from "./pages/Vectors";
import Stacks from "./pages/Stacks";
import Sets from "./pages/Sets";
import List from "./pages/List";
import Maps from "./pages/Maps";
import Deques from "./pages/Deques";
import Queues from "./pages/Queues";
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
         <Route path="/practice/arrays"
        element={
          <>
          <SignedIn>
              <Arrays/>
          </SignedIn>
          <SignedOut>
              <RedirectToSignIn />
          </SignedOut>
          </>
        }
        />
         <Route path="/practice/vectors"
        element={
          <>
          <SignedIn>
              <Vectors/>
          </SignedIn>
          <SignedOut>
              <RedirectToSignIn />
          </SignedOut>
          </>
        }
        />
         <Route path="/practice/sets"
        element={
          <>
          <SignedIn>
              <Sets/>
          </SignedIn>
          <SignedOut>
              <RedirectToSignIn />
          </SignedOut>
          </>
        }
        />
         <Route path="/practice/stacks"
        element={
          <>
          <SignedIn>
              <Stacks/>
          </SignedIn>
          <SignedOut>
              <RedirectToSignIn />
          </SignedOut>
          </>
        }
        />
         <Route path="/practice/queues"
        element={
          <>
          <SignedIn>
              <Queues/>
          </SignedIn>
          <SignedOut>
              <RedirectToSignIn />
          </SignedOut>
          </>
        }
        />
         <Route path="/practice/deques"
        element={
          <>
          <SignedIn>
              <Deques/>
          </SignedIn>
          <SignedOut>
              <RedirectToSignIn />
          </SignedOut>
          </>
        }
        />
         <Route path="/practice/lists"
        element={
          <>
          <SignedIn>
              <List/>
          </SignedIn>
          <SignedOut>
              <RedirectToSignIn />
          </SignedOut>
          </>
        }
        />
         <Route path="/practice/maps"
        element={
          <>
          <SignedIn>
              <Maps/>
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