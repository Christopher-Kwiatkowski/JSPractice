let myTodos = {
    day: 'Monday',
    meetings: 0,
    meetDone: 0,

    addMeeting: function(num){
        this.meetings = this.meetings + num
        
    },
    addMeetingDone: function(numDone){
        this.meetDone = numDone - this.meetDone 
        
    },
    resetDay = function(){
        this.meetings = 0
        this.meetDone = 0
    },    
    summary: function(){
        return `You have ${this.meetings} meetings today` + `You have completed ${this.meetDone} meetings today`
    }
}



myTodos.addMeeting(4)
myTodos.addMeetingDone(2)
console.log(myTodos.summary());



