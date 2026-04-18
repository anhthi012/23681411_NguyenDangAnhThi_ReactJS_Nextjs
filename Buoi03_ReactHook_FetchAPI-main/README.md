# Nội dung bài tập

## Buổi 03 – React Hooks

### Bài 2 – Digital Clock

* Hiển thị thời gian hiện tại
* Cập nhật mỗi 1 giây
* Sử dụng `useEffect`
* Cleanup `setInterval`

### Bài 3 – Product Filter

* Danh sách sản phẩm mock
* Tìm kiếm theo tên
* Lọc theo giá
* Tối ưu bằng `useMemo`

### Bài 4 – Todo List Performance

* Todo Input
* Todo List
* Todo Item
* Tối ưu re-render bằng:

  * `React.memo`
  * `useCallback`

---

## Buổi 04 – Fetch API

### Bài 1 – Fetch API GET

Fetch danh sách users từ API:

```
https://jsonplaceholder.typicode.com/users
```

Hiển thị:

* Name
* Email

---

### Bài 2 – Loading & Error State

Quản lý trạng thái khi gọi API:

* `loading`
* `error`
* `data`

---

### Bài 3 – Dynamic Fetch

Nhập `userId` và fetch dữ liệu:

```
https://jsonplaceholder.typicode.com/users/{id}
```

Hiển thị:

* Name
* Phone
* Website

---

### Bài 4 – Search & Filter

Fetch danh sách posts:

```
https://jsonplaceholder.typicode.com/posts
```

Chức năng:

* Search theo title
* Filter phía client
* Không gọi lại API
