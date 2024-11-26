import { useEffect } from "react";

const useScrollToTop = (section) => {
    useEffect(() => {
        section.current?.scrollIntoView({
            behavior:"instant",
            block:"start",
            inline:"nearest"
        });
    },[])
}

export default useScrollToTop;