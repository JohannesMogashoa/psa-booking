import { createApplication } from "@/utils/api_calls";
import { useFormik } from "formik";
import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { applicationFormSchema } from "../../utils/schemas";

const StepTwo: NextPage = () => {
    const router = useRouter();
    const studentNumber = router.query.studentNumber;

    console.log();

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

            createApplication(reqBody).then(() =>
                router.replace(`/application/successful?studentNumber=${studentNumber}`),
            );
        },
    });

    return (
        <div className="w-screen min-h-screen">
            <Head>
                <title>Step Two | MfundiRez Applications</title>
            </Head>
            <main className="flex overflow-hidden">
                <form
                    className="flex flex-col items-center justify-center w-full"
                    onSubmit={applicationForm.handleSubmit}>
                    <h1 className="text-4xl mb-5 font-bold italic tracking-wider">
                        MfundiRez Registration
                    </h1>
                    <section className="p-5 w-full grid grid-cols-1 gap-y-5">
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
                            <select
                                className="border-2 rounded-md p-1 outline-none mt-2"
                                name="roomType"
                                id="roomType"
                                value={applicationForm.values.roomType}
                                onChange={applicationForm.handleChange}>
                                <option value="single">Single (Student co-payment required)</option>
                                <option value="two-sharing">Two Sharing</option>
                                <option value="three-sharing">Three Sharing</option>
                            </select>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="funding">
                                Funding Type <span>*</span>
                            </label>
                            <select
                                className="border-2 rounded-md p-1 outline-none mt-2"
                                name="funding"
                                id="funding"
                                value={applicationForm.values.funding}
                                onChange={applicationForm.handleChange}>
                                <option value="nsfas">NSFAS</option>
                                <option value="cash">Cash Paying</option>
                            </select>
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
                        className="flex w-full md:w-2/5 justify-center py-2 px-4 mt-3 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-amber-500 hover:bg-amber-600 focus:outline-none">
                        Submit Application
                    </button>
                </form>
                <img src="/image.jpg" alt="" className="w-3/5 h-screen" />
            </main>
        </div>
    );
};

export default StepTwo;
