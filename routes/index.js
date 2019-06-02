var express = require('express');
var router = express.Router();
var exec = require('child_process').exec;
var fs = require("fs-extra");
var crypto = require('crypto');

router.post('/run/:language', function(req, res, next) {
    var content = req.body.content;

    var folder = "/tmp/" + crypto.randomBytes(16).toString('hex');
    fs.mkdirSync(`${folder}`);

    if (req.params.language == "php") {
        var inputFile = `${folder}/main.php`;
        fs.writeFileSync(inputFile, content);
        var command = `docker run --rm -v ${folder}:${folder} ntcd_php php ${inputFile} ${folder}/output`;
    } else if (req.params.language == "javascript") {
        var inputFile = `${folder}/main.js`;
        fs.writeFileSync(inputFile, content);
        var command = `docker run --rm -v ${folder}:${folder} ntcd_javascript node ${inputFile} ${folder}/output`;
    }

    if (command == null) {
        res.json({
            stdout: "",
            error: "language not support",
        });
    }

    exec(command,
        (error, exec_time, stderr) => {
            var stdout = fs.readFileSync(`${folder}/output`, 'utf8');
            res.json({
                stdout: stdout,
                error: stderr,
                time: exec_time
            });

            fs.remove(folder, (err) => {});
        });
});

module.exports = router;
