import React from 'react';
import { FirstSectionPro } from './components/firstSectionPro';
import { Header } from '../../layouts/header';
import { Footer } from '../../layouts/footer';
import { SecondSectionPro } from './components/secondSection';

export const Product = () => {
    return (
        <>
            <Header/>
            <FirstSectionPro/>
            <SecondSectionPro/>
            <Footer/>
        </>
    );
};

