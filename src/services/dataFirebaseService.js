import { collection, doc, getDoc, getDocs, setDoc } from 'firebase/firestore';
import { db } from '../api/firebase';
import { dataStart, dataFailure, getAllUsers, getUser,getGroup,getAllGroups,getGlobalNews,getGroupNews,setNews,getContributions,setContributions,getCourses } from '../features/data/dataSlice';

export const getUSerData = async (uid,dispatch) => {
    try {
        dispatch(dataStart());
        const docRef = doc(db, `users/${uid}`);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            dispatch(getUser(docSnap.data()));
        } else {
            dispatch(dataFailure("User not found!"));
        }

    } catch (error) {
        dispatch(dataFailure(error.ToString()));
        console.error('Error getting document:', error);
    }
}
export const getAllUSersData = async (dispatch) => {
    try {
        dispatch(dataStart());
        const querySnapshot = await getDocs(collection(db, 'users'));
        const users = querySnapshot.docs.map((doc) => doc.data());
        dispatch(getAllUsers(users));
    } catch (error) {
        dispatch(dataFailure(error.toString()));
        console.error('Error getting documents:', error);
    }
};
export const getGroupData = async (idGroup,dispatch) => {
    try {
        dispatch(dataStart());
        const docRef = doc(db, `groups/all-groups`);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            dispatch(getGroup(docSnap.data()[`${idGroup}`]));
        } else {
            dispatch(dataFailure("Users not found!"));
        }

    } catch (error) {
        dispatch(dataFailure(error.ToString()));
        console.error('Error getting document:', error);
    }
};
export const getAllGroupsData = async (dispatch) => {
    try {
        dispatch(dataStart());
        const docRef = doc(db, `groups/all-groups`);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            const groupsData = docSnap.data();
            delete groupsData.globalNews; // delete globalNews from groups
            dispatch(getAllGroups(groupsData));
        } else {
            dispatch(dataFailure("Users not found!"));
        }

    } catch (error) {
        dispatch(dataFailure(error.ToString()));
        console.error('Error getting document:', error);
    }
};

export const getGlobalNewsData = async (dispatch) => {
    try {
        dispatch(dataStart());
        const docRef = doc(db, `groups/all-groups`);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            dispatch(getGlobalNews(docSnap.data().globalNews));
        } else {
            dispatch(dataFailure("Users not found!"));
        }

    } catch (error) {
        dispatch(dataFailure(error.ToString()));
        console.error('Error getting document:', error);
    }
};

export const getGroupNewsData = async (idGroup,dispatch) => {
    try {
        dispatch(dataStart());
        const docRef = doc(db, `groups/all-groups`);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            const groupsData = docSnap.data()[`${idGroup}`];
            delete groupsData.students; // delete student from News
            dispatch(getGroupNews(groupsData));
        } else {
            dispatch(dataFailure("Users not found!"));
        }
    } catch (error) {
        dispatch(dataFailure(error.ToString()));
        console.error('Error getting document:', error);
    }
};
  
export const getContributionsData = async (dispatch) => {
    try {
        dispatch(dataStart());
        const querySnapshot = await getDocs(collection(db, 'contributions'));
        const users = querySnapshot.docs.map((doc) => doc.data());
        dispatch(getContributions(users));
    } catch (error) {
        dispatch(dataFailure(error.toString()));
        console.error('Error getting documents:', error);
    }
};
// SIN TERMINAR
export const setContributionsData = async (data,dispatch) => {
    try {
        dispatch(dataStart());
        const docRef = doc(db, `contributions/${data.id}`);
        await setDoc(docRef, data);
        dispatch(setContributions(data));
    } catch (error) {
        dispatch(dataFailure(error.ToString()));
        console.error('Error getting document:', error);
    }
}

export const getCoursesData = async (dispatch) => {
    try {
        dispatch(dataStart());
        const querySnapshot = await getDocs(collection(db, 'courses'));
        const users = querySnapshot.docs.map((doc) => doc.data());
        dispatch(getCourses(users));
    } catch (error) {
        dispatch(dataFailure(error.toString()));
        console.error('Error getting documents:', error);
    }
}