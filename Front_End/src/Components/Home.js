import '../home.css';
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setSubjects } from "../reducers/subjects/Subjects";
import SubjectsForTeacher from "./SubjectsForTeacher";
import LogIn from './LogIn';

function Home(){
return(
  <div>
    <LogIn/>
  </div>
);
}
export default Home;