import { useEffect, useRef } from "react";

const useTypewriter = (text, element, i = 0) => {
    const hasRun = useRef(false);
    
    let typewriteEffect = () => {
        element.current.textContent += text[i];

        if(i === text.length - 1){
            return;
        }
        i++

        setTimeout(() => typewriteEffect(), 50);
    }

    useEffect(() => {
        if(hasRun.current) return;
        hasRun.current = true;

        typewriteEffect();
    }, [])
}

export default useTypewriter;