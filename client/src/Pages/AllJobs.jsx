import { toast } from 'react-toastify';
import { JobContainer, SearchContainer } from '../assets/components';
import customFetch from '../utils/customFetch';
import { useLoaderData } from 'react-router-dom';
import { useContext, createContext } from 'react';


export const loader = async () => {
  try {
    const { data } = await customFetch.get('/jobs');
    return { data }
  } catch (error) {
    toast.error(error?.response?.data?.msg)
    return error
  }
}

const AllJobsContext = createContext();


const AllJobs = () => {
  const { data } = useLoaderData();



  return (
    <>
      <AllJobsContext.Provider value={{ data }}>
        <SearchContainer />
        <JobContainer />
      </AllJobsContext.Provider>
    </>
  )
}

export const useAllJobsContext = () => useContext(AllJobsContext);  

export default AllJobs
