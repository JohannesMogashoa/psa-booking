import { useFormik } from "formik";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

const Successful: NextPage = () => {
    const router = useRouter();
    const studentNumber = router.query.studentNumber;

    return (
        <div className="w-screen min-h-screen">
            <Head>
                <title>Successful | MfundiRez Applications</title>
            </Head>
            <main className="flex overflow-hidden">
                <section className="flex flex-col items-center justify-center">
                    <h1 className="text-4xl mb-5 font-bold italic tracking-wider">
                        MfundiRez Registration
                    </h1>
                    <h1 className="font-bold text-xl mb-10">
                        Your Application was Submitted Successfully
                    </h1>
                    <p className="mb-5 text-lg">
                        Thank you <span className="font-extrabold italic">s{studentNumber}</span>{" "}
                        for considering our residence.
                    </p>
                    <p className="mb-5 text-sm p-5">
                        You will receive an email with a copy of your application. Our team will
                        process it and let you know. The email will include a link at which you can
                        track your application. Once again, thank for considering{" "}
                        <span className="font-bold">MfundiRez</span>.
                    </p>
                    <button
                        onClick={() => router.replace("/")}
                        className="inline-flex justify-center py-2 px-4 mt-3 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-amber-500 hover:bg-amber-600 focus:outline-none w-2/3">
                        Go Home
                    </button>
                </section>
                <img src="/image.jpg" alt="" className="w-3/5 h-screen" />
            </main>
        </div>
    );
};

export default Successful;
