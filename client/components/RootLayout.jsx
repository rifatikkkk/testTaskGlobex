import React from 'react'
import Head from 'next/head'

const RootLayout = ({ children, keywords }) => {
    return (
        <div className='root'>
            <Head>
                <meta keywords={'Глобэкс, АйТи, Globex, IT'}></meta>
                <title>Отчет</title>
            </Head>
            
            <main className="content">
                {children}
            </main>
        </div >
    )
}

export default RootLayout