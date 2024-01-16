'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

import { SendEmailInput } from 'app/components/MainContent/components/SendEmailInput';
import { TableView } from 'app/components/MainContent/components/TableView';

import TableMock from '/public/main/mockups.png';

import scss from './MainContent.module.scss';

export const MainContent = () => {
    return (
        <div className={scss.main_content_wrapper}>
            <motion.section
                initial={{ x: '-25%', opacity: 0 }}
                whileInView={{ x: '0', opacity: 1 }}
                transition={{
                    delay: 0.1,
                }}
                viewport={{ once: true }}
                className={scss.description}
            >
                <h1>Unlock valuable insights from subscription data</h1>
                <p>
                    Analyze your subscription ecosystem for cost optimization
                    and risk management
                </p>
                <div className={scss.email_input}>
                    <SendEmailInput />
                </div>
            </motion.section>
            <motion.div
                initial={{ y: '10%', opacity: 0 }}
                whileInView={{ y: '0', opacity: 1 }}
                className={scss.image_wrapper}
            >
                <div>
                    <TableView />
                </div>
                <Image
                    className={scss.image_mock}
                    fill
                    src={TableMock}
                    alt="mock for table"
                />
            </motion.div>
        </div>
    );
};
