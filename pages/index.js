import { CloudDownloadIcon, FolderIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import Hero from './components/Hero'
import Whatsapp, { PlayStore, Windows } from './components/Icons'
import Navbar from './components/Navbar'
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className='cursor-default'>
        <section className='container py-32 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-center'>
          <div className='rounded-xl bg-white dark:bg-gray-800 shadow-xl border border-gray-100 dark:border-gray-900 col-span-1 p-9 space-y-3 hover:-translate-y-3 transition-all duration-150'>
            <FolderIcon className='text-teal-500 h-10 w-10' />
            <div className='font-medium text-lg'>
              Modular
            </div>
            <div className='text-gray-700 dark:text-gray-200 text-sm leading-6'>
              All components are built to be used in combination.
            </div>
          </div>
          <div className='rounded-xl bg-white dark:bg-gray-800 shadow-xl border border-gray-100 dark:border-gray-900 col-span-1 p-9 space-y-3 hover:-translate-y-3 transition-all duration-150'>
            <FolderIcon className='text-teal-500 h-10 w-10' />
            <div className='font-medium text-lg'>
              Modular
            </div>
            <div className='text-gray-700 dark:text-gray-200 text-sm leading-6'>
              All components are built to be used in combination.
            </div>
          </div>
          <div className='rounded-xl bg-white dark:bg-gray-800 shadow-xl border border-gray-100 dark:border-gray-900 col-span-1 p-9 space-y-3 hover:-translate-y-3 transition-all duration-150'>
            <FolderIcon className='text-teal-500 h-10 w-10' />
            <div className='font-medium text-lg'>
              Modular
            </div>
            <div className='text-gray-700 dark:text-gray-200 text-sm leading-6'>
              All components are built to be used in combination.
            </div>
          </div>
          <div className='rounded-xl bg-white dark:bg-gray-800 shadow-xl border border-gray-100 dark:border-gray-900 col-span-1 p-9 space-y-3 hover:-translate-y-3 transition-all duration-150'>
            <FolderIcon className='text-teal-500 h-10 w-10' />
            <div className='font-medium text-lg'>
              Modular
            </div>
            <div className='text-gray-700 dark:text-gray-200 text-sm leading-6'>
              All components are built to be used in combination.
            </div>
          </div>
        </section>
        <section className='relative'>
          <div className='container my-48 grid grid-cols-2 gap-8 justify-center py-6'>
            <div className='z-20 col-span-2 lg:col-span-1 space-y-8'>
              <div className='text-4xl font-bold text-gray-800 dark:text-white'>
                Rise ajuda a gerenciar tudo para você
              </div>
              <div className='text-gray-500 dark:text-gray-100 text-'>
                Afetam monotonectalmente os serviços eletrônicos sustentáveis com infomediários front-end.Colaborativamente em rede soluções funcionais, enquanto as iniciativas.Pontificar progressivamente o pensamento colaborativo para.                <ul className='dot-circle'>
                  <li>
                    As pessoas não estão acorrentadas a desktops ou laptops para ajudar e gravar.
                  </li>
                  <li>
                    A única maneira de o seu negócio evoluir para as informações.
                  </li>
                  <li>
                    Seu aplicativo será usado por uma série de diferentes motivos diferentes.
                  </li>
                  <li>
                    Intena intrinsecamente a experiência de primeira linha após os benefícios de colaboração.
                  </li>
                  <li>
                    Redefinir com eficiência interno ou fontes de valor agregado sem.
                  </li>
                  <li>
                    Otimize objetivamente os vetores de qualidade de back -end e para diferentes.
                  </li>
                </ul>
              </div>
            </div>
            <div className='z-20 col-span-2 lg:col-span-1 p-10 text-center lg:text-right'>
              <Image
                alt=''
                width={350}
                height={625}
                src="https://apdash.themetags.com/assets/img/app-mobile-image-2.png"
              />
            </div>
          </div>
          <svg className='z-10 absolute object-cover w-full bottom-0 text-gray-50 dark:text-gray-800' xmlns="http://www.w3.org/2000/svg" viewBox="-200.5 163.5 1297 506">
            <path fill="currentColor" d="M1096.5 425.889V670.5h-1297V239.035c1.332-.493 2.757-.941 3.994-1.523 30.528-13.622 62.958-26.034 99.001-36.25 37.565-10.62 77.318-18.596 120.97-21.732 7.038-.493 13.979-.896 21.018-1.389h32.239c1.047.135 2.092.359 3.139.403 37.09 1.389 71.421 6.856 103.661 15.549 41.178 11.113 75.416 26.079 105.563 43.196 23.871 13.577 46.504 27.558 70.376 41.135 49.166 28.05 101.282 54.801 157.963 79.491 55.729 24.287 114.883 46.422 181.266 63.942 55.824 14.742 114.5 25.721 178.504 29.35 58.3 3.316 114.694-.045 168.142-11.784 17.594-3.856 34.14-8.964 51.164-13.534z" />
          </svg>
        </section>
        <section className='container grid grid-cols-2 gap-8 justify-center'>
          <div className='col-span-2 lg:col-span-1 text-center lg:text-left'>
            <Image
              alt=''
              width={540}
              height={524}
              src="https://apdash.themetags.com/assets/img/about-us.png"
            />
          </div>
          <div className='col-span-2 lg:col-span-1 space-y-8'>
            <div className='text-4xl font-bold text-gray-800 dark:text-white'>
              RISE ajuda a gerenciar tudo para você
            </div>
            <div className='text-gray-500 dark:text-gray-200 space-y-8'>
              Afetam monotonectalmente os serviços eletrônicos sustentáveis com infomediários front-end.Colaborativamente em rede soluções funcionais, enquanto as iniciativas.Pontificar progressivamente o pensamento colaborativo para.              <ul className='dot-circle'>
                <li>
                  As pessoas não estão acorrentadas a desktops ou laptops para ajudar e gravar.
                </li>
                <li>
                  A única maneira de o seu negócio evoluir para as informações.
                </li>
                <li>
                  Seu aplicativo será usado por uma série de diferentes motivos diferentes.
                </li>
                <li>
                  Intena intrinsecamente a experiência de primeira linha após os benefícios de colaboração.
                </li>
                <li>
                  Redefinir com eficiência interno ou fontes de valor agregado sem.
                </li>
                <li>
                  Otimize objetivamente os vetores de qualidade de back -end e para diferentes.
                </li>
              </ul>
              <div className='w-full'>
                <a href="#" >
                  <div className="rounded-full text-sm whitespace-nowrap text-white bg-teal-500 text-center p-4">
                    Baixe Agora
                    <CloudDownloadIcon className='ml-2 w-4 inline-block' />
                  </div>

                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="container py-48">
          <h1 className="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">
            explorar nosso <br /> incrível <span className="text-teal-500">
              Componentes</span>
          </h1>
          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3">
            <div className="flex flex-col justify-between items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl dark:bg-gray-800">
              <span className="inline-block p-3 text-teal-500 bg-teal-100 rounded-full dark:text-white dark:bg-teal-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </span>
              <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                Copy & paste components
              </h1>
              <p className="text-gray-500 dark:text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
              </p>
              <a href="#" className="flex items-center -mx-1 text-sm text-teal-500 capitalize transition-colors duration-200 transform dark:text-teal-400 hover:underline hover:text-teal-600 dark:hover:text-teal-500">
                <span className="mx-1">
                  read more</span>
                <svg className="w-4 h-4 mx-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd">
                  </path>
                </svg>

              </a>
            </div>
            <div className="flex flex-col justify-between items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl dark:bg-gray-800">
              <span className="inline-block p-3 text-teal-500 bg-teal-100 rounded-full dark:text-white dark:bg-teal-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </span>
              <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                Zero Configrations
              </h1>
              <p className="text-gray-500 dark:text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
              </p>
              <a href="#" className="flex items-center -mx-1 text-sm text-teal-500 capitalize transition-colors duration-200 transform dark:text-teal-400 hover:underline hover:text-teal-600 dark:hover:text-teal-500">
                <span className="mx-1">
                  read more</span>
                <svg className="w-4 h-4 mx-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd">
                  </path>
                </svg>

              </a>
            </div>
            <div className="flex flex-col justify-between items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl dark:bg-gray-800">
              <span className="inline-block p-3 text-teal-500 bg-teal-100 rounded-full dark:text-white dark:bg-teal-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </span>
              <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                Simple & clean designs
              </h1>
              <p className="text-gray-500 dark:text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
              </p>
              <a href="#" className="flex items-center -mx-1 text-sm text-teal-500 capitalize transition-colors duration-200 transform dark:text-teal-400 hover:underline hover:text-teal-600 dark:hover:text-teal-500">
                <span className="mx-1">
                  read more</span>
                <svg className="w-4 h-4 mx-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd">
                  </path>
                </svg>

              </a>
            </div>
          </div>
        </section>
        {/* <section className='bg-teal-800 py-48 text-white bg-image2'>
          <div className='container text-center space-y-8'>
            <div className='text-3xl'>Download Our Apps</div>
            <p>
              Start working with that can provide everything you need to generate awareness, drive traffic, connect. Efficiently transform granular value with client-focused content. Energistically redefine market.
            </p>
            <div className='flex flex-col sm:flex-row justify-center gap-4'>
              <a href="#" className="rounded-full text-sm whitespace-nowrap text-white bg-teal-500 text-center p-4">
                Download Now
                <CloudDownloadIcon className='ml-2 w-4 inline-block' />

              </a>
              <a href="#" className="rounded-full text-sm whitespace-nowrap text-white bg-teal-500 text-center p-4">
                Download Now
                <CloudDownloadIcon className='ml-2 w-4 inline-block' />

              </a>
              <a href="#" className="rounded-full text-sm whitespace-nowrap text-white bg-teal-500 text-center p-4">
                Download Now
                <CloudDownloadIcon className='ml-2 w-4 inline-block' />

              </a>
            </div>
          </div>
        </section> */}
        <div className="bg-gray-100 dark:bg-gray-800">
          <section className="container flex flex-col items-center py-48 xl:flex-row">
            <div className="flex justify-center xl:w-1/2">
              <Image width={448} height={448} className="h-80 w-80 sm:w-[28rem] sm:h-[28rem] flex-shrink-0 object-cover rounded-full" src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80" alt="" />
            </div>
            <div className="flex flex-col items-center mt-6 xl:items-start xl:w-1/2 xl:mt-0">
              <h2 className="text-3xl font-bold tracking-tight text-gray-800 xl:text-4xl dark:text-white">
                Baixe nosso aplicativo móvel gratuito
              </h2>
              <p className="block max-w-2xl mt-4 text-xl text-gray-500 dark:text-gray-300">
                O aplicativo móvel MobWaiter simplifica o atendimento às mesas para que você possa fazer mais trabalhos com mais rapidez.
                <br />
                <small>
                  Grátis para usuários ilimitados.
                </small>
              </p>
              <div className="mt-6 sm:-mx-2">
                <div className="inline-flex w-full mt-4 overflow-hidden rounded-lg shadow sm:w-auto sm:mx-2 sm:mt-0">
                  <a href="#" className="inline-flex items-center justify-center w-full px-5 py-3 text-base font-medium text-white transition-colors duration-150 transform bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-600">
                    <PlayStore className='w-5 h-5 text-white' />
                    <span className="mx-2 whitespace-nowrap">
                      Google Play
                    </span>
                  </a>
                </div>
                <div className="inline-flex w-full mt-4 overflow-hidden rounded-lg shadow sm:w-auto sm:mx-2 sm:mt-0">
                  <a href="#" className="inline-flex items-center justify-center w-full px-5 py-3 text-base font-medium text-white transition-colors duration-150 transform bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-600">
                    <Windows className='w-5 h-5 text-white' />
                    <span className="mx-2">
                      Windows
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
        <section className='container py-48 space-y-16'>
          <div className='text-center space-y-8'>
            <div className='text-2xl font-bold text-gray-800 dark:text-white md:text-3xl'>
              Recursos do MobWaiter
            </div>
            <p className='max-w-3xl mx-auto text-gray-500'>
              Objectively deliver professional value with diverse web-readiness. Collaboratively transition wireless customer service without goal-oriented catalysts for change. Collaboratively.
            </p>
          </div>
          <div className='grid lg:grid-cols-3 gap-8'>
            <div className='grid space-y-4 py-14'>
              <div className='grid grid-cols-6'>
                <div className='col-span-1'>
                  <CloudDownloadIcon className='w-10 h-10 text-teal-500' />
                </div>
                <div className='col-span-5'>
                  <div className='text-xl mb-2'>
                    Responsive web design
                  </div>
                  <div className='text-gray-500'>
                    Modular and monetize an componente between layouts monetize array. Core competencies for testing.
                  </div>
                </div>
              </div>
              <div className='grid grid-cols-6'>
                <div className='col-span-1'>
                  <CloudDownloadIcon className='w-10 h-10 text-teal-500' />
                </div>
                <div className='col-span-5'>
                  <div className='text-xl mb-2'>
                    Responsive web design
                  </div>
                  <div className='text-gray-500'>
                    Modular and monetize an componente between layouts monetize array. Core competencies for testing.
                  </div>
                </div>
              </div>
              <div className='grid grid-cols-6'>
                <div className='col-span-1'>
                  <CloudDownloadIcon className='w-10 h-10 text-teal-500' />
                </div>
                <div className='col-span-5'>
                  <div className='text-xl mb-2'>
                    Responsive web design
                  </div>
                  <div className='text-gray-500'>
                    Modular and monetize an componente between layouts monetize array. Core competencies for testing.
                  </div>
                </div>
              </div>
            </div>
            <div className='text-center'>
              <Image
                alt=''
                width={350}
                height={527}
                src="https://apdash.themetags.com/assets/img/app-mobile-image.png"
              />
            </div>
            <div className='grid space-y-4 py-14'>
              <div className='grid grid-cols-6'>
                <div className='col-span-1'>
                  <CloudDownloadIcon className='w-10 h-10 text-teal-500' />
                </div>
                <div className='col-span-5'>
                  <div className='text-xl mb-2'>
                    Responsive web design
                  </div>
                  <div className='text-gray-500'>
                    Modular and monetize an componente between layouts monetize array. Core competencies for testing.
                  </div>
                </div>
              </div>
              <div className='grid grid-cols-6'>
                <div className='col-span-1'>
                  <CloudDownloadIcon className='w-10 h-10 text-teal-500' />
                </div>
                <div className='col-span-5'>
                  <div className='text-xl mb-2'>
                    Responsive web design
                  </div>
                  <div className='text-gray-500'>
                    Modular and monetize an componente between layouts monetize array. Core competencies for testing.
                  </div>
                </div>
              </div>
              <div className='grid grid-cols-6'>
                <div className='col-span-1'>
                  <CloudDownloadIcon className='w-10 h-10 text-teal-500' />
                </div>
                <div className='col-span-5'>
                  <div className='text-xl mb-2'>
                    Responsive web design
                  </div>
                  <div className='text-gray-500'>
                    Modular and monetize an componente between layouts monetize array. Core competencies for testing.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <section className="bg-gray-100 dark:bg-gray-800 py-40">
          <div className='container'>
            <div className=" bg-white dark:bg-gray-700 lg:flex lg:shadow-lg lg:rounded-lg">
              <div className="lg:w-1/2 relative">
                <Image alt='' className="h-64 bg-cover lg:rounded-lg lg:h-full" layout="fill" src={`https://images.unsplash.com/photo-1593642532400-2682810df593?ixlib=rb-1.2.1&ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80`} />
              </div>
              <div className="max-w-xl px-6 py-12 lg:max-w-5xl lg:w-1/2">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white md:text-3xl">
                  Construa seu novo <span className="text-teal-600 dark:text-teal-400">
                    Idéia</span>
                </h2>
                <p className="mt-4 text-gray-600 dark:text-gray-400">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem modi reprehenderit vitae exercitationem aliquid dolores ullam temporibus enim expedita aperiam mollitia iure consectetur dicta tenetur, porro consequuntur saepe accusantium consequatur.
                </p>
                <div className="mt-8">
                  <a href="#" className="px-7 py-4 font-semibold text-gray-100 transition-colors duration-200 transform bg-gray-900 rounded-md hover:bg-gray-700">
                    Start Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        <section className="container py-20">
          <h1 className="text-2xl font-semibold text-center text-gray-800 lg:text-4xl dark:text-white">
            Tem alguma pergunta?
            <br />
            <small>Veja nosso FAQ</small>
          </h1>
          <div className="mt-8 xl:mt-16 lg:flex lg:-mx-12">
            <div className="lg:mx-12">
              <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
                Tópicos
              </h1>
              <div className="mt-4 space-y-4 lg:mt-8">
                <a href="#" className="block text-teal-500 dark:text-teal-400 hover:underline">
                  Em geral
                </a>
                <a href="#" className="block text-gray-500 dark:text-gray-300 hover:underline">
                  Confiança / segurança
                </a>
                <a href="#" className="block text-gray-500 dark:text-gray-300 hover:underline">
                  Serviços
                </a>
                <a href="#" className="block text-gray-500 dark:text-gray-300 hover:underline">
                  Cobrança
                </a>
                <a href="#" className="block text-gray-500 dark:text-gray-300 hover:underline">
                  Limpeza do escritório
                </a>
              </div>
            </div>
            <div className="flex-1 mt-8 lg:mx-12 lg:mt-0">
              <div>
                <button className="flex items-center focus:outline-none">
                  <svg className="w-6 h-6 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4">
                    </path>
                  </svg>
                  <h1 className="mx-4 text-xl text-gray-700 dark:text-white">
                    Como posso jogar para minha consulta?
                  </h1>
                </button>
                <div className="flex mt-8 md:mx-10">
                  <span className="border border-teal-500">
                  </span>
                  <p className="max-w-3xl px-4 text-gray-500 dark:text-gray-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, eum quae. Harum officiis reprehenderit ex quia ducimus minima id provident molestias optio nam vel, quidem iure voluptatem, repellat et ipsa.
                  </p>
                </div>
              </div>
              <hr className="my-8 border-gray-200 dark:border-gray-700" />
              <div>
                <button className="flex items-center focus:outline-none">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                  </svg>
                  <h1 className="mx-4 text-xl text-gray-700 dark:text-white">
                    O que posso esperar na minha primeira consulta?
                  </h1>
                </button>
              </div>
              <hr className="my-8 border-gray-200 dark:border-gray-700" />
              <div>
                <button className="flex items-center focus:outline-none">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                  </svg>
                  <h1 className="mx-4 text-xl text-gray-700 dark:text-white">
                    Quais são a sua casa de abertura?
                  </h1>
                </button>
              </div>
              <hr className="my-8 border-gray-200 dark:border-gray-700" />
              <div>
                <button className="flex items-center focus:outline-none">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                  </svg>
                  <h1 className="mx-4 text-xl text-gray-700 dark:text-white">
                    Eu preciso de uma indicação?
                  </h1>
                </button>
              </div>
              <hr className="my-8 border-gray-200 dark:border-gray-700" />
              <div>
                <button className="flex items-center focus:outline-none">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                  </svg>
                  <h1 className="mx-4 text-xl text-gray-700 dark:text-white">
                    O custo da nomeação é coberto pelo seguro de saúde privado?
                  </h1>
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-gray-100 dark:bg-gray-800 py-40">
          <div className='container space-y-16'>
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between gap-20">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 sm:text-4xl">
                <span className="block">
                  Pronto para começar?
                </span>
                <span className="block text-teal-600">
                  Comece sua avaliação gratuita ainda hoje.
                </span>
              </h2>
              <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                <div className="inline-flex rounded-md shadow">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-teal-500 hover:bg-teal-500"
                  >
                    Iniciar
                  </a>
                </div>
                <div className="ml-3 inline-flex rounded-md shadow">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-teal-600 bg-white hover:bg-teal-50"
                  >
                    Aprender mais
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="container py-20">
          <h1 className="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">
            Nossa equipe executiva
          </h1>
          <p className="my-6 text-center text-gray-500 dark:text-gray-300">
            A equipe de inovadores que estão mudando o comércio como o conhecemos.
            <br />A experiência de nossa equipe nos permitem oferecer as soluções de maior qualidade para os diversos requisitos de nossos clientes em todo o Brasil.
            <br />Nossa plataforma e processos são importantes, mas são o nosso pessoal que nos faz o que somos. Conheça a nossa equipe!
          </p>
          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
            <div className="flex flex-col items-center p-8 transition-colors duration-200 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-teal-500 dark:border-gray-700 dark:hover:border-transparent">
              <div className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300 overflow-hidden">
                <Image width={128} height={128} className="object-cover" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />
              </div>
              <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">
                Xaronildo
              </h1>
              <p className="mt-2 text-gray-500 dark:text-gray-300 group-hover:text-white">
                Diretor de Design
              </p>
              <div className="flex mt-3 -mx-2">
                <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Github">
                  <Whatsapp className='h-6 w-6' />

                </a>
              </div>
            </div>
            <div className="flex flex-col items-center p-8 transition-colors duration-200 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-teal-500 dark:border-gray-700 dark:hover:border-transparent">
              <div className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300 overflow-hidden">
                <Image width={128} height={128} className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="" />
              </div>
              <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">
                Amelia
              </h1>
              <p className="mt-2 text-gray-500 dark:text-gray-300 group-hover:text-white">
                Desenvolvedor-chefe
              </p>
              <div className="flex mt-3 -mx-2">
                <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Github">
                  <Whatsapp className='h-6 w-6' />

                </a>
              </div>
            </div>
            <div className="flex flex-col items-center p-8 transition-colors duration-200 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-teal-500 dark:border-gray-700 dark:hover:border-transparent">
              <div className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300 overflow-hidden">
                <Image width={128} height={128} className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src="https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />
              </div>
              <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">
                Olivia Wathan
              </h1>
              <p className="mt-2 text-gray-500 dark:text-gray-300 group-hover:text-white">
                Designer-chefe
              </p>
              <div className="flex mt-3 -mx-2">
                <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Github">
                  <Whatsapp className='h-6 w-6' />

                </a>
              </div>
            </div>
            <div className="flex flex-col items-center p-8 transition-colors duration-200 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-teal-500 dark:border-gray-700 dark:hover:border-transparent">
              <div className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300 overflow-hidden">
                <Image width={128} height={128} className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />
              </div>
              <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">
                John Doe
              </h1>
              <p className="mt-2 text-gray-500 dark:text-gray-300 group-hover:text-white">
                Desenvolvedor
              </p>
              <div className="flex mt-3 -mx-2">
                <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Github">
                  <Whatsapp className='h-6 w-6' />

                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-teal-500 py-16">
          <div className="container">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full px-4">
                <div className="text-center mx-auto mb-[60px] lg:mb-20 max-w-[510px] text-white">
                  <span className="font-semibold text-lg text-primary mb-2 block">
                    Tabela de preços
                  </span>
                  <h2 className="font-bold text-3xl sm:text-4xl md:text-[40px] text-dark mb-4">
                    Nosso plano de preços
                  </h2>
                  <p className="text-base text-body-color">
                    Com um sistema totalmente modular, você pode ter a solução mais justa para suas necessidades sem pagar por algo que não usa!
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap justify-center -mx-4">
              <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                <div
                  className="bg-white dark:bg-gray-800 rounded-xl relative z-10 overflow-hidden border border-teal-600 border-opacity-20 shadow-pricing py-10 px-8 sm:p-12 lg:py-10 lg:px-6 xl:p-12 mb-10" >
                  <span className="text-primary font-semibold text-lg block mb-4">
                    Pessoal
                  </span>
                  <h2 className="font-bold text-dark mb-5 text-[42px]">
                    R$ 59
                    <span className="text-base text-body-color font-medium">
                      / ano
                    </span>
                  </h2>
                  <p className="text-base text-body-color pb-8 mb-8 border-b border-[#F2F2F2] dark:border-slate-600">
                    Perfeito para usar em um site pessoal ou em um projeto de cliente.
                  </p>
                  <div className="mb-7">
                    <p className="text-base text-body-color leading-loose mb-1">
                      1 usuário
                    </p>
                    <p className="text-base text-body-color leading-loose mb-1">
                      Todos os componentes da interface do usuário
                    </p>
                    <p className="text-base text-body-color leading-loose mb-1">
                      Acesso ao longo da vida
                    </p>
                    <p className="text-base text-body-color leading-loose mb-1">
                      Atualizações gratuitas
                    </p>
                    <p className="text-base text-body-color leading-loose mb-1">
                      Use em 1 (um) projeto
                    </p>
                    <p className="text-base text-body-color leading-loose mb-1">
                      3 meses de apoio
                    </p>
                  </div>
                  <a
                    href="javascript:void(0)"
                    className="w-full block text-base font-semibold text-primary bg-transparent border border-teal-100 rounded-md text-center p-4 hover:text-white hover:bg-teal-500 hover:border-teal-400 transition">
                    Escolha pessoal
                  </a>
                  <div>
                    <span className="absolute right-0 top-7 z-[-1]">
                      <svg
                        className='text-teal-600'
                        width="77"
                        height="172"
                        viewBox="0 0 77 172"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="86" cy="86" r="86" fill="url(#paint0_linear)" />
                        <defs>
                          <linearGradient
                            id="paint0_linear"
                            x1="86"
                            y1="0"
                            x2="86"
                            y2="172"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="currentColor" stopOpacity="0.09" />
                            <stop
                              offset="1"
                              stopColor="#C4C4C4"
                              stopOpacity="0"
                            />
                          </linearGradient>
                        </defs>
                      </svg>
                    </span>
                    <span className="absolute right-4 top-4 z-[-1]">
                      <svg
                        className='text-teal-600'
                        width="41"
                        height="89"
                        viewBox="0 0 41 89"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="38.9138"
                          cy="87.4849"
                          r="1.42021"
                          transform="rotate(180 38.9138 87.4849)"
                          fill="currentColor"
                        />
                        <circle
                          cx="38.9138"
                          cy="74.9871"
                          r="1.42021"
                          transform="rotate(180 38.9138 74.9871)"
                          fill="currentColor"
                        />
                        <circle
                          cx="38.9138"
                          cy="62.4892"
                          r="1.42021"
                          transform="rotate(180 38.9138 62.4892)"
                          fill="currentColor"
                        />
                        <circle
                          cx="38.9138"
                          cy="38.3457"
                          r="1.42021"
                          transform="rotate(180 38.9138 38.3457)"
                          fill="currentColor"
                        />
                        <circle
                          cx="38.9138"
                          cy="13.634"
                          r="1.42021"
                          transform="rotate(180 38.9138 13.634)"
                          fill="currentColor"
                        />
                        <circle
                          cx="38.9138"
                          cy="50.2754"
                          r="1.42021"
                          transform="rotate(180 38.9138 50.2754)"
                          fill="currentColor"
                        />
                        <circle
                          cx="38.9138"
                          cy="26.1319"
                          r="1.42021"
                          transform="rotate(180 38.9138 26.1319)"
                          fill="currentColor"
                        />
                        <circle
                          cx="38.9138"
                          cy="1.42021"
                          r="1.42021"
                          transform="rotate(180 38.9138 1.42021)"
                          fill="currentColor"
                        />
                        <circle
                          cx="26.4157"
                          cy="87.4849"
                          r="1.42021"
                          transform="rotate(180 26.4157 87.4849)"
                          fill="currentColor"
                        />
                        <circle
                          cx="26.4157"
                          cy="74.9871"
                          r="1.42021"
                          transform="rotate(180 26.4157 74.9871)"
                          fill="currentColor"
                        />
                        <circle
                          cx="26.4157"
                          cy="62.4892"
                          r="1.42021"
                          transform="rotate(180 26.4157 62.4892)"
                          fill="currentColor"
                        />
                        <circle
                          cx="26.4157"
                          cy="38.3457"
                          r="1.42021"
                          transform="rotate(180 26.4157 38.3457)"
                          fill="currentColor"
                        />
                        <circle
                          cx="26.4157"
                          cy="13.634"
                          r="1.42021"
                          transform="rotate(180 26.4157 13.634)"
                          fill="currentColor"
                        />
                        <circle
                          cx="26.4157"
                          cy="50.2754"
                          r="1.42021"
                          transform="rotate(180 26.4157 50.2754)"
                          fill="currentColor"
                        />
                        <circle
                          cx="26.4157"
                          cy="26.1319"
                          r="1.42021"
                          transform="rotate(180 26.4157 26.1319)"
                          fill="currentColor"
                        />
                        <circle
                          cx="26.4157"
                          cy="1.4202"
                          r="1.42021"
                          transform="rotate(180 26.4157 1.4202)"
                          fill="currentColor"
                        />
                        <circle
                          cx="13.9177"
                          cy="87.4849"
                          r="1.42021"
                          transform="rotate(180 13.9177 87.4849)"
                          fill="currentColor"
                        />
                        <circle
                          cx="13.9177"
                          cy="74.9871"
                          r="1.42021"
                          transform="rotate(180 13.9177 74.9871)"
                          fill="currentColor"
                        />
                        <circle
                          cx="13.9177"
                          cy="62.4892"
                          r="1.42021"
                          transform="rotate(180 13.9177 62.4892)"
                          fill="currentColor"
                        />
                        <circle
                          cx="13.9177"
                          cy="38.3457"
                          r="1.42021"
                          transform="rotate(180 13.9177 38.3457)"
                          fill="currentColor"
                        />
                        <circle
                          cx="13.9177"
                          cy="13.634"
                          r="1.42021"
                          transform="rotate(180 13.9177 13.634)"
                          fill="currentColor"
                        />
                        <circle
                          cx="13.9177"
                          cy="50.2754"
                          r="1.42021"
                          transform="rotate(180 13.9177 50.2754)"
                          fill="currentColor"
                        />
                        <circle
                          cx="13.9177"
                          cy="26.1319"
                          r="1.42021"
                          transform="rotate(180 13.9177 26.1319)"
                          fill="currentColor"
                        />
                        <circle
                          cx="13.9177"
                          cy="1.42019"
                          r="1.42021"
                          transform="rotate(180 13.9177 1.42019)"
                          fill="currentColor"
                        />
                        <circle
                          cx="1.41963"
                          cy="87.4849"
                          r="1.42021"
                          transform="rotate(180 1.41963 87.4849)"
                          fill="currentColor"
                        />
                        <circle
                          cx="1.41963"
                          cy="74.9871"
                          r="1.42021"
                          transform="rotate(180 1.41963 74.9871)"
                          fill="currentColor"
                        />
                        <circle
                          cx="1.41963"
                          cy="62.4892"
                          r="1.42021"
                          transform="rotate(180 1.41963 62.4892)"
                          fill="currentColor"
                        />
                        <circle
                          cx="1.41963"
                          cy="38.3457"
                          r="1.42021"
                          transform="rotate(180 1.41963 38.3457)"
                          fill="currentColor"
                        />
                        <circle
                          cx="1.41963"
                          cy="13.634"
                          r="1.42021"
                          transform="rotate(180 1.41963 13.634)"
                          fill="currentColor"
                        />
                        <circle
                          cx="1.41963"
                          cy="50.2754"
                          r="1.42021"
                          transform="rotate(180 1.41963 50.2754)"
                          fill="currentColor"
                        />
                        <circle
                          cx="1.41963"
                          cy="26.1319"
                          r="1.42021"
                          transform="rotate(180 1.41963 26.1319)"
                          fill="currentColor"
                        />
                        <circle
                          cx="1.41963"
                          cy="1.4202"
                          r="1.42021"
                          transform="rotate(180 1.41963 1.4202)"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                <div
                  className="bg-white dark:bg-gray-800 rounded-xl relative z-10 overflow-hidden border border-teal-600 border-opacity-20 shadow-pricing py-10 px-8 sm:p-12 lg:py-10 lg:px-6 xl:p-12 mb-10" >
                  <span className="text-primary font-semibold text-lg block mb-4">
                    Comercial
                  </span>
                  <h2 className="font-bold text-dark mb-5 text-[42px]">
                    R$ 199
                    <span className="text-base text-body-color font-medium">
                      / ano
                    </span>
                  </h2>
                  <p
                    className="text-base text-body-color pb-8 mb-8 border-b border-[#F2F2F2] dark:border-slate-600">
                    Perfeito para usar em um site comercial ou em um projeto de cliente.
                  </p>
                  <div className="mb-7">
                    <p className="text-base text-body-color leading-loose mb-1">
                      5 usuários
                    </p>
                    <p className="text-base text-body-color leading-loose mb-1">
                      Todos os componentes da interface do usuário
                    </p>
                    <p className="text-base text-body-color leading-loose mb-1">
                      Acesso ao longo da vida
                    </p>
                    <p className="text-base text-body-color leading-loose mb-1">
                      Atualizações gratuitas
                    </p>
                    <p className="text-base text-body-color leading-loose mb-1">
                      Use em 3 (três) projeto
                    </p>
                    <p className="text-base text-body-color leading-loose mb-1">
                      Apoio de 4 meses
                    </p>
                  </div>
                  <a href="javascript:void(0)" className="w-full block text-base font-semibold text-white bg-teal-500 border border-teal-400 rounded-md text-center p-4 hover:bg-opacity-90 transition" >
                    Escolha negócios
                  </a>
                  <div>
                    <span className="absolute right-0 top-7 z-[-1]">
                      <svg
                        className='text-teal-600'
                        width="77"
                        height="172"
                        viewBox="0 0 77 172"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="86" cy="86" r="86" fill="url(#paint0_linear)" />
                        <defs>
                          <linearGradient
                            id="paint0_linear"
                            x1="86"
                            y1="0"
                            x2="86"
                            y2="172"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="currentColor" stopOpacity="0.09" />
                            <stop
                              offset="1"
                              stopColor="#C4C4C4"
                              stopOpacity="0"
                            />
                          </linearGradient>
                        </defs>
                      </svg>
                    </span>
                    <span className="absolute right-4 top-4 z-[-1]">
                      <svg
                        className='text-teal-600'
                        width="41"
                        height="89"
                        viewBox="0 0 41 89"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="38.9138"
                          cy="87.4849"
                          r="1.42021"
                          transform="rotate(180 38.9138 87.4849)"
                          fill="currentColor"
                        />
                        <circle
                          cx="38.9138"
                          cy="74.9871"
                          r="1.42021"
                          transform="rotate(180 38.9138 74.9871)"
                          fill="currentColor"
                        />
                        <circle
                          cx="38.9138"
                          cy="62.4892"
                          r="1.42021"
                          transform="rotate(180 38.9138 62.4892)"
                          fill="currentColor"
                        />
                        <circle
                          cx="38.9138"
                          cy="38.3457"
                          r="1.42021"
                          transform="rotate(180 38.9138 38.3457)"
                          fill="currentColor"
                        />
                        <circle
                          cx="38.9138"
                          cy="13.634"
                          r="1.42021"
                          transform="rotate(180 38.9138 13.634)"
                          fill="currentColor"
                        />
                        <circle
                          cx="38.9138"
                          cy="50.2754"
                          r="1.42021"
                          transform="rotate(180 38.9138 50.2754)"
                          fill="currentColor"
                        />
                        <circle
                          cx="38.9138"
                          cy="26.1319"
                          r="1.42021"
                          transform="rotate(180 38.9138 26.1319)"
                          fill="currentColor"
                        />
                        <circle
                          cx="38.9138"
                          cy="1.42021"
                          r="1.42021"
                          transform="rotate(180 38.9138 1.42021)"
                          fill="currentColor"
                        />
                        <circle
                          cx="26.4157"
                          cy="87.4849"
                          r="1.42021"
                          transform="rotate(180 26.4157 87.4849)"
                          fill="currentColor"
                        />
                        <circle
                          cx="26.4157"
                          cy="74.9871"
                          r="1.42021"
                          transform="rotate(180 26.4157 74.9871)"
                          fill="currentColor"
                        />
                        <circle
                          cx="26.4157"
                          cy="62.4892"
                          r="1.42021"
                          transform="rotate(180 26.4157 62.4892)"
                          fill="currentColor"
                        />
                        <circle
                          cx="26.4157"
                          cy="38.3457"
                          r="1.42021"
                          transform="rotate(180 26.4157 38.3457)"
                          fill="currentColor"
                        />
                        <circle
                          cx="26.4157"
                          cy="13.634"
                          r="1.42021"
                          transform="rotate(180 26.4157 13.634)"
                          fill="currentColor"
                        />
                        <circle
                          cx="26.4157"
                          cy="50.2754"
                          r="1.42021"
                          transform="rotate(180 26.4157 50.2754)"
                          fill="currentColor"
                        />
                        <circle
                          cx="26.4157"
                          cy="26.1319"
                          r="1.42021"
                          transform="rotate(180 26.4157 26.1319)"
                          fill="currentColor"
                        />
                        <circle
                          cx="26.4157"
                          cy="1.4202"
                          r="1.42021"
                          transform="rotate(180 26.4157 1.4202)"
                          fill="currentColor"
                        />
                        <circle
                          cx="13.9177"
                          cy="87.4849"
                          r="1.42021"
                          transform="rotate(180 13.9177 87.4849)"
                          fill="currentColor"
                        />
                        <circle
                          cx="13.9177"
                          cy="74.9871"
                          r="1.42021"
                          transform="rotate(180 13.9177 74.9871)"
                          fill="currentColor"
                        />
                        <circle
                          cx="13.9177"
                          cy="62.4892"
                          r="1.42021"
                          transform="rotate(180 13.9177 62.4892)"
                          fill="currentColor"
                        />
                        <circle
                          cx="13.9177"
                          cy="38.3457"
                          r="1.42021"
                          transform="rotate(180 13.9177 38.3457)"
                          fill="currentColor"
                        />
                        <circle
                          cx="13.9177"
                          cy="13.634"
                          r="1.42021"
                          transform="rotate(180 13.9177 13.634)"
                          fill="currentColor"
                        />
                        <circle
                          cx="13.9177"
                          cy="50.2754"
                          r="1.42021"
                          transform="rotate(180 13.9177 50.2754)"
                          fill="currentColor"
                        />
                        <circle
                          cx="13.9177"
                          cy="26.1319"
                          r="1.42021"
                          transform="rotate(180 13.9177 26.1319)"
                          fill="currentColor"
                        />
                        <circle
                          cx="13.9177"
                          cy="1.42019"
                          r="1.42021"
                          transform="rotate(180 13.9177 1.42019)"
                          fill="currentColor"
                        />
                        <circle
                          cx="1.41963"
                          cy="87.4849"
                          r="1.42021"
                          transform="rotate(180 1.41963 87.4849)"
                          fill="currentColor"
                        />
                        <circle
                          cx="1.41963"
                          cy="74.9871"
                          r="1.42021"
                          transform="rotate(180 1.41963 74.9871)"
                          fill="currentColor"
                        />
                        <circle
                          cx="1.41963"
                          cy="62.4892"
                          r="1.42021"
                          transform="rotate(180 1.41963 62.4892)"
                          fill="currentColor"
                        />
                        <circle
                          cx="1.41963"
                          cy="38.3457"
                          r="1.42021"
                          transform="rotate(180 1.41963 38.3457)"
                          fill="currentColor"
                        />
                        <circle
                          cx="1.41963"
                          cy="13.634"
                          r="1.42021"
                          transform="rotate(180 1.41963 13.634)"
                          fill="currentColor"
                        />
                        <circle
                          cx="1.41963"
                          cy="50.2754"
                          r="1.42021"
                          transform="rotate(180 1.41963 50.2754)"
                          fill="currentColor"
                        />
                        <circle
                          cx="1.41963"
                          cy="26.1319"
                          r="1.42021"
                          transform="rotate(180 1.41963 26.1319)"
                          fill="currentColor"
                        />
                        <circle
                          cx="1.41963"
                          cy="1.4202"
                          r="1.42021"
                          transform="rotate(180 1.41963 1.4202)"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                <div
                  className="bg-white dark:bg-gray-800 rounded-xl relative z-10 overflow-hidden border border-teal-600 border-opacity-20 shadow-pricing py-10 px-8 sm:p-12 lg:py-10 lg:px-6 xl:p-12 mb-10" >
                  <span className="text-primary font-semibold text-lg block mb-4">
                    Profissional
                  </span>
                  <h2 className="font-bold text-dark mb-5 text-[42px]">
                    R$ 256
                    <span className="text-base text-body-color font-medium">
                      / ano
                    </span>
                  </h2>
                  <p className="text-base text-body-color pb-8 mb-8 border-b border-[#F2F2F2] dark:border-slate-600">
                    Perfeito para usar em um site profissional ou em um projeto de cliente.
                  </p>
                  <div className="mb-7">
                    <p className="text-base text-body-color leading-loose mb-1">
                      Usuários ilimitados
                    </p>
                    <p className="text-base text-body-color leading-loose mb-1">
                      Todos os componentes da interface do usuário
                    </p>
                    <p className="text-base text-body-color leading-loose mb-1">
                      Acesso ao longo da vida
                    </p>
                    <p className="text-base text-body-color leading-loose mb-1">
                      Atualizações gratuitas
                    </p>
                    <p className="text-base text-body-color leading-loose mb-1">
                      Use em projeto ilimitado
                    </p>
                    <p className="text-base text-body-color leading-loose mb-1">
                      12 meses de apoio
                    </p>
                  </div>
                  <a
                    href="javascript:void(0)"
                    className=" w-full block text-base font-semibold text-primary bg-transparent border border-teal-100 rounded-md text-center p-4 hover:text-white hover:bg-teal-500 hover:border-teal-400 transition">
                    Escolha profissional
                  </a>
                  <div>
                    <span className="absolute right-0 top-7 z-[-1]">
                      <svg
                        className='text-teal-600'
                        width="77"
                        height="172"
                        viewBox="0 0 77 172"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="86" cy="86" r="86" fill="url(#paint0_linear)" />
                        <defs>
                          <linearGradient
                            id="paint0_linear"
                            x1="86"
                            y1="0"
                            x2="86"
                            y2="172"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="currentColor" stopOpacity="0.09" />
                            <stop
                              offset="1"
                              stopColor="#C4C4C4"
                              stopOpacity="0"
                            />
                          </linearGradient>
                        </defs>
                      </svg>
                    </span>
                    <span className="absolute right-4 top-4 z-[-1]">
                      <svg
                        className='text-teal-600'
                        width="41"
                        height="89"
                        viewBox="0 0 41 89"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="38.9138"
                          cy="87.4849"
                          r="1.42021"
                          transform="rotate(180 38.9138 87.4849)"
                          fill="currentColor"
                        />
                        <circle
                          cx="38.9138"
                          cy="74.9871"
                          r="1.42021"
                          transform="rotate(180 38.9138 74.9871)"
                          fill="currentColor"
                        />
                        <circle
                          cx="38.9138"
                          cy="62.4892"
                          r="1.42021"
                          transform="rotate(180 38.9138 62.4892)"
                          fill="currentColor"
                        />
                        <circle
                          cx="38.9138"
                          cy="38.3457"
                          r="1.42021"
                          transform="rotate(180 38.9138 38.3457)"
                          fill="currentColor"
                        />
                        <circle
                          cx="38.9138"
                          cy="13.634"
                          r="1.42021"
                          transform="rotate(180 38.9138 13.634)"
                          fill="currentColor"
                        />
                        <circle
                          cx="38.9138"
                          cy="50.2754"
                          r="1.42021"
                          transform="rotate(180 38.9138 50.2754)"
                          fill="currentColor"
                        />
                        <circle
                          cx="38.9138"
                          cy="26.1319"
                          r="1.42021"
                          transform="rotate(180 38.9138 26.1319)"
                          fill="currentColor"
                        />
                        <circle
                          cx="38.9138"
                          cy="1.42021"
                          r="1.42021"
                          transform="rotate(180 38.9138 1.42021)"
                          fill="currentColor"
                        />
                        <circle
                          cx="26.4157"
                          cy="87.4849"
                          r="1.42021"
                          transform="rotate(180 26.4157 87.4849)"
                          fill="currentColor"
                        />
                        <circle
                          cx="26.4157"
                          cy="74.9871"
                          r="1.42021"
                          transform="rotate(180 26.4157 74.9871)"
                          fill="currentColor"
                        />
                        <circle
                          cx="26.4157"
                          cy="62.4892"
                          r="1.42021"
                          transform="rotate(180 26.4157 62.4892)"
                          fill="currentColor"
                        />
                        <circle
                          cx="26.4157"
                          cy="38.3457"
                          r="1.42021"
                          transform="rotate(180 26.4157 38.3457)"
                          fill="currentColor"
                        />
                        <circle
                          cx="26.4157"
                          cy="13.634"
                          r="1.42021"
                          transform="rotate(180 26.4157 13.634)"
                          fill="currentColor"
                        />
                        <circle
                          cx="26.4157"
                          cy="50.2754"
                          r="1.42021"
                          transform="rotate(180 26.4157 50.2754)"
                          fill="currentColor"
                        />
                        <circle
                          cx="26.4157"
                          cy="26.1319"
                          r="1.42021"
                          transform="rotate(180 26.4157 26.1319)"
                          fill="currentColor"
                        />
                        <circle
                          cx="26.4157"
                          cy="1.4202"
                          r="1.42021"
                          transform="rotate(180 26.4157 1.4202)"
                          fill="currentColor"
                        />
                        <circle
                          cx="13.9177"
                          cy="87.4849"
                          r="1.42021"
                          transform="rotate(180 13.9177 87.4849)"
                          fill="currentColor"
                        />
                        <circle
                          cx="13.9177"
                          cy="74.9871"
                          r="1.42021"
                          transform="rotate(180 13.9177 74.9871)"
                          fill="currentColor"
                        />
                        <circle
                          cx="13.9177"
                          cy="62.4892"
                          r="1.42021"
                          transform="rotate(180 13.9177 62.4892)"
                          fill="currentColor"
                        />
                        <circle
                          cx="13.9177"
                          cy="38.3457"
                          r="1.42021"
                          transform="rotate(180 13.9177 38.3457)"
                          fill="currentColor"
                        />
                        <circle
                          cx="13.9177"
                          cy="13.634"
                          r="1.42021"
                          transform="rotate(180 13.9177 13.634)"
                          fill="currentColor"
                        />
                        <circle
                          cx="13.9177"
                          cy="50.2754"
                          r="1.42021"
                          transform="rotate(180 13.9177 50.2754)"
                          fill="currentColor"
                        />
                        <circle
                          cx="13.9177"
                          cy="26.1319"
                          r="1.42021"
                          transform="rotate(180 13.9177 26.1319)"
                          fill="currentColor"
                        />
                        <circle
                          cx="13.9177"
                          cy="1.42019"
                          r="1.42021"
                          transform="rotate(180 13.9177 1.42019)"
                          fill="currentColor"
                        />
                        <circle
                          cx="1.41963"
                          cy="87.4849"
                          r="1.42021"
                          transform="rotate(180 1.41963 87.4849)"
                          fill="currentColor"
                        />
                        <circle
                          cx="1.41963"
                          cy="74.9871"
                          r="1.42021"
                          transform="rotate(180 1.41963 74.9871)"
                          fill="currentColor"
                        />
                        <circle
                          cx="1.41963"
                          cy="62.4892"
                          r="1.42021"
                          transform="rotate(180 1.41963 62.4892)"
                          fill="currentColor"
                        />
                        <circle
                          cx="1.41963"
                          cy="38.3457"
                          r="1.42021"
                          transform="rotate(180 1.41963 38.3457)"
                          fill="currentColor"
                        />
                        <circle
                          cx="1.41963"
                          cy="13.634"
                          r="1.42021"
                          transform="rotate(180 1.41963 13.634)"
                          fill="currentColor"
                        />
                        <circle
                          cx="1.41963"
                          cy="50.2754"
                          r="1.42021"
                          transform="rotate(180 1.41963 50.2754)"
                          fill="currentColor"
                        />
                        <circle
                          cx="1.41963"
                          cy="26.1319"
                          r="1.42021"
                          transform="rotate(180 1.41963 26.1319)"
                          fill="currentColor"
                        />
                        <circle
                          cx="1.41963"
                          cy="1.4202"
                          r="1.42021"
                          transform="rotate(180 1.41963 1.4202)"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer className="bg-white dark:bg-black">
          <div className="container py-10">
            <div className="lg:flex">
              <div className="w-full -mx-6 lg:w-2/5">
                <div className="px-6">
                  <div>
                    <a href="#" className="text-xl font-bold text-gray-800 dark:text-white hover:text-gray-700 dark:hover:text-gray-300">
                      OurSoft
                    </a>
                  </div>
                  <p className="max-w-md mt-2 text-gray-500 dark:text-gray-400">
                    Junte-se a outros e nunca perca novas dicas, tutoriais   e muito mais.
                  </p>
                  <div className="flex mt-4 -mx-2">
                    <a href="#" className="mx-2 text-gray-700 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400" aria-label="Linkden">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 512 512">
                        <path d="M444.17,32H70.28C49.85,32,32,46.7,32,66.89V441.61C32,461.91,49.85,480,70.28,480H444.06C464.6,480,480,461.79,480,441.61V66.89C480.12,46.7,464.6,32,444.17,32ZM170.87,405.43H106.69V205.88h64.18ZM141,175.54h-.46c-20.54,0-33.84-15.29-33.84-34.43,0-19.49,13.65-34.42,34.65-34.42s33.85,14.82,34.31,34.42C175.65,160.25,162.35,175.54,141,175.54ZM405.43,405.43H341.25V296.32c0-26.14-9.34-44-32.56-44-17.74,0-28.24,12-32.91,23.69-1.75,4.2-2.22,9.92-2.22,15.76V405.43H209.38V205.88h64.18v27.77c9.34-13.3,23.93-32.44,57.88-32.44,42.13,0,74,27.77,74,87.64Z" />
                      </svg>

                    </a>
                    <a href="#" className="mx-2 text-gray-700 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400" aria-label="Facebook">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 512 512">
                        <path d="M455.27,32H56.73A24.74,24.74,0,0,0,32,56.73V455.27A24.74,24.74,0,0,0,56.73,480H256V304H202.45V240H256V189c0-57.86,40.13-89.36,91.82-89.36,24.73,0,51.33,1.86,57.51,2.68v60.43H364.15c-28.12,0-33.48,13.3-33.48,32.9V240h67l-8.75,64H330.67V480h124.6A24.74,24.74,0,0,0,480,455.27V56.73A24.74,24.74,0,0,0,455.27,32Z" />
                      </svg>

                    </a>
                    <a href="#" className="mx-2 text-gray-700 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400" aria-label="Twitter">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 512 512">
                        <path d="M496,109.5a201.8,201.8,0,0,1-56.55,15.3,97.51,97.51,0,0,0,43.33-53.6,197.74,197.74,0,0,1-62.56,23.5A99.14,99.14,0,0,0,348.31,64c-54.42,0-98.46,43.4-98.46,96.9a93.21,93.21,0,0,0,2.54,22.1,280.7,280.7,0,0,1-203-101.3A95.69,95.69,0,0,0,36,130.4C36,164,53.53,193.7,80,211.1A97.5,97.5,0,0,1,35.22,199v1.2c0,47,34,86.1,79,95a100.76,100.76,0,0,1-25.94,3.4,94.38,94.38,0,0,1-18.51-1.8c12.51,38.5,48.92,66.5,92.05,67.3A199.59,199.59,0,0,1,39.5,405.6,203,203,0,0,1,16,404.2,278.68,278.68,0,0,0,166.74,448c181.36,0,280.44-147.7,280.44-275.8,0-4.2-.11-8.4-.31-12.5A198.48,198.48,0,0,0,496,109.5Z" />
                      </svg>

                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-6 lg:mt-0 lg:flex-1">
                <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
                  <div>
                    <h3 className="text-gray-700 uppercase dark:text-white">
                      Sobre</h3>
                    <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
                      Companhia
                    </a>
                    <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
                      comunidade
                    </a>
                    <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
                      Carreiras
                    </a>
                  </div>
                  <div>
                    <h3 className="text-gray-700 uppercase dark:text-white">
                      blog</h3>
                    <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
                      Tec
                    </a>
                    <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
                      Música
                    </a>
                    <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
                      Vídeos
                    </a>
                  </div>
                  <div>
                    <h3 className="text-gray-700 uppercase dark:text-white">
                      Produtos</h3>
                    <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
                      Mega nuvem
                    </a>
                    <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
                      Ah Pelion wi
                    </a>
                    <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
                      Melakiwi
                    </a>
                  </div>
                  <div>
                    <h3 className="text-gray-700 uppercase dark:text-white">
                      Contato</h3>
                    <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
                      +15266548965</span>
                    <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
                      exemplo@email.com</span>
                  </div>
                </div>
              </div>
            </div>
            <hr className="h-px my-6 bg-gray-300 border-none dark:bg-gray-700" />
            <div>
              <p className="text-center text-gray-800 dark:text-white">
                © OurSoft 2022 - Todos os direitos reservados
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
