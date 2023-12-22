import { createContext, useState, FC } from 'react';

export const TableContext = createContext<any>({});

const TableContextProvider: FC<any> = (props) => {
  const [state, setState] = useState({});
  const contextValue = {
    state,
    setState,
  };

  return (
    <TableContext.Provider value={contextValue}>
      {props.children}
    </TableContext.Provider>
  );
};

export default TableContextProvider;
