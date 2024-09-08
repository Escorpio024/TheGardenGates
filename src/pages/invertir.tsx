import { useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Proyectos.module.css';
import NavBar from '../components/NavBar'; // Importar NavBar

// Datos de los proyectos
const proyectos = [
  { id: 1, title: 'Proyecto A', description: 'Descripción del Proyecto A.', details: 'Detalles completos del Proyecto A.' },
  { id: 2, title: 'Proyecto B', description: 'Descripción del Proyecto B.', details: 'Detalles completos del Proyecto B.' },
  { id: 3, title: 'Proyecto C', description: 'Descripción del Proyecto C.', details: 'Detalles completos del Proyecto C.' },
  { id: 4, title: 'Proyecto D', description: 'Descripción del Proyecto D.', details: 'Detalles completos del Proyecto D.' },
  { id: 5, title: 'Proyecto E', description: 'Descripción del Proyecto E.', details: 'Detalles completos del Proyecto E.' },
  { id: 6, title: 'Proyecto F', description: 'Descripción del Proyecto F.', details: 'Detalles completos del Proyecto F.' },
  // Agrega más proyectos aquí
];

const Proyectos = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState(''); // Estado para el término de búsqueda

  const openModal = (id: number) => {
    setSelectedProject(id);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  // Filtrar proyectos según el término de búsqueda
  const filteredProjects = proyectos.filter(project =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <Head>
        <title>Proyectos</title>
        <meta name="description" content="Explora nuestros proyectos y conoce más sobre cada uno." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <main className={styles.main}>
        <h1 className={styles.title}>Proyectos</h1>
        <p className={styles.description}>Descubre grandes proyectos de economía circular.</p>

        {/* Barra de búsqueda */}
        <input
          type="text"
          placeholder="Buscar proyectos..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={styles.searchBar}
        />

        <div className={styles.grid}>
          {filteredProjects.map(project => (
            <div key={project.id} className={styles.card} onClick={() => openModal(project.id)}>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </div>
          ))}
        </div>


        {selectedProject !== null && (
          <div className={styles.modal} onClick={closeModal}>
            <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
              <h2>{proyectos.find(p => p.id === selectedProject)?.title}</h2>
              <p>{proyectos.find(p => p.id === selectedProject)?.details}</p>
              <button className={styles.closeButton} onClick={closeModal}>Cerrar</button>
            </div>
          </div>
        )}
      </main>
      <footer className={styles.footer}>
        <p>© 2024 The Garden Gates. Siguenos en <a href='https://x.com/thegardengatesx'>X @thegardengatesx</a>.</p>
      </footer>
    </div>
  );
};

export default Proyectos;
