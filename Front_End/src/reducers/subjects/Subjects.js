const subjects = JSON.parse(localStorage.getItem("subjects"));
const gradeId = JSON.parse(localStorage.getItem("gradeId"));
const teacherSlectedSubjects = JSON.parse(localStorage.getItem("teacherSlectedSubjects"));
const offerSubject = JSON.parse(localStorage.getItem("offerSubject"));
const initialState = {
   subjects:subjects?subjects:[],
   gradeId:gradeId?gradeId:0,
   teacherSlectedSubjects:teacherSlectedSubjects?teacherSlectedSubjects:[],
   cardColors:["#71B48F","#77C6DC","#E2B952","#DB7451"],
   offerSubject: offerSubject?offerSubject:{}
  };
  
  const Subjects = (state = initialState, { type, payload }) => {
    switch (type) {
      case "SET_SUBJECTS":
      localStorage.setItem("subjects",JSON.stringify(payload));
        return {
            subjects: payload,
            gradeId:state.gradeId,
            teacherSlectedSubjects:state.teacherSlectedSubjects,
            cardColors:state.cardColors,
            offerSubject:state.offerSubject
        };
      case "SET_GRADE_ID":
      localStorage.setItem("gradeId",JSON.stringify(payload));
        return {
          subjects:state.subjects,
          gradeId: payload,
          teacherSlectedSubjects:state.teacherSlectedSubjects,
          cardColors:state.cardColors,
          offerSubject:state.offerSubject
        };
        case "SET_TEACHER_SUBJECTS":
        localStorage.setItem("teacherSlectedSubjects",JSON.stringify(payload));
        return {
          subjects:state.subjects,
          gradeId: state.gradeId,
          teacherSlectedSubjects:payload,
          cardColors:state.cardColors,
          offerSubject:state.offerSubject
        };
        case "SET_OFFER_SUBJECT":
        localStorage.setItem("offerSubject",JSON.stringify(payload));
        return {
          subjects:state.subjects,
          gradeId: state.gradeId,
          teacherSlectedSubjects:state.teacherSlectedSubjects,
          cardColors:state.cardColors,
          offerSubject:payload
        };
      default:
        return state;
    }
  };
  
  export default Subjects;
  
  export const setSubjects = (subjects) => {
    return {
      type: "SET_SUBJECTS",
      payload: subjects,
    };
  };

  export const setGradeId = (id) => {
    return {
      type: "SET_GRADE_ID",
      payload: id,
    };
  };

  export const setTeacherSubjects = (subjects) => {
    return {
      type: "SET_TEACHER_SUBJECTS",
      payload: subjects,
    };
  };

  export const setOfferSubject = (subjects) => {
    return {
      type: "SET_OFFER_SUBJECT",
      payload: subjects,
    };
  };