

export const ADDRESS_ZERO = '0x0000000000000000000000000000000000000000'
 
export function FACTORY_ADDRESS(chainId: number): string {
  if (chainId == 280)
    return '0xFF13FaDD7Bd6E9189De7C7320bedE08E77E2ddA1'
  else if (chainId == 324) {
    return '0xc713b22Dcce8DD9E46C3b886848d378d1d0C22A8'
  }
  else if (chainId == 59144) {
    return '0xB4bAed9529E637EB33F7433199131cD4D48D53c5'
  }
  else if (chainId == 59140) {
    return '0x6C0C828200ecA0E2562D77b62d0eB5477477E22D'
  }
  else if (chainId == 195) {
    return '0x5b227f8B83716e5D7e95BA5A67882dc585d36431'
  }
  else
    return '0x1F98431c8aD98523631AE4a59f267346ea31F984' //
}


export function POOL_INIT_CODE_HASH(chainId: number): string {
  if (chainId == 280)
    return '0x010013ef0e3a86295866ccb9f11899a28961f41895fdc5b8361716f78f7e3f66'
  else if (chainId == 324) {
    return '0x010013efa2e0a6b8508ba65ba8e424c01dd8fa715bac96ab05c5ed82b0e88754'
  }
  else if (chainId == 59144) {
    return '0x11cafa679c6c56f22f62639340e6f1e9ecf621993f96bc3740011e4bb7f6c647'
  }
  else if (chainId == 59140) {
    return '0xc632952ed4748051b28453b8d940bf7a75c3f51c69ba2ac6676fdc36deeb9b56'
  }
  else if (chainId == 195) {
    return '0x11cafa679c6c56f22f62639340e6f1e9ecf621993f96bc3740011e4bb7f6c647'
  }
  else
    return '0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54' //
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