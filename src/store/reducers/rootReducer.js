// state: Trạng thái của ứng dụng redux, nơi lưu trữ data của redux
// action: từ phía react truyền action lên như thế nào
// muốn lưu dữ liệu gì thì phải init trước

const initState = {
    users: [
        { id: 1, name: 'None' },
        { id: 2, name: 'Bulangk' },
        { id: 3, name: 'Learn Redux' },
    ],
    posts: []
}
// Khi khởi tạo thì biến state đã có giá trị
const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'DELETE_USER':
            let users = state.users
            users = users.filter(item => item.id !== action.payload.id)
            return {
                // lý do phải copy lại state (...state)
                // sau này khi trong state có nhiều dữ liệu 
                // thì ta copy hết dữ liệu trong state đó và lấy giá trị users mới ghi đè lên 
                // phần users đó thôi, còn những phần khác thì vẫn giữ nguyên giá trị, 
                // ví dụ ở đây là thằng posts giá trị vẫn còn nguyên
                ...state, users
            }

        case 'CREATE_USER':
            let id = Math.floor(Math.random() * 100000)
            let user = {
                id: id,
                name: `Random - ${id}`
            }
            return {
                ...state, users: [...state.users, user]
            }
        default:
            return state;
    }
}

export default rootReducer;