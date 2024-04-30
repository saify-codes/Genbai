import { useTheme } from '@/context/ThemeContext';
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { IoClose } from 'react-icons/io5'

export default function MyModal({ title="", open=false, close=()=>{}, children }) {
  const { theme } = useTheme();
  const isLight = theme === 'light';
  return (
    <>
      <Transition appear show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={close}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className={`fixed inset-0 ${isLight ? "bg-black/25": "bg-white/25"}`} />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className={`w-full max-w-md transform overflow-hidden rounded-2xl p-6 text-left align-middle shadow-xl transition-all ${isLight ? "bg-white": "bg-[#06152D]"}`}>
                  <div className='flex justify-between'>
                    <Dialog.Title
                      as="h3"
                      className={`text-lg font-medium leading-6 ${isLight ? "text-gray-900": "text-white"}`}
                    >
                      {title}
                    </Dialog.Title>
                    <div className="" onClick={close}><IoClose className={`text-2xl cursor-pointer ${isLight ? "text-gray-900": "text-white"}`} /></div>
                  </div>
                  {children}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
