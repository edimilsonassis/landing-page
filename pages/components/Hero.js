import Image from 'next/image'

import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { ArrowUpIcon, CloudDownloadIcon, PlayIcon } from '@heroicons/react/solid'

const navigation = [
    { name: 'Product', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Marketplace', href: '#' },
    { name: 'Company', href: '#' },
]

export default function Hero() {
    return (
        <div className="relative bg-gradiente overflow-hidden">
            <div className='container'>
                <main className="flex flex-col md:flex-row gap-y-5 justify-between items-center mx-auto my-9">
                    <div className="w-full lg:w-2/4 xl:w-1/2 tracking-tight">
                        <div className="text-white space-y-6">
                            <h1 className="text-white text-4xl xl:text-5xl font-medium">Melhor maneira de se conectar com os clientes</h1>
                            <p className="leading-8 text-xl">
                                Procrastina holística convergência missionária-crítica com atendimento ao cliente confiável.O compartilhamento de idéias assertivamente decepcionalmente para soluções impactantes.
                            </p>
                            <div className="action-btns flex flex-col items-center sm:flex-row gap-4">
                                <a href="#" className="w-full sm:w-auto rounded-full text-sm whitespace-nowrap text-white bg-teal-600 text-center p-4">
                                    Download Now
                                    <CloudDownloadIcon className='ml-2 w-4 inline-block' />
                                </a>
                                <a href="https://www.youtube.com/watch?v=1APwq1df6Mw" className="rounded-full text-sm whitespace-nowrap">
                                    <PlayIcon className='text-teal-500 font-extrabold text-xl bg-white rounded-full w-12 h-12 inline-block' />
                                    <span className="pl-2">
                                        Watch Now
                                    </span>
                                </a>
                            </div>
                            <div className="flex flex-wrap gap-x-4">
                                <div className="flex-auto">
                                    <div className="flex items-center py-3 justify-between sm:max-w-[150px]">
                                        <div className="single-counter-item">
                                            <span className="text-2xl font-bold text-white">672,086</span>
                                            <h6 className="text-white text-sm">Total Install</h6>
                                        </div>
                                        <span className="color-6 ml-1 p-2 rounded-circle">
                                            <ArrowUpIcon className='h-5 w-5' />
                                        </span>
                                    </div>
                                </div>
                                <div className="flex-auto">
                                    <div className="flex items-center py-3 justify-between sm:max-w-[150px]">
                                        <div className="single-counter-item">
                                            <span className="text-2xl font-bold text-white">143,870</span>
                                            <h6 className="text-white text-sm">Total Download</h6>
                                        </div>
                                        <span className="color-6 ml-1 p-2 rounded-circle">
                                            <ArrowUpIcon className='h-5 w-5' />
                                        </span>
                                    </div>
                                </div>
                                {/* <div className="flex-auto">
                                <div className="flex items-center py-3 justify-between sm:max-w-[150px]">
                                    <div className="single-counter-item">
                                        <span className="text-2xl font-bold text-white">31,191</span>
                                        <h6 className="text-white text-sm">Active Users</h6>
                                    </div>
                                    <span className="color-6 ml-1 p-2 rounded-circle">
                                        <ArrowUpIcon className='h-5 w-5' />
                                    </span>
                                </div>
                            </div> */}
                            </div>
                        </div>
                    </div>
                    <div className="z-20 w-full px-10 sm:p-0 lg:w-2/5 xl:w-1/2 text-center">
                        <Image
                            height={613}
                            width={407}
                            src="https://apdash.themetags.com/assets/img/app-mobile-image.png"
                            alt="app image"
                            className="img-fluid"
                        />
                    </div>
                </main>
                <div className="z-10 relative h-80 -mt-64 text-white dark:text-gray-900">
                    <svg className="absolute bottom-0" width="1059" height="270">
                        <defs>
                            <pattern id="b" width="6" height="6" x="-6" y="133.81" patternUnits="userSpaceOnUse">
                                <use xlinkHref="#a" transform="scale(.15)" />
                            </pattern>
                            <image id="a" width="40" height="40" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAABGdBTUEAALGOfPtRkwAAAeNJREFUWAntl79KA0EQxmeSYqPgCwQLwcbaSp9BUOxtfAEhTyC+h2BjHxR8hlhZ2wgW4gsIelck63yTBPJHM7PJnQjZaZLL7X7zu+9u974Q5coOZAeyA+vtAK9y+fFxY7uk8oQiHxHFXYrUVj2mdyJ+IY4PgcIdH3y9LdtnKcD4tNkuy/KKYjyPRM1FzaVBn5hvQgiXvP8p4GmVDFj0mscCditgWymtpNGHgJ61Dvv3KfMaKYOLXuNCbmU3FQ49hnNid6jh7+p2UJ0DXKSki5pFYaaBPJ+nXiddgPrMFcXzMs7NAuIYtzu0WnueZ9LlBhZEVXAAhJYuMhwYZTqoW8mgfBXRhavV6DN3Whr3QyPsWFuQ6SD2uarhQAtN3UPn0Kd/MAGHm/D0pMqOdINfrGYD4g1RW9naNuD49VUHpEPbBqwDLEHTBtQXf4JiylCHtg2IVFJb2do2oESm+vhsbRNQ8xwiU8WlG7VkRUvWBNSdXvKcJZR8XjSttwg0TUAM0rCJPFdRaViQAOuRcwFq6pCwOYxKHtnfx6gGtJzp2gWIdqP81lkFcjS3482C6GumGQyarH8d+QGKq9ewyXyNlTgJ/9N3jGEZizkpzo21kh0cT8TnX/ztnOyXv2cHsgPZgXV04Bu6H6CZ0MtRcwAAAABJRU5ErkJggg==" />
                        </defs>
                        <g fill="none" fillRule="evenodd">
                            <path d="M49.995 256c24.602-1.277 49.456 6.008 70.675 12 15.76 4.45 27.875-9.452 51.61-7 107.943 11.15 159.127-60.919 249.311-64.69 90.185-3.77 122.836 47.443 181.198 46.69 89.326-1.152 85.717-103.19 230.211-103.19 64.096 0 64.096 40.492 109.143 82.482 27.587 25.715 66.539 42.88 116.857 51.499L0 274c4.746-10.516 21.411-16.516 49.995-18z" fill="url(#b)" />
                            <path d="M1013.436 269.588c-88.99-6.825-133.678-73.501-181.275-64.145-48.144 9.463-49.355 66.062-162.79 45.005-36.642-6.802-93.18-50.5-180.68-35.772-87.5 14.727-128.344 71.755-251.016 45.48-17.313-3.71-56.47-4.758-82.585 0-29.231 5.324-60.412 8.606-93.541 9.844 705.822 5.188 1023.117 5.05 951.887-.412z" fill="currentColor" />
                        </g>
                    </svg>
                </div>
            </div>
        </div>
    )
}
