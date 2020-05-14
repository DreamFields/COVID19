/*相当于header的store的出入口文件，使文件目录结构清晰，便于软件缺陷定位*/

import reducer from './reducer';
import * as actionCreators from './actionCreator';
export {reducer,actionCreators}
