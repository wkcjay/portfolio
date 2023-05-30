import { useState, useEffect } from 'react';
import "./ScrollToTop.css";
import {GrUp} from 'react-icons/gr';
import {HiOutlineMail} from 'react-icons/hi';

function ScrollToTop() {
    const [ScrollToTop, setScrollToTop] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100) {
                setScrollToTop(true)
            } else {
                setScrollToTop(false)
            }
        })
    })

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return <div className='App'>
        {ScrollToTop && (
            <>
                <button className='scrollToTopButton'
                onClick={scrollUp}
                >
                    <GrUp Size={30}/>
                </button>
                <button className='contactMeButton'
                >
                    <a href='mailto:wkcjay@gmail.com'>
                        <HiOutlineMail Size={60}/>
                    </a>
                </button>
        </>
        )}
    </div>
}

export default ScrollToTop;