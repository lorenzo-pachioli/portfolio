import React, { useState } from "react"; 

interface obj {
    state:string;
    setState:string; 
    initValue:any;
}

const StateBuilder = ({state, setState, initValue}:obj)=> {
    type UpdateType = React.Dispatch <React.SetStateAction <typeof initValue> >;
    const defaultUpdate:UpdateType = () => initValue;

    return {
        [state]:initValue,
        [setState]:defaultUpdate
    }
    
}

const uName = StateBuilder({state:"name", setState:"setName", initValue:""})
const uAge = StateBuilder({state:"age", setState:"setAge", initValue:0})

const context = {
    name: uName.name,
    setName: uName.setName,
    age: uAge.age,
    setAge: uAge.setAge
}


export const AppContext = React.createContext(context);

export default function AppProvider(props: React.PropsWithChildren<{}>) {

    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    
    return (
        <AppContext.Provider
          value={{
              name,
              setName,
              age,
              setAge
          }}
          {...props} />
      );
}