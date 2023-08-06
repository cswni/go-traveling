import { MdLocationOn } from 'react-icons/md';
export const Header = () => {
  return (
    <header className='relative'>
        <img src="/images/hotels/paris.jpg" alt="logo" />
        <button className='flex gap-x-2 items-center left-1/2 -translate-x-1/2 absolute bottom-0 mb-4 bg-cyan-500 rounded-lg p-2 text-white'>
            <MdLocationOn className={"text-inherit"} />
            <span>Paris</span>
        </button>
    </header>
  )
}