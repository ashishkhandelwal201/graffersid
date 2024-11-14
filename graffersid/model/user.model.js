import "../config/database.js"
import UserSchemaModel from '../schema/user.schema.js'

// 
class UserModel{
    async loginUser({username , password}){
        const result = await UserSchemaModel.find({username , password})
        return result
    }



    async checkEmail(username){
        const result = await UserSchemaModel.find({username})
        return result
    }
}
export default new UserModel