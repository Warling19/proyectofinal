import React, { useEffect, useState } from 'react';
import MuroForms from './MuroForms';
import { db, auth } from '../firebase';
import '../css/muro.css';

const Muro = () => {
  const [publicaciones, setPublicaciones] = useState([]);

  useEffect(() => {
    const obtenerPublicaciones = () => {
      const publicacionesRef = db.ref('publicaciones');

      publicacionesRef.on('value', (snapshot) => {
        const datos = [];
        snapshot.forEach((childSnapshot) => {
          datos.push({ id: childSnapshot.key, ...childSnapshot.val() });
        });
        setPublicaciones(datos);
      });
    };

    obtenerPublicaciones();
  }, []);

  const addOrEditPublicacion = (publicacion) => {
    db.ref('publicaciones').push(publicacion);
  };

  const handleLogout = async () => {
    try {
      await auth.signOut();
      console.log('Cierre de sesión exitoso');
    } catch (error) {
      console.error('Error al cerrar sesión:', error.message);
    }
  };

  return (
    <div className="muro">
      {publicaciones.map((publicacion) => (
        <div key={publicacion.id} className="publicacion">
          <p>{publicacion.mensaje}</p>
        </div>
      ))}
      <MuroForms addOrEdit={addOrEditPublicacion} />
      <button onClick={handleLogout}>Cerrar Sesión</button>
    </div>
  );
};

export default Muro;
