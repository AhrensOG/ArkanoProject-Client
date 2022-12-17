import React from "react";
import { Transition } from "@headlessui/react";

const SlideUp = ({ children }) => {
  return (
    <Transition
      appear={true}
      show={true}
      enter="transform transition ease-in-out duration-500"
      enterFrom="opacity-0 transition-y-full"
      enterTo="opacity-100 translate-y-0"
      leave="transform transition ease-in-out duration-1000"
      leaveFrom="opacity-100 transition-y-0"
      leaveTo="opacity-0 translate-y-full"
    >
      {children}
    </Transition>
  );
};

export default SlideUp;
