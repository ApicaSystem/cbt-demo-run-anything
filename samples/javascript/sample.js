var start = Date.now() / 1000;
var end = start + 1;
var test = {
 "returncode": 0,
 "stdout": "Javascript stdout",
 "stderr": "Javascript stderr",
 "start_time": start,
 "end_time": end,
 "message": "Command message from javascript",
 "unit": "ms",
 "value": "22"
}

console.log(JSON.stringify(test));

