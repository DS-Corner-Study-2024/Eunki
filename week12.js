// 1. HTTP
// 2. 양방향
// 3. Socket.IO
// 4. 폴링 방식
// 5. 방(room)
// 6. 몽고디비
// 7. 소켓 이벤트 리스너


//8번
const Room = require('../schemas/room');
const Chat = require('../schemas/chat');
const { removeRoom: removeRoomService } = require('../services'); 

exports.removeRoom = async (req, res, next) => {
  try {
    await removeRoomService(req.params.id);		
    res.send('ok');					
  } catch (error) {
    console.error(error);
    next(error);
  }
};


//9번
app.use(express.static(path.join(__dirname, 'public')));
app.use('/gif', express.static(path.join(__dirname, 'uploads')));
app.use(express.json());
