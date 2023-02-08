import * as React from 'react';
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import './MainSpeedDial.scss'

import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CallIcon from '@mui/icons-material/Call';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

const withLink = (to, children) => <Link to={to}>{children}</Link>;

const actions = [
  { 
    icon: withLink("/whats-app", <WhatsAppIcon/>),
    name: "Написать в WhatsApp"
  },
  { 
    icon: withLink("/delivery", <LocalShippingIcon />),
    name: "Заказать доставку"
  },
  { 
    icon: withLink("/call",  <CallIcon />),
    name:"Позвонить"
  },
 
];

export default function MainSpeedDial() {
  return (
    <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
    <SpeedDial
      ariaLabel="SpeedDial"
      sx={{ position: 'absolute', bottom: 16, right: 16 }}
      icon={<SpeedDialIcon />}
    >
      {actions.map((action) => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
        />
      ))}
    </SpeedDial>
  </Box>
  );
}