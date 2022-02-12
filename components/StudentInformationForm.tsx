import { useFormik } from "formik";
import type { ComponentProps } from "react";
import { studentFormSchema } from "../utils/schemas";

const StudentInformationForm = ({ setStudentNumber, setStep }: ComponentProps<any>) => {
    const studentForm = useFormik({
        initialValues: {
            firstNames: "",
            lastName: "",
            email: "",
            studentNumber: "",
            cellNumber: "",
            gender: "",
            idNumber: "",
            dateOfBirth: "",
            residentialAddress: "",
            postalAddress: "",
        },
        validationSchema: studentFormSchema,
        onSubmit: async (values) => {
            const response = await fetch("/api/student/create", {
                method: "POST", // *GET, POST, PUT, DELETE, etc.
                mode: "cors", // no-cors, *cors, same-origin
                cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
                credentials: "same-origin", // include, *same-origin, omit
                headers: {
                    "Content-Type": "application/json",
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                redirect: "follow", // manual, *follow, error
                referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
                body: JSON.stringify(values), // body data type must match "Content-Type" header
            });
            console.log(response.json());
            setStudentNumber(values.studentNumber);
            setStep(2);
        },
    });
    return (
        <form className="p-5" onSubmit={studentForm.handleSubmit}>
            <div className="shadow overflow-hidden rounded-md p-3">
                <section className="grid grid-cols-2 gap-x-20 gap-y-5">
                    <div className="flex flex-col">
                        <label htmlFor="firstNames">
                            First Names <span>*</span>
                        </label>
                        <input
                            className="border-2 rounded-md p-1 outline-none mt-2"
                            type="text"
                            name="firstNames"
                            id="firstNames"
                            value={studentForm.values.firstNames}
                            onChange={studentForm.handleChange}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="">
                            Last Name <span>*</span>
                        </label>
                        <input
                            className="border-2 rounded-md p-1 outline-none mt-2"
                            type="text"
                            name="lastName"
                            id="lastName"
                            value={studentForm.values.lastName}
                            onChange={studentForm.handleChange}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="">
                            Email Address <span>*</span>
                        </label>
                        <input
                            className="border-2 rounded-md p-1 outline-none mt-2"
                            type="email"
                            name="email"
                            id="email"
                            value={studentForm.values.email}
                            onChange={studentForm.handleChange}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="">
                            Student Number <span>*</span>
                        </label>
                        <input
                            className="border-2 rounded-md p-1 outline-none mt-2"
                            type="text"
                            name="studentNumber"
                            id="studentNumber"
                            value={studentForm.values.studentNumber}
                            onChange={studentForm.handleChange}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="cellNumber">
                            Cell Number <span>*</span>
                        </label>
                        <input
                            className="border-2 rounded-md p-1 outline-none mt-2"
                            type="text"
                            name="cellNumber"
                            id="cellNumber"
                            value={studentForm.values.cellNumber}
                            onChange={studentForm.handleChange}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="gender">
                            Gender <span>*</span>
                        </label>
                        <input
                            className="border-2 rounded-md p-1 outline-none mt-2"
                            type="text"
                            name="gender"
                            id="gender"
                            value={studentForm.values.gender}
                            onChange={studentForm.handleChange}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="idNumber">
                            ID Number <span>*</span>
                        </label>
                        <input
                            className="border-2 rounded-md p-1 outline-none mt-2"
                            type="text"
                            name="idNumber"
                            id="idNumber"
                            value={studentForm.values.idNumber}
                            onChange={studentForm.handleChange}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="dateOfBirth">
                            Date of Birth <span>*</span>
                        </label>
                        <input
                            className="border-2 rounded-md p-1 outline-none mt-2"
                            type="date"
                            name="dateOfBirth"
                            id="dateOfBirth"
                            value={studentForm.values.dateOfBirth}
                            onChange={studentForm.handleChange}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="">
                            Residential Address <span>*</span>
                        </label>
                        <input
                            className="border-2 rounded-md p-1 outline-none mt-2"
                            type="text"
                            name="residentialAddress"
                            id="residentialAddress"
                            value={studentForm.values.residentialAddress}
                            onChange={studentForm.handleChange}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="postalAddress">
                            Postal Address <span>*</span>
                        </label>
                        <input
                            className="border-2 rounded-md p-1 outline-none mt-2"
                            type="text"
                            name="postalAddress"
                            id="postalAddress"
                            value={studentForm.values.postalAddress}
                            onChange={studentForm.handleChange}
                        />
                    </div>
                </section>
                <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 mt-3 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                    Create Profile
                </button>
            </div>
        </form>
    );
};

export default StudentInformationForm;
