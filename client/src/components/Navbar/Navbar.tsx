import styles from './Navbar.module.css';
import logo from '../../assets/icons/pie-chart.png';
import logout from '../../assets/logout.png';
import { Link, NavLink } from 'react-router-dom';
import { useAtom } from 'jotai';
import { activeUserAtom, activeNavAtom } from '../../state/Atoms';
import { handleLogout } from '../../services/authConfig';
export default function Navbar() {
  const [activeUser, setActiveUser] = useAtom(activeUserAtom);
  const [activeNav, setActiveNav] = useAtom(activeNavAtom);

  const onLogoutClick = async () => {
    const success = await handleLogout();
    if (success) {
      setActiveUser('');
    }
  };
  return (
    <div className={styles.navbar}>
      <div className={styles.navContainer}>
        <div className={styles.navLeft}>
          <Link
            to="/"
            onClick={() => {
              setActiveNav(false);
            }}
          >
            <div className={styles.logoBox}>
              <img className={styles.navLogo} src={logo} alt="at-logo" />
              <h3>OS Analytics</h3>
            </div>
          </Link>
          {activeUser ? (
            <div className={styles.navLinks}>
              <Link to  = "/dashboard">
              <span> Dashboard</span>
              </Link>
              <Link to = "/websites">
              <span> Websites</span>
              </Link>
              <Link to = "/docs">
              <span>Documentation</span>
              </Link>
              <Link to = "/settings">
              <span>Settings</span>
              </Link>
              <Link to = "/playground">
              <span>Playground</span>
              </Link>
            </div>
          ) : (
            <div className={styles.navLinks}>
              <NavLink to = "/docs">
              <span>Documentation</span>
              </NavLink>
              <Link to = "/signup">
              <span>Getting Started</span>
              </Link>
              <Link to = "/team">
              <span>Team</span>
              </Link>
            </div>
          )}
        </div>
        <div className={styles.navRight}>
          {activeUser ? (
            <>
               <span>GitHub</span>
              <Link to="/dashboard">
                <button className={`btn-primary btn-animated ${styles.navButton}`}>
                  Dashboard
                </button>
              </Link>
              <Link
                to="/"
                onClick={() => {
                  onLogoutClick();
                }}
              >
                <button className={`btn-secondary btn-animated ${styles.navButton}`}>
                  Log out
                </button>
              </Link>
            </>
          ) : (
            <>
             <Link to="/signup">
                <button className={`btn-primary btn-animated ${styles.navButton}`}>
                  Create account
                </button>
              </Link>
              <Link to="/login">
                <button className={`btn-secondary btn-animated ${styles.navButton}`}>
                  Log in
                </button>
              </Link>
             
            </>
          )}
        </div>
        <div
          className={
            activeNav
              ? `${styles.hamburgerBox} ${styles.activeNav}`
              : `${styles.hamburgerBox}`
          }
          onClick={() => {
            setActiveNav(activeNav === false ? true : false);
          }}
        >
          <div className={styles.hamburger} />
        </div>
      </div>
    </div>
  );
}
