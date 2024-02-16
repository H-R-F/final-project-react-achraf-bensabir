import React from 'react';
import { FirstSectionRegister } from './components/signup';
import { Header } from '../../layouts/header';
import { Footer } from '../../layouts/footer';

export const Signup = () => {
    return (
        <>
            <Header />
            <FirstSectionRegister />
            <Footer />
        </>
    );
};

