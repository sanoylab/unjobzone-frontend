import  {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';

import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import JobsPage from './pages/JobsPage';
import OrganizationPage from './pages/OrganizationPage';
import DutyStationPage from './pages/DutyStationPage';
import DailyBlogPage from './pages/DailyBlogPage';
import JobCategoryPage from './pages/JobCategoryPage';
import JobDetail from './pages/JobDetail';
import NotFoundPage from './pages/NotFoundPage';


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
  <Route index element={<HomePage />} />
  <Route path="/" element={<MainLayout />} >
    
    <Route path='/jobs' element={<JobsPage />} />
    <Route path='/organizations' element={<OrganizationPage />} />
    <Route path='/duty-stations' element={<DutyStationPage />} />
    <Route path='/daily-blog' element={<DailyBlogPage />} />
    <Route path='/job-categories' element={<JobCategoryPage />} />
    <Route path='/job-detail/:id' element={<JobDetail />} />
    <Route path='*' element={<NotFoundPage />} />



  </Route>
  </>

  )
);

const App = () => {
  return <RouterProvider router={router} />;  
};

export default App;
