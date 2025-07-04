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

    const url = `https://rising-chiquia-ltasaycoqs-e668c9e2.koyeb.app/api/download?url=${encodeURIComponent(inputUrl)}`;


    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Error en la respuesta de la API');
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

      <div className='misRedes'>
        <ul>
          <li className='Github'>
            <a href="https://github.com/LTasaycoQ"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
            </svg>
            </a>
          </li>
          <li className='facebook'>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
            </svg>
          </li>
          <li className='youtube'>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 16">
              <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" />
            </svg>
          </li>

          <li className='linkedin'>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
            </svg>
          </li>
          <li className='whatsap'>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
              <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
            </svg>
          </li>
          <li className='email'>
            <a href="mailto:luistasayco3030@gmail.com">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-envelope-at-fill" viewBox="0 0 16 16">
                <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2zm-2 9.8V4.698l5.803 3.546zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.5 4.5 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586zM16 9.671V4.697l-5.803 3.546.338.208A4.5 4.5 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671" />
                <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791" />
              </svg>        </a>
          </li>
        </ul>
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
        </button></div>

      {error && <p style={{ color: 'red' }}>Error: {error}</p>}



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
                <img className='imagen_avatar' src={data.Avatar || "https://holatelcel.com/wp-content/uploads/2020/09/instagram-foto-de-perfil-4.jpg"} alt={data.Nickname} />
                <div className='letras_titulo'>
                  <span className='nombreCreador'>Nombre:  {data.Nickname}</span>
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
          <p>Esperando respuesta...</p>
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
