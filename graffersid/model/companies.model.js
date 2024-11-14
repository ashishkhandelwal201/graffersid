import "../config/database.js"
import companySchemaModel from '../schema/company.schema.js'

class IndexModel{
    async fetchCompanies(condition_obj={}){
        const result = await companySchemaModel.find(condition_obj)
        return result


    }
    
    
    async addCompany(company_data){
        const savedObj = new companySchemaModel(company_data)
        const companyAddAck = savedObj.save()
        return companyAddAck
    }
}
    
export default new IndexModel