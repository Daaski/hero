'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { motion, AnimatePresence, useSpring, MotionValue } from 'framer-motion';
import Tippy from '@tippyjs/react/headless';

import ArrowSvg from 'app/components/Header/svg/ArrowSvg.svg';

import { HeaderDropdownProps } from 'app/components/Header/types';

import scss from 'app/components/Header/Header.module.scss';

export const HeaderDropdown: React.FC<HeaderDropdownProps> = ({
    childs,
    text,
}) => {
    const opacity = useSpring(0);

    const [visible, setVisible] = useState(false);

    function onHide({
        opacity,
        unmount,
    }: {
        unmount: () => void;
        opacity: MotionValue<number>;
    }) {
        const cleanup = opacity.on('change', (value) => {
            if (value <= 0) {
                cleanup();
                unmount();
            }
        });

        opacity.set(0);
    }

    return (
        <div style={{ position: 'relative' }}>
            <Tippy
                onMount={() => opacity.set(1)}
                onHide={({ unmount }) => onHide({ opacity, unmount })}
                animation={true}
                interactive={true}
                visible={visible}
                placement="bottom"
                onClickOutside={() => setVisible(!visible)}
                render={(attrs) => (
                    <AnimatePresence>
                        {visible && (
                            <motion.ul
                                {...attrs}
                                style={{ opacity }}
                                className={scss.link_childs}
                            >
                                {childs.map((el, index) => (
                                    <li key={index}>
                                        <Link href={el.href}>{el.text}</Link>
                                    </li>
                                ))}
                            </motion.ul>
                        )}
                    </AnimatePresence>
                )}
            >
                <div
                    onClick={() => setVisible(!visible)}
                    className={scss.link_with_childs}
                >
                    <p className={scss.link}>{text}</p>
                    <ArrowSvg
                        className={visible ? scss.link_open : undefined}
                    />
                </div>
            </Tippy>
        </div>
    );
};
