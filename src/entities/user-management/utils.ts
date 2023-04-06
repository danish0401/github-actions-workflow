// https://mui.com/material-ui/react-avatar/#BackgroundLetterAvatars.tsx
// Method making color from string to pass it in Avatar component
export const stringToColor = (string: string) => {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
};

// Method taking first letters from name and lastname
export const stringAvatar = (fullName: string) => {
  const [name = '', lastName = ''] = fullName.split(' ');

  return {
    sx: {
      bgcolor: stringToColor(fullName),
    },
    children: `${name?.[0].toUpperCase()}${lastName ? lastName[0].toUpperCase() : ''}`,
  };
};
