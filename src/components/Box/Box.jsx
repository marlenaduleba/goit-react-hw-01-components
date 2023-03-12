import css from '../Box/Box.module.css';

const Box = ({ children }) => {
  return <div className={css.box}>{children}</div>;
};

export default Box;
