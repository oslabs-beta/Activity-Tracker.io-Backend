import LandingView from './components/Landing/LandingView';
import Login from './components/Login/Login';
import UserView from './components/User/UserView';
import PageNotFound from './components/PageNotFound/PageNotFound';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import { activeUserAtom} from './state/Atoms';
import { useAtom } from 'jotai';
import { useEffect } from 'react';
import { handleSession } from "./services/authConfig";
import Signup from './components/Login/Signup';
import Websites from './components/Websites/Websites';
import Documentation from './components/Documentation/Documentation'; 
import Settings from './components/Settings/Settings'; 
import Team from './components/Team/Team'
import ForgotPassword from './components/User/ForgotPassword';
import PlaygroundDisplay from './components/Playground/playgroundDisplay'
function App() {
  const [activeUser, setActiveUser] = useAtom(activeUserAtom);  //email of active user || null
//   const [isLoading, setIsLoading] = useAtom(loadingAtom);


  

// //   useEffect(() => {

// //     const timer = setTimeout(() => {
// //         setIsLoading(false);
// //     }, 3000); 

// //     return () => clearTimeout(timer);
// // }, [setIsLoading]);




  useEffect(() => {
    const fetchUser = async () => {
      const user = await handleSession();
      if (user) {
        setActiveUser(user);
        console.log("hit")
      } else {
      }
    };

    fetchUser();
  }, []);
//useEffect gets called
//useEffect calls the activeUser endpoint in backend
//if response.ok send them somewhere (ative user=true)
//if not logincd
//activeUser endpoint returns either true or an error
//frontend then deals and redirects based on the response

{/* <Link to  = "/dashboard">
<span> Dashboard</span>
</Link>
<Link to = "/websites">
<span> Websites</span>
</Link>
<Link to = "/documenation">
<span>Documentation</span>
</Link>
<Link to = "/settings">
<span>Settings</span>
</Link> */}

  return (
   
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingView />} />
        <Route path="/login" element={activeUser ? <Navigate to={'/dashboard'} /> : <Login />} />
        <Route path="/signup" element={activeUser ? <Navigate to={'/dashboard'} /> : <Signup />} />
        <Route path="/dashboard" element={activeUser ?<UserView /> : <Navigate to={'/login'} />} />
        <Route path="/websites" element={activeUser ? <Websites /> : <Navigate to={'/login'} />}/>
        <Route path="/docs" element={<Documentation/>} /> 
        <Route path="/settings" element={activeUser ? <Settings/> : <Navigate to={'/login'} />}/>
        <Route path="/team" element={<Team />} /> 
        <Route path="/teams" element={activeUser ? <PlaygroundDisplay /> : <Navigate to={'/login'} />} /> 
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
