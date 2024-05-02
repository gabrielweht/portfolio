/* eslint-disable react/prop-types */
import './stackCard.css'

function StackCard({ children, stack}) {

    return (
        <article className='StackCard slider_element'>
            {children}
            <div className='divInfo'>
                <h3>
                    {stack}
                </h3>
            </div>
        </article>

    )
}

export default StackCard