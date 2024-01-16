import React from 'react';

import { MainContent } from 'app/components/MainContent';
import {Benefits} from "app/components/Benefits";

import scss from './MainPage.module.scss';

export default function Home() {
    return (
        <main className={scss.home_page}>
            <MainContent />
            <Benefits />
        </main>
    );
}
