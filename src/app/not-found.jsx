import Link from "next/link";
function NotFound()
{
    return(
        <div>
            <h1>Page Not Found</h1>
            <Link href='/'>Return Home</Link>
        </div>
    )
}

export default NotFound;