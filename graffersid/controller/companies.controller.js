import { companiesModel , dirname , fileURLToPath , path } from '../utils/import.js'



class companiesController{
        async getCompanies(req,res){
            try{
                const companylist = await companiesModel.fetchCompanies({isdeleted : 0})
                
                return res.render("index" , {companylist})
            }catch(er){
                console.log(`error in companies.controller : ${er}`)
            }
        }
        async addCompanies(req,res){
            try{
                const companyname = req.body.companyname ? req.body.companyname : ""
                const location = req.body.location ? req.body.location : ""
                const city = req.body.city ? req.body.city : ""
                const foundedon = req.body.foundedon ? req.body.foundedon : ""
                const imageobj = req.files.logo
    
                const imagename = Date.now()+"_"+imageobj.name
                const __dirname = dirname(fileURLToPath(import.meta.url));
                const uploadpath = path.join(__dirname,'../public/uploads/logos',imagename)
                imageobj.mv(uploadpath)
                const companylist = await companiesModel.fetchCompanies()
                const l = companylist.length
                const _id = companylist.length == 0 ? 1 : +companylist[l-1]['_id'] + 1
                
                const input = { _id , companyname , location , city , foundedon , info : new Date().toISOString().split('T')[0] , isdeleted : 0 , logo : imagename }
                const companyAddAck = companiesModel.addCompany(input)
                return res.redirect('/companies')

            }catch(er){
                console.log(`error in companies.controller : ${er}`)
            }



        }    
}
export default new companiesController