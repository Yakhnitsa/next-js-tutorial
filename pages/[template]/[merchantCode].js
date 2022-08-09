import {useRouter} from "next/router";

export default function MerchantPage({content}) {
    const router = useRouter();
    const {head, header, body, footer} = content;
    return (<>
        <Head>
            <title>{head?.title}</title>
        </Head>
        <div>
            <h1>Dynamic template header</h1>
            <p>{header.text}</p>
            <h3>Menu</h3>
            <ul>
                {header.menu.map((menuItem) =>
                    (<li key={menuItem}>
                        {menuItem}
                    </li>)
                )}
            </ul>
        </div>
        <div>
            <h2>Dynamic template body</h2>
            {body.flightCalc && <p>Flight calc is displayed</p>}
            {body.projects && <p>Projects are displayed</p>}
            {body.footprint && <p>Footprint is displayed</p>}
        </div>
        <p>Template: {router.query.template} </p>
        <p>MerchantCode: {router.query.merchantCode}</p>
    </>)
}

import fsPromises from 'fs/promises';
import path from 'path'
import Head from "next/head";
export async function getServerSideProps(context) {
    const merchantCode = context.query.merchantCode;
    const filePath = path.join(process.cwd(), `api/${merchantCode}.json`);
    const jsonData = await fsPromises.readFile(filePath);
    const content = JSON.parse(jsonData);
    return {
        props: {
            content
        }, // will be passed to the page component as props
    }
}