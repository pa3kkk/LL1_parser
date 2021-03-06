var array = {

	"url": {"http://": ["httpaddress"], 
			"ftp://": ["ftpaddress"],
			"telnet://": ["telnetaddress"],
			"mailto::": ["mailtoaddress"],
			"/": null,
			"?": null,
			"@": null,
			":": null,
			"+": null,
			".": null,
			"lett": null,
			"num": null,
			"$": null 
		},
	"httpaddress": {"http://": ["http://", "hostport", "A"], 
			"ftp://": null,
			"telnet://": null,
			"mailto::": null,
			"/": null,
			"?": null,
			"@": null,
			":": null,
			"+": null,
			".": null,
			"lett": null,
			"num": null,
			"$": null 
		},
	"A": {"http://": null, 
			"ftp://": null,
			"telnet://": null,
			"mailto::": null,
			"/": ["/", "path", "I"],
			"?": ["?", "search"],
			"@": null,
			":": null,
			"+": null,
			".": null,
			"lett": null,
			"num": null,
			"$": ["ε"] 
		},
	"I": {"http://": null, 
			"ftp://": null,
			"telnet://": null,
			"mailto::": null,
			"/": null,
			"?": ["?", "search"],
			"@": null,
			":": null,
			"+": null,
			".": null,
			"lett": null,
			"num": null,
			"$": ["ε"] 
		},
	"ftpaddress": {"http://": null, 
			"ftp://": ["ftp://", "login", "/", "path"],
			"telnet://": null,
			"mailto::": null,
			"/": null,
			"?": null,
			"@": null,
			":": null,
			"+": null,
			".": null,
			"lett": null,
			"num": null,
			"$": null 
		},
	"telnetaddress": {"http://": null, 
			"ftp://": null,
			"telnet://": ["telnet://", "login"],
			"mailto::": null,
			"/": null,
			"?": null,
			"@": null,
			":": null,
			"+": null,
			".": null,
			"lett": null,
			"num": null,
			"$": null 
		},
	"mailtoaddress": {"http://": null, 
			"ftp://": null,
			"telnet://": null,
			"mailto::": ["mailto::", "xalphas", "@", "hostname"],
			"/": null,
			"?": null,
			"@": null,
			":": null,
			"+": null,
			".": null,
			"lett": null,
			"num": null,
			"$": null 
		},
	"login": {"http://": null, 
			"ftp://": null,
			"telnet://": null,
			"mailto::": null,
			"/": null,
			"?": null,
			"@": null,
			":": null,
			"+": null,
			".": null,
			"lett": ["user", "B"],
			"num": ["user", "B"],
			"$": null 
		},
	"B": {"http://": null, 
			"ftp://": null,
			"telnet://": null,
			"mailto::": null,
			"/": null,
			"?": null,
			"@": ["@", "hostport"],
			":": [":", "password", "@", "hostport"],
			"+": null,
			".": null,
			"lett": null,
			"num": null,
			"$": null 
		},
	"hostport": {"http://": null, 
			"ftp://": null,
			"telnet://": null,
			"mailto::": null,
			"/": null,
			"?": null,
			"@": null,
			":": null,
			"+": null,
			".": null,
			"lett": ["hostname", "C"],
			"num": ["hostname", "C"],
			"$": null 
		},
	"C": {"http://": null, 
			"ftp://": null,
			"telnet://": null,
			"mailto::": null,
			"/": ["ε"],
			"?": ["ε"],
			"@": null,
			":": [":", "port"],
			"+": null,
			".": null,
			"lett": null,
			"num": null,
			"$": ["ε"] 
		},
	"hostname": {"http://": null, 
			"ftp://": null,
			"telnet://": null,
			"mailto::": null,
			"/": null,
			"?": null,
			"@": null,
			":": null,
			"+": null,
			".": null,
			"lett": ["xalphas", "D"],
			"num": ["xalphas", "D"],
			"$": null 
		},
	"D": {"http://": null, 
			"ftp://": null,
			"telnet://": null,
			"mailto::": null,
			"/": ["ε"],
			"?": ["ε"],
			"@": null,
			":": ["ε"],
			"+": null,
			".": [".", "hostname"],
			"lett": null,
			"num": null,
			"$": ["ε"] 
		},
	"port": {"http://": null, 
			"ftp://": null,
			"telnet://": null,
			"mailto::": null,
			"/": null,
			"?": null,
			"@": null,
			":": null,
			"+": null,
			".": null,
			"lett": null,
			"num": ["segment", "E"],
			"$": null 
		},
	"path": {"http://": null, 
			"ftp://": null,
			"telnet://": null,
			"mailto::": null,
			"/": ["segment", "E"],
			"?": ["segment", "E"],
			"@": null,
			":": null,
			"+": null,
			".": null,
			"lett": ["segment", "E"],
			"num": ["segment", "E"],
			"$": ["segment", "E"] 
		},
	"E": {"http://": null, 
			"ftp://": null,
			"telnet://": null,
			"mailto::": null,
			"/": ["/", "path"],
			"?": ["ε"],
			"@": null,
			":": null,
			"+": null,
			".": null,
			"lett": null,
			"num": null,
			"$": ["ε"] 
		},
	"search": {"http://": null, 
			"ftp://": null,
			"telnet://": null,
			"mailto::": null,
			"/": null,
			"?": null,
			"@": null,
			":": null,
			"+": null,
			".": null,
			"lett": ["xalphas", "F"],
			"num": ["xalphas", "F"],
			"$": null 
		},
	"F": {"http://": null, 
			"ftp://": null,
			"telnet://": null,
			"mailto::": null,
			"/": null,
			"?": null,
			"@": null,
			":": null,
			"+": ["+", "search"],
			".": null,
			"lett": null,
			"num": null,
			"$": ["ε"] 
		},
	"user": {"http://": null, 
			"ftp://": null,
			"telnet://": null,
			"mailto::": null,
			"/": null,
			"?": null,
			"@": null,
			":": null,
			"+": null,
			".": null,
			"lett": ["xalphas"],
			"num": ["xalphas"],
			"$": null 
		},
	"password": {"http://": null, 
			"ftp://": null,
			"telnet://": null,
			"mailto::": null,
			"/": null,
			"?": null,
			"@": null,
			":": null,
			"+": null,
			".": null,
			"lett": ["xalphas"],
			"num": ["xalphas"],
			"$": null 
		},
	"segment": {"http://": null, 
			"ftp://": null,
			"telnet://": null,
			"mailto::": null,
			"/": ["ε"],
			"?": ["ε"],
			"@": null,
			":": null,
			"+": null,
			".": null,
			"lett": ["xalpha", "segment"],
			"num": ["xalpha", "segment"],
			"$": ["ε"] 
		},
	"xalphas": {"http://": null, 
			"ftp://": null,
			"telnet://": null,
			"mailto::": null,
			"/": null,
			"?": null,
			"@": null,
			":": null,
			"+": null,
			".": null,
			"lett": ["xalpha", "G"],
			"num": ["xalpha", "G"],
			"$": null 
		},
	"G": {"http://": null, 
			"ftp://": null,
			"telnet://": null,
			"mailto::": null,
			"/": ["ε"],
			"?": ["ε"],
			"@": ["ε"],
			":": ["ε"],
			"+": ["ε"],
			".": ["ε"],
			"lett": ["xalphas"],
			"num": ["xalphas"],
			"$": ["ε"] 
		},
	"xalpha": {"http://": null, 
			"ftp://": null,
			"telnet://": null,
			"mailto::": null,
			"/": null,
			"?": null,
			"@": null,
			":": null,
			"+": null,
			".": null,
			"lett": ["alpha"],
			"num": ["digit"],
			"$": null 
		},
	"digits": {"http://": null, 
			"ftp://": null,
			"telnet://": null,
			"mailto::": null,
			"/": null,
			"?": null,
			"@": null,
			":": null,
			"+": null,
			".": null,
			"lett": null,
			"num": ["digit", "H"],
			"$": null 
		},
	"H": {"http://": null, 
			"ftp://": null,
			"telnet://": null,
			"mailto::": null,
			"/": ["ε"],
			"?": ["ε"],
			"@": null,
			":": null,
			"+": null,
			".": null,
			"lett": null,
			"num": ["digits"],
			"$": ["ε"] 
		},
	"alpha": {"http://": null, 
			"ftp://": null,
			"telnet://": null,
			"mailto::": null,
			"/": null,
			"?": null,
			"@": null,
			":": null,
			"+": null,
			".": null,
			"lett": ["lett"],
			"num": null,
			"$": null 
		},
	"digit": {"http://": null, 
			"ftp://": null,
			"telnet://": null,
			"mailto::": null,
			"/": null,
			"?": null,
			"@": null,
			":": null,
			"+": null,
			".": null,
			"lett": null,
			"num": ["num"],
			"$": null 
		},
	"http://": {"http://": ["POP"], 
			"ftp://": null,
			"telnet://": null,
			"mailto::": null,
			"/": null,
			"?": null,
			"@": null,
			":": null,
			"+": null,
			".": null,
			"lett": null,
			"num": null,
			"$": null 
		},
	"ftp://": {"http://": null, 
			"ftp://": ["POP"],
			"telnet://": null,
			"mailto::": null,
			"/": null,
			"?": null,
			"@": null,
			":": null,
			"+": null,
			".": null,
			"lett": null,
			"num": null,
			"$": null 
		},
	"telnet://": {"http://": null, 
			"ftp://": null,
			"telnet://": ["POP"],
			"mailto::": null,
			"/": null,
			"?": null,
			"@": null,
			":": null,
			"+": null,
			".": null,
			"lett": null,
			"num": null,
			"$": null 
		},
	"mailto::": {"http://": null, 
			"ftp://": null,
			"telnet://": null,
			"mailto::": ["POP"],
			"/": null,
			"?": null,
			"@": null,
			":": null,
			"+": null,
			".": null,
			"lett": null,
			"num": null,
			"$": null 
		},
	"/": {"http://": null, 
			"ftp://": null,
			"telnet://": null,
			"mailto::": null,
			"/": ["POP"],
			"?": null,
			"@": null,
			":": null,
			"+": null,
			".": null,
			"lett": null,
			"num": null,
			"$": null 
		},
	"?": {"http://": null, 
			"ftp://": null,
			"telnet://": null,
			"mailto::": null,
			"/": null,
			"?": ["POP"],
			"@": null,
			":": null,
			"+": null,
			".": null,
			"lett": null,
			"num": null,
			"$": null 
		},
	"@": {"http://": null, 
			"ftp://": null,
			"telnet://": null,
			"mailto::": null,
			"/": null,
			"?": null,
			"@": ["POP"],
			":": null,
			"+": null,
			".": null,
			"lett": null,
			"num": null,
			"$": null 
		},
	":": {"http://": null, 
			"ftp://": null,
			"telnet://": null,
			"mailto::": null,
			"/": null,
			"?": null,
			"@": null,
			":": ["POP"],
			"+": null,
			".": null,
			"lett": null,
			"num": null,
			"$": null 
		},
	"+": {"http://": null, 
			"ftp://": null,
			"telnet://": null,
			"mailto::": null,
			"/": null,
			"?": null,
			"@": null,
			":": null,
			"+": ["POP"],
			".": null,
			"lett": null,
			"num": null,
			"$": null 
		},
	".": {"http://": null, 
			"ftp://": null,
			"telnet://": null,
			"mailto::": null,
			"/": null,
			"?": null,
			"@": null,
			":": null,
			"+": null,
			".": ["POP"],
			"lett": null,
			"num": null,
			"$": null 
		},
	"lett": {"http://": null, 
			"ftp://": null,
			"telnet://": null,
			"mailto::": null,
			"/": null,
			"?": null,
			"@": null,
			":": null,
			"+": null,
			".": null,
			"lett": ["POP"],
			"num": null,
			"$": null 
		},
	"num": {"http://": null, 
			"ftp://": null,
			"telnet://": null,
			"mailto::": null,
			"/": null,
			"?": null,
			"@": null,
			":": null,
			"+": null,
			".": null,
			"lett": null,
			"num": ["POP"],
			"$": null 
		},
	"$": {"http://": null, 
			"ftp://": null,
			"telnet://": null,
			"mailto::": null,
			"/": null,
			"?": null,
			"@": null,
			":": null,
			"+": null,
			".": null,
			"lett": null,
			"num": null,
			"$": ["ACCEPT"] 
		},
};