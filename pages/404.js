import React, { Fragment, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";

const NotFound = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push("/");
        }, 3000);
    }, [router]);

    return (
        <Fragment>
            <Head>
                <title>Page is Not Found</title>
                <meta name="keywords" content="ninjas" />
            </Head>
            <div className="not-found">
                <h1>Ooops...</h1>
                <h2>That page can&apos;t be found</h2>
                <p>
                    Go Back to the{" "}
                    <Link href="/">
                        <a>Home Page</a>
                    </Link>
                </p>
            </div>
        </Fragment>
    );
};

export default NotFound;
