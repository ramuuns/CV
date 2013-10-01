CV.dataSource = {
	models : ['person', 'section','skill','employer','education','project'],
	person : {
		name : 'Ramūns',
		surname : 'Usovs',
		byline : 'Web programmer',
		date_of_birth : '1984-01-15',
		email : 'ramuuns@enkurs.org',
		twitter: 'ramuuns',
		github : 'ramuuns',
		stackoverflow : '2952/ramuns-usovs',
		blog : 'http://ramuuns.id.lv/'
	},
	skills : [
		{
			'name':'Spoken languages',
			'list' : ['Latvian','English','Russian','Lithuanian','German','Swedish']
		},
		{
			'name':'JS Toolkits/frameworks',
			'list' : [
				{ 
					name : 'Ember.js',
					url : 'http://emberjs.com'
				},
				{
					name : 'jQuery',
					url : 'http://jquery.com'
				},
				{
					name : 'node.js',
					url : 'http://nodejs.org'
				},
				{
					name : 'mightyEngine',
					url : 'http://mightyfingers.com'
				},
				{
					name : 'phoneGap',
					url : 'http://phonegap.com/'
				},
				{
					name : 'CocoonJS',
					url : 'http://www.ludei.com/tech/cocoonjs'
				},
				{
					name : 'Socket.io',
					url : 'http://socket.io'
				},
				'plain old DOM'
			]
		},
		{
			'name':'Other web technologies',
			'list':[
				'CSS3',
				'HTML5',
				{ 
					name :'Twitter bootstrap',
					url : 'http://getbootstrap.com'
				},
				'canvas',
				'Google Analytics',
				'SEO',
				'E-commerce',
				'Temlating frameworks',
				'CMS development',
				'Responsive web'
			]
		},
		{
			'name': 'Programming Languages',
			'list' : [
				'JavaScript', 'PHP', 'Java', 'C#' , 'ObjectiveC', 'SQL'
			]
		},
		{
			'name' : 'Payment Gateways',
			'list': [ 
				'Paypal', 
				{ name : 'FirstData', url : 'http://firstdata.lv/eng/services/tirgot/ibis/'}, 
				{ name : 'Banklink' , url : 'https://www.swedbank.lv/en/pakalpojumi_uznemumiem/bank_link/'}, 
				{ name :'Mobi Solutions SMS' , url: 'http://www.mobisolutions.com/services/sms-gateway-in-the-baltics'} 
			]
		},
		{
			'name' : 'Recently used APIs',
			'list': [
				'Facebook API', 'Twitter API', 'OAuth',
				'Google maps API'
			]
		},
		{
			'name' : 'Database systems',
			'list' : ['MongoDB','PostgreSQL','MariaDB/Mysql','SQLite']
		},
		{
			'name': 'Version control software',
			'list': ['Git','Mercurial','SVN']
		},
		{
			'name' : 'Other areas',
			'list' : ['Windows Phone', 'Android', 'iOS']
		}
	],
	employers : [
		{
			'name' : 'SIA Advanced Script Development',
			'year' : '2011 - ',
			'position' : 'Owner/CEO/Programmer',
			'area' : 'Mobile application development',
			'url' : 'http://advanced-script-development.com'
		},
		{
			'name' : 'MightyFingers ltd.',
			'year' : '2011 - ',
			'position' : 'programmer',
			'area' : 'HTML5 gaming engine development',
			'url' : 'http://mightyfingers.com'
		},
		{
			'name' : 'Mediaparks',
			'year' : '2008 - 2011',
			'position' : 'Senior programmer/Systems architect',
			'area' : 'Internet solutions agency',
			'url' : 'http://mediaparks.com'
		},
		{
			'name' : 'LETA',
			'year' : '2006 - 2008',
			'position' : 'web programmer',
			'area' : 'Latvian national news agency',
			'url': 'http://www.leta.lv'
		},
		{
			'name' : 'SIA C4',
			'year' : '2005 - 2006',
			'position' : 'programmer',
			'area' : 'Internet solutions agency',
			'url' : 'http://www.c4.lv'
		}
	],
	educations : [
		{
			'name' : 'University Of Latvia',
			'year' : '2002 - 2006',
			'field' : 'Computer Science',
			'degree' : 'B.Sc.',
			'url' : 'http://www.lu.lv'
		}
	],
	projects : [
		{
			'name' : 'Chase.lv',
			'year' : '2013',
			'area' : 'Live driving game system',
			'url' : 'http://www.chase.lv',
			'description' : 'Coded everything - both the front-end and the back end. Implemented all kinds of game logic, information hiding from the participants, live tracking of the game for the GMs',
			'technologies' : ['Ember.js', 'PHP', 'socket.io', 'Twitter bootstrap', 'Elephant.io', 'SQLite']
		},
		{
			'name' : '[name witheld]',
			'year' : '2012 - 2013',
			'area' : 'Lumosity competitor',
			'url' : '#',
			'description' : 'Spent most of the last year working on this american-financed lumosity.com competitor. Created the back-end system, the games API, API for the mobile app, several of the games (the games are all HTML5). Facebook SSO, Paypal subsription payments. Various game analytics',
			'technologies' : ['PHP', 'MongoDB', 'jQuery', 'mightyEngine', 'Paypal']
		},
		{
			'name' : 'Netcreditgroup.eu',
			'year' : '2013',
			'area' : 'corporate website',
			'url' : 'http://www.netcreditgroup.eu/',
			'description' : 'Created a custom theme for this wordpress powered corporate website',
			'technologies' : ['PHP', 'jQuery', 'CSS3','wordpress']
		},
		{
			'name' : 'E-amf',
			'year' : '2010 - 2013',
			'area' : 'E-commerce',
			'url' : 'http://www.e-amf.lv',
			'description' : 'Created/modified/supported many parts of this e-commerce website. The latest task was to add an additional price in euros to be shown during the transition period of Latvia into the eurozone',
			'technologies' : ['PHP', 'MySQL', 'jQuery', 'CSS', 'Smarty','FirstData','Banklink']
		},
		{
			'name' : 'VNĪ',
			'year' : '2011 - 2013',
			'area' : 'goverment website',
			'url' : 'http://www.vni.lv',
			'description' : 'The website for the Latvian state real-estate agency. Includes a many complicated goverment scenarios for not only real estate advertisements, but also various other forms of goverment property that has to be sold or given to other branches of the goverment. ',
			'technologies' : ['PHP','MySQL','jQuery']
		},
		{
			'name' : 'BalticRain',
			'year' : '2011 - 2013',
			'area' : 'weather service',
			'url' : 'http://balticra.in',
			'description' : 'In response to the Latvian weather agency meteo.lv killing their free doppler radar service, I created this website that took the data from multiple baltic radar service websites and put in o a google map. Later I also created the mobile apps (Android, iOS and Windows phone) for this service',
			'technologies' : ['PHP', 'jQuery', 'Google Maps API','C#','Java','ObjectiveC','image-magick']
		},
		{
			'name' : 'MT Riga',
			'year' : '2012 - 2013',
			'area' : 'public transport',
			'url' : 'http://www.windowsphone.com/s?appid=a10b5a65-7139-48b7-923b-c1bde22060e4',
			'description' : "After getting tired of the laggyness of Android, I decided to get myself a windows phone. Then I discovered that a few of the apps that I needed, like the public transport app for Riga didn't exist for this platform. So I made one. The main challenges were reverse-engineering of the saraksti.rigassatiksme.lv API (no docummentation whatsover and just a minified piece of javascrpt that works with the data) and creating the back-end API server",
			'technologies' : ['JavaScript','PHP','C#','MySQL']
		},
		{
			'name' : 'i.enkurs.org',
			'year' : '2012 - 2013',
			'area' : 'Twitter image service',
			'url' : 'http://i.enkurs.org',
			'description' : "One day I decided that I don't want to use twitpic anymore. So I made myself a replacement that consists of a website + mobile app for posting images. I tend to experiment with various image presentation techniques here",
			'technologies' : ['PHP','JavaScript','Windows Phone', 'Twitter API', 'MongoDB','Smarty3']
		},
		{
			'name' : 'vote.balticprawards.com',
			'year' : '2011 - 2012',
			'area' : 'Voting/Judge system',
			'url' : 'http://vote.balticprawards.com',
			'description' : 'Created a system for judges to rate the works that are submitted to Baltic PR Awards. After the judges voting round the public voting (using tweets/likes/etc) begins. Implemented the back-end and the front-end for this system.',
			'technologies' : ['PHP','MySQL','Twitter API', 'Facebook API','Smarty3']
		},
		{
			'name' : 'Ministry of Finance',
			'year' : '2012',
			'area' : 'goverment website',
			'url' : 'http://www.fm.gov.lv',
			'description' : "Created large parts of this goverment website. Most of the work that I did was on the back-end and on the CMS side of things, though most of the logic for the public facing parts is also mine",
			'technologies' : ['PHP','MySQL','Smarty3','JavaScript']
		},
		{
			'name' : 'classads.lv',
			'year' : '2012',
			'url' : 'http://www.aprinkis.lv/sludinajumi',
			'area' : 'Classified advertisements',
			'description' : "A friend of mine asked me if we could come up with an embeddable classfied ads solution. I said I would think about it (after saying that he's nuts). So this is what I came up with. It can be embeded on any website with just two lines of javascript, and uses a bit of cross domain scripting magick to make sure that the iframe is seamless and that the urls change niceley",
			'technologies' : ['PHP','JavaScript','CSS','easyXDM']
		},
		{
			'name' : 'State fire and rescue department',
			'year' : '2011',
			'area' : 'goverment website',
			'url' : 'http://www.vugd.gov.lv',
			'description' : "This one actually consists of three interconnected websites - the public facing website, the intranet and the museum website. Same as with most goverment contracts, I did most of my programming on the php side of things, though I did do some of the more complex front-end form logick",
			'technologies' : ['PHP','MySQL','Smarty3','JavaScript']
		},
		{
			'name' : 'DK Furnitūra',
			'year' : '2011',
			'url' : 'http://www.dkveikals.lv',
			'area' : 'E-commerce',
			'description' : "An e-commerce website that has a few interesting design ideas. Did quite a bit of both front-end and back-end programming on this one. I'm quite proud of the product list implementation. The signup form is something only a clueless client can come up with though (but hey - if they pay - we code)",
			'technologies' : ['PHP','MySQL','JavaScript', 'Smarty3']
		}
	],
	sections : [
		{
			'id':'person',
			'view' : 'person',
			'title' : 'Personal Info'
		},
		{
			'id':'skills',
			'view' : 'skills',
			'title' : 'Skills'
		},
		{
			'id' : 'employers',
			'view' : 'employers',
			'title' : 'Employers'
		},
		{
			'id' : 'education',
			'view' : 'education',
			'title' : 'Education'
		},
		{
			'id' : 'projects',
			'view' : 'projects',
			'title' : 'Recent Projects'
		}
	]
};