import React from 'react';

import { motion } from 'framer-motion';

import LoadingSvg from 'components/UI/Input/svg/CircleSvg.svg';
import SuccessSvg from 'components/UI/Input/svg/SuccessSvg.svg';

import scss from 'components/UI/Input/Input.module.scss';

export const SvgWrapper: React.FC<{ status: string }> = ({ status }) => {
    switch (status) {
        case 'error':
            return (
                <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                >
                    <motion.circle
                        animate={{ fill: '#CB6AFB' }}
                        cx="24"
                        cy="24"
                        r="24"
                        fill="#CB6AFB"
                    />
                    <motion.path
                        style={{ rotate: '180deg' }}
                        initial={{ pathLength: 0 }}
                        animate={{
                            pathLength: 1,
                            transition: {
                                delay: 0.1,
                            },
                        }}
                        d="M30.8571 17.1428L17.1428 30.8571"
                        stroke="white"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <motion.path
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        d="M17.1429 17.1428L30.8572 30.8571"
                        stroke="white"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </motion.svg>
            );
        case 'success':
            return (
                <motion.div
                    animate={{ backgroundColor: '#40BFAA' }}
                    className={scss.svg_wrapper}
                >
                    <motion.svg
                        className={scss.default}
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        height="100%"
                        viewBox="0 0 24 24"
                        fill="none"
                    >
                        <motion.path
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            d="M20 6L9 17L4 12"
                            stroke="white"
                            strokeWidth="1.99832"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </motion.svg>
                </motion.div>
            );
        case 'loading':
            return (
                <motion.div
                    animate={{ backgroundColor: '#9966FF' }}
                    className={scss.svg_wrapper}
                >
                    <LoadingSvg className={scss.loading} />
                </motion.div>
            );
    }
};
