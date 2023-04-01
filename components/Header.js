import { ConnectButton } from "web3uikit"


const Header = () => {
  return (
    <div>
        <h2>Decentralized Lottery</h2>
        <ConnectButton  moralisAuth={false} />
    </div>
  )
}
export default Header