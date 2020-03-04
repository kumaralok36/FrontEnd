import { isNumber } from "util";

export class ValidationUtility{
    //Returns true on valid string. False on invalid
    public static validateStringFields(value: string, min: number, max: number): boolean {
        if (value === undefined) {
            var response = {
                status: 400,
                description: "Invalid input, the login credentials are not valid."
            };
            return false;
        }
        if (value.length >= min && max == -1 ? true : value.length <= max) {
            return true;
        } else {
            var response = {
                status: 400,
                description: "Invalid input, the login credentials are not valid."
            };
            // res.status(400);
            // res.end(JSON.stringify(response));
            return false;
        }
    }
    public static validateEmail(email: string): string {
        if (!email.match(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/))
            return undefined;
        return email;
    }
    public static validatePassword(password: string): string {
        if(password.length<8)
            return undefined;
        if (!(password.match(/[A-Z]/) && password.match(/[a-z]/) && password.match(/[0-9]/) && password.match(/[^A-Za-z0-9]/)))
            return undefined;
        
        return password;
    }

    public static validatePhoneNumber(phone: string): string {
        // if (!phone.match(/^[0-9]+$/))
        //     return false;
        return phone;
    }
    public static validateNumber(n: string): number {
        if(isNumber(n))
            return n;
        if (n===undefined || parseInt(n) == NaN)
            return NaN;
        return parseInt(n);
    }
    public static validateFloat(n: string): boolean {
        if (!n || parseFloat(n) == NaN)
            return false;
        return true;
    }
}