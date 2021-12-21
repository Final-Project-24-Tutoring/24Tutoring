import axios from "axios";
import { useEffect,useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { setSubjects,setGradeId} from "../reducers/subjects/Subjects";
import { setUser } from "../reducers/User/User";
import SubjectsForTeacher from "./SubjectsForTeacher";
import { useNavigate } from "react-router-dom";

function SignUpTeacher() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const state = useSelector((state) => {
    return {
      teacherSubjects: state.Subjects.teacherSlectedSubjects,
      user: state.User.user
    }; 
  });
  const [firstName,setFirstName]=useState("");
  const [lastName,setLastName]=useState("");
  const [userName,setUserName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [confirmPassword,setConfirmPassword]=useState("");
  const [phone,setPhone]=useState("");
  const [grade,setGrade]=useState(1);
  const [emailExist,setEmailExist]=useState(false);
  const [usernameExist,setUsernameExist]=useState(false);
  useEffect(() => {
    axios
      .get(`http://localhost:8080/subjects/${grade}`)
      .then(function (response) {
        console.log(response.data);
        const action = setSubjects(response.data);
        dispatch(action);
        const action2 = setGradeId(grade);
      dispatch(action2);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [grade]);
  
  function getTeachers(event){

    event.preventDefault();
      let data=[];
      //get teachers and check if the username and email exist 
      axios
      .get("http://localhost:8080/teachers")
      .then(function (response) {
          console.log(response.data);
          data=response.data;
          for (let i=0; i<data.length;i++){
              if(data[i].email === email){
                  setEmailExist(true);
                  console.log("emailExist",emailExist);
                  break;
              }
              if(data[i].username === userName){
                  setUsernameExist(true);
                  console.log("usernameExist",usernameExist);
                  break;
              } 
          }
          if(!usernameExist && !emailExist){
              console.log("all false");
              addTeacher();
          }
      })
      .catch(function (error) {
        console.error(error);
      });
  }
  function addTeacher() {
      //post the new teacher
      if(password === confirmPassword){
      console.log(password);
      let teacher = {
        fName: firstName,
        lName: lastName,
        username: userName,
        email: email,
        password: password,
        phone:phone
      };
      console.log(teacher);
      //post teacher
      axios
        .post("http://localhost:8080/teachers", teacher)
        .then(function (response) {
          //get posted teacher id
          axios
          .get(`http://localhost:8080/teachers/${userName}`)
          .then(function (response) {
              console.log(response.data);
              const action = setUser(response.data);
              dispatch(action);
              
              //post grades and subjects to the teacher
              let copy=[];
              copy=state.teacherSubjects.slice();
              copy.forEach(element => element.teacher.id= response.data.id);
              console.log(copy);
              axios
              .post("http://localhost:8080/link", copy)
              .then(function (response) {
                console.log(response.data);
              })
              .catch(function (error) {
                console.error(error);
              });
          })
          .catch(function (error) {
            console.error(error);
          });
          navigate("/Teacher");
        })
        .catch(function (error) {
          console.error(error);
        }); 
    }//end of password if
    else{
        console.log("password and ");
        
    }
  }
  const changeFirstName = (e) => {
    setFirstName(e.target.value);
    };
    const changeLastName = (e) => {
      setLastName(e.target.value);
    };
    const changeUserName = (e) => {
      setUserName(e.target.value);
      setUsernameExist(false);
    };
    const changeEmail = (e) => {
      setEmail(e.target.value);
      setEmailExist(false);
    };
    const changePassword = (e) => {
      setPassword(e.target.value);
    };
    const changeConfirmPassword = (e) => {
      setConfirmPassword(e.target.value);
    };
    const changePhone = (e) => {
      setPhone(e.target.value);
    };
    const changeGrade = (e) => {
      e.preventDefault();
      setGrade(parseInt(e.target.value));
      // changeGrades()
    };
return(

  <div className="container">
  <form className="well form-horizontal" method="post" id="contact_form">
    <fieldset>
      {/* Form Name */}
      <legend><center><h2><b>إنشاء حساب</b></h2></center></legend><br />
      {/* Text input*/}
      <div className="form-group">
        <label className="col-md-4 control-label">الاسم الاول</label>  
        <div className="col-md-4 inputGroupContainer">
          <div className="input-group">
            <span className="input-group-addon"><i className="glyphicon glyphicon-user" /></span>
            <input name="first_name" placeholder="الاسم الاول" className="form-control" type="text" onChange={changeFirstName}/>
          </div>
        </div>
      </div>
      {/* Text input*/}
      <div className="form-group">
        <label className="col-md-4 control-label">اسم العائلة</label> 
        <div className="col-md-4 inputGroupContainer">
          <div className="input-group">
            <span className="input-group-addon"><i className="glyphicon glyphicon-user" /></span>
            <input name="last_name" placeholder="اسم العائلة" className="form-control" type="text" onChange={changeLastName}/>
          </div>
        </div>
      </div>
      {/* Text input*/}
      <div className="form-group">
        <label className="col-md-4 control-label">اسم المستخدم بالانجليزي</label>  
        <div className="col-md-4 inputGroupContainer">
          <div className="input-group">
            <span className="input-group-addon"><i className="glyphicon glyphicon-user" /></span>
            <input name="user_name" placeholder="اسم المستخدم" className="form-control" type="text" onChange={changeUserName}/>
          </div>
        </div>
      </div>
       {/* Text input*/}
       <div className="form-group">
        <label className="col-md-4 control-label">عنوان البريد الإلكتروني</label>  
        <div className="col-md-4 inputGroupContainer">
          <div className="input-group">
            <span className="input-group-addon"><i className="glyphicon glyphicon-envelope" /></span>
            <input name="email" placeholder="البريد الإلكتروني" className="form-control" type="text" onChange={changeEmail}/>
          </div>
        </div>
      </div>
      {/* Text input*/}
      <div className="form-group">
        <label className="col-md-4 control-label">كلمة المرور</label> 
        <div className="col-md-4 inputGroupContainer">
          <div className="input-group">
            <span className="input-group-addon"><i className="glyphicon glyphicon-user" /></span>
            <input name="user_password" placeholder="كلمة المرور" className="form-control" type="password" onChange={changePassword}/>
          </div>
        </div>
      </div>
      {/* Text input*/}
      <div className="form-group">
        <label className="col-md-4 control-label">تأكيد كلمة المرور</label> 
        <div className="col-md-4 inputGroupContainer">
          <div className="input-group">
            <span className="input-group-addon"><i className="glyphicon glyphicon-user" /></span>
            <input name="confirm_password" placeholder="تأكيد كلمة المرور" className="form-control" type="password" onChange={changeConfirmPassword}/>
          </div>
        </div>
      </div>
      {/* Text input*/}
      <div className="form-group">
        <label className="col-md-4 control-label">رقم الجوال</label>  
        <div className="col-md-4 inputGroupContainer">
          <div className="input-group">
            <span className="input-group-addon"><i className="glyphicon glyphicon-earphone" /></span>
            <input name="contact_no" placeholder="(966)" className="form-control" type="text" onChange={changePhone}/>
          </div>
        </div>
      </div>
      <div className="form-group"> 
        <label className="col-md-4 control-label">الصف</label>
        <h6>يمكنك اختيار اكثر من صف من ثم اضافة المواد التي ترغب بتعليمها</h6>
        <div className="col-md-4 selectContainer">
          <div className="input-group">
            <span className="input-group-addon"><i className="glyphicon glyphicon-list" /></span>
            <select name="department" className="form-control selectpicker" onChange={changeGrade}>
              <option value="1">الصف الاول الأبتدائي</option>
              <option value="2">الصف الثاني الأبتدائي</option>
              <option value="3">الصف الثالث الأبتدائي</option>
              <option value="4">الصف الرابع الأبتدائي</option>
              <option value="5">الصف الخامس الأبتدائي</option>
              <option value="6">الصف السادس الأبتدائي</option>
              <option value="7">الصف الاول متوسط</option>
              <option value="8">الصف الثاني متوسط</option>
              <option value="9">الصف الثالث متوسط</option>
              <option value="10">الصف الاول ثانوي</option>
              <option value="11">الصف الثاني ثانوي</option>
              <option value="12">الصف الثالث ثانوي</option>
            </select>
          </div>
        </div>
      </div>
      <SubjectsForTeacher/>
      {/* Button */}
      <div className="form-group">
        <label className="col-md-4 control-label" />
        <div className="col-md-4"><br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button type="submit" className="btn btn-warning" onClick={getTeachers}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;تسجيل جديد <span className="glyphicon glyphicon-send" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>
        </div>
      </div>
    </fieldset>
  </form>
</div>
);
  }
  
  export default SignUpTeacher;