import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { GoBellFill } from "react-icons/go";

export default function () {
    return (
        <Menu as="div" className="relative inline-block text-left">
            <div className="flex justify-center items-center">
                <Menu.Button className="text-xl">
                    <GoBellFill transform='rotate(30)' />
                </Menu.Button>
            </div>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                    <ul className="p-2">
                        <Menu.Item>
                            {({ active }) => (
                                <li className='text-sm text-center'>No notification</li>
                            )}
                        </Menu.Item>
                    </ul>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}

