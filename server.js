var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var articles={
    'article-one':{
        title:"Article One | Muhammed Suhail",
        heading:"Article One",
        content:`
            <p>This is article one</p>
        `
    },
    'article-two':{
        title:"Article Two | Muhammed Suhail",
        heading:"Article Two",
        content:`
            <p>this is article two</p>
        `
    }
};
function getArticles(data){
    var title=data.title;
    var heading=data.heading;
    var content=data.content;
    var htmlTemplate=`
        <html>
            <head>
                <title>${title}</title>
            </head>
            
            <body>
            
                <div class="content">
                    <h2> Welcome to ${heading} </h2>
                    ${content}
                </div>
            </body>
        </html>
    `;
    return htmlTemplate;
}

app.get('/:articleName',function(req,res){
    var articleName=req.param.articleName;
    res.sent(getArticles(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
