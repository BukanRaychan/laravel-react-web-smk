import React, { useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import { Link } from 'react-router-dom'

function SmallScreenNavLink({ title, endpoint = "", handleClick, subMenu = null }) {
    const [expand, setExpand] = useState(false)
    return (
        <div className='group'>
            {!subMenu? (
                <Link to={endpoint} onClick={handleClick}>
                    <li className='py-5 border-b border-grey hover:bg-tertiary hover:text-white cursor-pointer'>
                        {title}
                    </li>
                </Link>
            ) : (
                <li className='flex gap-2 justify-center items-center py-5 border-b border-grey hover:bg-tertiary hover:text-white cursor-pointer'
                    onClick={() => setExpand(!expand)}
                >
                    {title}
                    {expand ? (<IoIosArrowUp />) : (<IoIosArrowDown />)}
                </li>
            )}
            {subMenu && (
                <div className={`${expand ? "block" : "hidden"}`}>
                    {
                    subMenu.map((navLink, index) => (
                        <Link key = {index} to={navLink.endpoint} onClick={handleClick}>
                            <li className='py-5 text-[18px] bg-lightgrey text-black border-b border-grey hover:bg-tertiary hover:text-white cursor-pointer'>
                                {navLink.title}
                            </li>
                        </Link>
                    ))
                    }
                </div>
            )}
        </div>
    )
}

export default SmallScreenNavLink