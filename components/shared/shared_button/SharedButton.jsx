import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const StyledButton = styled(Button)({
  color: '#fff',
  '&:hover': {
    backgroundColor: '#00b87c',
    boxShadow: 'none',
  },
});

const SharedButton = ({ children }) => <StyledButton>{children}</StyledButton>;

export default SharedButton;
