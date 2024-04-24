/* eslint-disable react/prop-types */
import './stackCard.css'

function StackCard({ children, stack, level }) {

    return (
        <article className='StackCard'>
            {children}
            <div className='divInfo'>
                <h3>
                    {stack}
                </h3>
                <small>
                    {level}
                </small>
            </div>
        </article>

    )
}

export default StackCard