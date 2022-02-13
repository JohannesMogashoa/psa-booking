import { useFormik } from "formik";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

const TrackApplication: NextPage = () => {
    const router = useRouter();
    const studentNumber = router.query.studentNumber;

    return (
        <>
            <Head>
                <title></title>
            </Head>
            <main className=""></main>
        </>
    );
};

export default TrackApplication;
