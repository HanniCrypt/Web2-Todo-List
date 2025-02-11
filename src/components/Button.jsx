function Button (props) {
    return (
        <div className="flex justify-center items-center flex-row w-96 mt-3">
            <input type="text" placeholder="Add Task" className="bg-violet-950 text-white text-xs w-65 rounded-tl-md rounded-bl-md h-10 p-3" />
            <button className="w-15 h-10 hover:bg-violet-600 bg-violet-800 text-white rounded-tr-md rounded-br-md mr-3 cursor-pointer text-xs">
                {props.add}
            </button>
            <button className="w-17 hover:bg-violet-600 bg-violet-800 text-white rounded-md cursor-pointer h-10 text-xs">
                {props.del}
            </button>
        </div>
    )
}

export default Button;