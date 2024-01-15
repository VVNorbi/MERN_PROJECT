import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ProSidebarProvider } from 'react-pro-sidebar';
import LogIn from './pages/LogIn';
import AdminRoute from './component/AdminRoute';
import Layout from './pages/global/Layout';
import SingleJob from './pages/SingleJob';
import DashJobs from './pages/admin/DashJobs';
import Register from './pages/Register';
import DashCategory from './pages/admin/DashCategory';
import DashCreateJob from './pages/admin/DashCreateJob';
import DashCreateCategory from './pages/admin/DashCreateCategory';
import DashEditJob from './pages/admin/DashEditJob'


import { createTheme } from '@mui/material/styles';
import { themeColors } from './theme'
import { useSelector } from 'react-redux';
import { useMemo } from 'react';

const DashJobsHOC = Layout(DashJobs);
const DashCategoryHOC = Layout(DashCategory)
const DashCreateJobHOC = Layout(DashCreateJob)
const DashCreateCategoryHOC = Layout(DashCreateCategory)
const DashEditJobHOC = Layout(DashEditJob)





const App = () => {
    const { mode } = useSelector((state) => state.mode);
    const theme = useMemo(() => createTheme(themeColors(mode)), [mode]);

    return (
        <>
            <ToastContainer />
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <ProSidebarProvider>
                    <BrowserRouter>
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='/search/location/:location' element={<Home />} />
                            <Route path='/search/:keyword' element={<Home />} />
                            <Route path='/login' element={<LogIn />} />
                            <Route path='/register' element={<Register />} />
                            <Route path='/job/:id' element={<SingleJob />} />
                            <Route path='/admin/jobs' element={<AdminRoute><DashJobsHOC /></AdminRoute>} />
                            <Route path='/admin/category' element={<AdminRoute><DashCategoryHOC /></AdminRoute>} />
                            <Route path='/admin/job/create' element={<AdminRoute><DashCreateJobHOC /></AdminRoute>} />
                            <Route path= '/admin/job/update/:id' element={<AdminRoute><DashEditJobHOC /></AdminRoute>} />
                            <Route path='/admin/category/create' element={<AdminRoute><DashCreateCategoryHOC /></AdminRoute>} />

                            <Route path='*' element={<NotFound />} />
                        </Routes>
                    </BrowserRouter>
                </ProSidebarProvider>
            </ThemeProvider>
        </>
    )
}

export default App