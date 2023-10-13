

export const ADDRESS_ZERO = '0x0000000000000000000000000000000000000000'
 
export function FACTORY_ADDRESS(chainId: number): string {
  if (chainId == 280)
    return '0xFF13FaDD7Bd6E9189De7C7320bedE08E77E2ddA1'
  else if (chainId == 324) {
    return '0xc713b22Dcce8DD9E46C3b886848d378d1d0C22A8'
  }
  else
    return '0xc713b22Dcce8DD9E46C3b886848d378d1d0C22A8'
}


export function POOL_INIT_CODE_HASH(chainId: number): string {
  if (chainId == 280)
    return '0x010013ef0e3a86295866ccb9f11899a28961f41895fdc5b8361716f78f7e3f66'
  else if (chainId == 324) {
    return '0x010013efa2e0a6b8508ba65ba8e424c01dd8fa715bac96ab05c5ed82b0e88754'
  }
  else
    return '0x010013efa2e0a6b8508ba65ba8e424c01dd8fa715bac96ab05c5ed82b0e88754'
}

/**
 * The default factory enabled fee amounts, denominated in hundredths of bips.
 */
export enum FeeAmount {
  LOWEST = 100,
  LOW = 500,
  MEDIUM = 3000,
  HIGH = 10000
}

/**
 * The default factory tick spacings by fee amount.
 */
export const TICK_SPACINGS: { [amount in FeeAmount]: number } = {
  [FeeAmount.LOWEST]: 1,
  [FeeAmount.LOW]: 10,
  [FeeAmount.MEDIUM]: 60,
  [FeeAmount.HIGH]: 200
}