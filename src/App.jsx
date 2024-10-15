import React, { useState } from 'react';

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const url = 'https://opulent-funicular-7vprxvr6qxgqfp4xv-8080.app.github.dev/api/download?url=https://youtu.be/kZ4YaoCYais?si=01LoNhbNFYwpvUIU';

  const fetchApi = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch(url);
      if (response.status === 429) {
        console.error('Demasiadas solicitudes. Esperando antes de intentar nuevamente...');
        await new Promise(resolve => setTimeout(resolve, 5000));
        return fetchApi(); // Intenta de nuevo
      }
      if (!response.ok) {
        throw new Error('Error en la respuesta de la API');
      }
      const responseJSON = await response.json();
      setData(responseJSON);
    } catch (error) {
      setError(error.message);
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Consumir API con React</h1>

      <button onClick={fetchApi} disabled={loading}>
        {loading ? 'Cargando...' : 'Obtener Video'}
      </button>
      
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}

      {!data ? (
        <p>Esperando respuesta...</p>
      ) : (
        <div>
          <h2>{data.titulo}</h2>
          <p>
            Enlace de Video: <a href={data.enlace_video} target="_blank" rel="noopener noreferrer">{data.enlace_video}</a>
          </p>
          <p>
            Descarga de Video: <a href={data.descarga_video} target="_blank" rel="noopener noreferrer">{data.descarga_video}</a>
          </p>
          <p>
            Descarga de Audio: <a href={data.descarga_audio} target="_blank" rel="noopener noreferrer">{data.descarga_audio}</a>
          </p>
          <p>Nickname: {data.Nickname}</p>
          <img src={data.Avatar} alt={data.Nickname} />
          <video controls src={data.descarga_video}></video>

        </div>
      )}
    </div>
  );
}

export default App;
