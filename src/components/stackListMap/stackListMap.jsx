/* eslint-disable react/prop-types */
import './stackListMap.css'
import StackCard from '../stackCard/stackCard'

function StackListMap({ stack }) {

    return (
        <div className='divStacks'>
            <h3>
                {stack.title}
            </h3>
            <div className={`slider_container`}>
                <div className={`${stack.id === 2 ? 'slider_right' : 'slider_left'} slider`}>
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