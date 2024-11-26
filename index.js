const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Cài đặt middleware để xử lý dữ liệu JSON
app.use(express.json());

// API endpoint trả về danh sách người dùng với thông tin phong phú hơn
app.get('/users', (req, res) => {
    const users = [
        [
            {
                "name": "Nguyễn Thanh Phong",
                "email": "tranthib@example.com",
                "age": 22,
                "role": "user"
            },
            {
                "name": "Lê Văn Đô",
                "email": "levanc@example.com",
                "age": 28,
                "role": "editor"
            },
            {
                "name": "Phạm Thị Thùy Duyên",
                "email": "phamthid@example.com",
                "age": 30,
                "role": "moderator"
            },
            {
                "name": "Nguyễn Văn Dư",
                "email": "nguyenvane@example.com",
                "age": 35,
                "role": "admin"
            },
            {
                "name": "Đặng Thị Kiều My",
                "email": "dangthif@example.com",
                "age": 24,
                "role": "user"
            },
            {
                "name": "Bùi Văn Sở",
                "email": "buivang@example.com",
                "age": 27,
                "role": "user"
            },
            {
                "name": "Ngô Thị Hà",
                "email": "ngothih@example.com",
                "age": 29,
                "role": "editor"
            },
            {
                "name": "Lý Văn Cao",
                "email": "lyvani@example.com",
                "age": 26,
                "role": "admin"
            },
            {
                "name": "Hoàng Thị Mỹ Chi",
                "email": "hoangthik@example.com",
                "age": 31,
                "role": "user"
            }
        ]
        
    ];
    res.json(users);
});

// Lắng nghe trên cổng
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});