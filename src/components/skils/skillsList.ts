import html from '../../assets/html-1.svg';
import css from '../../assets/css-3.svg';
import react from '../../assets/react-2.svg';
import redux from '../../assets/redux.svg';
import sass from '../../assets/sass-1.svg';
import javascript from '../../assets/javascript-1.svg';
import typescript from '../../assets/typescript-2.svg';
import firebase from '../../assets/firebase-1.svg';
import git from '../../assets/git-icon.svg';
import github from '../../assets/github-icon-1.svg';
import npm from '../../assets/npm.svg';
import trello from '../../assets/trello.svg';

interface obj {
    svg: string
    name: string
}

type list= obj[]

export const skillsList:list = [
    {
    svg:html,
    name: 'HTML 70%'
    },{
    svg:css,
    name: 'CSS 90%'
    },{
    svg:javascript,
    name: 'Javascript 90%'
    },{
    svg:typescript,
    name: 'Typescript 50%'
    },{
    svg:react,
    name: 'React 80%'
    },{
    svg:redux,
    name: 'Redux 50%'
    },{
    svg:sass,
    name: 'SASS 70%'
    },{
    svg:firebase,
    name: 'Firebase 70%'
    },{
    svg:git,
    name: 'Git 40%'
    },{
    svg:github,
    name: 'Github 70%'
    },{
    svg:npm,
    name: 'NPM 50%'
    },{
    svg:trello,
    name: 'Trello'
    }
]

