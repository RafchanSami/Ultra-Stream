import React, { createContext, useContext, useState } from "react";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const openModal = (movie) => {
    setSelectedMovie(movie);
    setIsOpen(true);
  };

  const closeModal = () => {
    setSelectedMovie(null);
    setIsOpen(false);
  };

  return (
    <ModalContext.Provider value={{ isOpen, selectedMovie, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
