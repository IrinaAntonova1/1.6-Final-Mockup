import './index.html';
import './index.scss';
import checkstatus from './img/checkstatus.png'
import { mult, sum } from './modules/calc';

const img = new Image();
img.src = checkstatus;


console.log(mult(2, 4));
console.log(sum(2, 4));