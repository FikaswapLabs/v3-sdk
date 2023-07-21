import { defaultAbiCoder } from '@ethersproject/abi'
import { keccak256 } from '@ethersproject/solidity'
import { getCreate2Address } from '@ethersproject/address'
import { Token } from '@fikaswap/sdk-core'
import { FeeAmount, POOL_INIT_CODE_HASH } from '../constants'
import * as ethers from 'ethers'

/**
 * Computes a pool address
 * @param factoryAddress The Uniswap V3 factory address
 * @param tokenA The first token of the pair, irrespective of sort order
 * @param tokenB The second token of the pair, irrespective of sort order
 * @param fee The fee tier of the pool
 * @param initCodeHashManualOverride Override the init code hash used to compute the pool address if necessary
 * @returns The pool address
 */
export function computePoolAddress({
  factoryAddress,
  tokenA,
  tokenB,
  fee,
  initCodeHashManualOverride
}: {
  factoryAddress: string
  tokenA: Token
  tokenB: Token
  fee: FeeAmount
  initCodeHashManualOverride?: string
}): string {
  const [token0, token1] = tokenA.sortsBefore(tokenB) ? [tokenA, tokenB] : [tokenB, tokenA] // does safety checks
  const prefix = '0x2020dba91b30cc0006188af794c2fb30dd8520db7e2c088b7fc7c103c00ca494' //ethers.utils.keccak256(ethers.utils.toUtf8Bytes('zksyncCreate2'));
  const inputHash = '0xc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470' // ethers.utils.keccak256('0x');

  const salt = ethers.utils.keccak256(defaultAbiCoder.encode(['address', 'address', 'uint24'], [token0, token1, fee]))

  const addressBytes = ethers.utils
    .keccak256(
      ethers.utils.concat([
        prefix,
        ethers.utils.zeroPad(factoryAddress, 32),
        salt,
        initCodeHashManualOverride ?? POOL_INIT_CODE_HASH,
        inputHash
      ])
    )
    .slice(26)
  const rs = ethers.utils.getAddress(addressBytes)
  return rs
}

export function uni_computePoolAddress({
  factoryAddress,
  tokenA,
  tokenB,
  fee,
  initCodeHashManualOverride
}: {
  factoryAddress: string
  tokenA: Token
  tokenB: Token
  fee: FeeAmount
  initCodeHashManualOverride?: string
}): string {
  const [token0, token1] = tokenA.sortsBefore(tokenB) ? [tokenA, tokenB] : [tokenB, tokenA] // does safety checks

  return getCreate2Address(
    factoryAddress,
    keccak256(
      ['bytes'],
      [defaultAbiCoder.encode(['address', 'address', 'uint24'], [token0.address, token1.address, fee])]
    ),
    initCodeHashManualOverride ?? '0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54'
  )
}
