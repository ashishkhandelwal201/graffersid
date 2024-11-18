import { express , userController , companiesController , reviewsController , verifyAuth } from '../utils/import.js'
const router = express.Router()

router.get('/' , (req,res) => res.render("login") )
router.get('/login' , userController.getLogin)
router.post('/login' , userController.postLogin)
router.get('/signup' , userController.getSignup)
router.post('/signup' , userController.postSignup)
router.get('/logout'  , userController.logout )


router.get('/companies'  , verifyAuth , companiesController.getCompanies )
router.post('/add-companies'  , companiesController.addCompanies )

router.get('/reviews/:company_id' , verifyAuth , reviewsController.getReviews )
router.post('/addreviews/:company_id' ,  reviewsController.addReviews )





export default router
