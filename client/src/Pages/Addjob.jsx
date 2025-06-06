import { FormRow, FormRowSelect } from '../assets/components'
import Wrapper from '../assets/wrappers/DashboardFormPage';
import { useOutletContext } from 'react-router-dom';
import { JOB_STATUS, JOB_TYPE } from '../../../utils/constants';
import { Form, useNavigation, redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import customFetch from '../utils/customFetch';

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData)
  try {
    await customFetch.post('/jobs', data)
    toast.success("Job added successful")
    return redirect('all-jobs')
  } catch (error) {
    toast.error(error?.response?.data?.msg)
    return error
  }
}

const Addjob = () => {
  const { user } = useOutletContext();
  const navigation = useNavigation()
  const isSubmitting = navigation.state === 'submitting'


  return (
    <Wrapper>
      <Form method='post' className='form'>
        <h4 className="form-title">Add Job</h4>
        <div className="form-center">
          <FormRow type='text' name='position' />
          <FormRow type='text' name='company' />
          <FormRow type='text' labelText='job location' name='jobLocation'  />
          <FormRowSelect labelText='job status' name='jobStatus' defaultValue={JOB_STATUS.PENDING} list={Object.values(JOB_STATUS)} />
          <FormRowSelect labelText='job type' name='jobType' defaultValue={JOB_TYPE.FULLTIME} list={Object.values(JOB_TYPE)} />
          <button className='btn btn-block form-btn' type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting" : "Submit"}
          </button>
        </div>
      </Form>
    </Wrapper>
  )
}

export default Addjob



