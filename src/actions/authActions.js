

export function signupAction(email, password){
    return async (dispatch, state, {getFirebase})=>{
        const firebase =getFirebase();

        try{
            const userCredentials = await firebase
            .auth()
            .createUserWithEmailAndPassword(email, password);

            console.log(userCredentials);
        } catch (error){
            console.log(error);
        }
    };
}

export function loginAction (email, password){
    return async (dispatch, state, {getFirebase}) =>{
        const firebase = getFirebase();

        try{
            const userCredentials = await firebase
            .auth()
            .signInWithEmailAndPassword(email, password);
            console.log(userCredentials)
        }
        catch(e){
            console.log(e)
        }
    };
}

export function logout() {
    return async (dispatch, state, { getFirebase }) => {
        const firebase = getFirebase();
        try{
            await firebase.auth().signOut();
        } 
        catch (e){
            console.log(e);
        }
    };
}