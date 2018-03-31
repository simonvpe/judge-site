var problem = function(problemId, fnName, code) {
    var editor = ace.edit("editor_" + problemId);
    editor.setTheme("ace/theme/monokai");
    editor.session.setMode("ace/mode/c_cpp");
    editor.setValue(code);
	
    var client = new $.RestClient('http://localhost:8080/simonvpe/dmoj/1.0.0/');
    client.add('submission', { stripTrailingSlash: true, stringifyData: true  });

    var wrap = function(code, fnName) {
        var row = function(line) { return line + '\n' }
        return row('#include <iostream>') +
               row('#include <string>') +
	       code +
               row('int main() {') +
               row('  auto test_in = std::string{};') +
               row('  std::cin >> test_in;') +
               row('  std::cout << ' + fnName + '(test_in);') +
               row('  return 0;') +
               row('}');
    }

    return function() {
        console.log("value="+editor.getSession().getValue());
        var code = wrap(editor.getValue(), fnName);
        console.log("code="+code)
        var payload = {
            "languageId": "CPP17",
            "problemId": problemId,
            "memoryLimit": 1000000,
            "sourceCode": btoa(code),
            "timeLimit": 100
        };
        console.log(payload);
        client.submission.create(payload).done(function(data) {
	    if( $.inArray('AC', data.testCaseStatus) != -1) {
		$('#' + problemId + '_button').html('Run &#x2713;')
		$('#error_' + problemId).html('Good job!')
	    } else {
		if( $.inArray('WA', data.testCaseStatus) != -1) {
		    $('#error_' + problemId).html('Wrong answer!')
		} else if(data.compileError.length > 0) {
		    $('#error_' + problemId).html(data.compileError[0])
		}
	    }
        });
    };
}
