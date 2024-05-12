import { ActorSubclass, HttpAgent, SignIdentity } from '@dfinity/agent';
import { DelegationIdentity } from '@dfinity/identity';
import { BaseConnection } from './baseConnection';
import NNS_SERVICE, { AccountDetails, AccountIdentifier, GetTransactionsResponse } from '../canisters/nns-dapp';
import { CreateActorResult } from '../types';
export declare class NNSConnection extends BaseConnection<NNS_SERVICE> {
    identity: SignIdentity;
    delegationIdentity: DelegationIdentity;
    actor?: ActorSubclass<NNS_SERVICE> | undefined;
    agent?: HttpAgent | undefined;
    get accountDetails(): AccountDetails | undefined;
    private _accountDetails?;
    protected constructor(identity: SignIdentity, delegationIdentity: DelegationIdentity, actor?: ActorSubclass<NNS_SERVICE> | undefined, agent?: HttpAgent | undefined, nnsCanisterId?: string);
    /**
     * create connection
     * @param identity
     * @param delegationIdentity
     * @param actor
     * @param agent
     * @function createConnection
     * @returns {NNSConnection}
     */
    static createConnection(identity: SignIdentity, delegationIdentity: DelegationIdentity, actor?: ActorSubclass<NNS_SERVICE>, agent?: HttpAgent): NNSConnection;
    /**
     * create Actor with DelegationIdentity
     * @param delegationIdentity
     * @param nnsCanisterId
     * @function {function name}
     * @returns {type} {description}
     */
    static createActor(delegationIdentity: DelegationIdentity, nnsCanisterId?: string): Promise<CreateActorResult<NNS_SERVICE>>;
    static getTransactions({ nnsActor, delegationIdentity, }: {
        nnsActor?: ActorSubclass<NNS_SERVICE>;
        delegationIdentity?: DelegationIdentity;
    }, { page_size, offset, account_identifier, }: {
        page_size: number;
        offset: number;
        account_identifier: AccountIdentifier;
    }): Promise<GetTransactionsResponse>;
    /**
     * get NNS Actor, used internally
     * @param nnsCanisterId
     * @function {function name}
     * @returns {type} {description}
     */
    getNNSActor(nnsCanisterId?: string): Promise<ActorSubclass<NNS_SERVICE>>;
    /**
     * get NNS Actor, used internally
     * @param nnsCanisterId
     * @function {function name}
     * @returns {type} {description}
     */
    getNNSActorCert(nnsCanisterId?: string): Promise<ActorSubclass<NNS_SERVICE>>;
    /**
     * when NNSConnection is created, we can get account created to NNS.
     * Even we can just calculate the login principal to NNS DApp, however,
     * The NNS DApp stores and create account, thus, a new Identity login will get NO ACCOUNT created by default.
     * We need to manually create account using `add_account` when no account found.
     *
     * @param cert
     * @function {function name}
     * @returns {type} {description}
     */
    getAccount(cert?: boolean): Promise<AccountDetails | undefined>;
    /**
     * create account when new identity logined to NNS
     * @function {function name}
     * @returns {type} {description}
     */
    addAccount(): Promise<string>;
}
