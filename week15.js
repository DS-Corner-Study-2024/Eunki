// 1. process.env.NODE_EW
// 2. combined
// 3. js
// 4. pm2
// 5. winston
// 6. 깃허브(GitHub)
// 7. AWS, GCP

//8번
if (process.env.NODE_ENV === 'production') { 
    app.enable('trust proxy');
    app.use(morgan('combined')); 
  } else {
    app.use(morgan('dev'));
  }
  app.use(express.static(path.join(__dirname, 'public')));


  //9번

// const sanitizeHtml=require('sanitize-html');

// const html="<script>location.href='https://gilbut.co.kr'</script>";
// console.log(sanitizeHtml(html));  
