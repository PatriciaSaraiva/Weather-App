import { useState, useContext, createContext, useCallback } from "react";

import { AlertTypes } from "../../components/feedback/Alert/Alert";

const AlertContext = createContext(undefined);

const initialAlert = {
  isOpen: false,
  message: "",
  type: AlertTypes.REMOVE,
  timeout: null,
};

const AlertProvider = ({ children }) => {
  const [alert, setAlertParams] = useState(initialAlert);

  const setAlert = (isOpen, message, type, timeout = 3000) =>
    setAlertParams((prevState) => ({
      ...prevState,
      isOpen,
      message,
      type,
      timeout,
    }));

  const closeAlert = useCallback(() => {
    setAlertParams((prevState) => ({ ...prevState, isOpen: false }));
  }, [setAlertParams]);

  return (
    <AlertContext.Provider value={{ alert, setAlert, closeAlert }}>
      {children}
    </AlertContext.Provider>
  );
};

const useAlert = () => {
  const context = useContext(AlertContext);

  if (context === undefined) {
    throw new Error("useAlert must be used within AlertProvider");
  }

  return context;
};

export { AlertProvider, useAlert };
