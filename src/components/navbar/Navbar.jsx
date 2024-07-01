"use client";
import Link from "next/link"
import styles from "./navbar.module.css"
import LinkItem from "./LinkItem";
import { useState } from "react";
import Image from "next/image";

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
    const [open, setOpen] = useState(false);
    return(
    <div>
       <div className={styles.container}>
        <div className={styles.logo}>Logo</div>
        <div className={styles.list}>
            {
                links.map((link=>(
                    <LinkItem item={link} key={link.title}/>
                )))
            }
            {
                session?(
                    <>
                    {isAdmin && (
                        <LinkItem item={{ title: "Admin", path: "/admin"}}/>)
                    }
                    <button className={styles.logout}>Logout</button>
                    </>
                ):(
                    <LinkItem item={{ title: "Login", path: "/login"}}/>)
        
            }
        </div>
       <Image src='/menu.png' alt="Menu"
       className={styles.menuButton}
       onClick={() => setOpen(open => !open)} width={30} height={30}/>
       {
           open && <div className={styles.mobilelist}>
            {
                links.map((link=>(
                    <LinkItem item={link} key={link.title}/>
                )))
            }
            {
                session?(
                    <>
                    {isAdmin && (
                        <LinkItem item={{ title: "Admin", path: "/admin"}}/>)
                    }
                    <button className={styles.logout}>Logout</button>
                    </>
                ):(
                    <LinkItem item={{ title: "Login", path: "/login"}}/>)
                    
                }
        </div>
       }
       </div>
    </div>
    )
}

export default Navbar