import React from 'react';
import AppLayout from '../components/AppLayout';
import MainSect1 from '../components/mainSect1';
import MainSect3 from '../components/mainSect3';
import MainSect2 from '../components/mainSect2';


const Main = () => {
    return (
        <AppLayout>
            <MainSect1/>
            <MainSect2/>
            <MainSect3/>
        </AppLayout>
    );
}

export default Main;