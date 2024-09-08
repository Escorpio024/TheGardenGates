import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Importa el componente Image de Next.js
import styles from '../styles/NavBar.module.css';
import { ConnectButton } from '@rainbow-me/rainbowkit';

const NavBar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    alert('Cerrar sesión');
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.logoContainer}>
        {/* Usar el componente Image de Next.js para cargar la imagen de manera eficiente */}
        <Image
          src="/img/LOGO.PNG" // Ruta relativa correcta a partir del directorio 'public'
          alt="Logo"
          className={styles.logo}
          width={100} // Ajusta el ancho según sea necesario
          height={100} // Ajusta la altura según sea necesario
        />
        <Link href="/" passHref>
          <h1 className={styles.title}>THE GARDEN GATES</h1>
        </Link>
      </div>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link href="/gestionIntereses">Gestión de Intereses</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/invertir">Invertir</Link>
        </li>
        <li className={styles.navItem}>
          <button onClick={toggleDropdown} className={styles.profileButton}>
            Perfil
          </button>
          {isDropdownOpen && (
            <div className={styles.dropdownMenu}>
              <Link href="/misCreditos" className={styles.dropdownItem}>
                Mis Créditos
              </Link>
              <Link href="/configuracion" className={styles.dropdownItem}>
                Configuración
              </Link>
              <Link href="/" className={styles.dropdownItem}>
                Cerrar Sesion
              </Link>
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
