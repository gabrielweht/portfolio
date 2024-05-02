/* eslint-disable react/prop-types */
import './stackListMap.css'
import StackCard from '../stackCard/stackCard'
import { useRef, useState } from 'react'
import { useEffect } from 'react'

function StackListMap({stack}) {
    let autoMoveIntervalRef = useRef(null)
    const [sliderLeft, setSliderLeft] = useState(document.querySelector('.slider_left'))
    const [sliderRight, setSliderRight] = useState(document.querySelector('.slider_right'))
    const [isInTransition, setIsInTransition] = useState(false)
    const slideTransformRight = '--slideTransformRight'
    const slideTransformLeft = '--slideTransformLeft'
    const transitionSlide = '--transition'
    const rootStyles = document.documentElement.style
    const getTransformRightValue = () => Number(rootStyles.getPropertyValue(slideTransformRight).replace('rem', ''))
    const getTransformLeftValue = () => Number(rootStyles.getPropertyValue(slideTransformLeft).replace('rem', ''))
    let slideCounterRight = 0
    let slideCounterLeft = 0
    let inicio = 0
    

    const DIRECTION = {
        RIGHT: 'RIGHT',
        LEFT: 'LEFT'
    }

    function initTransition() {
        setInterval(() => {
            if (stack.id === 2) {
                moveSlide(DIRECTION.RIGHT);
            } else {
               moveSlide(DIRECTION.LEFT);
            } 
        }, 2500);
    }

    function reorderSlide() {
        rootStyles.setProperty(transitionSlide, 'none')

        console.log(slideCounterLeft);
        if (slideCounterLeft === stack.stacks.length - 1) {
            console.log('holas');
            const transformValue = getTransformLeftValue()
            sliderLeft.appendChild(sliderLeft.firstElementChild)
            rootStyles.setProperty(slideTransformLeft, `${transformValue - 14}rem`)
            slideCounterLeft --
        }

        setIsInTransition(false)
    }


    function moveSlide(direction) {
        if(isInTransition) return
        console.log('me ejecute');
       
        rootStyles.setProperty(transitionSlide, 'all 2s linear')
        setIsInTransition(true)
        if (direction === DIRECTION.LEFT) {
            const transformValue = getTransformLeftValue()
            rootStyles.setProperty(slideTransformLeft, `${transformValue - 14}rem`)
            slideCounterLeft ++
            console.log(slideCounterLeft)
        } else if (direction === DIRECTION.RIGHT) {
            const transformValue = getTransformRightValue()
            rootStyles.setProperty(slideTransformRight, `${transformValue + 14}rem`)
            slideCounterRight ++
            console.log(slideCounterRight)
        }

        
    }

    useEffect(() => {
        setSliderLeft(document.querySelector('.slider_left'))
        setSliderRight(document.querySelector('.slider_right'))

        if(inicio === 0) {
            initTransition()
            inicio ++
        }
    }, [])


    return (
        <div className='divStacks'>
            <h3>
                {stack.title}
            </h3>
            <div className='slider_container'>
                <div className={`${stack.id === 2 ? 'slider slider_right' : 'slider slider_left'}`} onTransitionEnd={() => reorderSlide()}>
                    {stack.stacks.map((prog, key) => {
                        const LogoStack = prog.logo

                        return (
                            <StackCard
                                key={key}
                                stack={prog.stack}
                            >
                                <img src={LogoStack} alt="logo" className='logos' />
                            </StackCard>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default StackListMap