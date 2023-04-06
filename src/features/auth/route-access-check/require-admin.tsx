import { userModel } from 'entities/user';
import { RedirectTo403 } from './redirects';

export function RequireAdmin({ children }: { children: JSX.Element }) {
  const { isAdmin } = userModel.useUser();

  if (!isAdmin) {
    return <RedirectTo403 />;
  }

  return children;
}
