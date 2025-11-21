function Error() {
    return (
        <div className='container_error flex max-md:h-full h-[42.5em] items-center justify-center '>

            <div className="error max max-lg: font-black text-gray-400 gap-[15px] flex flex-col items-center justitfy-center">
                <p>Error al procesar .Por favor vuela a intentar</p>

                <img className='max-sm:w-[220px]' src="https://upload-os-bbs.hoyolab.com/upload/2024/04/12/e97cb9e3fbd1d79f914255f6214afbfc_8297816975899591934.png?x-oss-process=image%2Fauto-orient%2C0%2Finterlace%2C1%2Fformat%2Cwebp%2Fquality%2Cq_70" alt="icono-Confundido" />


            </div>
        </div>
    );
}

export default Error;