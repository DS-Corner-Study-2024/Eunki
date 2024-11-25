// # 1. 데이터베이스
// # 2. DESC users;
// # 3. CRUD
// # 4. npm start
// # 5. 시퀄라이즈
// # 6. 1:N
// # 7. JSON

// #8

// insert into nodejs.users(name, age, married, comment) values ('hi', 22, 0, '자기소개1'); 
// insert into nodejs.users (name, age, married, comment) values ('dd', 25, 0, '자기소개12');




//# 9.
//routes/index.js
// const express = require('express');
// const User = require('../models/user');

// const router = express.Router();

// router.get('/', async (req, res, next) => {
//   try {
//     const users = await User.( findAll )();	//메서드를 이용해 모든 사용자 찾기
//     res.render('sequelize', { (users   ) });	//sequelize.html을 렌더링할 때 결과 값
//   } catch (err) {
//     console.error(err);
//     next(err);
//   }
// });

// module.exports = (router   );	//다른 파일에서 사용할 수 있도록 내보냄