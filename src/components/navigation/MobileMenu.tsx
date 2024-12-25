import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { X } from 'lucide-react';
import { navigationItems } from './navigationItems';

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog onClose={onClose} className="relative z-50">
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="min-h-full">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-500"
              enterFrom="-translate-x-full opacity-0"
              enterTo="translate-x-0 opacity-100"
              leave="ease-in duration-300"
              leaveFrom="translate-x-0 opacity-100"
              leaveTo="-translate-x-full opacity-0"
            >
              <Dialog.Panel className="fixed inset-y-0 left-0 w-full max-w-xs bg-gradient-to-b from-gray-50 to-gray-100 shadow-2xl">
                <div className="h-full flex flex-col">
                  {/* Header */}
                  <div className="px-4 py-6 border-b border-gray-200">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg shadow-lg" />
                        <span className="text-xl font-bold text-gray-900">
                          Zysk Technologies
                        </span>
                      </div>
                      <button
                        onClick={onClose}
                        className="p-2 -mr-2 text-gray-600 hover:text-red-500 transition duration-300"
                      >
                        <X className="w-6 h-6" />
                      </button>
                    </div>
                  </div>

                  {/* Navigation */}
                  <div className="flex-1 overflow-y-auto py-6 px-4">
                    <nav className="space-y-8">
                      {navigationItems.map((section) => (
                        <div key={section.title}>
                          <div className="text-sm font-semibold text-gray-800 border-b-2 border-gray-300 pb-2 mb-4">
                            {section.title}
                          </div>
                          <div className="space-y-4">
                            {section.items.map((item) => (
                              <a
                                key={item.title}
                                href={item.href}
                                className="flex items-center space-x-3 text-gray-700 hover:text-purple-600 transition duration-300 transform hover:scale-105"
                              >
                                {item.icon && (
                                  <div className="text-purple-500">{item.icon}</div>
                                )}
                                <div>
                                  <div className="text-sm font-medium">
                                    {item.title}
                                  </div>
                                  {item.description && (
                                    <div className="text-xs text-gray-500">
                                      {item.description}
                                    </div>
                                  )}
                                </div>
                              </a>
                            ))}
                          </div>
                        </div>
                      ))}
                    </nav>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
