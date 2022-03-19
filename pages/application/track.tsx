import { useFormik } from "formik";
import type { NextPage, NextPageContext } from "next";
import Head from "next/head";
import { useState } from "react";
import { getApplication } from "../../utils/api_calls";

const TrackApplication: NextPage = ({ application }: any | null) => {
    const [stdApplication, setStdApplication] = useState(application);

    const searchForm = useFormik({
        initialValues: {
            studentNumber: "",
        },
        onSubmit: async (values) => {
            setStdApplication(await getApplication(values.studentNumber));
        },
    });

    return (
        <div className="w-screen min-h-screen">
            <Head>
                <title>Track | MfundiRez Applications</title>
            </Head>
            <main className="flex overflow-hidden">
                <section className="w-full flex flex-col items-center mt-20">
                    <h1 className="text-4xl mb-5 font-bold italic tracking-wider">
                        MfundiRez Registration
                    </h1>
                    <form className="w-4/5 mb-10" onSubmit={searchForm.handleSubmit}>
                        <div className="space-x-3 w-full flex items-center">
                            <input
                                className="border-2 rounded-md p-1 py-[6px] outline-none mt-2 flex-1"
                                type="text"
                                name="studentNumber"
                                id="studentNumber"
                                value={searchForm.values.studentNumber}
                                onChange={searchForm.handleChange}
                                placeholder="223161594"
                            />
                            <input
                                className="justify-center py-2 px-4 mt-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none"
                                type="submit"
                                value="Search"
                            />
                        </div>
                    </form>
                    {stdApplication && (
                        <div className="shadow shadow-amber-500/80 w-4/5 rounded-md p-3">
                            <div className="text-left">
                                <section className="grid grid-cols-1 gap-y-3">
                                    <div className="grid grid-cols-2 capitalize">
                                        <p className="font-bold">Student Number</p>
                                        <p>{stdApplication.studentNumber}</p>
                                    </div>
                                    <div className="grid grid-cols-2 capitalize">
                                        <p className="font-bold">Building</p>
                                        <p>{stdApplication.building}</p>
                                    </div>
                                    <div className="grid grid-cols-2 capitalize">
                                        <p className="font-bold">Room Type</p>
                                        <p>{stdApplication.roomType}</p>
                                    </div>
                                    <div className="grid grid-cols-2 capitalize">
                                        <p className="font-bold">Funding</p>
                                        <p>{stdApplication.funding}</p>
                                    </div>
                                    <div className="grid grid-cols-2 capitalize">
                                        <p className="font-bold">Status</p>
                                        <p>{stdApplication.status}</p>
                                    </div>
                                </section>
                            </div>
                        </div>
                    )}
                </section>
                <img src="/image.jpg" alt="" className="w-3/5 h-screen" />
            </main>
        </div>
    );
};

export default TrackApplication;

export async function getServerSideProps(ctx: NextPageContext) {
    if (ctx.query.studentNumber) {
        const application = await getApplication(ctx.query.studentNumber as string);
        return {
            props: {
                application,
            },
        };
    } else
        return {
            props: {
                application: null,
            },
        };
}
