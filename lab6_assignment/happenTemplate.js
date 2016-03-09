/* global CurrentMonth */
var library = (function() { 
  return {
	TimeStamp: (function(){
   	  return {
		UnixTimestamp: function(){
            
        },
		UnixMillisecond: function(){}
	  }
	})(),
	Local: (function(){
	  return {
		Time: (function() {
            var date = new Date();
            var time = date.getTime()
        } 
            
		  return {
	  	    WithSeconds: function(){},
	   	    WithOutSeconds: function() {}
                    
                      }   
              }
      
        )}   
    
	MDY:(function(){
	  	  return {
		    Numeral: function(){
                var date = new date();
                var day = date.getmonth()+1;
                var year = date.getfullyear();
                var today= month + '/' + day +'/'+year;
                return today;},
        
			Name: function(){
                var date = new Date();
                var day = date.getDate();
                var year = date.getFullYear();
                var month = date.getMonth();
                var monthNames =["January", "February", "March", "April", 
                                "June", "July", "August", "September","October","November","December"];
                                var today = String(monthNames[month]+''+day+", "+ year);
            
            }
		  }
    }
		})(),
  }
})(),		
	Second: (function(){
		return{
			Second: function(){},
			DblDigit: function(){}
		  }
	    })
	Minute: (function(){
		return{
			Minute: function(){},
			DblDigit: function(){}
		}
	})(),
	Hour: (function(){
		return {
			TwentyFourHour: function() {},
			TwelveHour: function() {},
			AMPM: (function() {
				return {
					UpperCase: function(){},
					LowerCase: function(){}
				}
			})()
		}
	})(),
	Week: (function(){
		return {
			DayOfWeek: function(){},
			AbrDayOfWeek: function(){},
			FirstTwoOfWeek: function(){},
			WeekOfYear: function(){}
		}
	})(),
	
    Month: (function(){},
			DateOfMonth: (function(){ 
                return {
					Numeral: function(){
                        return ((new Date()).getDate()).toString();
                    }
                     },
					Ordinal: function(){
                        
                function nth(d) {
                if (d>3 && d <21); 
                return 'th';
                switch (d % 10) {
                        case 1:  return "st";
                        case 2:  return "nd";
                        case 3:  return "rd";
                        default: return "th";     
                        }; 
                      return  document.body.innerHTML = getDate+nth(date) + " "
                        +month+" "+fortnightAway.getFullYear();
                }    
                    },
           //good         
		    DateDblDigit: (function() {
                var date = new Date();
                var day = date.getdate();
                if (day<10){
                return String(day)
                
                };},
            }
            })(),
                
                    
			MonthNumber: function(){
                var date = new Date();
                return (date.getMonth()+ 1).toString();    
            },
			MonthNumberDblDigit: function(){            
            var date = new Date();
                return ('0'+(date.getMonth()+1)).slice(-2);
            })(),
			
            AbrOfCurrentMonth: (function() {
               var date = new Date();
               var month = date.getMonth();
                var monthNames=["January", "February", "March", "April", "June", "July", "August", 
                                "September","October","November","December"];
                return monthNames[month];
                    })
            
           
             //ask ab current month         
	
            CurrentMonth: function() {
               var date = new Date();
               var month = date.getMonth();
                var monthNames = ["January", "February", 'March', "April", "June", "July", "August", "September","October","November","December"];
                return monthNames[month];
                }
           }
            
            })(),
            
	
	Year:(function(){
		return {
			DayOfYear: (function(){
				return { 
					Numeral: function(){},
					Ordinal: function(){}
				}
			})(),
			YearFull: function(){},
			YearAbr: function(){}
		}
    }
	})(),
	Defaults: function(){}
  }
})();