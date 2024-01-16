import Image from 'next/image';

import { SignatureSvg } from 'app/components/MainContent/components/TableView/SignatureSvg';

import { requisitesData } from 'app/components/MainContent/components/TableView/tempData/requisitesData';
import { termsData } from 'app/components/MainContent/components/TableView/tempData/termsData';
import {
    tableBody,
    tableHeaders,
} from 'app/components/MainContent/components/TableView/tempData/tableData';

import TableBg from '/public/main/mask.png';

import scss from './TableView.module.scss';

export const TableView = () => {
    return (
        <section
            className={scss.view_wrapper}
        >
            <div className={scss.acme_showcase}>
                <h2 className={scss.showcase_logo}>Acme Corp.</h2>
                <hr className={scss.line} />
                <ul className={scss.requisites}>
                    {requisitesData.map((desc, index) => (
                        <li key={index}>{desc}</li>
                    ))}
                </ul>
                <hr className={scss.line} />
                <div className={scss.terms}>
                    <h4>Subscription Terms</h4>
                    <ul className={scss.terms_list}>
                        {termsData.map((el, index) => (
                            <li key={index}>
                                {el.key} <span>{el.value}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={scss.table_wrapper}>
                    <table className={scss.table}>
                        <thead>
                            <tr>
                                {tableHeaders.map((el, index) => (
                                    <th className={scss.table_head} key={index}>
                                        {el}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className={scss.table_body}>
                            {tableBody.map((tableRows, index) => (
                                <tr key={index}>
                                    {tableRows.map((el, index) => (
                                        <td
                                            className={scss.table_td}
                                            key={index}
                                        >
                                            {el}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className={scss.view_footer}>
                    <div className={scss.svg_wrapper}>
                        <SignatureSvg />
                    </div>
                    <div className={scss.table_total}>
                        <p>1-year Total:</p>
                        <span>$255,000</span>
                    </div>
                </div>
                <Image
                    fill
                    className={scss.image}
                    src={TableBg}
                    alt="showcase"
                />
            </div>
        </section>
    );
};
