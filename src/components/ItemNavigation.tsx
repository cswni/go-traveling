//import types for React-icons
import type { IconType } from 'react-icons';
import { Link } from 'react-router-dom';
import {useLocation} from 'react-router-dom'
type itemNavigationProps = {
    label: string;
    url: string;
    icon: IconType;
    isActive: any
}

export const ItemNavigation = (props: itemNavigationProps) => {
    const { label, url, icon: Icon } = props;
    const {pathname} = useLocation()
    
    
  return (
    <Link to={url}>
        <li className='flex flex-col cursor-pointer group'>
        <span className={`
            flex h-24 items-center justify-center rounded-lg
            ${pathname === url ? 'bg-cyan-500':''}
            ${pathname === url ? 'text-white':'text-cyan-500'}
            ${pathname === url ? 'hover:text-cyan-500 hover:bg-white':'hover:text-white hover:bg-cyan-500'}
            `}>
            <Icon size={40} />
        </span>
       <span className="group-hover:font-bold">{ label }</span>
    </li>
        </Link>
  )
}