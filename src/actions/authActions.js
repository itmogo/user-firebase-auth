export function signup(email, password){
    return async (dispatch, state, {getFirebase})=>{
        const firebase =getFirebase();

        try{
            const user = await firebase
            .auth()
            .createUserWithEmailAndPassword(email, password);

            console.log(user);
        } catch (error){
            console.log(error);
        }
    };
}



export function login (email, password){
    return async (dispatch, state, {getFirebase}) =>{
        const firebase = getFirebase();

        try{
            const userCredential = await firebase
            .auth()
            .signInWithEmailAndPassword(email, password);
            console.log(userCredential)
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
        } catch (e){
            console.log(e);
        }
    };
}