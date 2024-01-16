import React, { ChangeEventHandler } from 'react';
import clsx from 'clsx';

import { IInputProps } from 'components/UI/Input/types';

import scss from 'components/UI/Input/Input.module.scss';
import { ButtonWrapper } from 'components/UI/Input/ButtonWrapper';

export const Input: React.FC<IInputProps> = ({
    type = 'text',
    placeholder,
    autoFocus,
    value,
    name,
    handleError,
    onChange,
    onBlur,
    autoComplete,
    tabIndex,
    label,
    button,
    status = 'pending',
    needErrorLabel = true,
}) => {
    const fieldClass = clsx({
        [scss.field]: true,
        [scss.field_without_error_label]: !needErrorLabel,
        [scss.field_without_label]: !label,
    });

    const labelErrorClass = clsx({
        [scss.input_error_label]: handleError,
    });

    const labelClass = clsx({
        [scss.input_label]: label,
    });

    const inputClass = clsx({
        [scss.input]: true,
        [scss.input_error]: handleError,
    });

    return (
        <div className={fieldClass}>
            {label && (
                <label htmlFor={name} className={labelClass}>
                    {label}
                </label>
            )}
            <div className={scss.input_wrapper}>
                <input
                    tabIndex={tabIndex}
                    autoComplete={autoComplete as string}
                    className={inputClass}
                    onChange={onChange as ChangeEventHandler<HTMLInputElement>}
                    value={value}
                    autoFocus={autoFocus}
                    id={name}
                    name={name}
                    placeholder={placeholder}
                    onBlur={onBlur}
                />
                {button && (
                    <ButtonWrapper buttonData={button} status={status} />
                )}
            </div>
            {handleError && (
                <label className={labelErrorClass}>{handleError}</label>
            )}
        </div>
    );
};
