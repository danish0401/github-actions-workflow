import { createContext, FC, RefObject, useContext, useEffect, useRef, useState } from 'react';

export const LayoutEffectsContext = createContext<{
  isLoading: boolean;
  setLoading(state: boolean): void;
  layoutRef?: RefObject<HTMLDivElement>;
}>({
  isLoading: false,
  setLoading: () => undefined,
});

LayoutEffectsContext.displayName = 'LayoutEffects';

export const useLayout = () => useContext(LayoutEffectsContext);

const LayoutEffectsProvider: FC<ChildrenProps> = ({ children }) => {
  const [isLoading, setLoading] = useState(false);
  const layoutRef = useRef(null);

  return (
    <LayoutEffectsContext.Provider
      value={{
        setLoading,
        isLoading,
        layoutRef,
      }}
    >
      {children}
    </LayoutEffectsContext.Provider>
  );
};

export default LayoutEffectsProvider;

export const useLoading = (state: boolean): void => {
  const { setLoading } = useLayout();
  useEffect(() => {
    setLoading(state);

    return () => {
      setLoading(false);
    };
  }, [setLoading, state]);
};
