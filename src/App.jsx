import React, { useState } from 'react';

function App() {
  let [inputUrl, setInputUrl] = useState('');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchApi = async () => {
    setLoading(true);
    setError(null);

    if (inputUrl == "") {
      console - log("no hay video");
      return
    }

    const url = `https://agricultural-anjela-ltasaycoqs-765b093c.koyeb.app/api/download?url=${encodeURIComponent(inputUrl)}`;


    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Error al procesar Video intentelo de nuevo');
      }
      setInputUrl("");
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

    <div className='contenidoTotal'>

      <div className='anuncio'>
        <span>pagina descarga cualquier video de fb yt ig tiktok</span>
      </div>
      <div className="menuPrincipal">
        <div className='nombreAppDiv'>
          <span>Downime</span>
        </div>

        <div className='menuAppDiv'>
          <span className='MenuVisibilidad'><a href="#QueHcer">¿Que te ofrece Downime?</a></span>
          <span className='menuOculto'><a href="#QueHcer">¿Que te ofrece Downime?</a></span>

          <span className='MenuVisibilidad'><a href="#Porque">¿Por que deberias usarlo?</a></span>
        </div>


        <div className='contactAppDiv'>
          <span>Contacts</span>
        </div>
      </div>

      <h1 className='tituloPage'>Descarga Videos de <span className='spantitulo'> tus redes sociales</span></h1>
      <div className='divInputbtn'>
        <input
          type="text"
          required
          value={inputUrl}
          onChange={(e) => setInputUrl(e.target.value)}
          placeholder="Ingresa la URL del video"
        />
        <button onClick={fetchApi} disabled={loading || !inputUrl}>
          {loading ? 'Cargando...' : 'Buscar'}
        </button>
      </div>

      {error &&

        <div className='container_error'>

          <div className="error">
            <p>Error al procesar .Por favor vuela a intentar</p>

            <img className='imagenError' src="https://upload-os-bbs.hoyolab.com/upload/2024/04/12/e97cb9e3fbd1d79f914255f6214afbfc_8297816975899591934.png?x-oss-process=image%2Fauto-orient%2C0%2Finterlace%2C1%2Fformat%2Cwebp%2Fquality%2Cq_70" alt="icono-Confundido" />


          </div>
        </div>

      }

      {data ? (
        <div className='contenedor'>

          <div className='btnEnlaces'>
            <a className='btnCuentaCreador' href={data.enlace_video} target="_blank" rel="noopener noreferrer">Cuenta Creador</a>

            <a className='btnOcultoReponsive' download href={data.descarga_video}>Descarga el Video</a>
            <a className='btnOcultoReponsive' download href={data.descarga_audio}>Descarga el Audio</a>
          </div>

          <div className='contenido'>
            <div>
              <div className='perfil_user'>
                <img className='imagen_avatar' src={data.Avatar || "https://kinsta.com/es/wp-content/uploads/sites/8/2022/07/incognito-mode-1024x512.jpg"} alt={data.Nickname} />
                <div className='letras_titulo'>
                  <span className='nombreCreador'>Nombre:  {data.Nickname || "Desconocido"}</span>
                  <span className='titulo'>{data.titulo}</span>
                  <span className='firma'>ADS - Write To quatravfxcontact@gmail.com</span>
                </div>
              </div>
              <div className='detallecontendor'>
                <div className='seccionDEtallesCuenta'>
                  <ul>

                    <li>
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class=" vistas bi bi-eye-fill" viewBox="0 0 16 16">
                        <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
                        <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7" />
                      </svg>
                      {data.Vistas || "privado"}
                    </li>
                    <li>
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill=" currentColor" class=" comentarios bi bi-chat-fill" viewBox="0 0 16 16">
                        <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9 9 0 0 0 8 15" />
                      </svg>
                      {data.Comentarios || "privado"}
                    </li>
                    <li>
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class=" corazon bi bi-heart-fill" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" />
                      </svg> {data.Like || "privado"}
                    </li>


                    <li>
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="share bi bi-share" viewBox="0 0 16 16">
                        <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5m-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" />
                      </svg>
                      {data.Compartidos || "privado"}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='divVideo'>
              <video poster={data.Portada} controls src={data.descarga_video}></video>
            </div>
          </div>

          <div className='btnOCultosDescagas'>
            <a className='btnOcultoReponsivedebajo' download href={data.descarga_video} >Descarga el Video</a>
            <a className='btnOcultoReponsivedebajo' download href={data.descarga_audio} >Descarga el Audio</a>

          </div>

        </div>
      ) : (
        <div className='divEsperando'>
          {loading ? <div>


            <svg viewBox="0 0 240 240" height="240" width="240" class="pl">
              <circle
                stroke-linecap="round"
                stroke-dashoffset="-330"
                stroke-dasharray="0 660"
                stroke-width="20"
                stroke="#000"
                fill="none"
                r="105"
                cy="120"
                cx="120"
                class="pl__ring pl__ring--a"
              ></circle>
              <circle
                stroke-linecap="round"
                stroke-dashoffset="-110"
                stroke-dasharray="0 220"
                stroke-width="20"
                stroke="#000"
                fill="none"
                r="35"
                cy="120"
                cx="120"
                class="pl__ring pl__ring--b"
              ></circle>
              <circle
                stroke-linecap="round"
                stroke-dasharray="0 440"
                stroke-width="20"
                stroke="#000"
                fill="none"
                r="70"
                cy="120"
                cx="85"
                class="pl__ring pl__ring--c"
              ></circle>
              <circle
                stroke-linecap="round"
                stroke-dasharray="0 440"
                stroke-width="20"
                stroke="#000"
                fill="none"
                r="70"
                cy="120"
                cx="155"
                class="pl__ring pl__ring--d"
              ></circle>
            </svg>


          </div> : "Esperando respuesta..."}

        </div>
      )
      }


      <div className='contendioLadingPage'>
        <div className='seccionDequetrata'>

          <div className='contenidoDequetrata'>
            <h1 id='QueHcer'> ¿Qué puedes hacer con Downime?</h1>
            <div className='listaBeneficios'>
              <p>
                Downime te permite descargar videos en alta calidad desde TikTok, YouTube, Facebook e Instagram de forma rápida y sencilla. También puedes extraer únicamente el audio en formato MP3, lo que resulta ideal para guardar música, entrevistas o podcasts. A diferencia de otras herramientas, nuestros videos descargados desde TikTok no contienen marcas de agua, lo que los hace perfectos para uso personal o creativo. Todo esto sin necesidad de crear una cuenta, sin instalar aplicaciones y sin enfrentarte a anuncios molestos.
              </p>
              <p className='dataOculta'>
                Nuestra plataforma funciona desde cualquier dispositivo, ya sea móvil, tableta o computadora, y está optimizada para ofrecerte una experiencia fluida y segura. No hay límites en la cantidad de descargas que puedes realizar, y todo el proceso es completamente anónimo. Con Downime, obtienes velocidad, simplicidad y privacidad, todo en un solo lugar.
              </p>
            </div>

          </div>

          <img className='imagenQees' src="https://primero.digital/wp-content/uploads/2023/08/Creacion-de-contenido-para-Redes-Sociales-Primero-Digital.png" />
        </div>


        <br />
        <div className='contenedorComoUsar'>

          <div className='divComoUsar'>
            <h1 className='comoUsarTitulo'>¿Como usar Downime?</h1>
            <div className='comoUsarl'>

              <span>
                <strong>Pega el enlace</strong> del video que quieras descargar en el buscador
              </span>

              <span>

                <strong>Espera unos segundos</strong> mientras buscamos y procesamos el video.
              </span>
              <span>
                <strong>Haz clic en descargar</strong> y elige si quieres guardar el video o solo el audio.
              </span>

            </div>

          </div>

        </div>





        <div className='contenedorUso'>
          <div className='manejopagina'>
            <h1>Uso responsable</h1>
            <p>
              Downime está diseñado para uso personal. Por favor, respeta los derechos de autor y las políticas de cada plataforma. No utilices este servicio para redistribuir contenido sin permiso.
            </p>
          </div>
        </div>

        <div className='contenedorPorque'>
          <div className='seccionPorq'>
            <img className='imagenporq' src="https://cdn.prod.website-files.com/653fc861910f21af1e67ed85/66bca9d7c6d64f089ce60e2b_create%20shorts.webp" />

            <div className='contenidoPorq'>
              <h1 id='Porque'>¿Por qué elegir Downime??</h1>
              <div className='listaBeneficios'>

                <p>
                  Downime te permite descargar videos en alta definición y elimina automáticamente las marcas de agua en TikTok, para que disfrutes de contenido limpio y sin interrupciones. No necesitas registrarte ni instalar programas; solo pega el enlace y descarga rápidamente desde cualquier dispositivo. Es un servicio gratuito, sin límites de descarga y muy fácil de usar.              </p>
              </div>

            </div>

          </div>


        </div>




      </div>


      <div className='decoracion'>

      </div>

      <footer class="footer">
        <div class="footer-content">
          <h3>Downime</h3>
          <p>Descarga videos y audios en alta calidad desde TikTok, YouTube, Facebook e Instagram. Gratis, rápido y sin marcas de agua.</p>

          <nav class="footer-nav">
            <a href="#como-funciona">Cómo funciona</a>
            <a href="#faq">FAQ</a>
            <a href="#privacidad">Privacidad</a>
            <a href="#terminos">Términos</a>
            <a href="#contacto">Contacto</a>
          </nav>

          <div class="footer-social">
            <a href="https://twitter.com" target="_blank">Twitter</a>
            <a href="https://facebook.com" target="_blank">Facebook</a>
            <a href="https://instagram.com" target="_blank">Instagram</a>
          </div>

          <p class="footer-copy">&copy; 2025 Downime. Todos los derechos reservados.</p>
        </div>
      </footer>


    </div >
  );
}

export default App;
