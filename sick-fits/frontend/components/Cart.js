import { makeStyles } from '@material-ui/core/styles';
import { Box, IconButton } from '@material-ui/core';
import CloseCart from '@material-ui/icons/CancelPresentationOutlined';
import CartSyles from './styles/CartStyles';
import { useUser } from './User';
import formatMoney from '../lib/formatMoney';
import calcTotalPrice from '../lib/calcTotalPrice';
import { useCart } from '../lib/cartState';
import RemoveFromCart from './RemoveFromCart';
import Checkout from './Checkout';

const useStyles = makeStyles((theme) => ({
  ...theme.customTheme,
  cartItem: {
    padding: '1rem 0',
    borderBottom: '1px solid var(--lightGrey)',
    display: 'grid',
    gridTemplateColumns: 'auto 1fr auto',
    '& img': {
      marginRight: '1rem',
    },
    '& h3 p': {
      margin: 0,
    },
  },
}));

function CartItem({ cartItem }) {
  const classes = useStyles();
  const { product } = cartItem;
  if (!product) return null;
  return (
    <Box className={classes.cartItem}>
      <img
        width="100"
        src={product.photo.image.publicUrlTransformed}
        alt={product.name}
      />
      <div>
        <h3>{product.name}</h3>
        <p>
          {formatMoney(product.price * cartItem.quantity)}-
          <em>
            {cartItem.quantity} &times; {formatMoney(product.price)}
            each
          </em>
        </p>
      </div>
      <RemoveFromCart id={cartItem.id} />
    </Box>
  );
}
export default function Cart() {
  const me = useUser();
  const { cartOpen, closeCart } = useCart();
  if (!me) return null;
  return (
    <CartSyles open={cartOpen}>
      <header style={{ display: 'flex', justifyContent: 'space-between' }}>
        {me.name}'s cart
        <IconButton aria-label="closecart" onClick={closeCart}>
          <CloseCart fontSize="large" />
        </IconButton>
      </header>
      <ul>
        {me.cart.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </ul>
      <footer>
        <p>{formatMoney(calcTotalPrice(me.cart))}</p>
        <Checkout />
      </footer>
    </CartSyles>
  );
}
