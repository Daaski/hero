'use client';

import React from 'react';
import { motion } from 'framer-motion';

import { BenefitItemPros } from 'app/components/Benefits/types';

import scss from './Benefits.module.scss';

export const BenefitItem: React.FC<BenefitItemPros> = ({
    amount,
    delay,
    description,
    title,
}) => {
    return (
        <motion.li
            initial={{ y: '100%' }}
            whileInView={{ y: 0 }}
            transition={{
                delay: delay * 0.1,
            }}
            viewport={{once: true}}
            className={scss.benefit_item}
        >
            <h3 className={scss.benefit_amount}>{amount}</h3>
            <h5 className={scss.benefit_title}>{title}</h5>
            <hr className={scss.benefit_line} />
            <p className={scss.description}>{description}</p>
        </motion.li>
    );
};