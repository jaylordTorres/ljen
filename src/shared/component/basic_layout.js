import { Footer } from "./footer";

export const BasicLayout = ({ children }) => {
  return (
    <div>
      <div>{children}</div>
      <Footer />
    </div>
  );
};
