
const ColorShirt = () => {

    const data = ["manga", "cuello", "SUPERIOR", "INFERIOR", "atrás", "Otros" ]

    return (
        <div className="flex bg-[#313131] w-full h-30% justify-between">
        {data.map((e) => {
            return (
                <div key={e} value={e} className="flex justify-center  py-3 hover:bg-[#FFFFFF] focus:[#FFFFFF] h-12 w-full">
                    <button
                    className=""
                    >
                    {e.toUpperCase()}
                    </button>
                </div>
            );
        })}
        </div>
    )
}   

export default ColorShirt;