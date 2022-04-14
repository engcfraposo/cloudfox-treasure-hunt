import { useRef, useEffect } from "react";

type Delay = number | null;
type TimerHandler = (...args: any[]) => void;

export const useInterval = (callback: TimerHandler, delay: Delay) =>{
  var savedCallbackRef: any = useRef();
  useEffect(function () {
    savedCallbackRef.current = callback;
  }, [callback]);
  useEffect(function () {
    var handler = function handler() {
      return savedCallbackRef.current.apply(savedCallbackRef, arguments);
    };

    if (delay !== null) {
      var intervalId = setInterval(handler, delay);
      return function () {
        return clearInterval(intervalId);
      };
    }
  }, [delay]);
}