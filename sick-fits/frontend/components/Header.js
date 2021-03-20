import Link from 'next/link';
import Button from '@material-ui/core/Button';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Cart from './Cart';
import Nav from './Nav';
import Search from './Search';
import Lifecircle from './lifecircle';

const useStyles = makeStyles((theme) => ({
  ...theme.customTheme,
  button: {
    backgroundColor: theme.palette.primary.main,
  },
  bar: {
    borderBottom: '1px solid var(--black, black)',
    display: 'grid',
    gridTemplateColumns: 'auto 1fr',
    padding: '1rem',
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
  search: {
    display: 'grid',
    gridTemplateColumns: '1fr auto',
    borderBottom: '1px solid var(--black, black)',
  },
}));

export default function Header() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.bar}>
        <Lifecircle />
        <Nav />
      </div>
      <div className={classes.search}>
        <Search />
      </div>
      <Cart />
    </div>
  );
}
