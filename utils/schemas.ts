import * as Yup from "yup"

export const studentFormSchema = Yup.object().shape({
    firstNames: Yup.string().min(3).required(),
    lastName: Yup.string().min(3).required(),
    email: Yup.string().email().required(),
    studentNumber: Yup.string().min(9).required(),
    cellNumber: Yup.string().min(10).required(),
    gender: Yup.string().required(),
    idNumber: Yup.string().required(),
    dateOfBirth: Yup.string(),
    residentialAddress: Yup.string().min(3).required(),
    postalAddress: Yup.string().min(3).required(),
});

export const applicationFormSchema = Yup.object().shape({
    building: Yup.string()
        .oneOf([
            "any",
            "8on6th",
            "22onHeugh",
            "4onMilitary",
            "16onJetty",
            "18onStrand",
            "3onMill",
            "549onGovan",
            "575onGovan",
            "10onSmart",
            "163onDurban",
        ])
        .required(),
    roomType: Yup.string().oneOf(["single", "two-sharing", "three-sharing"]).required(),
    funding: Yup.string().oneOf(["nsfas", "cash"]).required(),
    parentFullName: Yup.string().min(3).required(),
    parentCellNumber: Yup.string().min(10).required(),
});