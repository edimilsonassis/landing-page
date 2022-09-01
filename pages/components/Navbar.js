import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import Image from 'next/image'

const navigation = [
    { name: 'Dashboard', href: '#', current: true },
    { name: 'Team', href: '#', current: false },
    { name: 'Projects', href: '#', current: false },
    { name: 'Calendar', href: '#', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
    return (
        <Disclosure as="nav" className="bg-gradiente">
            {({ open }) => (
                <>
                    <div className="container mx-auto">
                        <div className="relative flex items-center justify-between py-4">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-between">
                                <div className="flex-shrink-0 flex items-center">
                                    <Image
                                        width={119}
                                        height={25}
                                        src="https://apdash.themetags.com/assets/img/logo-white.png"
                                        alt="app image"
                                        className="img-fluid"
                                    />
                                </div>
                                <div className="hidden sm:block sm:ml-6">
                                    <div className="flex space-x-4 font-bold">
                                        {navigation.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className={classNames(
                                                    item.current ? 'text-white bg-teal-600' : 'text-white hover:bg-teal-600 hover:text-white',
                                                    'px-3 py-2 rounded-md text-sm'
                                                )}
                                                aria-current={item.current ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <Disclosure.Button as='div'>
                            <div className='z-20 absolute top-16 bottom-0 left-0 right-0 bg-black/20 backdrop-blur-sm'></div>
                        </Disclosure.Button>
                        <div className="px-6 z-30 absolute left-0 right-0 py-4 bg-teal-500 rounded-b-lg shadow-md space-y-1 ">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames(
                                        item.current ? 'bg-teal-600 text-white' : 'text-gray-50 hover:bg-teal-600 hover:text-white',
                                        'block px-3 py-2 rounded-md text-base font-medium'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}
