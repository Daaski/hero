import React from 'react';
import type { Metadata } from 'next';

import { ToastContainer } from 'react-toastify';

import { Header } from 'app/components/Header';

import { poppins } from 'assets/font/poppins';
import { roboto } from 'assets/font/roboto';
import {editorialNew} from "assets/font/editorialNew";

import scss from './MainPage.module.scss';
import 'react-toastify/dist/ReactToastify.css';
import 'scss/utils.scss';
import 'scss/_reset.scss';

export const metadata: Metadata = {
    title: 'Hero',
    description: "It's my hero project",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ru">
            <body
                className={`${poppins.variable} ${roboto.variable} ${editorialNew.variable} ${scss.body}`}
            >
                <Header />
                <div>{children}</div>
                <ToastContainer />
            </body>
        </html>
    );
}
