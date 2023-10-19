import { Props } from "./Main";

interface LayoutProp extends Props {
  columns: string;
}

const Layout = ({ columns, children }: LayoutProp) => {
  return (
    <div className="layout" style={{ gridTemplateColumns: `${columns}` }}>
      {children}
    </div>
  );
};

export default Layout;
