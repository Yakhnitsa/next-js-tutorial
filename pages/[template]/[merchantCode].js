import {useRouter} from "next/router";
import Head from "next/head";
import {getUIConfigByMerchantCode} from "../../util/uiConfig/uiConfig";

export default function MerchantPage({uiConfig}) {
    const router = useRouter();
    const {head, header, body, footer} = uiConfig;
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
            {body.globalImpact && <p>{body.globalImpact.mainText}</p>}
        </div>
        <p>Template: {router.query.template} </p>
        <p>MerchantCode: {router.query.merchantCode}</p>
    </>)
}

export async function getServerSideProps(context) {
    const merchantCode = context.query.merchantCode;
    const uiConfig = await getUIConfigByMerchantCode(merchantCode);
    return {
        props: {
            uiConfig
        }
    }
}