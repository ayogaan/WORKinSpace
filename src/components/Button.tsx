export default function Button({children, type}  : { children:string, type:string}){
    
    const getVariant = (type:string) => {
        switch (type) {
            case "lg":
                return "px-3 py-2";
                break;
        
            default:
                return "px-3 py-2";
                break;
        }
    }

    
    return (
        <button className={`flex items-center gap-5 rounded-full bg-white hover:bg-black text-black hover:text-white shadow ${getVariant(type)} transition-all 2s`}>
            {children}
            <div className="w-[20px] h-[20px] bg-black rounded-full"></div>
        </button>
    )
}