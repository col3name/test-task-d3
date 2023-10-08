import Title from "../../shared/ui/Title/Title";
import Button from "../../shared/ui/Button";

import styles from "./Header.module.css";

import {TitleSize} from "../../shared/ui/Title/Title.props";
import {useLogout} from "../../shared/services/auth/hooks";

const Header = () => {
  const logout = useLogout();
  return (
    <div className={ styles.header }>
      <Title size={TitleSize.Medium}>Сводка</Title>
      <Button onClick={logout}>logout</Button>
    </div>
  )
}

export default Header;
