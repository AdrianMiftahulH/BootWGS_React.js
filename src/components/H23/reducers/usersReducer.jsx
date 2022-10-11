export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_USER':
            //mengembalikan ARRAY/OBJECT/VALUE-STRING BARU setiap kali mengembalikan data dari REDUCER
            //Hal ini dilakukan agar REDUX menyadari bahwa telah melakukan perubahan pada data i, dan agar dapat diperbarui. React akan dirender ulang dan akan menarik beberapa konten baru di layar.
            return [...state, action.payload];
        default:
            return state;
    }
};