import * as yup from 'yup';

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const phoneRegex = /^5[0-9]{2} [0-9]{3} [0-9]{2} [0-9]{2}$/;
const taxNoRegex = /^T[0-9]{4}V[0-9]{6}$/;
const ibanRegex = /^[A-Z0-9]{14,}$/; 

const baseSchema = {
    name: yup
        .string()
        .required("İsim zorunludur.")
        .min(3, "İsim en az 3 karakter olmalıdır."),
    email: yup
        .string()
        .required("Email zorunludur.")
        .email("Geçerli bir email adresi girin."),
    password: yup
        .string()
        .required("Şifre zorunludur.")
        .matches(passwordRegex, "Şifre en az 8 karakter, büyük/küçük harf, rakam ve özel karakter içermelidir."),
    confirmPassword: yup
        .string()
        .required("Şifre onayı zorunludur.")
        .oneOf([yup.ref('password'), null], 'Şifreler eşleşmelidir.'),
    role_id: yup
        .number()
        .required("Rol seçimi zorunludur.")
        .min(1, "Geçerli bir rol seçin."),
};


const storeSchema = {
    store: yup.object().shape({
        name: yup
            .string()
            .required("Mağaza Adı zorunludur.")
            .min(3, "Mağaza Adı en az 3 karakter olmalıdır."),
        phone: yup
            .string()
            .required("Mağaza Telefonu zorunludur.")
            .matches(phoneRegex, "Geçerli bir Türkiye telefon numarası girin (Örn: 5xx xxx xx xx)."),
        tax_no: yup
            .string()
            .required("Vergi Kimlik Numarası zorunludur.")
            .matches(taxNoRegex, 'Vergi Kimlik Numarası "TXXXXVXXXXXX" formatında olmalıdır.'),
        bank_account: yup
            .string()
            .required("IBAN zorunludur.")
            .matches(ibanRegex, 'Geçerli bir IBAN adresi girin.'),
    }),
};


export const createSignupSchema = (roleId) => {

    const isStore = roleId === 3; 
    
    let schema = yup.object().shape(baseSchema);

    if (isStore) {
        schema = schema.shape(storeSchema);
    }
    
    return schema;
};