function Todo (props) {

    return (
        <div className="flex justify-center items-center flex-col w-auto h-60 rounded-bl-lg rounded-br-lg gap-2.5 bg-violet-950 text-white">
        
            <div className="flex justify-start items-start flex-row w-87 h-10 bg-violet-500 rounded-md hover:bg-violet-400">
                <input type="checkbox" className="w-5 h-5 mt-2 ml-3"/>
                <p className="text-base text-center mt-1.5 ml-3"> {props.one}</p>
            </div>

            <div className="flex justify-start items-start flex-row h-10 w-87 bg-violet-500 rounded-md hover:bg-violet-400">
                <input type="checkbox" className="w-5 h-5 mt-2 ml-3"/>
                <p className="text-base text-center mt-1.5 ml-3 ">{props.two}</p>
            </div>

            <div className="flex justify-start items-start flex-row h-10 w-87 bg-violet-500 rounded-md hover:bg-violet-400">
                <input type="checkbox" className="w-5 h-5 mt-2 ml-3"/>
                <p className="text-base text-center mt-1.5 ml-3">{props.three}</p>
            </div>

            <div className="flex justify-start items-start flex-row h-10 w-87 bg-violet-500 rounded-md hover:bg-violet-400">
                <input type="checkbox" className="w-5 h-5 mt-2 ml-3"/>
                <p className="text-base text-center mt-1.5 ml-3" >{props.four}</p>
            </div>
            
        </div>
    )
}

export default Todo;