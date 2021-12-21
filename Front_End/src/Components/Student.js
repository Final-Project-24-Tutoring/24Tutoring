import Subjects from "./Subjects";
import { useSelector,useDispatch } from "react-redux";
import axios from "axios";
import { setSubjects} from "../reducers/subjects/Subjects";
import { useEffect } from "react";

function Student(){
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return {
      user: state.User.user,
      token: state.User.token
    }; 
  });

    useEffect(() => {
      console.log(state.user.id);
      
      const config={
        headers:{Authorization:`Bearer ${state.token}`}
      }
      // get the student using the login user id 
      axios
          .get(`http://localhost:8080/students/student/user/${state.user.id}`,config)
          .then(function (response) {
            console.log(response.data);

            // print the student subjects useing the grade id
            axios
          .get(`http://localhost:8080/subjects/${response.data.grade.id}`,config)
          .then(function (response) {
            console.log(response.data);
            const action = setSubjects(response.data);
            dispatch(action);
          })
          .catch(function (error) {
            console.error(error);
          });

          })
          .catch(function (error) {
            console.error(error);
          });
      }, []);
    return(
        <div>
            <Subjects/>
        </div>
    );

}
export default Student;