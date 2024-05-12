import { ActorSubclass, HttpAgent, SignIdentity } from '@dfinity/agent';
import { InterfaceFactory } from '@dfinity/candid/lib/cjs/idl';
import { DelegationIdentity } from '@dfinity/identity';
import { AbstractConnection, CreateActorResult, DelegationMessage, HandleDelegationResult } from '../types';
export declare function createConnection<T>(identity: SignIdentity, delegationIdentity: DelegationIdentity, canisterId: string, interfaceFactory: InterfaceFactory, actor?: ActorSubclass<T>, agent?: HttpAgent): BaseConnection<T>;
export declare const requestDelegation: (identity: SignIdentity, { canisterId, date }: {
    canisterId?: string | undefined;
    date?: Date | undefined;
}) => Promise<DelegationIdentity>;
export declare function _createActor<T>(interfaceFactory: InterfaceFactory, canisterId: string, identity?: SignIdentity, host?: string): Promise<CreateActorResult<T>>;
export declare class BaseConnection<T> implements AbstractConnection<T> {
    identity: SignIdentity;
    delegationIdentity: DelegationIdentity;
    canisterId: string;
    interfaceFactory: InterfaceFactory;
    actor?: ActorSubclass<T> | undefined;
    agent?: HttpAgent | undefined;
    constructor(identity: SignIdentity, delegationIdentity: DelegationIdentity, canisterId: string, interfaceFactory: InterfaceFactory, actor?: ActorSubclass<T> | undefined, agent?: HttpAgent | undefined);
    getActor(): Promise<ActorSubclass<T>>;
    protected _getActor(canisterId: string, interfaceFactory: InterfaceFactory, date?: Date): Promise<ActorSubclass<T>>;
}
export declare function handleDelegation(message: DelegationMessage, key: SignIdentity): Promise<HandleDelegationResult>;
export declare const executeWithLogging: <T>(func: () => Promise<T>) => Promise<T>;
