import { useWeb3Contract } from "react-moralis"

import { contractAddresses, abi } from "../constants"
import { useMoralis } from "react-moralis"
import { useEffect, useState } from "react"

const LotteryEntrance = () => {
    const { chainId: chainIdHex, isWeb3Enabled } = useMoralis()

    const chainId = parseInt(chainIdHex)

    const raffleAddress = chainIdHex in contractAddresses ? contractAddresses[chainId][0] : null

    console.log(raffleAddress);

    const [entranceFee, setEntranceFee] = useState("0")

    console.log(parseInt(chainIdHex))

    // const { runContractFunction: enterRaffle } = useWeb3Contract({
    //     abi: abi,
    //     contractAddress: raffleAddress,
    //     functionName:  "enterRaffle",
    //     params: {},
    //     msgValue://

    // })

    const { runContractFunction: getEntranceFee } = useWeb3Contract({
        abi: abi,
        contractAddress: raffleAddress,
        functionName: "getEntranceFee",
        params: {},
    })

    useEffect(() => {
        const updateUI = async () => {
            if (isWeb3Enabled) {
                try {
                    
                    const entranceFeeFromCall = (await getEntranceFee()).toString()

                    console.log(entranceFeeFromCall);
                    setEntranceFee(entranceFeeFromCall)
                    console.log("Entrance fee:", entranceFee)
                    
                } catch (error) {
                    console.log("Error fetching entrance fee:", error)
                }
            }
        }

        updateUI()
    }, [isWeb3Enabled])

    return <div>{entranceFee}</div>
}
export default LotteryEntrance
