import Jobs from "./Jobs"
import Wrapper from "../wrappers/JobsContainer";
import { useAllJobsContext } from "../../Pages/AllJobs";

const JobsContainer = () => {
    const { data } = useAllJobsContext()
    const { jobs } = data

    if (jobs.length === 0) {
        return <Wrapper>
            <h2>No jobs to display....</h2>
        </Wrapper>
    }
    return (
        <Wrapper>
            <div className="jobs">
                {jobs.map((job)=>{
                    return <Jobs key={job._id} {...job}/>
                })}
            </div>
        </Wrapper>
    )
}

export default JobsContainer
