"use client";
import { useTheme } from '@/context/ThemeContext';
import { Breadcrumbs, Anchor } from '@mantine/core';
import Link from 'next/link';


const BreadCrumb = ({ data }) => {
    const { theme } = useTheme();
    const style = { color: theme === 'light' ? '#AECDFF !important': '#AECDFF !important' };

    const items = data?.map((item, index) => (
        <Link className={`my-bread-crumb ${data?.length === index + 1 ? "bread-crumb-current":""}`} 
          style={style}
          href={item.href} key={index}>
          {item.title}
        </Link>
    ));

    return (
        <Breadcrumbs>{items}</Breadcrumbs>
    );
}


export default BreadCrumb;



