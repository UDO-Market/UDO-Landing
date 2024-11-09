import { useState, useEffect } from "react";
const useModal = () => {
    const [modal, setModal] = useState(false);

    useEffect(() => {
        if (modal === true) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = 'auto';
        }
      }, [modal]);

      return{
        modal,
        setModal
      }
}
export default useModal