import { hello } from "./utils.js";
document.querySelector("#app").innerHTML = hello; //import & {} - that's importing from the utils.js

//can also rename imports = import {hello as varName } from...

//import everything = import * as varName from...
