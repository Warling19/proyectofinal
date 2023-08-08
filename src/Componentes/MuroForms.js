import React, { useState } from 'react';
import { useUser } from 'reactfire';

const MuroForms = (props) => {
  const initialEstateValues = {
    mensaje: ""
  };

  const [values, setValues] = useState(initialEstateValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addOrEditPublicacion(values); 
    setValues({ ...initialEstateValues });
  }

  const user = useUser();

  return (
    <div>
      {user.data &&
        <form className="card card-body" onSubmit={handleSubmit}>
          <div className="form-group input-group">
            <div className="input-group-text bg-light">
              <i className="material-icons">create</i>
            </div>
            <input
              type="textarea"
              className="form-control"
              placeholder="Qué estás pensando?"
              name="mensaje"
              onChange={handleInputChange}
              value={values.mensaje}
            />
          </div>
          <button type="submit">
            Publicar
          </button>
        </form>
      }
    </div>
  )
}

export default MuroForms;
