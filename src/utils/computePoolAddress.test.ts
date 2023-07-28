import { Token } from '@fikaswap/sdk-core'
import { FeeAmount } from '../constants'
import { computePoolAddress } from './computePoolAddress'

describe('#computePoolAddress', () => {
  const factoryAddress = '0x016Bf5eC613b7CfdE94C28f37F65545EaFCAe16A'
  it('should correctly compute the pool address', () => {
    console.log({
      name:'do------------------------'
    })
    const tokenA = new Token(280, '0x881f241303C73DB5184634651B4Ecd274fB2536B', 18, 'USDT', 'USDT Coin') 
    const tokenB = new Token(280, '0x9c3b59003E8fb5E513720Dd485F4d674657dD01f', 18, 'tBTC', 'BTC Coin')

    console.log({
      name:'do-rs-----------------------',
      tokenA,
      tokenB
    })

    const result = computePoolAddress({
      factoryAddress,
      fee: FeeAmount.MEDIUM,
      tokenA,
      tokenB
    })
  console.log({
    name:'result-----------------------',
    tokenA,
    tokenB,
    result
  })

     expect(result).toEqual('0x50386657C03038f206202b893Cb229180f398443')
  })

  // it('should correctly compute the pool address', () => {
  //   const USDC = new Token(1, '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', 18, 'USDC', 'USD Coin')
  //   const DAI = new Token(1, '0x6B175474E89094C44Da98b954EedeAC495271d0F', 18, 'DAI', 'DAI Stablecoin')
  //   let tokenA = USDC
  //   let tokenB = DAI
  //   const resultA = computePoolAddress_UNI({
  //     factoryAddress,
  //     fee: FeeAmount.LOW,
  //     tokenA,
  //     tokenB
  //   })

  //   tokenA = DAI

  //   tokenB = USDC
  //   const resultB = computePoolAddress_UNI({
  //     factoryAddress,
  //     fee: FeeAmount.LOW,
  //     tokenA,
  //     tokenB
  //   })

  //   expect(resultA).toEqual(resultB)
  // })
})
