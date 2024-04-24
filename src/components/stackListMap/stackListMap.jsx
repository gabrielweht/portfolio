/* eslint-disable react/prop-types */
import './stackListMap.css'
import StackCard from '../stackCard/stackCard'

function StackListMap({stack}) {

    return (
        <div className='divStacks'>
            <h3>
                {stack.title}
            </h3>
            <div className='divStacksCards'>
                {stack.list.map((prog, key) => {
                    const LogoStack = prog.logo

                    return (
                        <StackCard
                            key={key}
                            stack={prog.stack}
                            level={prog.level}
                        >
                            <LogoStack style={{ margin: ".2rem 0 0 0" }} />
                        </StackCard>
                    )
                })}
            </div>
        </div>
    )
}

export default StackListMap