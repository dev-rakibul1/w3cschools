import Pages from "../components/pages";

const Header = ({ user }) => {
  return (
    <div>
      <Pages user={user} />
    </div>
  );
};

export default Header;
