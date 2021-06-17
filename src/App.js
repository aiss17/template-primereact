import React, { useState, useEffect, useRef } from 'react';
import classNames from 'classnames';
import { Route, useHistory, Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { InputText } from "primereact/inputtext";

import { AppTopbar } from './AppTopbar';
import { AppFooter } from './AppFooter';
import { AppMenu } from './AppMenu';
import { AppProfile } from './AppProfile';
import { AppConfig } from './AppConfig';

import { Dashboard } from './components/Dashboard';
import { ButtonDemo } from './components/ButtonDemo';
import { ChartDemo } from './components/ChartDemo';
import { Documentation } from './components/Documentation';
import { FileDemo } from './components/FileDemo';
import { FloatLabelDemo } from './components/FloatLabelDemo';
import { FormLayoutDemo } from './components/FormLayoutDemo';
import { InputDemo } from './components/InputDemo';
import { ListDemo } from './components/ListDemo';
import { MenuDemo } from './components/MenuDemo';
import { MessagesDemo } from './components/MessagesDemo';
import { MiscDemo } from './components/MiscDemo';
import { OverlayDemo } from './components/OverlayDemo';
import { PanelDemo } from './components/PanelDemo';
import { TableDemo } from './components/TableDemo';
import { TreeDemo } from './components/TreeDemo';
import { InvalidStateDemo } from './components/InvalidStateDemo';

import { Calendar } from './pages/Calendar';
import { Crud } from './pages/Crud';
import { EmptyPage } from './pages/EmptyPage';

import { DisplayDemo } from './utilities/DisplayDemo';
import { ElevationDemo } from './utilities/ElevationDemo';
import { FlexBoxDemo } from './utilities/FlexBoxDemo';
import { GridDemo } from './utilities/GridDemo';
import { IconsDemo } from './utilities/IconsDemo';
import { SpacingDemo } from './utilities/SpacingDemo';
import { TextDemo } from './utilities/TextDemo';
import { TypographyDemo } from './utilities/TypographyDemo';
import { TimelineDemo } from './utilities/TimelineDemo';

import PrimeReact from 'primereact/api';

import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import 'prismjs/themes/prism-coy.css';
import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';
import '@fullcalendar/timegrid/main.css';
import './layout/flags/flags.css';
import './layout/layout.scss';
import './App.scss';

import Login from './Login'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';
import marine from './assets/images/marine.png'

const App = () => {

    const [layoutMode, setLayoutMode] = useState('static');
    const [layoutColorMode, setLayoutColorMode] = useState('dark')
    const [inputStyle, setInputStyle] = useState('outlined');
    const [ripple, setRipple] = useState(false);
    const [sidebarActive, setSidebarActive] = useState(true);
    const [login, setLogin] = useState(false);
    const [loginVisible, setLoginVisible] = useState(true)
    const [resetPasswordVisible, setResetPasswordVisible] = useState(false)
    const [registerVisible, setRegisterVisible] = useState(false)
    const [floatValue, setFloatValue] = useState('')
    const sidebar = useRef();

    const history = useHistory();

    let menuClick = false;

    useEffect(() => {
        if (sidebarActive) {
            addClass(document.body, "body-overflow-hidden");
        } else {
            removeClass(document.body, "body-overflow-hidden");
        }
    }, [sidebarActive]);

    const onInputStyleChange = (inputStyle) => {
        setInputStyle(inputStyle);
    }

    const onRipple = (e) => {
        PrimeReact.ripple = e.value;
        setRipple(e.value)
    }

    const onLayoutModeChange = (mode) => {
        setLayoutMode(mode)
    }

    const onColorModeChange = (mode) => {
        setLayoutColorMode(mode)
    }

    const onWrapperClick = (event) => {
        if (!menuClick && layoutMode === "overlay") {
            setSidebarActive(false);
        }
        menuClick = false;
    }

    const onToggleMenu = (event) => {
        menuClick = true;

        setSidebarActive((prevState) => !prevState);

        event.preventDefault();
    }

    const onSidebarClick = () => {
        menuClick = true;
    }

    const onMenuItemClick = (event) => {
        if (!event.item.items && layoutMode === "overlay") {
            setSidebarActive(false);
        }
    }

    const menu = [
        { label: 'Dashboard', icon: 'pi pi-fw pi-home', to: '/' },
        {
            label: 'UI Kit', icon: 'pi pi-fw pi-sitemap',
            items: [
                { label: 'Form Layout', icon: 'pi pi-fw pi-id-card', to: '/formlayout' },
                { label: 'Input', icon: 'pi pi-fw pi-check-square', to: '/input' },
                { label: 'Float Label', icon: 'pi pi-fw pi-bookmark', to: '/floatlabel' },
                { label: "Invalid State", icon: "pi pi-fw pi-exclamation-circle", to: "/invalidstate" },
                { label: 'Button', icon: 'pi pi-fw pi-mobile', to: '/button' },
                { label: 'Table', icon: 'pi pi-fw pi-table', to: '/table' },
                { label: 'List', icon: 'pi pi-fw pi-list', to: '/list' },
                { label: 'Tree', icon: 'pi pi-fw pi-share-alt', to: '/tree' },
                { label: 'Panel', icon: 'pi pi-fw pi-tablet', to: '/panel' },
                { label: 'Overlay', icon: 'pi pi-fw pi-clone', to: '/overlay' },
                { label: 'Menu', icon: 'pi pi-fw pi-bars', to: '/menu' },
                { label: 'Message', icon: 'pi pi-fw pi-comment', to: '/messages' },
                { label: 'File', icon: 'pi pi-fw pi-file', to: '/file' },
                { label: 'Chart', icon: 'pi pi-fw pi-chart-bar', to: '/chart' },
                { label: 'Misc', icon: 'pi pi-fw pi-circle-off', to: '/misc' },
            ]
        },
        {
            label: 'Utilities', icon: 'pi pi-fw pi-globe',
            items: [
                { label: 'Display', icon: 'pi pi-fw pi-desktop', to: '/display' },
                { label: 'Elevation', icon: 'pi pi-fw pi-external-link', to: '/elevation' },
                { label: 'Flexbox', icon: 'pi pi-fw pi-directions', to: '/flexbox' },
                { label: 'Icons', icon: 'pi pi-fw pi-search', to: '/icons' },
                { label: 'Grid System', icon: 'pi pi-fw pi-th-large', to: '/grid' },
                { label: 'Spacing', icon: 'pi pi-fw pi-arrow-right', to: '/spacing' },
                { label: 'Typography', icon: 'pi pi-fw pi-align-center', to: '/typography' },
                { label: 'Text', icon: 'pi pi-fw pi-pencil', to: '/text' },
            ]
        },
        {
            label: 'Pages', icon: 'pi pi-fw pi-clone',
            items: [
                { label: 'Crud', icon: 'pi pi-fw pi-user-edit', to: '/crud' },
                { label: 'Calendar', icon: 'pi pi-fw pi-calendar-plus', to: '/calendar' },
                { label: 'Timeline', icon: 'pi pi-fw pi-calendar', to: '/timeline' },
                { label: 'Empty Page', icon: 'pi pi-fw pi-circle-off', to: '/empty' }
            ]
        },
        {
            label: 'Menu Hierarchy', icon: 'pi pi-fw pi-search',
            items: [
                {
                    label: 'Submenu 1', icon: 'pi pi-fw pi-bookmark',
                    items: [
                        {
                            label: 'Submenu 1.1', icon: 'pi pi-fw pi-bookmark',
                            items: [
                                { label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-bookmark' },
                                { label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-bookmark' },
                                { label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-bookmark' },
                            ]
                        },
                        {
                            label: 'Submenu 1.2', icon: 'pi pi-fw pi-bookmark',
                            items: [
                                { label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-bookmark' },
                                { label: 'Submenu 1.2.2', icon: 'pi pi-fw pi-bookmark' }
                            ]
                        },
                    ]
                },
                {
                    label: 'Submenu 2', icon: 'pi pi-fw pi-bookmark',
                    items: [
                        {
                            label: 'Submenu 2.1', icon: 'pi pi-fw pi-bookmark',
                            items: [
                                { label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-bookmark' },
                                { label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-bookmark' },
                                { label: 'Submenu 2.1.3', icon: 'pi pi-fw pi-bookmark' },
                            ]
                        },
                        {
                            label: 'Submenu 2.2', icon: 'pi pi-fw pi-bookmark',
                            items: [
                                { label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-bookmark' },
                                { label: 'Submenu 2.2.2', icon: 'pi pi-fw pi-bookmark' }
                            ]
                        }
                    ]
                }
            ]
        },
        { label: 'Documentation', icon: 'pi pi-fw pi-question', command: () => { window.location = "#/documentation" } },
        { label: 'View Source', icon: 'pi pi-fw pi-search', command: () => { window.location = "https://github.com/primefaces/sigma-react" } }
    ];

    const addClass = (element, className) => {
        if (element.classList)
            element.classList.add(className);
        else
            element.className += ' ' + className;
    }

    const removeClass = (element, className) => {
        if (element.classList)
            element.classList.remove(className);
        else
            element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }

    const isSidebarVisible = () => {
        return sidebarActive;
    };
    
    const checkVisible = () => {
        if(loginVisible) {
            setLoginVisible(false)
            setResetPasswordVisible(true)
        } else {
            setLoginVisible(true)
            setResetPasswordVisible(false)
        }
    }

    const checkRegisterVisible = () => {
        if(loginVisible) {
            setLoginVisible(false)
            setResetPasswordVisible(false)
            setRegisterVisible(true)
        } else {
            setLoginVisible(true)
            setResetPasswordVisible(false)
            setRegisterVisible(false)
        }
    }

    const checkLogin = () => {
        setLogin(true);
    }

    const logo = layoutColorMode === 'dark' ? 'assets/layout/images/logo-white.svg' : 'assets/layout/images/logo.svg';

    const wrapperClass = classNames('layout-wrapper', {
        'layout-overlay': layoutMode === 'overlay',
        'layout-static': layoutMode === 'static',
        'layout-active': sidebarActive,
        'p-input-filled': inputStyle === 'filled',
        'p-ripple-disabled': ripple === false
    });

    const sidebarClassName = classNames('layout-sidebar', {
        'layout-sidebar-dark': layoutColorMode === 'dark',
        'layout-sidebar-light': layoutColorMode === 'light'
    });

    return (
        login ? (
        <div className={wrapperClass} onClick={onWrapperClick}>
            <AppTopbar onToggleMenu={onToggleMenu} />

            <CSSTransition classNames="layout-sidebar" timeout={{ enter: 2000, exit: 2000 }} in={isSidebarVisible()} unmountOnExit>
                <div ref={sidebar} className={sidebarClassName} onClick={onSidebarClick}>
                    <div className="layout-logo" style={{cursor: 'pointer'}} onClick={() => history.push('/')}>
                        <img alt="Logo" src={logo} />
                    </div>
                    <AppProfile />
                    <AppMenu model={menu} onMenuItemClick={onMenuItemClick} />
                </div>
            </CSSTransition>

            {/* <AppConfig rippleEffect={ripple} onRippleEffect={onRipple} inputStyle={inputStyle} onInputStyleChange={onInputStyleChange}
                layoutMode={layoutMode} onLayoutModeChange={onLayoutModeChange} layoutColorMode={layoutColorMode} onColorModeChange={onColorModeChange} /> */}

            <div className="layout-main">
                <Route path="/" exact component={Dashboard} />
                <Route path="/formlayout" component={FormLayoutDemo} />
                <Route path="/input" component={InputDemo} />
                <Route path="/floatlabel" component={FloatLabelDemo} />
                <Route path="/invalidstate" component={InvalidStateDemo} />
                <Route path="/button" component={ButtonDemo} />
                <Route path="/table" component={TableDemo} />
                <Route path="/list" component={ListDemo} />
                <Route path="/tree" component={TreeDemo} />
                <Route path="/panel" component={PanelDemo} />
                <Route path="/overlay" component={OverlayDemo} />
                <Route path="/menu" component={MenuDemo} />
                <Route path="/messages" component={MessagesDemo} />
                <Route path="/file" component={FileDemo} />
                <Route path="/chart" component={ChartDemo} />
                <Route path="/misc" component={MiscDemo} />
                <Route path="/display" component={DisplayDemo} />
                <Route path="/elevation" component={ElevationDemo} />
                <Route path="/flexbox" component={FlexBoxDemo} />
                <Route path="/icons" component={IconsDemo} />
                <Route path="/grid" component={GridDemo} />
                <Route path="/spacing" component={SpacingDemo} />
                <Route path="/typography" component={TypographyDemo} />
                <Route path="/text" component={TextDemo} />
                <Route path="/calendar" component={Calendar} />
                <Route path="/timeline" component={TimelineDemo} />
                <Route path="/crud" component={Crud} />
                <Route path="/empty" component={EmptyPage} />
                <Route path="/documentation" component={Documentation} />
            </div>

            <AppFooter />

        </div>
        
        )
        : (
            // <Login />

            <div className="maincontainer">
                <div className="container-fluid">
                <div className="row no-gutter">
                    
                    <div className="col-md-6 bg-light">
                    <div className="login d-flex align-items-center py-5">
                        
                        <div className="container">
                        <div className="row">
                            <div style={{padding: 0, textAlign: 'center'}}>
                                <img src={marine} width={200} height={200} />
                            </div>
                            {loginVisible && (
                            <div className="col-lg-10 col-xl-7 mx-auto">
                                <h2 className="text-center display-4">Welcome!</h2>
                                <p className="text-center text-muted mb-4" style={{marginBottom: 100}}>For those who are already registered, please login</p>
                                <form>
                                    <div className="mb-3">
                                        <input id="inputEmail" type="email" placeholder="Email address" required="" autoFocus="" className="form-control border-0 shadow-sm px-4" />
                                    </div>
                                    <div className="mb-3">
                                        <input id="inputPassword" type="password" placeholder="Password" required="" className="form-control border-0 shadow-sm px-4" />
                                    </div>
                                    <div className="d-flex justify-content-between form-check" style={{marginBottom: 20, marginTop: 20}}>
                                        <div>
                                            <input id="customCheck1" type="checkbox" className="form-check-input" />
                                            <label htmlFor="customCheck1" className="form-check-label">Remember password</label>
                                        </div>
                                        <div>
                                            <button onClick={checkVisible} id="button">
                                                <i>Forgot <span style={{color: 'blue'}}>password</span>?</i>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="d-grid gap-2 mt-2">
                                        <button onClick={checkLogin} className="btn btn-success btn-block text-uppercase mb-2 shadow-sm">Sign in</button>
                                    </div>
                                    
                                    <div className="text-center d-flex justify-content-center mt-4">
                                        Don't have an account? 
                                        <button onClick={checkRegisterVisible} id="button" style={{color: 'blue'}}>
                                            <u>Sign Up</u>
                                        </button>
                                    </div>
                                </form>
                            </div>
                            )}

                            {resetPasswordVisible && (
                            <div className="text-center col-lg-10 col-xl-7 mx-auto">
                                <h2 className="display-4">Reset Password</h2>
                                <p className="text-muted mb-4">Enter the email address associated with your account and we'll send you a link to reset your password</p>
                                <form>
                                    <div className="mb-3">
                                        <input id="inputEmail" type="email" placeholder="Email address" required="" autoFocus="" className="form-control border-0 shadow-sm px-4" />
                                    </div>
                                    <div className="d-grid gap-2 mt-2">
                                        <button className="btn btn-primary btn-block text-uppercase mb-2 shadow-sm">Reset Password</button>
                                    </div>
                                    
                                    <div className="text-center d-flex justify-content-center mt-4">
                                        <button onClick={checkVisible} id="button">
                                            <u>Try to <span style={{color: 'blue'}}>Login</span></u>
                                        </button>
                                    </div>
                                </form>
                            </div>
                            )}

                            {registerVisible && (
                                <div className="text-center col-lg-10 col-xl-7 mx-auto">
                                    <h2 className="display-4">Register</h2>
                                    <p className="text-muted mb-4">Create your account. It's free and only takes a minute</p>
                                    <form>
                                        <div className="mb-3">
                                            <input id="firstName" type="firtsName" placeholder="Firts name" required="" autoFocus="" className="form-control border-0 shadow-sm px-4" />
                                        </div>
                                        <div className="mb-3">
                                            <input id="lastName" type="lastName" placeholder="Last name" required="" autoFocus="" className="form-control border-0 shadow-sm px-4" />
                                        </div>
                                        <div className="mb-3">
                                            <input id="inputEmail" type="email" placeholder="Email address" required="" autoFocus="" className="form-control border-0 shadow-sm px-4" />
                                        </div>
                                        <div className="mb-3">
                                            <input id="password" type="password" placeholder="Password" required="" autoFocus="" className="form-control border-0 shadow-sm px-4" />
                                        </div>
                                        <div className="mb-3">
                                            <input id="re-password" type="password" placeholder="Re-password" required="" autoFocus="" className="form-control border-0 shadow-sm px-4" />
                                        </div>
                                        <div className="d-grid gap-2 mt-2">
                                            <button onClick={checkRegisterVisible} className="btn btn-primary btn-block text-uppercase mb-2 shadow-sm">Register</button>
                                        </div>
                                    </form>
                                </div>
                            )}
                        </div>
                        </div>

                    </div>
                    </div>
                    
                    <div className="col-md-6 d-none d-md-flex bg-image"></div>
                </div>
                </div>
            </div>
        )
    );

}

export default App;
