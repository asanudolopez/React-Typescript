import { useEffect, useState, useRef } from 'react';

export default function useCustomComponent(props, listeners, statefulListeners) {
    const [ref, setRef] = useState(null);
    const statefulListenersRef = useRef(null);

    useEffect(() => {
        if (!ref || !listeners) {
            return () => {};
        }
        Object.entries(listeners).forEach(([eventName, callback]) => {
            ref.addEventListener(`${eventName}`, callback);
        });
        return () => {
            Object.entries(listeners).forEach(([eventName, callback]) => {
                ref.removeEventListener(`${eventName}`, callback);
            });
        };
    }, [ref, listeners]);

    useEffect(() => {
        if (!statefulListeners) {
            return;
        }
        statefulListenersRef.current = statefulListeners;
    }, [statefulListeners]);

    useEffect(() => {
        if (!ref || !statefulListenersRef.current) {
            return () => {};
        }
        Object.keys(statefulListenersRef.current).forEach(eventName => {
            ref.addEventListener(`${eventName}`, () => {
                statefulListenersRef.current[eventName]();
            });
        });
        return () => {
            Object.keys(statefulListenersRef.current).forEach(eventName => {
                ref.removeEventListener(`${eventName}`, () => {
                    statefulListenersRef.current[eventName]();
                });
            });
        };
    }, [ref]);

    useEffect(() => {
        if (!ref) {
            return;
        }
        Object.assign(ref, props);
    }, [ref, props]);

    return [setRef];
}
