import { useFormik } from "formik";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

const Successful: NextPage = () => {
    const router = useRouter();
    const studentNumber = router.query.studentNumber;

    return (
        <>
            <Head>
                <title></title>
            </Head>
            <main className="flex flex-col items-center justify-center min-h-screen p-5 text-center w-screen">
                <section className="md:max-w-lg">
                    <h1 className="font-bold text-5xl sm:text-2xl md:text-4xl mb-10">
                        Your Application was Submitted Successfully
                    </h1>
                    <p className="mb-5 text-xl">
                        Thank you <span className="font-extrabold italic">s{studentNumber}</span>{" "}
                        for considering our residence.
                    </p>
                    <p className="mb-5">
                        You will receive an email with a copy of your application. Our team will
                        process it and let you know. The email will include a link at which you can
                        track your application. Once again, thank for considering{" "}
                        <span className="font-bold">PSA</span>.
                    </p>
                    <button
                        onClick={() => router.replace("/")}
                        className="inline-flex justify-center py-2 px-4 mt-3 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none w-full">
                        Go Home
                    </button>
                </section>
            </main>
        </>
    );
};

export default Successful;
