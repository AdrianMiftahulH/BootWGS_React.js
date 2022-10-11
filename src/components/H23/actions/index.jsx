// mengimport library lodash dengan simbol _
import _ from "lodash";
// Mengambil api
import jsonPlaceholder from "../apis/apiPlaceholder";

//Fungsi yang dikembalikan dan sekarang dapat memiliki argumen 'dispatch' dan 'getState'
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    await dispatch(fetchPosts());

    _.chain(getState().posts)
        .map("userId")// map adalah chain ke .chain jadi Apapun bagian dalam .chain akan menjadi argumen untuk .map(). Ini Berarti '.posts' akan diteruskan sebagai argumen pertama di .map()
        .uniq() //hasil di map akan di teruskan ke uniq sebagai argumen pertama
        .forEach(id => dispatch(fetchUser(id))) // hasil dari uniq akan di teruskan ke forEach
        .value(); //menggunakan value sebagai output
};

export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceholder.get("/posts");
    //kita perlu menggunakan 'dispatch' untuk mengembalikan objek secara MANUAL
    dispatch({ type: "FETCH_POSTS", payload: response.data });
};

export const fetchUser = id => async dispatch => {
    const response = await jsonPlaceholder.get(`/users/${id}`);
    dispatch({ type: "FETCH_USER", payload: response.data });
};