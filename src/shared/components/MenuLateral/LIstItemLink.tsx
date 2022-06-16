import {
  Icon,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { useMatch, useNavigate, useResolvedPath } from 'react-router-dom';
import { IListItemLinkProps } from '../../types';

export const ListItemLink: React.FC<IListItemLinkProps> = ({
  to,
  icon,
  label,
  onClick,
}) => {
  const navigate = useNavigate();

  const resolvedPath = useResolvedPath(to); // hook para encontrar a rota
  const match = useMatch({ path: resolvedPath.pathname, end: false }); // hook para verificar se a rota está selecionada

  const handleClick = () => {
    navigate(to);
    onClick && onClick();
  };

  return (
    <ListItemButton selected={!!match} onClick={handleClick}>
      <ListItemIcon>
        <Icon>{icon}</Icon>
      </ListItemIcon>
      <ListItemText primary={label} />
    </ListItemButton>
  );
};
