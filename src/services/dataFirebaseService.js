import { collection, doc, getDoc, getDocs, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../api/firebase";
import { createAsyncThunk } from "@reduxjs/toolkit";
import * as cleanMethods from "../features/data/cleanMethods";
/* import { contributionStart, contributionFailure, getAllContributions } from "../features/data/contributionSlice";
import { courseStart, courseFailure, getAllCourses } from "../features/data/courseSlice";
import { curriculumStart, curriculumFailure, getCurriculum, getAllCurriculums } from "../features/data/curriculumSlice";
import { gradeStart, gradeFailure, getUserGrades, getGroupGrades } from "../features/data/gradeSlice";
import { groupStart, groupFailure, getGroup, getAllGroups } from "../features/data/groupSlice";
import { newsStart, newsFailure, getAllNews } from "../features/data/newsSlice";
import { userStart, userFailure, getAllUsers, getUser } from "../features/data/userSlice";
*/

/* ----------- FUNCIONES GENERALES */
export function cleanAllSlices(dispatch) {
    //In progress
    dispatch(cleanMethods.cleanContribution())
    dispatch(cleanMethods.cleanCourse())
    dispatch(cleanMethods.cleanCurriculum())
    dispatch(cleanMethods.cleanGrade())
    dispatch(cleanMethods.cleanGroup())
    dispatch(cleanMethods.cleanNews())
    dispatch(cleanMethods.cleanUser())
}

/* --------------- Peticiones a Contributions */
export const getContributionsData = createAsyncThunk(
    "contribution/getAllContributions",
    async () => {
        try {
            const querySnapshot = await getDocs(collection(db, "contributions"));
            const contributions = querySnapshot.docs.map((doc) => doc.data());
            return contributions;
        } catch (error) {
            console.error("Error getting documents:", error);
            throw error;
        }
    }
);




/* Version sin Thunk
    export const getContributionsData = async (dispatch) => {
    try {
        dispatch(contributionStart());
        const querySnapshot = await getDocs(collection(db, "contributions"));
        const contributions = querySnapshot.docs.map((doc) => doc.data());
        dispatch(getAllContributions(contributions));
    } catch (error) {
        dispatch(contributionFailure(error.message));
        console.error("Error getting documents:", error);
    }
}; */
// SIN TERMINAR
/* export const setContributionsData = async (data, dispatch) => {
    try {
        dispatch(contributionStart());
        const docRef = doc(db, `contributions/${data.id}`);
        await setDoc(docRef, data);
        dispatch(setContributions(data));
    } catch (error) {
        dispatch(contributionFailure(error.ToString()));
        console.error("Error getting document:", error);
    }
}; */

/* --------------- Peticiones a Course */
export const getCoursesData = createAsyncThunk(
    "course/getAllCourses",
    async () => {
        try {
            const querySnapshot = await getDocs(collection(db, "courses"));
            const courses = querySnapshot.docs.map((doc) => doc.data());
            return courses;
        } catch (error) {
            console.error("Error getting documents:", error);
            throw error;
        }
    }
);
/* Version sin Thunk
    export const getCoursesData = async (dispatch) => {
    try {
        dispatch(courseStart());
        const querySnapshot = await getDocs(collection(db, "courses"));
        const courses = querySnapshot.docs.map((doc) => doc.data());
        dispatch(getAllCourses(courses));
    } catch (error) {
        dispatch(courseFailure(error.message));
        console.error("Error getting documents:", error);
    }
}; */


/* --------------- Peticiones a Curriculum */
export const getAllCurriculumsData = createAsyncThunk(
    "curriculum/getAllCurriculums",
    async () => {
        try {
            const querySnapshot = await getDocs(collection(db, "curriculums"));
            const curriculums = querySnapshot.docs.map((doc) => doc.data());
            return curriculums;
        } catch (error) {
            console.error("Error getting documents:", error);
            throw error;
        }
    }
);
/* Version sin Thunk
    export const getAllCurriculumsData = async (dispatch) => {
    try {
        dispatch(curriculumStart());
        const querySnapshot = await getDocs(collection(db, "curriculums"));
        const curriculums = querySnapshot.docs.map((doc) => doc.data());
        dispatch(getAllCurriculums(curriculums));
    } catch (error) {
        dispatch(curriculumFailure(error.message));
        console.error("Error getting documents:", error);
    }
}; */
export const getCurriculumData = createAsyncThunk(
    "curriculum/getCurriculum",
    async (idCurriculum) => {
        try {
            const docRef = doc(db, `curriculums/${idCurriculum}`);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                return docSnap.data();
            } else {
                throw new Error("Curriculum not found!");
            }
        } catch (error) {
            console.error("Error getting document:", error);
            throw error;
        }
    }
);
/* Version sin Thunk
export const getCurriculumData = async (idCurriculum, dispatch) => {
    try {
        dispatch(curriculumStart());
        const docRef = doc(db, `curriculums/${idCurriculum}`);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            dispatch(getCurriculum(docSnap.data()));
        } else {
            dispatch(curriculumFailure("Curriculum not found!"));
        }
    } catch (error) {
        dispatch(curriculumFailure(error.message));
        console.error("Error getting document:", error);
    }
};
*/

/* --------------- Peticiones a Grades */

export const getUserGradesData = createAsyncThunk(
    "grade/getUserGrades",
    async (idStudent) => {
        try {
            const docRef = doc(db, `grades/${idStudent}`);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                return docSnap.data();
            } else {
                throw new Error("User not found!");
            }
        } catch (error) {
            console.error("Error getting document:", error);
            throw error;
        }
    }
);
/* Version sin Thunk
export const getUserGradesData = async (idStudent, dispatch) => {
    try {
        dispatch(gradeStart());
        const docRef = doc(db, `grades/${idStudent}`);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            dispatch(getUserGrades(docSnap.data().grades));
        } else {
            dispatch(gradeFailure("User not found!"));
        }
    } catch (error) {
        dispatch(gradeFailure(error.message));
        console.error("Error getting document:", error);
    }
};
*/
export const getGroupGradesData = createAsyncThunk(
    "grade/getGroupGrades",
    async (arrayIds) => {
        try {
            const docRef = doc(db, `grades`);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                const grades = docSnap.data();
                const groupGrades = [];
                arrayIds.forEach((id) => {
                    groupGrades[id] = grades[id];
                });
                return groupGrades;
            } else {
                throw new Error("Users not found!");
            }
        } catch (error) {
            console.error("Error getting document:", error);
            throw error;
        }
    }
);
/* Version sin Thunk
export const getGroupGradesData = async (arrayIds, dispatch) => {
    try {
        dispatch(gradeStart());
        const docRef = doc(db, `grades`);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            const grades = docSnap.data();
            const groupGrades = [];
            arrayIds.forEach((id) => {
                groupGrades[id] = grades[id];
            });
            dispatch(getGroupGrades(groupGrades));
        } else {
            dispatch(gradeFailure("Users not found!"));
        }
    } catch (error) {
        dispatch(gradeFailure(error.message));
        console.error("Error getting document:", error);
    }
};
*/

/* --------------- Peticiones a Groups */
export const getGroupData = createAsyncThunk(
    "group/getGroup",
    async (idGroup) => {
        try {
            const docRef = doc(db, `groups/${idGroup}`);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                return docSnap.data();
            } else {
                throw new Error("Users not found!");
            }
        } catch (error) {
            console.error("Error getting document:", error);
            throw error;
        }
    }
);
/* Version sin Thunk
export const getGroupData = async (idGroup, dispatch) => {
    try {
        dispatch(groupStart());
        const docRef = doc(db, `groups/${idGroup}`);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            dispatch(getGroup(docSnap.data()));
        } else {
            dispatch(groupFailure("Users not found!"));
        }
        console.log("Group", docSnap.data());
    } catch (error) {
        dispatch(groupFailure(error.message));
        console.error("Error getting document:", error);
    }
};
*/
export const getAllGroupsData = createAsyncThunk(
    "group/getAllGroups",
    async () => {
        try {
            const querySnapshot = await getDocs(collection(db, "groups"));
            const groups = querySnapshot.docs.map((doc) => doc.data());
            return groups;
        } catch (error) {
            console.error("Error getting documents:", error);
            throw error;
        }
    }
);

/* Version sin Thunk
export const getAllGroupsData = async (dispatch) => {
    try {
        dispatch(groupStart());
        const docRef = doc(db, `groups`);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            const groupsData = docSnap.data();
            dispatch(getAllGroups(groupsData));
        } else {
            dispatch(groupFailure("Users not found!"));
        }
    } catch (error) {
        dispatch(groupFailure(error.message));
        console.error("Error getting document:", error);
    }
};
*/
/* --------------- Peticiones a News */
export const getAllNewsData = createAsyncThunk(
    "news/getAllNews",
    async () => {
        try {
            const querySnapshot = await getDocs(collection(db, "news"));
            const news = querySnapshot.docs.map((doc) => doc.data());
            return news;
        } catch (error) {
            console.error("Error getting documents:", error);
            throw error;
        }
    }
);
/* Version sin Thunk
export const getNewsData = async (dispatch) => {
    try {
        dispatch(newsStart());
        const querySnapshot = await getDocs(collection(db, "news"));
        const news = querySnapshot.docs.map((doc) => doc.data());
        dispatch(getAllNews(news));
    } catch (error) {
        dispatch(newsFailure(error.message));
        console.error("Error getting documents:", error);
    }
};
*/
/* --------------- Peticiones a Users */
export const getUserData = createAsyncThunk(
    "user/getUser",
    async (uid) => {
        try {
            const docRef = doc(db, `users/${uid}`);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                return docSnap.data();
            } else {
                throw new Error("User not found!");
            }
        } catch (error) {
            console.error("Error getting document:", error);
            throw error;
        }
    }
);
/* Version sin Thunk
export const getUSerData = async (uid, dispatch) => {
    try {
        dispatch(userStart());
        const docRef = doc(db, `users/${uid}`);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            dispatch(getUser(docSnap.data()));
        } else {
            dispatch(userFailure("User not found!"));
        }
    } catch (error) {
        dispatch(userFailure(error.message));
        console.error("Error getting document:", error);
    }
};
*/
export const getAllUsersData = createAsyncThunk(
    "user/getAllUsers",
    async () => {
        try {
            const querySnapshot = await getDocs(collection(db, "users"));
            const users = querySnapshot.docs.map((doc) => doc.data());
            return users;
        } catch (error) {
            console.error("Error getting documents:", error);
            throw error;
        }
    }
);
/* Version sin Thunk
export const getAllUSersData = async (dispatch) => {
    try {
        dispatch(userStart());
        const querySnapshot = await getDocs(collection(db, "users"));
        const users = querySnapshot.docs.map((doc) => doc.data());
        dispatch(getAllUsers(users));
    } catch (error) {
        dispatch(userFailure(error.message));
        console.error("Error getting documents:", error);
    }
};
*/

export const setUserLastNotification = createAsyncThunk(
    "user/setLastNotification",
    async ({ uid, date }) => {
        console.log("setUserLastNotification", uid, date);
        try {
            const docRef = doc(db, `users/${uid}`);
            await updateDoc(docRef, {
                last_notification: date,
            });
        } catch (error) {
            console.error("Error updating document:", error);
            throw error;
        }
    }
);
