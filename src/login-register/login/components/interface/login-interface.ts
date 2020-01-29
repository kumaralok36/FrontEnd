export interface LoginStateInterface{
    loginForm: {
        email: string,
        password: string
    },
    state:number
}
export default interface LoginComponentInterface{
    setLoaderState:any
    changeLoginFormData:(event:any)=>any
    submitLogin:(event:any)=>any
}