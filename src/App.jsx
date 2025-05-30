import  {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';

import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import JobsPage from './pages/JobsPage';
import OrganizationPage from './pages/OrganizationPage';
import DutyStationPage from './pages/DutyStationPage';
import BlogPage from './pages/BlogPage';
import JobCategoryPage from './pages/JobCategoryPage';
import JobDetail from './pages/JobDetail';
import BlogDetail from './pages/BlogDetail';
import NotFoundPage from './pages/NotFoundPage';
import LinkedInPage from './components/LinkedInPage';
import LinkedInCallback from './components/LinkedInCallback';
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
  <Route index element={<HomePage />} />
  <Route path="/" element={<MainLayout />} >
    
    <Route path='/jobs' element={<JobsPage />} />
    <Route path='/organizations' element={<OrganizationPage />} />
    <Route path='/duty-stations' element={<DutyStationPage />} />
    <Route path='/blog' element={<BlogPage />} />
    <Route path='/job-categories' element={<JobCategoryPage />} />
    <Route path='/job/:id' element={<JobDetail />} />
    <Route path='/blog/:id' element={<BlogDetail />} />

    <Route exact path="/linkedin" component={LinkedInCallback} />

    <Route path='*' element={<NotFoundPage />} />



  </Route>
  </>

  )
);

const App = () => {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );  
};

export default App;
