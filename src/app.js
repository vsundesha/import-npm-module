
import { printMe } from 'exportmodule';
// import * as whatever from 'exportmodule';

export default function printAlso() {
    printMe();
    console.log('I get called from the includer.js!');
}

printAlso();