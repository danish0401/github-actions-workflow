import compose from 'compose-function';
import withMui from 'app/hocs/withMui';
import withRouter from './withRouter';
import withApollo from './withApollo';

/**
 * @hoc application init logic
 * @remark contains:
 * - router init (withRouter)
 * - MUI init (withMui)
 * - Apollo init (withApollo)
 */
export const withHocs = compose(withMui, withRouter, withApollo);
