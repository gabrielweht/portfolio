import './stack.css'
import { stacksList } from '../../utils/stackList.js'
import StackListMap from '../../components/stackListMap/stackListMap.jsx'

function Stack() {
    return (
        <section className='stackSection section' id='stacks'>
            <h5 className='h5Skill'>{"Skills Overview"}</h5>
            <div className='divBigStacks'>
                {
                    stacksList.map((stack, key) => {
                        return (
                            <StackListMap
                                key={key}
                                stack={stack}
                            />
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Stack