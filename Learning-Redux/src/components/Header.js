import classes from './Header.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../Store';
const Header = () => {
  const auth = useSelector(state => state.auth.isAuthniticated)
  const dispatch = useDispatch(state => state.auth.logout())
  function logout(event) {
    event.preventDefault();
    dispatch(authActions.logout())
  }
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {auth &&
        <nav>
          <ul>
            <li>
              <a href='/'>My Products</a>
            </li>
            <li>
              <a href='/'>My Sales</a>
            </li>
            <li>
              <button onClick={logout}>Logout</button>
            </li>
          </ul>
        </nav>}
    </header>
  );
};

export default Header;
