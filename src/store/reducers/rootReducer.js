// state: Trạng thái của ứng dụng redux, nơi lưu trữ data của redux
// action: từ phía react truyền action lên như thế nào
// muốn lưu dữ liệu gì thì phải init trước

const initState = {
    users: [
        { id: 1, name: 'None' },
        { id: 2, name: 'Bulangk' },
        { id: 3, name: 'Learn Redux' },
    ]
}
// Khi khởi tạo thì biến state đã có giá trị
const rootReducer = (state = initState, action) => {
    return state;
}

export default rootReducer;