import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Button } from '@material-ui/core';
import { useCart } from '../lib/cartState';
import CartCount from './CartCount';
import SignOut from './SignOut';
import { useUser } from './User';

const useStyles = makeStyles((theme) => ({
  ...theme.customTheme,
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    backgroundColor: 'teal',
    color: 'white',
  },
}));

export default function Nav() {
  const user = useUser();
  const classes = useStyles();

  const { openCart } = useCart();
  return (
    <Box className={classes.toolbar}>
      <Link href="/products">
        <Button className={classes.menuButton}>Products</Button>
      </Link>
      {user && (
        <>
          <Link href="/sell">
            <Button className={classes.menuButton}>Offer</Button>
          </Link>
          <Link href="/orders">
            <Button className={classes.menuButton}>Orders</Button>
          </Link>
          <Link href="/account">
            <Button className={classes.menuButton}>Account</Button>
          </Link>
          <Button className={classes.menuButton} onClick={openCart}>
            Cart
            <CartCount
              count={user.cart.reduce(
                (tally, cartItem) =>
                  tally + (cartItem.product ? cartItem.quantity : 0),
                0
              )}
            />
          </Button>
          <SignOut className={classes.menuButton} />
        </>
      )}
      {!user && (
        <>
          <Link className={classes.link} href="/signin">
            <Button className={classes.menuButton}>Sign in</Button>
          </Link>
        </>
      )}
    </Box>
  );
}
