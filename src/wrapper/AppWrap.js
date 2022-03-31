import React, { useRef, useState, useLayoutEffect } from 'react'
import { motion, useTransform, useViewportScroll } from 'framer-motion'

const AppWrap = (Component, idName, classNames) => function HOC() {

  //--------------------------------------------------------------------------
  const ref = useRef();

  // Stores the start and end scrolling position for our container
  const [scrollPercentageStart, setScrollPercentageStart] = useState(null);
  const [scrollPercentageEnd, setScrollPercentageEnd] = useState(null);

  const { scrollY, scrollYProgress } = useViewportScroll();

  useLayoutEffect(() => {
    // Get the distance from the start of the page to the element start
    const rect = ref.current.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    const offsetStart = rect.top + scrollTop;
    const offsetEnd = (offsetStart + rect.height);

    const elementScrollStart = offsetStart / document.body.clientHeight;
    const elementScrollEnd = offsetEnd / document.body.clientHeight;

    setScrollPercentageStart(elementScrollStart);
    setScrollPercentageEnd(elementScrollEnd);

    //   console.log(rect.top)
    //   console.log(scrollTop)
    //   console.log(offsetStart)
  });

  return (


    <div id={idName} className={`app__container ${classNames}`} ref={ref}>


      <div className="copyright">
        <p className="p-text">@2020 MICHAEL</p>
        <p className="p-text">All rights reserved</p>
      </div>
    </div>


  );
};

export default AppWrap;
