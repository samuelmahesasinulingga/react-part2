/* eslint-disable react/prop-types */
function NavLink(props) {
    return (
    <>
        <a
            href=""
            className="text-white font-bold text-md rounded-xl px-4 py-2 hover:bg-primary-light hover:text-black"
        >
            {props.text}
        </a>
    </>
    )
}

export default NavLink;