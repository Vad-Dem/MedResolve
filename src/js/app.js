import * as flsFunction from "./function.js";
import  {menuOne, menuTwo} from './header-menu.js';
import {select} from './select.js';
import {charts} from './charts.js';
document.addEventListener("DOMContentLoaded", function () {
  menuOne();
  menuTwo();
  select();
  charts();
  flsFunction.isWebp();
});
