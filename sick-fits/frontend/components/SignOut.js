import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import { Button } from '@material-ui/core';
import ExitToApp from '@material-ui/icons/ExitToApp';
import { CURRENT_USER_QUERY } from './User';

const SIGNOUT_MUTATION = gql`
  mutation {
    endSession
  }
`;
export default function SignOut() {
  const [signout] = useMutation(SIGNOUT_MUTATION, {
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });
  return (
    <Button
      style={{ backgroundColor: 'teal', color: 'white' }}
      type="button"
      onClick={signout}
      endIcon={<ExitToApp />}
    >
      Sign Out
    </Button>
  );
}
