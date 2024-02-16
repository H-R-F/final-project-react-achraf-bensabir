import React from 'react';
import { FirstSectionAccount } from './components/signin';
import { Header } from '../../layouts/header';
import { Footer } from '../../layouts/footer';

export const Signin = () => {
    return (
        <>
            <Header/>
            <FirstSectionAccount/>
            <Footer/>
        </>
    );
};

