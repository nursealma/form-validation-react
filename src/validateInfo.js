export default function validateInfo(values) {
    let errors = {}

    if(!values.username.trim()) {
        errors.username = "username required"
    }

    if(!values.email) {
        errors.email = "email required"
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "email address is invalid"
    }

    if(!values.password) {
        errors.password = "password is required"
    } else if (values.password.length < 8) {
        errors.password = "password must be 8 characters or more"
    }

    if(!values.password2) {
        errors.password2 = "password is required"
    } else if(values.password2 !== values.password) {
        errors.password2 = "passwords do not match"
    }

    return errors;
}