import Link from "next/link"
import styles from './navbar.module.css'
import { usePathname } from "next/navigation";
function LinkItem({item})
{
    const pathName = usePathname()
    return(
        <Link className={`${styles.linkItem} ${pathName === item.path && styles.active}`} 
            href={item.path}>
            {item.title}
        </Link>
    )
}

export default LinkItem;