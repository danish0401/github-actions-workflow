import { FC, useCallback, useState } from 'react';
import { Avatar, IconButton, Menu, MenuItem, Skeleton } from '@mui/material';
import { AHMeResponseType } from 'shared/types/rest';
import { stringAvatar } from '../utils';
import { testID } from '../constants';

type UserManagementType = {
  data: AHMeResponseType | undefined;
  onLogout: () => void;
};
export const UserManagement: FC<UserManagementType> = ({ data, onLogout }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const avatarProps = data?.full_name ? stringAvatar(data?.full_name) : {};

  const handleClick = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  }, []);

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    handleClose();
    onLogout();
  };

  return (
    <>
      <IconButton onClick={handleClick}>
        <Avatar {...avatarProps} />
      </IconButton>
      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </>
  );
};

export const UserManagementSkeleton: FC = () => (
  <Skeleton data-testid={testID.userManagementSkeleton} animation='wave' variant='circular' width={40} height={40} />
);
