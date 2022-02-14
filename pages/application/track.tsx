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
        <>
            <Head>
                <title></title>
            </Head>
            <main className="">
                <h1>Track Your Application Status</h1>
                <form className="w-screen md:max-w-2xl mx-auto" onSubmit={searchForm.handleSubmit}>
                    <div className="space-x-3 w-full flex items-center">
                        <input
                            className="border-2 rounded-md p-1 outline-none mt-2 flex-1"
                            type="text"
                            name="studentNumber"
                            id="studentNumber"
                            value={searchForm.values.studentNumber}
                            onChange={searchForm.handleChange}
                            placeholder="Please enter your student number without the 's'"
                        />
                        <input
                            className="justify-center py-2 px-4 mt-3 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none"
                            type="submit"
                            value="Search"
                        />
                    </div>
                </form>
                {stdApplication && (
                    <>
                        <p>Here is your application:</p>
                        <div>
                            <table>
                                <tbody>
                                    <tr>
                                        <th>Student Number</th>
                                        <td>{stdApplication.studentNumber}</td>
                                    </tr>
                                    <tr>
                                        <th>Building</th>
                                        <td>{stdApplication.building}</td>
                                    </tr>
                                    <tr>
                                        <th>Room Type</th>
                                        <td>{stdApplication.roomType}</td>
                                    </tr>
                                    <tr>
                                        <th>Funding</th>
                                        <td>{stdApplication.funding}</td>
                                    </tr>
                                    <tr>
                                        <th>Status</th>
                                        <td>Processed</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </>
                )}
            </main>
        </>
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
