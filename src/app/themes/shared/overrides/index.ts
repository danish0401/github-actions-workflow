import { Theme } from '@mui/material/styles';
import button from './button';
import getInput from './input';
import getPagination from './pagination';
import select from './select';
import getTable from './table';
import getTooltip from './tooltip';

export default (theme: Theme) => ({
  ...select,
  ...button(theme),
  ...getPagination(theme),
  ...getTable(theme),
  ...getInput(theme),
  ...getTooltip(theme),
});
