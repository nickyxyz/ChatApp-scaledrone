import { useEffect } from 'react';

const useAutoScroll = (messagesRef, messages) => {
    useEffect(() => {
        const scrollToEnd = () => {
            if (messagesRef.current) {
                messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
            }
        };
        scrollToEnd();
    }, [messagesRef, messages]);

    useEffect(() => {
        const scrollToEnd = () => {
            if (messagesRef.current) {
                messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
            }
        };

        const handleNewMessage = () => {
            scrollToEnd();
        };

        const messagesList = messagesRef.current;
        messagesList.addEventListener('DOMNodeInserted', handleNewMessage);
        return () => {
            messagesList.removeEventListener('DOMNodeInserted', handleNewMessage);
        };
    }, [messagesRef, messages]);
};

export default useAutoScroll;
