import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Box,
  Button,
  Link as ML,
  Toolbar,
  useMediaQuery,
} from '@material-ui/core';
import { useCart } from '../lib/cartState';
import CartCount from './CartCount';
import SignOut from './SignOut';
import NavStyles from './styles/NavStyles';
import { useUser } from './User';
import Logo from './Logo';

const useStyles = makeStyles((theme) => ({
  ...theme.customTheme,
  root: {
    backgroundColor: '#7D451B',
    paddingTop: '0.5rem',
    paddingBottom: '0.5rem',
    color: theme.palette.mainText,
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    color: '#ffffff',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  strong: {
    fontWeight: 'bold',
  },
  logo: {
    marginRight: '1.5em',
  },
  link: {
    color: '#ffffff',
  },
}));

export default function Nav({ breakpointSmall, showShadow, withColor }) {
  const user = useUser();
  const classes = useStyles({ showShadow, withColor });

  const { openCart } = useCart();
  return (
    <>
      <AppBar
        position="static"
        className={classes.root}
        elevation={showShadow ? 2 : 0}
      >
        <Toolbar className={classes.toolbar}>
          <Link href="/products">Products</Link>
          {user && (
            <>
              <Button onClick={() => {}}>
                <Link href="/sell">Sell</Link>
              </Button>
              <Link href="/orders">Orders</Link>
              <Link href="/account">Account</Link>
              <SignOut />
              <button type="button" onClick={openCart}>
                Cart
                <CartCount
                  count={user.cart.reduce(
                    (tally, cartItem) =>
                      tally + (cartItem.product ? cartItem.quantity : 0),
                    0
                  )}
                />
              </button>
            </>
          )}
          {!user && (
            <>
              <Link className={classes.link} href="/signin">
                Sign in
              </Link>
            </>
          )}
        </Toolbar>
      </AppBar>
      {/* <NavStyles>
        <Link href="/products">Products</Link>
        {user && (
          <>
            <Link href="/sell">Sell</Link>
            <Link href="/orders">Orders</Link>
            <Link href="/account">Account</Link>
            <SignOut />
            <button type="button" onClick={openCart}>
              My Cart
              <CartCount
                count={user.cart.reduce(
                  (tally, cartItem) =>
                    tally + (cartItem.product ? cartItem.quantity : 0),
                  0
                )}
              />
            </button>
          </>
        )}
        {!user && (
          <>
            <Link href="/signin">Sign in</Link>
          </>
        )}
      </NavStyles> */}
    </>
  );
}
