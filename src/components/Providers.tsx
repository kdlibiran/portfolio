'use client'
import { ThemeProvider } from "next-themes";
import { FC, ReactNode } from "react";

interface ProvidersProps {}

const Providers = ({ children } : { children: ReactNode }) => {
    return <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
    </ThemeProvider>;
};

export default Providers;