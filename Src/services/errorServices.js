export default class ErrorsService{

    static createError({name='error', cause,message,code=1,status=500}){
        const error= new Error(message,{cause});
        error.name= name
        error.code=code
        error.status
        throw error
    }
    
    }