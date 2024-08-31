import styles from './Navbar.module.css';
import logo from '../../assets/map-logo.png';
import logout from '../../assets/logout.png';
import { Link, NavLink } from 'react-router-dom';
import { useAtom } from 'jotai';
import { activeUserAtom, activeNavAtom } from '../../state/Atoms';
import { handleLogout } from '../../services/authConfig';
import ApiKeyDisplay from '../User/ApiKeyDisplay';
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
              <Link to = "/teams">
              <span>Settings</span>
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
               <ApiKeyDisplay />
               <span>GitHub</span>
              <Link to="/dashboard">
                <button className={`btn-primary ${styles.navButton}`}>
                  Dashboard
                </button>
              </Link>
              <Link
                to="/"
                onClick={() => {
                  onLogoutClick();
                }}
              >
                <img
                  className={styles.logOutIcon}
                  src={logout}
                  alt="sign out"
                />
              </Link>
            </>
          ) : (
            <>
              <Link to="/login">
                <button className={`btn-secondary ${styles.navButton}`}>
                  Sign in
                </button>
              </Link>
              <Link to="/signup">
                <button className={`btn-primary ${styles.navButton}`}>
                  Create account
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
