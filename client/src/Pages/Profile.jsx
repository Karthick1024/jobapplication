import { FormRow } from '../assets/components';
import Wrapper from '../assets/wrappers/DashboardFormPage';
import { useOutletContext } from 'react-router-dom';
import { useNavigation, Form } from 'react-router-dom';
import customFetch from '../utils/customFetch';
import { toast } from 'react-toastify';



export const action = async ({ request }) => {
  const formData = await request.formData();
  const file = formData.get('avatar');
  if (file && file.size > 500000) {
    toast.error('Image is too large')
    return null;
  }
  try {
    
    await customFetch.put('/users/update-user', formData)
    toast.success("Profile updated successfully")
  } catch (error) {
    toast.error(error?.response?.data?.msg)
    return null
  }
  return null

}

const Profile = () => {
  const { user } = useOutletContext()
  const { name, lastName, email, location } = user
  const navigation = useNavigation()
  const isSubmitting = navigation.state === 'submitting'
  return (
    <Wrapper>
      <Form method='post' className='form' encType='multipart/form-data'>
        <h4 className="form-title">Profile</h4>
        <div className="form-center">
          <div className="form-row">
            <label htmlFor="avatar" className='form-label'>Select an image file (max 0.5 MB)</label>
            <input type="file" id='avatar' name='avatar' className='form-input' accept='image/*' />
          </div>
          {/* File Input */}
          <FormRow type='text' name='name' defaultValue={name} />
          <FormRow type='text' name='lastName' labelText='lastName' defaultValue={lastName} />
          <FormRow type='email' name='email' defaultValue={email} />
          <FormRow type='location' name='location' defaultValue={location} />
          <button className="btn btn-block form-btn" type='submit' disabled={isSubmitting}>
            {isSubmitting ? "Submitting" : "Submit"}
          </button>
        </div>

      </Form>
    </Wrapper>
  )
}

export default Profile
