import { useEffect } from 'react';

const useAutoScroll = (messagesRef) => {
    useEffect(() => {
        const interval = setInterval(() => {
            if (messagesRef.current) {
                messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
            }
        }, 1);

        return () => clearInterval(interval);
    }, [messagesRef]);
};

export default useAutoScroll;