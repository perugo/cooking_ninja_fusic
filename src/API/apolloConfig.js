import { split } from '@apollo/client';
import { homeApi1 } from './apolloClients';

const chooseLink = ({ getContext }) => {
  const { clientName } = getContext();
  switch (clientName) {
    case 'homeApi1': return homeApi1.link;
    default: return homeApi1.link;
  }
};

export const combinedLink = split(chooseLink, homeApi1.link); 