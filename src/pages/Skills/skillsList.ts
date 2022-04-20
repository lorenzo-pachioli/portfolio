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
    name: 'HTML'
    },{
    svg:css,
    name: 'CSS'
    },{
    svg:javascript,
    name: 'Javascript'
    },{
    svg:typescript,
    name: 'Typescript'
    },{
    svg:react,
    name: 'React'
    },{
    svg:redux,
    name: 'Redux'
    },{
    svg:sass,
    name: 'SASS'
    },{
    svg:firebase,
    name: 'Firebase'
    },{
    svg:git,
    name: 'Git'
    },{
    svg:github,
    name: 'Github'
    },{
    svg:npm,
    name: 'NPM'
    },{
    svg:trello,
    name: 'Trello'
    }
]

