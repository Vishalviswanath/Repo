import { MenuItem, MenuList } from '@mui/material';
import { adminSidebarMenuItems } from './../../config/Index';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <>
      <MenuList>
        {adminSidebarMenuItems.map((menuItem) => (
          <MenuItem
            key={menuItem.id}
            onClick={() => navigate(menuItem.path)}
            sx={{ display: 'flex', alignItems: 'center', gap: 1, pl: '10px 0' }}
          >
            {menuItem.icon && <menuItem.icon />}
            {menuItem.label}
          </MenuItem>
        ))}
      </MenuList>
    </>
  );
};

export default Sidebar;
