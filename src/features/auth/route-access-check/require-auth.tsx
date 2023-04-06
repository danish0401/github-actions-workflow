import { userModel } from 'entities/user';
import { RedirectToLogin } from 'features/auth/route-access-check/redirects';
import { LayoutPreloader } from 'shared/ui/skeletons';

export function RequireAuth({ children }: { children: JSX.Element }) {
  const { loading, token } = userModel.useUser();

  // Redirect them to the /login page, but save the current location they were
  // trying to go to when they were redirected. This allows us to send them
  // along to that page after they log in, which is a nicer user experience
  // than dropping them off on the home page.

  if (loading) {
    return <LayoutPreloader />;
  }

  return token ? children : <RedirectToLogin />;
}
