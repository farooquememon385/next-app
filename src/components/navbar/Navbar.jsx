import Link from "next/link"
function Navbar()
{
    return(
       <div>
        <div className="logo">Logo</div>
        <div className="list">
            <Link href='/'>Home</Link>
            <Link href='/about'>About</Link>
            <Link href='/login'>Login</Link>
        </div>
       </div>
    )
}

export default Navbar