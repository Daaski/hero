import React from 'react';
import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';

import { SvgWrapper } from 'components/UI/Input/SvgWrapper';

import { ButtonWrapperProps } from 'components/UI/Input/types';

import scss from 'components/UI/Input/Input.module.scss';

export const ButtonWrapper: React.FC<ButtonWrapperProps> = ({
    status,
    buttonData,
}) => {
    const buttonClass = clsx({
        [scss.button]: true,
    });

    return (
        <div className={scss.button_wrapper}>
            {status === 'pending' ? (
                <div
                    className={buttonClass}
                    onClick={() => buttonData.onClick()}
                >
                    {buttonData.text}
                </div>
            ) : (
                <SvgWrapper status={status} />
            )}
        </div>
    );
};
