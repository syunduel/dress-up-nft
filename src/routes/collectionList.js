import { Link } from "react-router-dom";
import NFTList from './nftList';
import {collectionData} from '../data/collectionData';

export default function CollectionList() {

    let targetEvmNFTs = [];
    // Love Addicted Girls
    targetEvmNFTs.push(collectionData["ethereum_0x9c99d7f09d4a7e23ea4e36aec4cb590c5bbdb0e2"]);
    // Love Addicted Girls Memories
    targetEvmNFTs.push(collectionData["matic_0x1a4041cce1aea5fff82e13780d1b1f522a047ef9"]);
    // ODENPETS
    targetEvmNFTs.push(collectionData["ethereum_0x3F457a3FD454B711867670846e7Cc525B249b5B6"])
    // CryptoNinja Partners
    targetEvmNFTs.push(collectionData["ethereum_0x845a007d9f283614f403a24e3eb3455f720559ca"]);
    // Very long CNP
    targetEvmNFTs.push(collectionData["ethereum_0xcfe50e49ec3e5eb24cc5bbce524166424563dd4e"]);
    // Tokyo Alternative Girls
    targetEvmNFTs.push(collectionData["ethereum_0xc067d3e859cbc2c4a8cf9be96bebfa24b0cba5a6"]);
    // Dreamin' Divers Project -Cheers!-
    targetEvmNFTs.push(collectionData["ethereum_0x11c3e2c4329df91f65a16612de90077498cfa6ca"]);
    // MediaDAO Friends Nagoya
    targetEvmNFTs.push(collectionData["ethereum_0xa63116b507ab035f8db0b56c7c1405208dd00df4"]);


    return (
        <>
            <div className="mv" key={'mv1'}>
                <p className="catch-copy">Let's dress up your NFT</p>
                <p>You can change your NFT clothes. First, select the NFT you want to dress up.</p>
            </div>

            <div className="collection">
                Organization（β）
            </div>

            <div className="mv" style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', padding: '1em'}}>
                <div>
                    <Link to={`/organization/SoudanNFT/`} style={{textDecoration: 'none'}}>
                        <div style={{height: '50px', width: '300px', margin: '10px' ,display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            SoudanNFT
                        </div>
                    </Link>
                </div>
                <div>
                    <Link to={`/organization/ODENDAO/`} style={{textDecoration: 'none'}}>
                        <div style={{height: '50px', width: '300px', margin: '10px' ,display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            ODENDAO
                        </div>
                    </Link>
                </div>
                <div>
                    <Link to={`/organization/Tokyo-Alternative-Girls/`} style={{textDecoration: 'none'}}>
                        <div style={{height: '50px', width: '300px', margin: '10px' ,display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            Tokyo Alternative Girls
                        </div>
                    </Link>
                </div>
            </div>

            {targetEvmNFTs.map((nowTargetEvmNFT) => (
                <div key={`${nowTargetEvmNFT.chain}_${nowTargetEvmNFT.address}`}>
                    {NFTList(nowTargetEvmNFT)}
                </div>
            ))}

        </>
    );
  }
