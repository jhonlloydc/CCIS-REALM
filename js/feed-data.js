


var datas = [

	{'title':'Game Update',
	 'content':'Mechanics for this game can be found here',
	 'date':'December 10, 2021'
	},

	{'title':'Announcement',
	 'content':'This is a long content',
	 'date':'December 10, 2021'
	},

	{'title':'Announcement',
	 'content':'This is a long content',
	 'date':'December 10, 2021'
	},

	{'title':'Announcement',
	 'content':'This is a long content',
	 'date':'December 10, 2021'
	},

	{'title':'Announcement',
	 'content':'This is a long content',
	 'date':'December 10, 2021'
	},

	{'title':'Announcement',
	 'content':'This is a long content',
	 'date':'December 10, 2021'
	},

	{'title':'Announcement',
	 'content':'This is a long content',
	 'date':'December 10, 2021'
	},

	{'title':'Announcement',
	 'content':'This is a long content',
	 'date':'December 10, 2021'
	},

	{'title':'Game Mechanics',
	 'content':'The game mechanics can be found here <a href="index.php?page=game">View</a>',
	 'date':'December 10, 2021'
	}

];



for(data in datas){
	$('.feed').prepend(
		"<div class='feed-box'>"+
			"<div class='f-header'>"+
				"<label class='h-title'>"+datas[data].title+"</label>"+
				"<label class='h-date'>"+datas[data].date+"</label>"+
			"</div>"+
			"<p class='post'>"+datas[data].content+"</p>"+
		"</div>"
	);
}

