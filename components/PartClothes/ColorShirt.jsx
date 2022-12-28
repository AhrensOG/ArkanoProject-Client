
const ColorShirt = () => {

    const data = ["Mangas", "Cuello", "Atrás", "Frente" ]

    return (
        <div className="flex bg-[#313131] w-full justify-between">
        {data.map((e) => {
            return (
                <div key={e} value={e} className="flex justify-center py-1 hover:bg-white focus:bg-[#FFFFFF] w-full">
                    <button
                    className="text-white hover:text-black"
                    >
                    {e}
                    </button>
                </div>
            );
        })}
        </div>
    )
}   

export default ColorShirt;