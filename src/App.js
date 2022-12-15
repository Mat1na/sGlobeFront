import React, { useEffect } from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./Components/auth";
import Home from "./Home";
import Dashboard from "./Dashboard";
import LabMembers from "./DashboardComponents/LabMembers";
import CreateLabMembers from './DashboardComponents/CreateLabMember';
import EditLabMembers from './DashboardComponents/EditLabMember';
import Publications from "./DashboardComponents/Publications";
import CreatePub from './DashboardComponents/CreatePub';
import EditPub from './DashboardComponents/EditPub';
import Projects from "./DashboardComponents/Projects";
import CreateProject from "./DashboardComponents/CreateProject";
import EditProject from "./DashboardComponents/EditProject"
import Authors from "./DashboardComponents/Authors";
import CreateAuthor from "./DashboardComponents/CreateAuthor"
import EditAuthor from "./DashboardComponents/EditAuthor"
import LabmemberDetails from './Pages/LabmemberDetails';
import ProjectDetails from './Pages/ProjectDetails';
import PublicationDetails from './Pages/PublicationDetails';
import Alumni from './Pages/Alumni';
import { Login } from './Login';
import { RequireAuth } from './Components/RequireAuth';
// import CreateUser from './DashboardComponents/CreateUser';
import PublicationList from './Pages/PublicationList';
import Layout from './Components/Layout';
import Layoutmodified from './Components/Layoutmodified';
import ReactGA from 'react-ga';
import ScrollToTop from './Components/scrollToTop';
const TRACKING_ID = "UA-250494226-1";
ReactGA.initialize(TRACKING_ID);




function App() {
    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, []);
    return (
        <AuthProvider>
            <BrowserRouter>
                <ScrollToTop />
                <Routes>
                    <Route element={<Layout />}>
                        <Route path='/' element={<Home />} />
                    </Route>
                    <Route element={<Layoutmodified />}>
                        <Route path='/publicationlist' element={<PublicationList />} />
                        <Route path='/publication/:pub' element={<PublicationDetails />} />
                        <Route path='/labmember/:lab' element={<LabmemberDetails />} />
                        <Route path='/project/:proj' element={<ProjectDetails />} />
                        <Route path='/alumni' element={<Alumni />} />

                        {/* Dashboard */}
                        <Route path="/dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} />
                        <Route path="/labmembers" element={<RequireAuth><LabMembers /></RequireAuth>} />
                        <Route path="/labmembers/create-member" element={<RequireAuth><CreateLabMembers /></RequireAuth>} />
                        <Route path="/labmembers/edit-labmember/:memberid" element={<RequireAuth><EditLabMembers /></RequireAuth>} />
                        <Route path="/publications" element={<RequireAuth><Publications /></RequireAuth>} />
                        <Route path="/publications/create-pub" element={<RequireAuth><CreatePub /></RequireAuth>} />
                        <Route path="/publications/edit-pub/:pubid" element={<RequireAuth><EditPub /></RequireAuth>} />
                        <Route path="/projects" element={<RequireAuth><Projects /></RequireAuth>} />
                        <Route path="/projects/create-project" element={<RequireAuth><CreateProject /></RequireAuth>} />
                        <Route path="/projects/edit-project/:projectid" element={<RequireAuth><EditProject /></RequireAuth>} />
                        <Route path="/authors" element={<RequireAuth><Authors /></RequireAuth>} />
                        <Route path="/authors/create-author" element={<RequireAuth><CreateAuthor /></RequireAuth>} />
                        <Route path="/authors/edit-author/:authorid" element={<RequireAuth><EditAuthor /></RequireAuth>} />
                        <Route path="/login" element={<Login />} />
                    </Route>

                </Routes>
            </BrowserRouter>
        </AuthProvider>
    )
}
export default App


