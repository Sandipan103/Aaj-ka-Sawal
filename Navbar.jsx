// import React, { useState } from "react";
// import { Navigate, NavLink } from "react-router-dom";
// import MenuIcon from "@mui/icons-material/Menu";
// import { useSelector,useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import Logo from "../Images/logo.png";
// import "../Css/Navbar.css";

// function NavBar() {
//   const [click, setClick] = useState(false);
//   var state = useSelector((state) => ({ ...state }));
  
//   console.log(state);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleLogout = (e)=>{
//     e.preventDefault();
//     localStorage.clear();
//     dispatch({
//       type: "LOGOUT",
//       payload: null,
//     });
//     navigate("/")
//   }

//   const handleDashboardClick = (e)=>{
//     e.preventDefault();
//     const role = state.user.role;
//     console.log("ROLE",role);
//     if(role == "root")
//     navigate("/dashboard");
//     else if(role == "admin")
//     navigate("/admin-dashboard");
//     else if(role == "manager")
//     navigate("/manager-dashboard");
//   }

//   const handleProfile = (e) =>{
//     e.preventDefault();
//     navigate("/profile");
//   }

//   const handleClick = () => setClick(!click);
//   return (
//     <>
//       <nav className="navbar">
//         <div className="nav-container">
//           <NavLink exact to="/" className="nav-logo">
//             {/* navbar logo added */}
//             <img src={Logo} alt="Bal Asha Trust" />
//           </NavLink>

//           <ul className={click ? "nav-menu active" : "nav-menu"}>
//             <li className="nav-item">
//               <NavLink
//                 exact
//                 to="/"
//                 activeClassName="active"
//                 className="nav-links"
//                 onClick={handleClick}
//               >
//                 Home
//               </NavLink>
//             </li>
//             {state.user != null && <li className="nav-item">
//               <NavLink
//                 exact
//                 activeClassName="active"
//                 className="nav-links"
//                 onClick={handleDashboardClick}
//               >
//                 Dashboard
//               </NavLink>
//             </li>}
//             <li className="nav-item">
//               { state.user == null && <NavLink
//                 exact
//                 to="/login"
//                 activeClassName="active"
//                 className="nav-links"
//                 onClick={handleClick}
//               >
//                 Login
//               </NavLink>}
//             </li>


//             {state.user != null && <li className="nav-item">
//               { state.user != null && <NavLink
//                 exact
//                 activeClassName="active"
//                 className="nav-links"
//                 onClick={handleProfile}
//               >
//                 Profile
//               </NavLink>}
//             </li>}

//             <li className="nav-item">
//               { state.user != null && <NavLink
//                 exact
//                 activeClassName="active"
//                 className="nav-links"
//                 onClick={handleLogout}
//               >
//                 Logout
//               </NavLink>}
//             </li>
//             {/* <li className="nav-item">
//               <NavLink
//                 exact
//                 to="/Signup"
//                 activeClassName="active"
//                 className="nav-links"
//                 onClick={handleClick}
//               >
//                 signup
//               </NavLink>
//             </li> */}
//           </ul>
//           <div className="nav-icon" onClick={handleClick}>
//             <MenuIcon />
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// }

// export default NavBar;


import React, { useState } from 'react';
import { Navigate, NavLink } from "react-router-dom";
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useSelector,useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Logo from "../Images/logo.png";

const drawerWidth = 240;

function NavBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  
  
  const [click, setClick] = useState(false);
  var state = useSelector((state) => ({ ...state }));
  
  console.log(state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = (e)=>{
    e.preventDefault();
    localStorage.clear();
    dispatch({
      type: "LOGOUT",
      payload: null,
    });
    navigate("/")
  }

  const handleDashboardClick = (e)=>{
    e.preventDefault();
    const role = state.user.role;
    console.log("ROLE",role);
    if(role == "root")
    navigate("/dashboard");
    else if(role == "admin")
    navigate("/admin-dashboard");
    else if(role == "manager")
    navigate("/manager-dashboard");
  }

  const handleProfile = (e) =>{
    e.preventDefault();
    navigate("/profile");
  }

  const handleClick = () => setClick(!click);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <img src={Logo} alt="logo" />
      </Typography>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: 'center' }} component={NavLink} exact to="/">
          <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>

        {state.user != null && <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: 'center' }} component={NavLink} onClick={handleDashboardClick}>
          <ListItemText primary="Dashboard" />
          </ListItemButton>
        </ListItem>}

        {state.user == null && <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: 'center' }} component={NavLink} exact to="/login" onClick={handleClick}>
          <ListItemText primary="Login" />
          </ListItemButton>
        </ListItem>}

        {state.user != null && <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: 'center' }} component={NavLink} onClick={handleProfile}>
          <ListItemText primary="Profile" />
          </ListItemButton>
        </ListItem>}

        {state.user != null && <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: 'center' }} component={NavLink} onClick={handleLogout}>
          <ListItemText primary="Logout" />
          </ListItemButton>
        </ListItem>}

      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    
    <Box sx={{ display: 'flex', marginBottom:'50px'}}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            // component="div"
            component={NavLink} exact to="/"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            
          >
            <img src={Logo} alt="logo"  />
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>

            <Button sx={{ color: '#fff' }} component={NavLink} exact to="/">
                Home
            </Button>

            {state.user != null && <Button sx={{ color: '#fff' }} component={NavLink} onClick={handleDashboardClick}>
                Dashboard
            </Button>}

            {state.user == null && <Button sx={{ color: '#fff' }} component={NavLink}  exact to="/login" onClick={handleClick}>
                Login
            </Button>}

            {state.user != null && <Button sx={{ color: '#fff' }} component={NavLink} onClick={handleProfile}>
                Profile
            </Button>}

            {state.user != null && <Button sx={{ color: '#fff' }} component={NavLink} onClick={handleLogout}>
                Logout
            </Button>}

            {/* <Button sx={{ color: '#fff' }} component={NavLink} exact to="/Signup" onClick={handleClick}>
            Signup
            </Button> */}

          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};

export default NavBar;
