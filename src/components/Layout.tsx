import { Props } from './Main';

interface LayoutProp extends Props {
  columns: [string, number][];
  gap?: number;
  sideGap?: number;
}

const Layout = ({ columns, gap, sideGap, children }: LayoutProp) => {
  const screenWidth = window.screen.width / 10;
  const maxWidth = 144;
  const midGap = gap ? gap : 2;
  const borderGap = sideGap ? sideGap : 2;
  const remain =
    screenWidth > maxWidth
      ? maxWidth - (borderGap * 2 + midGap)
      : screenWidth - (borderGap * 2 + midGap);

  const leftColumn = () => {
    if (columns[0][0] == 'fixed') {
      return columns[0][1];
    } else if (columns[0][0] == 'ratio') {
      return remain * columns[0][1];
    } else if (columns[0][0] == 'auto') {
      if (columns[1][0] == 'fixed') {
        return remain - columns[1][1];
      } else if (columns[1][0] == 'ratio') {
        return remain - remain * columns[1][1];
      }
    } else {
      return 0.5 * remain;
    }
  };

  const rightColumn = remain - leftColumn();

  const template = `minmax(${borderGap}rem, 1fr) minmax(0px, ${leftColumn()}rem) ${midGap}rem minmax(0px, ${rightColumn}rem) minmax(${borderGap}rem, 1fr)`;

  return (
    <div className='layout' style={{ gridTemplateColumns: `${template}` }}>
      {children}
    </div>
  );
};

export default Layout;
