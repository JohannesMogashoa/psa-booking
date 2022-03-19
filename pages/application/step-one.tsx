import type { NextPage } from "next";
import { useFormik } from "formik";
import Head from "next/head";
import { studentFormSchema } from "../../utils/schemas";
import { useRouter } from "next/router";
import { createStudentProfile } from "@/utils/api_calls";

const StepOne: NextPage = () => {
    const router = useRouter();

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
            createStudentProfile(values).then(() =>
                router.push(`/application/step-two?studentNumber=${values.studentNumber}`),
            );
        },
    });

    return (
        <div className="w-screen min-h-screen">
            <Head>
                <title>Step One | MfundiRez Applications</title>
            </Head>
            <main className="flex overflow-hidden">
                <form
                    className="flex flex-col items-center justify-center w-full"
                    onSubmit={studentForm.handleSubmit}>
                    <h1 className="text-4xl mb-5 font-bold italic tracking-wider">
                        MfundiRes Registration
                    </h1>
                    <div className="p-3 w-full">
                        <section className="grid sm:grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4">
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
                            className="justify-center py-2 px-4 mt-3 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-amber-500 hover:bg-amber-600 focus:outline-none flex w-full md:w-2/5">
                            Create Profile
                        </button>
                    </div>
                </form>
                <img src="/image.jpg" alt="" className="w-1/2 h-screen" />
            </main>
        </div>
    );
};

export default StepOne;
