import React, { Fragment } from "react";
import Head from "next/head";
import Link from "next/link";
import classes from "../../styles/Ninjas.module.css";

export const getStaticProps = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    return {
        props: {
            ninjas: data,
        },
    };
};

const index = ({ ninjas }) => {
    return (
        <Fragment>
            <Head>
                <title>Ninja List | Home</title>
                <meta name="keywords" content="ninjas" />
            </Head>
            <div>
                <h1>hai All Ninjas</h1>
                {ninjas.map((ninja) => (
                    <Link href={`/ninjas/${ninja.id}`} key={ninja.id}>
                        <a className={classes.single}>
                            <h3>{ninja.name}</h3>
                        </a>
                    </Link>
                ))}
            </div>
        </Fragment>
    );
};

export default index;
