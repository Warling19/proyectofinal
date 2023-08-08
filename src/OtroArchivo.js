import auth from './loginfirebase';

const loginWithEmail = async (email, password) => {
  try {
    await auth.signInWithEmailAndPassword(email, password);
    console.log('Inicio de sesión exitoso');
  } catch (error) {
    console.error('Error al iniciar sesión:', error.message);
  }
};

loginWithEmail('warlingguzman20@gmail.com', 'wali123');
