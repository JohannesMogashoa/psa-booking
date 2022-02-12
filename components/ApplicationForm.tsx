import { useFormik } from "formik";
import type { ComponentProps } from "react";
import { applicationFormSchema } from "../utils/schemas";

const ApplicationForm = ({ studentNumber }: ComponentProps<any>) => {
    const applicationForm = useFormik({
        initialValues: {
            building: "",
            roomType: "two-sharing",
            funding: "nsfas",
            parentFullName: "",
            parentCellNumber: "",
        },
        validationSchema: applicationFormSchema,
        onSubmit: async (values) => {
            const reqBody = { ...values, studentNumber };
            const response = await fetch("/api/application/create", {
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
                body: JSON.stringify(reqBody), // body data type must match "Content-Type" header
            });
            console.log(response.json());
        },
    });
    return (
        <form className="p-5" onSubmit={applicationForm.handleSubmit}>
            <div className="shadow overflow-hidden rounded-md p-3">
                <section className="grid grid-cols-1 gap-y-5">
                    <div className="flex flex-col">
                        <label htmlFor="firstNames">
                            Building <span>*</span>
                        </label>
                        <select
                            className="border-2 rounded-md p-1 outline-none mt-2"
                            name="building"
                            id="building"
                            value={applicationForm.values.building}
                            onChange={applicationForm.handleChange}>
                            <option>Choose</option>
                            <option value="any">Any building is fine for me</option>
                            <option value="8on6th">8th on Sixth (Walmer)</option>
                            <option value="22onHeugh">22 on Heugh (Walmer)</option>
                            <option value="4onMilitary">4 on Military (Central)</option>
                            <option value="16onJetty">16 on Jetty (Central)</option>
                            <option value="18onStrand">18 on Strand (Central)</option>
                            <option value="3onMill">3 on Mill (Central)</option>
                            <option value="549onGovan">549 on Govan Mbheki (North End)</option>
                            <option value="575onGovan">575 on Govan Mbheki (North End)</option>
                            <option value="10onSmart">10 on Smart (Sydenham)</option>
                            <option value="163onDurban">163 on Durban (Korsten)</option>
                        </select>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="">
                            Room Type <span>*</span>
                        </label>
                        <div className="flex items-center">
                            <input
                                id="single"
                                name="roomType"
                                type="radio"
                                onChange={applicationForm.handleChange}
                                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                            />
                            <label
                                htmlFor="single"
                                className="ml-3 block text-sm font-medium text-gray-700">
                                Single (Student co-payment required)
                            </label>
                        </div>
                        <div className="flex items-center">
                            <input
                                id="two-sharing"
                                name="roomType"
                                type="radio"
                                onChange={applicationForm.handleChange}
                                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                            />
                            <label
                                htmlFor="two-sharing"
                                className="ml-3 block text-sm font-medium text-gray-700">
                                Two Sharing
                            </label>
                        </div>
                        <div className="flex items-center">
                            <input
                                id="three-sharing"
                                name="roomType"
                                type="radio"
                                onChange={applicationForm.handleChange}
                                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                            />
                            <label
                                htmlFor="three-sharing"
                                className="ml-3 block text-sm font-medium text-gray-700">
                                Three Sharing
                            </label>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="">
                            Funding Type <span>*</span>
                        </label>
                        <div className="flex items-center">
                            <input
                                id="nsfas"
                                name="funding"
                                type="radio"
                                onChange={applicationForm.handleChange}
                                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                            />
                            <label
                                htmlFor="nsfas"
                                className="ml-3 block text-sm font-medium text-gray-700">
                                Funded by NSFAS
                            </label>
                        </div>
                        <div className="flex items-center">
                            <input
                                id="cash"
                                name="funding"
                                type="radio"
                                onChange={applicationForm.handleChange}
                                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                            />
                            <label
                                htmlFor="cash"
                                className="ml-3 block text-sm font-medium text-gray-700">
                                Cash Paying
                            </label>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="">
                            Parent Full Name <span>*</span>
                        </label>
                        <input
                            className="border-2 rounded-md p-1 outline-none mt-2"
                            type="text"
                            name="parentFullName"
                            id="parentFullName"
                            value={applicationForm.values.parentFullName}
                            onChange={applicationForm.handleChange}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="parentCellNumber">
                            Parent Cell Number <span>*</span>
                        </label>
                        <input
                            className="border-2 rounded-md p-1 outline-none mt-2"
                            type="text"
                            name="parentCellNumber"
                            id="parentCellNumber"
                            value={applicationForm.values.parentCellNumber}
                            onChange={applicationForm.handleChange}
                        />
                    </div>
                </section>
                <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 mt-3 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                    Submit Application
                </button>
            </div>
        </form>
    );
};

export default ApplicationForm;
