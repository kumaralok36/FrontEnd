export interface LoginStateInterface{
    loginForm: {
        email: string,
        password: string
    }
}
export default interface LoginComponentInterface{
    setLoaderState:any
    changeLoginFormData:(event:any)=>any
    submitLogin:(event:any)=>any
}