require("./init.js");

// test code
FindHaiku()

stream.on("follow", OnFollowed);

function Tweet (status)
{
    var tweet = GenerateTweet(status);
    console.log(tweet);
    twitter.post("statuses/update", tweet, OnTweetComplete);
}

function OnGetRecieved (err, data, response)
{
    console.log(data);
}

function OnTweetComplete(error, data, response)
{
    if ( error != null )
    {
        console.log("Something went wrong "+error);
    }
    else
    {
        console.log("Successful tweet "+response);
    }
}

function OnFollowed (event)
{
    console.log("Event "+event);
    var name = event.source.name;
    console.log("Name: "+name);
    var tagName = event.source.screen_name;

    tagName = "@"+tagName;

    Tweet(at+" is 'n poes");

    // find haiku
    var haiku = FindHaiku();

    // replace random noun with name

}

function GenerateTweet (text)
{
    var tweet = null;
    if ( text == null)
    {
        tweet =
        {
            status : "The developer is 'n poes"
        }
    }
    else
    {
        tweet =
        {
            status: text
        }
    }
    return tweet;
}

function FindHaiku ()
{
    var path = './python/haiku/haiku_controller.py';
    var test = 'As the wind does blow Across the trees, I see the Buds blooming in May';
    var command = 'python ' + path;
    var concat = command + " '" + test + "'";
    //runcommand(concat, haiku_result);
    run_python_command(path, test, haiku_result_callback);
    //run_python_command_callback(path, test, haiku_result)
}

function runcommand(command, callback)
{
    var result = exec(command, callback);
}

function run_python_command(path, argument, callback)
{
    const python_process = spawn('python', [path, arguments]);
    python_process.stdout.on('data',  haiku_result_callback);
}

function run_python_command_callback(path, argument, callback)
{
    execFile(path, [argument], callback);
}

function haiku_result(data)
{
    console.log(data);
}

function haiku_result_callback(error, stdout, stderr) {
    console.log(stdout);
}