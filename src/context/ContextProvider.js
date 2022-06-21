import React,{createContext ,useContext,useState} from 'react';


const StateContext = createContext();


const initialState={
    chat:false,
    cart:false,
    userProfile:false,
    notification:false,
}

export const ContextProvider=({children})=>{
    const [activeMenu, setactiveMenu] = useState(true);
const [isClicked,setIsClicked] =useState(initialState);
    const [screenSize, setScreenSize] = useState(undefined);
    const [currentColor, setcurrentColor] = useState('#03C9D7');
    const [currentMode, setcurrentMode] = useState('Light');

    const [themeSettings, setthemeSettings] = useState(false)

    const setMode =(e)=>{
        setcurrentMode(e.target.value);
        setthemeSettings(false);
        localStorage.setItem('themeMode',e.target.value);
    }

    const setColor =(mode)=>{
        
        setcurrentColor(mode);
        setthemeSettings(false);
        localStorage.setItem('colorMode',mode);
    }

    const handleClick=(clicked)=>{
        setIsClicked({...initialState,[clicked]:true});
    }
    
    return (
        <StateContext.Provider
        value={{activeMenu,
                setactiveMenu,
                isClicked,
                setIsClicked,
                handleClick,
                screenSize, 
                setScreenSize,
            currentColor,currentMode,
        setcurrentColor,setcurrentMode
    ,themeSettings, setthemeSettings,
    setMode,setColor}}
        >
            {children}

        </StateContext.Provider>
    )
}

export const useStateContext=()=> useContext(StateContext);