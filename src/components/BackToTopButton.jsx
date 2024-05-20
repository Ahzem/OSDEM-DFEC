import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { Fragment } from 'react'
import '../css/backToTop.css'

const backToTopButtonElement = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButtonElement.classList.add('show');
    } else {
        backToTopButtonElement.classList.remove('show');
    }
});

export const backToTopButton = () => {
  return (
    <Fragment>
        <button id="back-to-top"><FontAwesomeIcon icon={faArrowUp} class="fas fa-arrow-up" /></button>
    </Fragment>
  )
}
