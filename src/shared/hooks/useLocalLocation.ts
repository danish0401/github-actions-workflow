import { parse } from 'query-string';
import { useLocation } from 'react-router-dom';

export const useLocalLocation = () => {
  const location = useLocation();

  return {
    search: parse(location.search),
  };
};
