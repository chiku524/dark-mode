import React, {useEffect} from 'react';
import useLocalStorage from './useLocalStorage';

const useDarkMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage(1);

    useEffect(() => {
        darkMode ? document.querySelector('body').classList.add('dark-mode') : document.querySelector('body').classList.remove('dark-mode')
    }, [darkMode])

    return [darkMode, setDarkMode]
}

export default useDarkMode;