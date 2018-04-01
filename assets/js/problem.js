var problem = function(problemId, fnName, code) {
    var editor = ace.edit("editor_" + problemId);
    editor.setTheme("ace/theme/monokai");
    editor.session.setMode("ace/mode/c_cpp");
    editor.setValue(code);
	
    var client = new $.RestClient('http://localhost:8080/simonvpe/dmoj/1.0.0/');
    client.add('submission', { stripTrailingSlash: true, stringifyData: true  });
    
    return function() {
        var payload = {
            "languageId": "CPP17",
            "problemId": problemId,
            "memoryLimit": 1000000,
            "sourceCode": btoa(editor.getValue()),
            "timeLimit": 100
        };
        console.log(payload);
        client.submission.create(payload).done(function(data) {
	    
	    if(data.compileError.length > 0) {
		$('#error_' + problemId).html(data.compileError[0])
		$('#error_' + problemId).addClass('compilerError')
	    } else {
		$('#error_' + problemId).removeClass('compilerError')
	    }
	    
	    if( $.inArray('AC', data.testCaseStatus) != -1) {
		$('#' + problemId + '_button').html('Run &#x2713;')
		$('#error_' + problemId).addClass('correctAnswer')
		$('#error_' + problemId).html('Good job!')
	    } else {
		$('#error_' + problemId).removeClass('correctAnswer')
	    }
	    
            if( $.inArray('WA', data.testCaseStatus) != -1) {
                $('#error_' + problemId).html('Wrong answer!')
		$('#error_' + problemId).addClass('wrongAnswer')		
            } else {
		$('#error_' + problemId).removeClass('wrongAnswer')		
	    }
        });
    };
}
