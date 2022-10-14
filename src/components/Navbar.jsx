import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { Link } from "react-router-dom";

/*const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}

const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]*/


const navigation = [
  { name: 'Home', path: '/', current: false },
  { name: 'Products', path: 'products', current: false },
  { name: 'FAQ', path: 'faq', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function NavBar() {
  return (
    <>
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-neutral-800 sticky top-0">
          {({ open }) => (
            <>
              <div className="max-w-5xl mx-auto px-4 sm:px-8 lg:px-8">
                <div className="flex items-center justify-between h-16">
                  <div className="flex items-center ">
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item) => (
                          <Link className={classNames(
                            item.current
                              ? 'bg-neutral-900 text-white'
                              : 'text-slate-100 hover:bg-red-500 hover:text-white',
                            'px-3 py-2 rounded-md text-sm font-medium'
                          )} to={item.path}>{item.name}</Link>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="bg-neutral-700 inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-red-500 focus:outline-none">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current ? 'bg-red-900 text-white' : ' hover:bg-red-500 text-white',
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
      </div>
    </>
  )
}