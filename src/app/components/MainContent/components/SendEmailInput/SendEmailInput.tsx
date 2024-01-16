'use client';

import { Input } from 'components/UI/Input/Input';
import React, { ChangeEventHandler, useState } from 'react';
import { StatusType } from 'components/UI/Input/types';
import { isEmailValid } from 'utils/isEmailValid';
import {toast} from "react-toastify";

export const SendEmailInput = () => {
    const [status, setStatus] = useState<StatusType>('pending');

    const [email, setEmail] = useState('');

    const [touched, setTouched] = useState<{ email?: boolean }>();
    const [errors, setErrors] = useState<{ email?: string }>();

    const Validate = (email: string) => {
        if (!email) {
            setErrors({email: `Email is required field`})
            setStatus('pending')
        }
    }

    const onChange: ChangeEventHandler<HTMLInputElement> = async (event) => {
        setStatus('pending')
        setErrors(undefined)
        const email = event.target.value;
        Validate(email)
        setEmail(email)
    };

    const handleSubmit = async () => {
        setStatus('loading');
        setTouched({email: true})
        Validate(email)
        if (errors) {
            return
        }
        await new Promise((resolve) => setTimeout(resolve, 2000));
        if (isEmailValid(email)) {
            setStatus('success');
            toast('Success subscribe!', {
                type: 'success'
            })
            setTimeout(() => setStatus('pending'), 3000);
        } else {
            setErrors({email: 'Incorrect email'})
            setStatus('error')
        }
    }

    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
        if (!email) {
            setErrors({email: 'Email is required field'})
        }
        setTouched({ [event.target.name]: true });
    };



    return (
        <>
            <Input
                status={status}
                button={{
                    onClick: () => handleSubmit(),
                    text: 'Free trial',
                }}
                handleError={touched?.email && errors?.email}
                onChange={onChange}
                onBlur={handleBlur}
                placeholder="Your business email..."
                value={email}
                name="email"
            />
        </>
    );
};
