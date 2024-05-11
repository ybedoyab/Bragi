import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface _SERVICE {
  'createUser' : ActorMethod<
    [string, string, string, string],
    {
      'id' : Principal,
      'alias' : string,
      'nombre' : string,
      'segundoApellido' : string,
      'primerApellido' : string,
    }
  >,
  'deleteUser' : ActorMethod<
    [string],
    {
        'Ok' : {
          'id' : Principal,
          'alias' : string,
          'nombre' : string,
          'segundoApellido' : string,
          'primerApellido' : string,
        }
      } |
      { 'Err' : { 'UserDoesNotExist' : string } }
  >,
  'readUserById' : ActorMethod<
    [string],
    [] | [
      {
        'id' : Principal,
        'alias' : string,
        'nombre' : string,
        'segundoApellido' : string,
        'primerApellido' : string,
      }
    ]
  >,
  'readUsers' : ActorMethod<
    [],
    Array<
      {
        'id' : Principal,
        'alias' : string,
        'nombre' : string,
        'segundoApellido' : string,
        'primerApellido' : string,
      }
    >
  >,
  'updateUser' : ActorMethod<
    [string, string, string, string, string],
    {
        'Ok' : {
          'id' : Principal,
          'alias' : string,
          'nombre' : string,
          'segundoApellido' : string,
          'primerApellido' : string,
        }
      } |
      { 'Err' : { 'UserDoesNotExist' : string } }
  >,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
