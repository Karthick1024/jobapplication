import {Router} from 'express'

const router = Router()

import {getAllJobs,createJob,editJob,deleteJob,getJob} from '../controllers/jobController.js'

router.route('/').get(getAllJobs).post(createJob)
router.route('/:id').get(getJob).put(editJob).delete(deleteJob)


export default router