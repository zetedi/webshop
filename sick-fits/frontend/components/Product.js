import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import ItemStyles from './styles/ItemStyles';
import Title from './styles/Title';
import formatMoney from '../lib/formatMoney';
import DeleteProduct from './DeleteProduct';
import AddToCart from './AddToCart';

const useStyles = makeStyles((theme) => ({
  ...theme.customTheme,
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  priceTag: {
    background: 'red',
    transform: 'rotate(-3deg)',
    color: 'white',
    borderRadius: '10px',
    fontWeight: 600,
    padding: '7px',
    lineHeight: 1,
    fontSize: '2rem',
    display: 'inline-block',
    position: 'absolute',
    top: '79px',
    right: '-7px',
  },
  ltcTag: {
    background: 'green',
    transform: 'rotate(-3deg)',
    color: 'white',
    borderRadius: '10px',
    fontWeight: 600,
    padding: '7px',
    lineHeight: 1,
    fontSize: '2rem',
    display: 'inline-block',
    position: 'absolute',
    top: '17px',
    right: '-7px',
  },
}));

export default function Product({ product }) {
  const classes = useStyles();
  return (
    <ItemStyles>
      <img
        src={product?.photo?.image?.publicUrlTransformed}
        alt={product.name}
      />
      <Title>
        {' '}
        <Link href={`/product/${product.id}`}>{product.name}</Link>
      </Title>
      <Box className={classes.ltcTag}>{product.price / 100} ltc</Box>
      <Box className={classes.priceTag}>{formatMoney(product.price)}</Box>
      <p>{product.description}</p>
      <div className="buttonList">
        <Link
          href={{
            pathname: 'update',
            query: {
              id: product.id,
            },
          }}
        >
          Edit
        </Link>
        <DeleteProduct id={product.id}>Delete</DeleteProduct>
        <AddToCart id={product.id} />
      </div>
    </ItemStyles>
  );
}
