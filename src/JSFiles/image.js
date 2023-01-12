import github from '../images/github-mark-white.png'
import cat from "../images/cat.png"

function appendImages(){
    const githubImageEl = document.querySelector('.footer-github')
    githubImageEl.src = github

    const catImageEl = document.querySelector('.cat-image')
    catImageEl.src = cat
}

export default appendImages 