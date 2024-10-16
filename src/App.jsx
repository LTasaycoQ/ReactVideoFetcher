import React, { useState } from 'react';

function App() {
  const [inputUrl, setInputUrl] = useState('');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); 

  const fetchApi = async () => {
    setLoading(true);
    setError(null);

    const url = `https://opulent-funicular-7vprxvr6qxgqfp4xv-8080.app.github.dev/api/download?url=${encodeURIComponent(inputUrl)}`;
    const url_local = `http://localhost:8080/api/download?url=${encodeURIComponent(inputUrl)}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Error en la respuesta de la API');
      }
      const responseJSON = await response.json();
      setData(responseJSON);
    } catch (error) {
      try{
        const response = await fetch(url_local);
        if (!response.ok) {
          throw new Error('Error en la respuesta de la API');
        }
        const responseJSON = await response.json();
        setData(responseJSON);
      }catch{
        setError(error.message);
        console.error('Error:', error);
      }
     
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Comsumiendo una api con ⚛️</h1>
      <input
        type="text"
        value={inputUrl}
        onChange={(e) => setInputUrl(e.target.value)}
        placeholder="Ingresa la URL del video"
      />
      <button onClick={fetchApi} disabled={loading || !inputUrl}>
        {loading ? 'Cargando...' : 'Obtener Video'}
      </button>

      {error && <p style={{ color: 'red' }}>Error: {error}</p>}

      {data ? (
        <div className='contenedor'>
          <div className='contenido'>
            <div>
              <div className='perfil_user'>
                <img className='imagen_avatar' src={data.Avatar} alt={data.Nickname} />
                <div className='letras_titulo'>
                  <p>Nickname: {data.Nickname}</p>
                  <span className='titulo'>{data.titulo}</span></div>
              </div>
              <p>
                Enlace de Video: <a href={data.enlace_video} target="_blank" rel="noopener noreferrer">Enlace al Video</a>
              </p>
              <p>
                Descarga de Video: <a href={data.descarga_video} target="_blank" rel="noopener noreferrer">Descarga Videos</a>
              </p>
              <p>
                Descarga de Audio: <a href={data.descarga_audio} target="_blank" rel="noopener noreferrer">Descarga Aufdio</a>
              </p></div>
              <video controls src={data.descarga_video}></video></div>
        </div>
      ) : (
        <p>Esperando respuesta...</p>
      )}
    </div>
  );
}

export default App;
