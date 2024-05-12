export declare type CanisterIdString = string;
export declare type NeuronId = bigint;
export declare type AccountIdentifier = string;
export declare type BlockHeight = bigint;
export declare type E8s = bigint;
export declare type Memo = bigint;
export declare type PrincipalString = string;
export declare type SubAccount = Uint8Array;
export declare enum WalletType {
    nns = "nns",
    plug = "plug",
    stoic = "stoic",
    me = "me",
    unknown = "unknown"
}
export interface Balance {
    value: string;
    decimals: number;
}
