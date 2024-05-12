export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'createUser' : IDL.Func(
        [IDL.Text, IDL.Text, IDL.Text, IDL.Text],
        [
          IDL.Record({
            'id' : IDL.Principal,
            'alias' : IDL.Text,
            'nombre' : IDL.Text,
            'segundoApellido' : IDL.Text,
            'primerApellido' : IDL.Text,
          }),
        ],
        [],
      ),
    'deleteUser' : IDL.Func(
        [IDL.Text],
        [
          IDL.Variant({
            'Ok' : IDL.Record({
              'id' : IDL.Principal,
              'alias' : IDL.Text,
              'nombre' : IDL.Text,
              'segundoApellido' : IDL.Text,
              'primerApellido' : IDL.Text,
            }),
            'Err' : IDL.Variant({ 'UserDoesNotExist' : IDL.Text }),
          }),
        ],
        [],
      ),
    'readUserById' : IDL.Func(
        [IDL.Text],
        [
          IDL.Opt(
            IDL.Record({
              'id' : IDL.Principal,
              'alias' : IDL.Text,
              'nombre' : IDL.Text,
              'segundoApellido' : IDL.Text,
              'primerApellido' : IDL.Text,
            })
          ),
        ],
        ['query'],
      ),
    'readUsers' : IDL.Func(
        [],
        [
          IDL.Vec(
            IDL.Record({
              'id' : IDL.Principal,
              'alias' : IDL.Text,
              'nombre' : IDL.Text,
              'segundoApellido' : IDL.Text,
              'primerApellido' : IDL.Text,
            })
          ),
        ],
        ['query'],
      ),
    'updateUser' : IDL.Func(
        [IDL.Text, IDL.Text, IDL.Text, IDL.Text, IDL.Text],
        [
          IDL.Variant({
            'Ok' : IDL.Record({
              'id' : IDL.Principal,
              'alias' : IDL.Text,
              'nombre' : IDL.Text,
              'segundoApellido' : IDL.Text,
              'primerApellido' : IDL.Text,
            }),
            'Err' : IDL.Variant({ 'UserDoesNotExist' : IDL.Text }),
          }),
        ],
        [],
      ),
  });
};
export const init = ({ IDL }) => { return []; };
