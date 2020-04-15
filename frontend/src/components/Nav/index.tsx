import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Menu,  Switch } from 'antd';

import './index.css';



const Nav = () => {

    const [theme, setTheme] = useState(null);

    const { SubMenu } = Menu;
    
    const dark = (value: any) => {

               setTheme(value  ? 'dark' : 'light');    
               const menu = document.getElementsByClassName('ant-menu')[0] as HTMLElement ;

               const body = document.body;
               body.classList.toggle('dark');
       };
       
    return (
        <div className="nav">  
      
                 <Menu mode="horizontal" className="menu" theme={theme}>

                       <SubMenu
                             title={
                        
                                <Switch
                                 onChange={dark}
                                 checkedChildren="Dark"
                                 unCheckedChildren="Light"
                               /> 
                        
                          }
                        >  
                        </SubMenu>

                        <SubMenu
                          title={
                            <span className="submenu-title-wrapper">
                                La société
                            </span>
                          }
                        > 
                          <Menu.ItemGroup >
                            <Menu.Item key="pres"><Link to="/présentation"> Présentation </Link ></Menu.Item>
                            <Menu.Item key="part"><Link to="/partenaires"> Les partenaires </Link ></Menu.Item>
                          </Menu.ItemGroup>
                        </SubMenu>

                        <SubMenu
                          title={
                            <span className="submenu-title-wrapper">
                              Luminaires
                            </span>
                          }
                        >
                          <Menu.ItemGroup >
                            <Menu.Item key="wall"><Link to="/appliques"> Appliques </Link ></Menu.Item>
                            <Menu.Item key="lamppost"><Link to="/lampadaires"> Lampadaires </Link ></Menu.Item>
                            <Menu.Item key="lamp"><Link to="/lampes"> Lampes </Link ></Menu.Item>
                            <Menu.Item key="chand"><Link to="/lustres"> Lustres </Link ></Menu.Item>
                            <Menu.Item key="spot"><Link to="/spots"> Spot </Link ></Menu.Item>
                          </Menu.ItemGroup>
                        </SubMenu>

                        <Menu.Item key="actu">
                         <Link to="/actualités"> Actualités </Link >
                        </Menu.Item>

                        <Menu.Item key="ref">
                          <Link to="/références"> Références </Link>
                        </Menu.Item>

      
                        <Menu.Item key="contact">
                         <Link to="/contact"> Contact </Link >
                        </Menu.Item>
                        
                 </Menu>
        </div>
    )
}

export default Nav;