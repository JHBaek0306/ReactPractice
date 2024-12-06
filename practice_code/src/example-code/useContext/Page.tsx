import React from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

interface PageProps {
    isDark: boolean;
    setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
}

const Page = () => {
    return (
        <div className="page">
            {/* <Header isDark={isDark} />
            <Content isDark={isDark} />
            <Footer isDark={isDark} setIsDark={setIsDark} /> */}
            <Header />
            <Content />
            <Footer />
        </div>
    );
};

export default Page;