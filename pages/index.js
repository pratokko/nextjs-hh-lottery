

import Header from "@/components/Header"
import LotteryEntrance from "@/components/LotteryEntrance"
import Head from "next/head"


export default function Home() {
    return (
        <>
            <Head>
                <title>Decentralized Lottery App</title>
                <meta name="description" content="Our smart contract Lottery" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* header connect button navBar */}
            <Header />
            <LotteryEntrance />
            
          
        </>
    )
}
