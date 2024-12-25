import React, { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDown } from 'lucide-react';

type NavDropdownProps = {
  title: string;
  items: {
    title: string;
    description?: string;
    icon?: React.ReactNode;
    href: string;
  }[];
};

export default function NavDropdown({ title, items }: NavDropdownProps) {
  return (
    <Menu as="div" className="relative">
      <Menu.Button className="flex items-center space-x-1 text-gray-700 hover:text-purple-600 transition duration-300">
        <span className="font-semibold">{title}</span>
        <ChevronDown className="w-4 h-4" />
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition ease-in duration-150"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Menu.Items className="absolute left-0 mt-2 w-64 origin-top-left bg-gradient-to-b from-white to-gray-50 rounded-lg shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="p-2">
            {items.map((item) => (
              <Menu.Item key={item.title}>
                {({ active }) => (
                  <a
                    href={item.href}
                    className={`${
                      active ? 'bg-purple-50' : 'bg-white'
                    } flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 transform ${
                      active ? 'scale-105 shadow-md' : ''
                    }`}
                  >
                    {item.icon && (
                      <div className="text-purple-600 flex-shrink-0">{item.icon}</div>
                    )}
                    <div>
                      <div className="text-sm font-semibold text-gray-900">
                        {item.title}
                      </div>
                      {item.description && (
                        <div className="text-xs text-gray-500">{item.description}</div>
                      )}
                    </div>
                  </a>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
