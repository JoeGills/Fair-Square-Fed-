/* 
 Using the useContext hook to be able to use a state globally.
 Global means that every component in our app can access this state.
*/

import { createContext } from "react";
export const QuestionContext = createContext();

export default QuestionContext;
