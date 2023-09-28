import { collection, doc, getDoc, getDocs, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../api/firebase";
import { createAsyncThunk } from "@reduxjs/toolkit";
import * as cleanMethods from "../features/data/cleanMethods";
 
/* ----------- FUNCIONES GENERALES */

export const setProfilePicture = createAsyncThunk(
    "user/setProfilePicture",
    async ({ uid, photoUrl }) => {
        console.log("setProfilePicture", uid, photoUrl);
        try {
            const docRef = doc(db, `users/${uid}`);
            await updateDoc(docRef, {
                picture: photoUrl,
            });
        } catch (error) {
            console.error("Error updating document:", error);
            throw error;
        }
    }
);

export function cleanAllSlices(dispatch) {
    //Cleaning all the Redux Store slices
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

/* --------------- Peticiones a Course */
export const getCoursesData = createAsyncThunk(
    "course/getAllCourses",
    async () => {
        try {
            const querySnapshot = await getDocs(collection(db, "courses"));
            const courses = querySnapshot.docs.map((doc) => {
                const course = doc.data();
                course.id = doc.id;
                return course;
            });
            return courses;
        } catch (error) {
            console.error("Error getting documents:", error);
            throw error;
        }
    }
);

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

export const getCurriculumData = createAsyncThunk(
    "curriculum/getCurriculum",
    async (idCurriculum) => {
        try {
            const docRef = doc(db, `curriculum/${idCurriculum}`);
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
