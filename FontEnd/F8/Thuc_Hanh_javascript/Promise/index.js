// function sleep(ms) {
//     return new Promise(function (resolve) {
//         setTimeout(resolve, ms);
//     });
// }

// sleep(1000)
//     .then(function () {
//         console.log(1);
//         return sleep(1000);
//     })

//     .then(function() {
//         console.log(2);
//     })

    // Nếu tk then phía trước k return 1 Promise thì sẽ chạy tk phía sau ngay
    // Tính chất 2: có thể tạo nhanh bằng Promise.resolve and Promise.reject
    // Hoặc có thể sử dụng Promise.all -> sử dụng nếu nó chạy xong xong không phụ thuộc vào nhau
    // Tuy nhiên muốn lấy kết quả của 2 thằng để làm 1 việc gì đó thì dùng Promise.all

// VD: Promise
var uses = [
    {
        id: 1,
        name: 'Văn Tới'
    },
    {
        id: 2,
        name: 'Son Dang'
    },
    {
        id: 3,
        name: 'Van Kiet'
    },
]

var comments = [
    {   
        id: 1,
        idUses: 1,
        comment: 'Em lam khong duoc anh oi'
    },
    {   
        id: 2,
        idUses: 2,
        comment: 'Xem ki lai em ơi',
    },
    {   
        id: 3,
        idUses: 3,
        comment: 'Cam on anh!',
    },
]
/**
 * B1: Lấy comment
 * B2: Từ comment lấy ra ông usesId
 * B3: Từ usesId lấy ra uses tương ứng
 * 
 */

getComment = () => {
    return new Promise( (resolve) => {
        resolve(comments);
    })
}

getUserByID = UserID => {
    return new Promise( (resolve) => {
        var UserName = uses.filter(user => {
            return UserID.includes(user.id);
        })
        resolve (UserName);
    })
}

getComment()
    .then( () => {
        var result = comments.map((comment) => {
            return comment.idUses;
        });
        return getUserByID(result)
            .then((uses) => {
                return {
                    uses: uses,
                    comments: comments,
                };
            })
    })

    .then ((data) => {
       var html = '';
       var CommentBlock = document.getElementById('emlemnt_Id');
        data.comments.forEach(comment => {
            var Users = data.uses.find(user => {
                return user.id === comment.idUses;
            })
            html += `<li>${Users.name} : ${comment.comment}</li>`
        })
        CommentBlock.innerHTML = html;
    })








    



