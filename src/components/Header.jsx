function Header (props) {
    return (
        <div className="flex justify-center items-center flex-col">
            <div className="flex justify-center items-center mt-10 rounded-tr-lg rounded-tl-lg bg-violet-950 w-96 ">
                <p className="font-bold text-2xl text-white mt-5">{props.title}</p>
            </div>
        </div>
    )
}

export default Header;