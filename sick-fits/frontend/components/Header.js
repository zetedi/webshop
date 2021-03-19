import Link from 'next/link';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Cart from './Cart';
import Nav from './Nav';
import Search from './Search';

const HeaderStyles = styled.header`
  .bar {
    border-bottom: 1px solid var(--black, black);
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: stretch;
  }

  .img {
    padding: 1rem;
  }

  .sub-bar {
    display: grid;
    grid-template-columns: 1fr auto;
    border-bottom: 1px solid var(--black, black);
  }
`;
const useStyles = makeStyles((theme) => ({
  ...theme.customTheme,
  button: {
    backgroundColor: theme.palette.primary.main,
  },
}));

export default function Header() {
  const classes = useStyles();
  return (
    <HeaderStyles>
      <div className="bar">
        <img
          className="img"
          src="/static/lifeseed.png"
          alt="lifeseed"
          height="108"
          width="108"
        />
        <Nav />
      </div>
      <Button className={classes.button} onClick={() => {}}>
        JAYA
      </Button>
      <div className="sub-bar">
        <Search />
      </div>
      <Cart />
    </HeaderStyles>
  );
}
