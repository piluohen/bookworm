const   express = require('express'),
        bodyParser = require('body-parser'),
        cookieParser = require('cookie-parser'),
        fs = require('fs'),
        app = express()

app.use(express.static('www'))
app.use(bodyParser.json())
app.use(cookieParser())

/*--------------------注册--------------------*/

app.post('/user/register', (req, res) => {
    function send(code, message){
        res.status(200).json({code, message})
    }
    
    function saveFile(){
        var fileName = `users/${req.body.username}.txt`
        
        fs.exists(fileName, exists => {
            if(exists){
                send('registered', '用户名已注册！')
            }
            else{
                fs.appendFile(fileName, JSON.stringify(req.body), err => {
                    if(err){
                        send('file error', '抱歉，系统错误...')
                    }
                    else{
                        send('success', '恭喜，注册成功！请登录...')
                    }
                })
            }
        })
    }
   
    fs.exists('users', exists => {
        if(exists){
            saveFile()
        }
        else{
            fs.mkdir('users', err => {
                if(err){
                    send('file error', '抱歉，系统错误...')
                }
                else{
                    saveFile()
                }
            })
        }
    })
})

/*--------------------登录--------------------*/

app.post('/user/signin', (req, res) => {
    var fileName = `users/${req.body.username}.txt`
    
    function send(code, message){
        res.status(200).json({code, message})
    }
    
    fs.exists(fileName, exists => {
        if(exists){
            fs.readFile(fileName, (err, data) => {
                if(err){
                    send('file error', '抱歉，系统错误...')
                }
                else{
                    var user = JSON.parse(data)
                    if(user.password == req.body.password && user.code == req.body.code){
                        
                        res.cookie('username', req.body.username)
                        // 此处需要加密
                        
                        send('success', '登录成功...')
                    }
                    else{
                        send('signin error', '用户名或密码错误！')
                    }
                }
            })
        }
        else{
            send('register error', '用户名未注册！')
        }
    })
})

/*--------------------退出--------------------*/

app.get('/user/signout', (req, res) => {
    res.clearCookie('username')
    res.status(200).json({code: 'success'})
})

app.listen(3000, err => console.log('正在运行...'))