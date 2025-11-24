import React, { useState, useRef } from 'react';
import { Link } from "react-router-dom";
import Layout from "../layout/sideMenu";
import Problem from "../components/error";
import Espera from "../components/espera";
import '../assets/styles/Home.css';
import "../App.css";

import { fetchVideoData } from "../service/videoService";
function Home() {
  const audioRef = useRef(null);
  const [isContentRpt, setIsContentRpt] = useState(true);
  const [inputUrl, setInputUrl] = useState("");
  const [stateReproducto, setStateReproducto] = useState(false);
  const [data, setData] = useState(null);
  const [links, setLinks] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setData(null);
    setLoading(true);
    setIsContentRpt(true);
    setStateReproducto(false);


    try {

      const result = await fetchVideoData(inputUrl);
      if (result != "") {
        setData(result);
        setLinks(result.links);
      } else {
        setIsContentRpt(false);

      }
      setInputUrl("");
    } catch (err) {
      setError(err.message);
      setIsContentRpt(false);
    } finally {
      setLoading(false);

    }
  };


  let content;
  if (isContentRpt) {
    content = <Espera />;
  } else {
    content = <Problem />;
  }


  const reproductorVideoSelect = async (link) => {
    console.log(link);
    document.getElementById('videoReproductor').src = link;
  }

  const reproductorAudio = () => {
    if (stateReproducto) {
      audioRef.current.play();
      setStateReproducto(false)
    } else {
      audioRef.current.pause();

      setStateReproducto(true)

    }
  }


  const listItems = links.map((linkItem, index) => (
    <li key={index} className='flex w-full'>
      <div className='flex w-full justify-between items-center'>
        <p>{linkItem.quality}</p>
        <div download className='flex justify-end items-center gap-[15px]'>
          <a href={linkItem.link} className='font-black'  ><svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" class="bi bi-arrow-down-circle-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293z" />
          </svg>
          </a>
          <button className='font-black' onClick={() => reproductorVideoSelect(linkItem.link)}  ><svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" class="bi bi-play-circle-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z" />
          </svg>
          </button>
        </div>
      </div>
    </li>
  ));
  return (


    <div className='containerTodo w-full flex max-lg:flex-col gap-[20px] max-lg:gap-[0px] '>

      <div className='z-2'>
        <Layout />
      </div>

      <div className='z-1 contenidoDescargaVideoTodo  w-full flex justify-center'>
        <div className="contenidoVideos w-[63em] h-full max-md:flex-col xl:w-[68em] 2xl:w-[85em] flex gap-[20px] max-md:gap-[10px] 2xl:gap-[40px]">

          <div className='w-[35%] 2xl:w-[40%] max-md:w-full   h-full containerDescargador'>
            <div className='containerDescargarVideo sticky h-full  flex flex-col justify-between  gap-[20px]  bg-transparent  rounded-3xl border-[7px] border-[#2A2D3C]'>
              <div className=''>
                <div className='tittleDescargarVideo text-[18px] 2xl:text-[22px] font-black flex justify-between items-center'>
                  <p>Descargar Video</p>
                  <div className="bg-[url('https://cdn-icons-png.freepik.com/512/3936/3936699.png')] bg-cover w-[30px] h-[30px] bg-gray-400 rounded-full"></div>
                </div>
                <div>
                  <input required
                    value={inputUrl}
                    onChange={(e) => setInputUrl(e.target.value)} className='inputDescargar text-[13px] 2xl:text-[18px] 2xl:h-[40px] bg-[#2A2D3C] outline-none rounded-lg w-full h-[32px]' placeholder='Pegar enlace .....' type="text" />
                  <button type='button' onClick={handleSearch} disabled={loading || !inputUrl} className='btnDescargar w-full rounded-lg bg-[#5252E5] h-[30px] 2xl:h-[42px] 2xl:text-[18px] font-black text-[15px]class="inline-flex cursor-not-allowed items-center rounded-md bg-indigo-500 px-4 py-2 text-sm leading-6 font-semibold text-white transition duration-150 ease-in-out hover:bg-indigo-400'>

                    {loading ? (
                      <div className='flex items-center justify-center gap-[10px] '>
                        <svg class="mr-3 -ml-1 size-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>Processing…
                      </div>
                    ) : (
                      <div className='flex items-center justify-center gap-[10px] '>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                        </svg>
                        Buscar
                      </div>
                    )}

                  </button>


                </div>
                <div className="containerSelectRed max-sm:grid max-sm:grid-cols-2 w-full justify-between flex gap-2">


                  <button className='flex items-center max-sm:w-full justify-center w-[65px] h-[55px]  2xl:w-[75px] 2xl:h-[65px] rounded-lg bg-[#5252E5]'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-tiktok" viewBox="0 0 16 16">
                      <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z" />
                    </svg>
                  </button>
                  <button className='flex max-sm:w-full items-center justify-center w-[65px] h-[55px] 2xl:w-[75px] 2xl:h-[65px] rounded-lg bg-[#2A2D3C]'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 16">
                      <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" />
                    </svg>
                  </button>

                  <button className='flex max-sm:w-full items-center justify-center w-[65px] h-[55px]  2xl:w-[75px] 2xl:h-[65px] rounded-lg bg-[#2A2D3C]'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                    </svg>
                  </button>
                  <button className='flex max-sm:w-full items-center justify-center w-[65px] h-[55px]  2xl:w-[75px] 2xl:h-[65px] rounded-lg bg-[#2A2D3C]'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                    </svg>
                  </button>
                </div>


              </div>

              <div className='flex gap-[10px] h-full max-md:hidden'>

                <div className='bg-[#2A2D3C] w-[10%] max-xl:hidden h-full rounded-xl'></div>
                <div className='containerAudio max-xl:w-full  w-[80%] h-[100%] bg-[#2A2D3C] rounded-2xl flex flex-col items-center justify-between'>

                  {data ? (
                    <div className='w-full h-full  flex flex-col items-center justify-between'>
                      <div className="w-[100%] z-1 rounded-xl h-[140px] 2xl:h-[180px] bg-[url('https://img3.wallspic.com/crops/3/9/8/5/7/175893/175893-anime-arte_animado-edificio-afterglow-atardecer-1366x768.jpg')] bg-cover no-repeat"></div>
                      <div className="containerDisco relative z-2">
                        <img src={data.avatar} className="circleDiscoImage  bg-cover no-repeat absolute bg-gray-400 rounded-full w-[40px] 2xl:w-[65px]" />

                        <img src="https://pngimg.com/uploads/vinyl/vinyl_PNG4.png" className='w-[150px]   2xl:w-[200px]' alt="" />
                      </div>
                      <div className="flex flex-col gap-[30px] items-center justify-between  w-full  containerReproductor">

                        <div className='flex justify-between w-full'>
                          <div className='flex'>
                            <div class="pfp">
                              <div class="playing">
                                <div class="greenline line-1"></div>
                                <div class="greenline line-2"></div>
                                <div class="greenline line-3"></div>
                                <div class="greenline line-4"></div>
                                <div class="greenline line-5"></div>
                              </div>
                            </div>
                            <div class="pfp">
                              <div class="playing">
                                <div class="greenline line-1"></div>
                                <div class="greenline line-2"></div>
                                <div class="greenline line-3"></div>
                                <div class="greenline line-4"></div>
                                <div class="greenline line-5"></div>
                              </div>
                            </div>
                            <div class="pfp">
                              <div class="playing">
                                <div class="greenline line-1"></div>
                                <div class="greenline line-2"></div>
                                <div class="greenline line-3"></div>
                                <div class="greenline line-4"></div>
                                <div class="greenline line-5"></div>
                              </div>
                            </div>
                            <div class="pfp">
                              <div class="playing">
                                <div class="greenline line-1"></div>
                                <div class="greenline line-2"></div>
                                <div class="greenline line-3"></div>
                                <div class="greenline line-4"></div>
                                <div class="greenline line-5"></div>
                              </div>
                            </div>
                          </div>
                          <button type='button' onClick={reproductorAudio} className='btnAudioReproductor w-[67px] bg-[#5252E5] h-[67px] rounded-full flex items-center justify-center'>
                            {stateReproducto ? (
                              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-play-circle-fill" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z" />
                              </svg>
                            ) : (
                              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-pause-circle-fill" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.25 5C5.56 5 5 5.56 5 6.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C7.5 5.56 6.94 5 6.25 5m3.5 0c-.69 0-1.25.56-1.25 1.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C11 5.56 10.44 5 9.75 5" />
                              </svg>
                            )}

                          </button>

                          <div className='flex'>

                            <div class="pfp">
                              <div class="playing">
                                <div class="greenline line-1"></div>
                                <div class="greenline line-2"></div>
                                <div class="greenline line-3"></div>
                                <div class="greenline line-4"></div>
                                <div class="greenline line-5"></div>
                              </div>
                            </div>
                            <div class="pfp">
                              <div class="playing">
                                <div class="greenline line-1"></div>
                                <div class="greenline line-2"></div>
                                <div class="greenline line-3"></div>
                                <div class="greenline line-4"></div>
                                <div class="greenline line-5"></div>
                              </div>
                            </div>
                            <div class="pfp">
                              <div class="playing">
                                <div class="greenline line-1"></div>
                                <div class="greenline line-2"></div>
                                <div class="greenline line-3"></div>
                                <div class="greenline line-4"></div>
                                <div class="greenline line-5"></div>
                              </div>
                            </div>
                            <div class="pfp">
                              <div class="playing">
                                <div class="greenline line-1"></div>
                                <div class="greenline line-2"></div>
                                <div class="greenline line-3"></div>
                                <div class="greenline line-4"></div>
                                <div class="greenline line-5"></div>
                              </div>
                            </div>
                          </div>

                        </div>


                        <a href={data.linkAudio} download className="text-center btnDescargarAudio w-full rounded-xl bg-[#5252E5] font-black">Descargar Audio</a>

                        <audio ref={audioRef} id='audioReproductor' className='hidden' src={data.linkAudio} controls ></audio>
                      </div>
                    </div>
                  ) : (

                    <div className='w-full flex flex-col text-gray-400 h-[250px] gap-[10px] items-center justify-center '>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-[70px] h-[70px] bi bi-question-circle-fill" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247m2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z" />
                      </svg>
                      Buscar Video
                    </div>
                  )}

                </div>
                <div className='bg-[#2A2D3C] max-xl:hidden w-[10%] h-full rounded-xl'></div>

              </div>

            </div>
          </div>

          {data ? (
            <div className="containerVideo flex flex-col  gap-[20px] w-[65%]   max-md:w-full  h-full">

              <div className='containerCreador bg-[#2A2D3C] flex items-center max-sm:flex-col max-sm:text-center  w-full  rounded-xl '>
                <div className='w-[30%] max-sm:w-full items-center flex justify-center'>
                  <img src={data.avatar || "https://i.pinimg.com/736x/43/b7/50/43b7506735964e35357b678dd3cb5de5.jpg"} className="w-[110px] h-[110px] rounded-full " />
                </div>

                <div className='w-[70%] max-sm:w-full flex flex-col gap-[10px]'>
                  <p className='font-black text-[30px] text-purple-400'>{data.nickname}</p>
                  <p className='font-light text-[15px]'>{data.title}</p>
                </div>
              </div>

              <div className='font-black w-full flex items-center gap-[15px]'>
                <div className='flex w-full gap-[15px] max-sm:flex-col'>

                  <div className='detalleRedVideos max-sm:w-full bg-[#2A2D3C] rounded-xl w-[50%] flex items-center gap-[10px] justify-center'>

                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="text-red-400 bi bi-heart-fill" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" />
                    </svg>
                    {data.like || "Privado"}
                  </div>
                  <div className='detalleRedVideos max-sm:w-full bg-[#2A2D3C] rounded-xl w-[50%] flex items-center gap-[10px] justify-center'>

                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="text-blue-400 bi bi-eye-fill" viewBox="0 0 16 16">
                      <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
                      <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7" />
                    </svg>
                    {data.views || "Privado"}

                  </div>
                </div>

                <div className='flex w-full gap-[15px] max-sm:flex-col'>
                  <div className='detalleRedVideos max-sm:w-full  bg-[#2A2D3C] rounded-xl w-[50%] flex items-center gap-[10px] justify-center'>

                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="text-green-400 bi bi-chat-fill" viewBox="0 0 16 16">
                      <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9 9 0 0 0 8 15" />
                    </svg>
                    {data.comments || "Privado"}
                  </div>
                  <div className='detalleRedVideos bg-[#2A2D3C] max-sm:w-full rounded-xl w-[50%] flex items-center gap-[10px] justify-center'>

                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="text-orange-300 bi bi-share-fill" viewBox="0 0 16 16">
                      <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5" />
                    </svg>
                    {data.shared || "Privado"}
                  </div>
                </div>
              </div>

              <div className='sticky'>
                <div className='w-full max-sm:flex-col-reverse flex gap-[15px]'>

                  <div className='containerVideoDescarga max-sm:w-full bg-[#2A2D3C] rounded-xl w-[50%] flex flex-col gap-[10px] '>
                    <p className='font-black text-gray-400 '>Normal</p>
                    <a href={data.linkVideo} download className='buttonDescarga bg-[#5252E5] text-center items-center w-full justify-center rounded-xl font-black'>Descargar Video</a>
                    <p className='font-black text-gray-400 '>Tipos de Descarga</p>
                    <div className='flex flex-col'>

                      <ul className='text-[12px] overflow-auto flex flex-col gap-[20px] h-[280px] scroll-auto'>{listItems}</ul>

                    </div>
                  </div>
                  <div className='containerVideoDescarga 2xl:h-[600px]  max-sm:w-full bg-[#2A2D3C] rounded-xl w-[50%] '>
                    <video className=' rounded-lg  bg-black w-full h-[400px] 2xl:h-full'
                      poster={data.frontPage}
                      controls
                      id='videoReproductor'
                      src={data.linkVideo}>

                    </video>


                  </div>

                </div>
              </div>

              <div className='containerAudio bg-[#2A2D3C] hidden max-md:flex max-sm:flex-col items-center  max-sm:text-center  w-full  rounded-xl '>
                <div className="seccionAudio bg-cover no-repeat bg-[url('https://img.freepik.com/foto-gratis/ilustracion-cielo-nocturno-anime_23-2151684328.jpg?semt=ais_hybrid&w=740&q=80')] flex items-center  max-sm:text-center  w-full  rounded-xl">
                  <div className='w-[30%] max-sm:w-[40%] items-center flex justify-center'>
                    <img src="https://canalmuseal.com/wp-content/uploads/2025/09/disco-naranja-vinilo-.png" className="w-[120px] h-[120px] max-sm:w-[90px] max-sm:h-[90px] rounded-full " />
                  </div>

                  <div className='w-[70%] max-sm:w-[60%] flex flex-col gap-[10px]'>
                    <div className='contenedorTittleAudio flex justify-between w-[80%]  items-center rounded-full '>
                      <div className='flex items-center gap-[10px]'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-apple-music" viewBox="0 0 16 16">
                          <path fill-rule="evenodd" d="m10.995 0 .573.001q.241 0 .483.007c.35.01.705.03 1.051.093.352.063.68.166.999.329a3.36 3.36 0 0 1 1.47 1.468c.162.32.265.648.328 1 .063.347.084.7.093 1.051q.007.241.007.483l.001.573v5.99l-.001.573q0 .241-.008.483c-.01.35-.03.704-.092 1.05a3.5 3.5 0 0 1-.33 1 3.36 3.36 0 0 1-1.468 1.468 3.5 3.5 0 0 1-1 .33 7 7 0 0 1-1.05.092q-.241.007-.483.008l-.573.001h-5.99l-.573-.001q-.241 0-.483-.008a7 7 0 0 1-1.052-.092 3.6 3.6 0 0 1-.998-.33 3.36 3.36 0 0 1-1.47-1.468 3.6 3.6 0 0 1-.328-1 7 7 0 0 1-.093-1.05Q.002 11.81 0 11.568V5.005l.001-.573q0-.241.007-.483c.01-.35.03-.704.093-1.05a3.6 3.6 0 0 1 .329-1A3.36 3.36 0 0 1 1.9.431 3.5 3.5 0 0 1 2.896.1 7 7 0 0 1 3.95.008Q4.19.002 4.432 0h.573zm-.107 2.518-4.756.959H6.13a.66.66 0 0 0-.296.133.5.5 0 0 0-.16.31c-.004.027-.01.08-.01.16v5.952c0 .14-.012.275-.106.39-.095.115-.21.15-.347.177l-.31.063c-.393.08-.65.133-.881.223a1.4 1.4 0 0 0-.519.333 1.25 1.25 0 0 0-.332.995c.031.297.166.582.395.792.156.142.35.25.578.296.236.047.49.031.858-.043.196-.04.38-.102.555-.205a1.4 1.4 0 0 0 .438-.405 1.5 1.5 0 0 0 .233-.55c.042-.202.052-.386.052-.588V6.347c0-.276.08-.35.302-.404.024-.005 3.954-.797 4.138-.833.257-.049.378.025.378.294v3.524c0 .14-.001.28-.096.396-.094.115-.211.15-.348.178l-.31.062c-.393.08-.649.133-.88.223a1.4 1.4 0 0 0-.52.334 1.26 1.26 0 0 0-.34.994c.03.297.174.582.404.792a1.2 1.2 0 0 0 .577.294c.237.048.49.03.858-.044.197-.04.381-.098.556-.202a1.4 1.4 0 0 0 .438-.405q.173-.252.233-.549a2.7 2.7 0 0 0 .044-.589V2.865c0-.273-.143-.443-.4-.42-.04.003-.383.064-.424.073" />
                        </svg>
                        <p className='font-black text-[24px] max-sm:text-[18px] '>{data.nickname}</p>

                      </div>
                      <img src={data.avatar} alt="icono_creador" className='w-[30px] h-[30px] max-sm:hidden  rounded-full' />

                    </div>
                    <div className="containerDescargaAudio flex max-sm:hidden gap-[6px] items-center   w-full  containerReproductor">

                      <div className='flex '>

                        <button type='button' onClick={reproductorAudio} className='btnAudioReproductor w-[60px] bg-[#5252E5] h-[60px] rounded-full flex items-center justify-center'>
                          {stateReproducto ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-play-circle-fill" viewBox="0 0 16 16">
                              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z" />
                            </svg>
                          ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-pause-circle-fill" viewBox="0 0 16 16">
                              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.25 5C5.56 5 5 5.56 5 6.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C7.5 5.56 6.94 5 6.25 5m3.5 0c-.69 0-1.25.56-1.25 1.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C11 5.56 10.44 5 9.75 5" />
                            </svg>
                          )}

                        </button>


                      </div>

                      <a href={data.linkAudio} download className="text-center btnDescargarAudio w-full  rounded-xl bg-[#5252E5] font-black">Descargar Audio</a>

                      <audio ref={audioRef} id='audioReproductor' className='hidden' src={data.linkAudio} controls ></audio>
                    </div>


                  </div>

                </div>
                <div className=' containerbtnDownload w-full max-sm:flex hidden'>
                  <div className='flex items-center w-full gap-[15px]'>
                    <div>
                      <button type='button' onClick={reproductorAudio} className='btnAudioReproductor w-[60px] bg-[#5252E5] h-[60px] max-sm:w-[47px] max-sm:h-[47px] rounded-full flex items-center justify-center'>
                        {stateReproducto ? (
                          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-play-circle-fill" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z" />
                          </svg>
                        ) : (
                          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-pause-circle-fill" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.25 5C5.56 5 5 5.56 5 6.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C7.5 5.56 6.94 5 6.25 5m3.5 0c-.69 0-1.25.56-1.25 1.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C11 5.56 10.44 5 9.75 5" />
                          </svg>
                        )}

                      </button>
                    </div>
                    <a href={data.linkAudio} download className="text-center btnDescargarAudio w-full  rounded-xl bg-[#5252E5] font-black">Descargar Audio</a>


                  </div>
                </div>

              </div>


            </div>)
            : (

              <div className="containerVideo  justify-center items-center flex flex-col  max-md:w-full  gap-[20px] w-[65%] h-full">
                {content}
              </div>

            )}
        </div>
      </div>

    </div >
  );
}

export default Home;