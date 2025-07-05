import { createContext, useRef, useContext } from "react";

const SlideContext = createContext();

export const SlideContextProvide = ({ children }) => {
  const PersonelInfo = null;
  const ResearchSuper = null;
  const Data3 = null;
  const Data4 = null;

  const AllData = [PersonelInfo, ResearchSuper, Data3, Data4];

  const validateSlide1Ref = useRef(null);
  const validateSlide2Ref = useRef(null);
  const validateSlide3Ref = useRef(null);
  const validateSlide4Ref = useRef(null);

  const getDataSlide1 = (Data) => {
    AllData[0] = Data;
  };

  const getDataSlide2 = (Data) => {
    AllData[1] = Data;
  };

  const getDataSlide3 = (Data) => {
    AllData[2] = Data;
  };

  const getDataSlide4 = (Data) => {
    AllData[3] = Data;
  };

  return (
    <SlideContext.Provider
      value={{
        validateSlide1Ref,
        getDataSlide1,
        getDataSlide2,
        getDataSlide3,
        getDataSlide4,
        validateSlide2Ref,
        validateSlide3Ref,
        validateSlide4Ref,
        AllData,
      }}
    >
      {children}
    </SlideContext.Provider>
  );
};

export const useSlideContext = () => useContext(SlideContext);
