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
        <p>MerchantCode: {router.query.merchantCode}</p>
        <div>
            <h1>Second template header</h1>
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
            <h2>Second template body</h2>
            {body.flightCalc && <div>
                <h3>Flight calc is displayed</h3>
                <p>{body.flightCalc.text}</p>
                <p>{body.flightCalc.settings}</p>
            </div>}
            {body.projects && <div>
                <h3>Projects are displayed</h3>
                <ul>
                    {body.projects.map((project) => (<li>{project}</li>))}
                </ul>

            </div>}
            {body.footprint && <p>Footprint is displayed</p>}
            {body.globalImpact && <p>{body.globalImpact.mainText}</p>}
        </div>
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