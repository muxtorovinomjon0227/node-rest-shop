import {Router} from 'express'
const router = new Router()


router.post('/', async (req, res)=> {
        console.log('post_body: ', req.body)
    // // Get user input
    try{

    const { first_name = null, last_name = null, email = null, password = null } = req.body

    res.status(200).send({first_name, last_name, email, password})
    }catch(err){

    }
}
);

export default router

