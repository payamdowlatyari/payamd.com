if (data.variables.questions === undefined) {data.variables.questions = []; } data.variables.questions = <<STRIKES_ALL>>; for (let i = 0; i < data.variables.questions.length; i++){if (data.variables.questions[i] != data.variables.selectedQuestion){data.variables.questionsDisplay += data.variables.questions[i];}} 



    // data.variables.questions.selected = message.timestamp % data.variables.questions.data.length; 
    // if (data.variables.THANKS.selected === data.variables.THANKS.prior) { 
    //     data.variables.THANKS.selected = (data.variables.THANKS.selected + 1) % data.variables.THANKS.data.length; 
    // } 
    // data.variables.THANKS.useThisValue = data.variables.THANKS.data[data.variables.THANKS.selected]; 
    // data.variables.THANKS.prior = data.variables.THANKS.selected;