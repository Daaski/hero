import { ChangeEventHandler, FocusEvent, KeyboardEventHandler } from 'react';

interface SubmitButtonData {
    text: string
    onClick: () => void
}

export type StatusType = 'pending' | 'loading' | 'error' | 'success'

export interface ButtonWrapperProps {
    buttonData: SubmitButtonData
    status: StatusType
}

export interface IInputProps {
    value: string;
    name: string | 'search';
    onChange: ChangeEventHandler<HTMLInputElement>
    button?: SubmitButtonData
    autoFocus?: boolean;
    handleError?: string | boolean;
    onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
    status?: 'pending' | 'loading' | 'error' | 'success'
    type?: HTMLInputElement['type'];
    placeholder?: string;
    autoComplete?: 'on' | 'off' | 'new-password';
    tabIndex?: number;
    label?: string;
    needErrorLabel?: boolean;
}
