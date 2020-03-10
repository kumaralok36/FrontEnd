import { ProviderQuestionTypes } from "./ProviderQuestionTypes";

export const ProviderRegistrationQuestions = [
    {
        inputType:ProviderQuestionTypes.EmailField,
        formName:"email",
        heading:"Enter your email",
        canSkip:false,
    },
    {
        inputType:ProviderQuestionTypes.Information,
        formName:"info",
        canSkip:false,
        heading:"Futura.Health Registration",
        value:"Thanks for taking the first step toward becoming a Therapy on Demand Provider. You can learn more about the provider role by downloading our PDF brochure using this link:"
    },
    {
        inputType:ProviderQuestionTypes.TextField,
        formName:"name",
        canSkip:false,
        heading:"Full Name and Title",
        regex:undefined
    },
    {
        inputType:ProviderQuestionTypes.PhoneField,
        formName:"phone",
        canSkip:false,
        heading:"Give your Mobile Number",
        regex:"[0-9\\s]{10, 15}"
    },
    {
        inputType:ProviderQuestionTypes.TextList,
        formName:"languages",
        canSkip:false,
        heading:"Add the languages you can speak",
        regex:"[0-9\\s]{10, 15}"
    },
    {
        inputType:ProviderQuestionTypes.MapAddress,
        formName:"address",
        canSkip:false,
        heading:"Choose your Geo Location on Map",
    },
    {
        inputType:ProviderQuestionTypes.RadioButton,
        formName:"serviceType",
        canSkip:false,
        heading:"What are the kind of services you provide?",
        values:[
            {
                name:"	Clinical/Telehealth (only choose this option if you have an active and valid healthcare or counseling license. For example, OT, PT, ST, RN, MD, RD, Psy.D, Licensed Counselor)",
                formValue:0
            },
            {
                name:"Wellness Coaching (providers are approved and trained on a case-by-case basis)",
                formValue:1
            },
            {
                name:"Health Coaching (providers are approved and trained on a case-by-case basis)",
                formValue:1
            }
        ]
    },
    {
        inputType:ProviderQuestionTypes.TextList,
        formName:"licensedLocation",
        canSkip:false,
        heading:"Please list your license and/or certification type(s) by location(s) for telehealth & geographic service areas if you plan to opt-in to provide on-sire services",
    },
    {
        inputType:ProviderQuestionTypes.FileList,
        formName:"licenseFiles",
        canSkip:true,
        heading:"Please upload a copy (front and back) of each license/certification listed above. *",
        fileTypes:[
            "pdf",
            "jpg",
            "jpeg",
            "png"
        ]
    },
    {
        inputType:ProviderQuestionTypes.File,
        formName:"signature",
        canSkip:true,
        heading:"Upload your signature. To sign using your device, visit: https://www.mylivesignature.com/draw-signature",
        fileTypes:[
            "jpg",
            "jpeg",
            "png"
        ]
    },
    {
        inputType:ProviderQuestionTypes.FileList,
        formName:"idFiles",
        canSkip:true,
        heading:"Upload a copy of your government-issued ID (for example: national identity card). Your current mailing address must be listed. [FRONT] and [BACK] *",
        fileTypes:[
            "pdf",
            "jpg",
            "jpeg",
            "png"
        ]
    },
    {
        inputType:ProviderQuestionTypes.CheckBox,
        formName:"platforms",
        canSkip:false,
        heading:"What all platforms do you wish to register?",
        values:[
            {
                name:"Futura.Health (subscription-based app for telehealth therapies and coaching)",
                formValue:0
            },
            {
                name:"TherapyonDemand.io (simple drop-in telehealth therapy & health and wellness coaching online services)",
                formValue:1
            },
            {
                name:"InsightHealth.io (telemedicine marketplace for health and medical providers",
                formValue:2
            },
            {
                name:"CareonDemand.co (in-home and on-site services (healthcare & coaching)",
                formValue:3
            },
            {
                name:"Evolvr.App (VR tele-rehabiltation and coaching (hardware required))",
                formValue:4
            }
        ]
    },
    
]