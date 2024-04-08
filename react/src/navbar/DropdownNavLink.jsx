import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import LargeScreenNavLink from './LargeScreenNavLink';

function DropdownNavLink({ title, subMenu }) {
    return (
        <div className='group'>
            <div className='flex items-center group hover:text-tertiary cursor-default'>
                <li className='transition hover:border-b-2 hover:border-tertiary'>
                    {title}
                </li>
                <IoIosArrowDown />
            </div>
            <div className='group-hover:block hidden'>
                {subMenu && (
                    <div className='absolute pt-6'>
                            <div className='grid grid-cols-1 gap-4 drop-shadow-lg rounded-lg bg-white p-8'>
                                {subMenu.map((navLink , index) => (
                                    <LargeScreenNavLink
                                        key = {index}
                                        title={navLink.title}
                                        endpoint={navLink.endpoint}
                                    />
                                ))}
                            </div>
                    </div>
                )}
            </div>
        </div>

    )
}

export default DropdownNavLink