export const APIS ={
    AUTH:{
        SIGN_IN:'login/',
        SIGN_UP:'signup/',
        CHECK_EMAIL : 'checkemail/',
        FORGOT_PASSWORD:'api/v1/forgetPassword',
        RESET_PASSWORD:'api/v1/resetPassword',
        LOGOUT:'api/v1/logout'
    }
}

export const PAGE = {
    SIGN_IN:'auth/sign-in',
    SIGN_UP:'auth/sign-up',
    REGISTER_EMAIL:'auth/sign-up/register-email',
    REGISTER_OPTION:'auth/sign-up/register-option',
    REGISTER_NAME:'auth/sign-up/register-name',
    REGISTER_DOB:'auth/sign-up/register-dob',
    REGISTER_PASSWORD:'auth/sign-up/register-password',
    FORGOT_PASSWORD:'auth/forgot-password',
    RESET_PASSWORD:'auth/reset-password',
    HOME:'main/main/home',

    VIEW_PROFILE:'main/main/view-profile',
   
    UPDATE_PROFILE:'main/main/update-profile',
    CHANGE_PASSWORD:'main/main/change-password'
}
export const REGEX={
    REPLACE:/[^0-9]/g,
    OTP: /[^0-9]/ ,
    MOBILE_NUMBER: "^[6-9]\\d{9}$",
    PASSWORD : "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$"
}