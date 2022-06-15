import {
  Avatar,
  Divider,
  Drawer,
  Icon,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme,
} from '@mui/material';
import { Box } from '@mui/system';
import { IHtmlComponentsProps } from '../../types';

export const MenuLateral: React.FC<IHtmlComponentsProps> = ({ children }) => {
  const theme = useTheme();
  return (
    <>
      <Drawer variant={'permanent'}>
        <Box
          width={theme.spacing(28)}
          height="100%"
          display="flex"
          flexDirection={'column'}
        >
          <Box
            width="100%"
            height={theme.spacing(20)}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Avatar
              sx={{ height: theme.spacing(12), width: theme.spacing(12) }}
              src="https://img.freepik.com/vetores-gratis/perfil-de-avatar-de-homem-no-icone-redondo_24640-14044.jpg?w=740"
            />
          </Box>
          <Divider />
          <Box flex={1}>
            <List component="nav">
              <ListItemButton>
                <ListItemIcon>
                  <Icon>home</Icon>
                </ListItemIcon>
                <ListItemText primary="Página inicial" />
              </ListItemButton>
            </List>
          </Box>
        </Box>
      </Drawer>
      <Box height="100vh" marginLeft={theme.spacing(28)}>
        {children}
      </Box>
    </>
  );
};
