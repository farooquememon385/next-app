"use client";
import Link from "next/link"
import styles from "./navbar.module.css"
import { usePathname } from "next/navigation";

const links = [
    {
        title: "Home",
        path: "/",
    },
    {
        title: "About",
        path: "/about",
    }, 
    {
        title: "Contact",
        path: "/contact",
    }, 
    {
        title: "Blog",
        path: "/blog",
    },
];


// temporary test varialbes
const session = true
const isAdmin = true

function Navbar()
{
    const pathName = usePathname()
    return(
       <div className={styles.container}>
        <div className={styles.logo}>Logo</div>
        <div className={styles.list}>
            {
                links.map((link=>(
                    <Link 
                    className={`${styles.linkItem} ${pathName === link.path && styles.active}`} 
                    href={link.path} key={link.title}>
                        {link.title}
                    </Link>
                )))
            }
            {
                session?(
                    <>
                    {isAdmin && (
                    <Link 
                        className={`${styles.linkItem} ${pathName === "/admin" && styles.active}`} 
                        href='/admin'>
                        Admin
                    </Link>) }
                    <button className={styles.logout}>Logout</button>
                    </>
                ):(
                    <Link 
                        className={`${styles.linkItem} ${pathName === "/login" && styles.active}`} 
                        href='/login'>
                        Login
                    </Link>
                )
            }
        </div>
       </div>
    )
}

export default Navbar