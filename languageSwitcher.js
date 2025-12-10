function switchLanguage(lang) {
	localStorage.setItem("preferredLanguage", lang);
  
	document.querySelectorAll("[data-translate]").forEach(el => {
	  const key = el.getAttribute("data-translate");
	  if (translations[lang] && translations[lang][key] !== undefined) {
		const translationEntry = translations[lang][key];
  
		if (el.tagName.toLowerCase() === 'a' && typeof translationEntry === 'object' && translationEntry.url && translationEntry.text) {
		  el.href = translationEntry.url; 
		  el.textContent = translationEntry.text; 
		} else if (el.type === 'submit') {
		  el.value = translationEntry;
		} else if (typeof translationEntry === 'string') {
		  el.textContent = translationEntry;
		}
	  } 
	});
  
	document.querySelectorAll("iframe[data-translate]").forEach(iframe => {
	  const key = iframe.getAttribute("data-translate");
	  if (translations[lang] && translations[lang][key] !== undefined) {
		const videoURL = translations[lang][key];
		iframe.src = videoURL;
	  } 
	});
  
	document.querySelector('html').lang = lang; 
  }
  
  function applyPreferredLanguage() {
	const preferredLanguage = localStorage.getItem("preferredLanguage") || 'bg';
	switchLanguage(preferredLanguage);
  }
  
  document.addEventListener("DOMContentLoaded", applyPreferredLanguage);
	





const translations = {
  en: {
	  // footer i nav bar// 
	"footer_words": "This site was created for educational purposes.",
	"follow_us":"Follow us",
	"site_map": "Site Map",
    "title_home": "Home",
    "solar_system": "Solar System",
    "planets": "Planets",
    "moons": "Moons",
    "sun": "Sun",
    "mercury": "Mercury",
    "venus": "Venus",
    "earth": "Earth",
    "mars": "Mars",
    "jupiter": "Jupiter",
    "saturn": "Saturn",
    "uranus": "Uranus",
    "neptune": "Neptune",
    "about_us": "About us",
    "lang": "Language",
	
	
	//videa//
	"sun_video":"https://www.youtube.com/embed/GUWCHR-IQms?si=N3MVj-Y66qtIzIat",
	"mercury_video":"https://www.youtube.com/embed/nFm-Qi-wSLw?si=DtIABGtua8VnlFrx",
	"venus_video":"https://www.youtube.com/embed/XsX1BCcjhsc?si=Hm9rKd7nmosVNnzv",
	"earth_video":"https://www.youtube.com/embed/LH5HtmDWlpg?si=q372RMhaEa24DtBh",
	"mars_video": "https://www.youtube.com/embed/3exquBW9q4s?si=8djstvHb5ck2N6D6",
	"jupiter_video": "https://www.youtube.com/embed/3FuVB2RbMXI?si=d3DRfV56sTimTFdm",
	"saturn_video":"https://www.youtube.com/embed/FI9VaaaN8Ls?si=6Zf09aP6VxP8HP1C",
	"uranus_video":"https://www.youtube.com/embed/fMyAl8AV61M?si=LyB_D0idWqdQPcmx",
	"neptune_video":"https://www.youtube.com/embed/ck9Q8hvSMjU?si=DQ2N0WX6LD_6vZiU",

	
	// index//
	"solar_system_description1":"Our solar system has eight planets, and five dwarf planets - all located inan outer spiral arm of the Milky Way galaxy called the Orion Arm, or Orion Spur. It can be divided into three regions: the inner solar system, the outer solar system, the Kuiper Belt, and the Oort Cloud.",
	"solar_system_description2":"The inner Solar System encompasses the Sun and the inner planets: Mercury, Venus, Earth, and Mars. These planets are relatively close to the Sun and are known as rocky or terrestrial planets because they have a solid surface. The inner Solar System also includes the asteroid belt, located between the orbits of Mars and Jupiter, containing numerous small bodies of rocky composition.",
	"solar_system_description3":"The outer planets are Jupiter, Saturn, Uranus and Neptune. These planets are significantly larger than the terrestrial planets and have a mainly gaseous and icy composition. The outer solar system also includes numerous moons that orbit the gas and ice giants, as well as small bodies such as comets and asteroids.",
	"solar_system_description4":"Beyond Neptune, a newer class of smaller celestial bodies reigns, called dwarf planets, including the long-beloved Pluto. NASA's New Horizons spacecraft visited Pluto in 2015 and is currently exploring the Kuiper Belt beyond Pluto. The other dwarf planets are Ceres, Makemake, Haumea, and Eris.",
	"quiz": {
		url: "https://take.quiz-maker.com/QWZM906OK",
		text: "Test your knowledge!"
	  },

	//ABOUT US//
	"bio_1": "Hello! My name is Viktor and I am the co-founder of the website. I am a student at Vocational School of Economics \"Ivan Iliev\", where I study \"Economic Informatics\". The motives for choosing this theme are precisely the interest we both share towards space, and our desire to intrigue more people by acquainting them with its mysteries.",
	"bio_2": "Greetings! I am Deyan, the other co-founder of this website. I am a student at Language High School \"Acad. Lyudmil Stoyanov\", where I study French and English languages. Since the 10th grade, I have the opportunity to specialize in information technologies.",
	"Viktor_name": "Viktor Angelov",
	"Deyan_name": "Deyan Petelov",
	"contact_us": "Contact us!",
	"any_questions": "We will be happy to answer your questions.",
	"put_your_name": "Your name:",
	"your_email":"Your e-mail:",
	"your_msg":"Your message",
	"submit_": "Submit",
	
	
	//MERCURY
	"mercury1": "The planet is named after Mercury, the messenger of the Roman gods, due to its rapid orbit around the Sun - 88 days. One Mercurian day - the time it takes for one complete rotation around its own axis - lasts 59 Earth days",
	"mercury2":"Despite its proximity to the Sun, Mercury is not the hottest planet because its thin atmosphere cannot retain heat. Mercury's temperatures can vary drastically, reaching very high values during the day and dropping to extremely low values at night.",
	"mercury3":"It is the smallest planet in the Solar System, and it is also one of the four terrestrial planets.",
	"mercury4":"Mercury has a large iron core that makes up about 42% of its volume. Scientists believe that this may be due to a giant impact early in the planet's history that stripped away much of its original mantle and crust.",
	"mercury5":"Mercury has been studied by several spacecrafts, including \"Mariner 10\" and \"MESSENGER\". These missions have provided valuable data about the planet, including evidence of the presence of water in ice form, despite the high temperatures.",
	
	
	//VENUS// 
	"venus1":"Venus is the hottest planet in the Solar System, with surface temperatures reaching up to about 465°C (869°F). This is a result of the extreme greenhouse effect caused by its dense atmosphere, rich in carbon dioxide.",
	"venus2":"A day on Venus is longer than a Venusian year. It rotates around its axis for about 243 Earth days, while it orbits the Sun for about 225 Earth days",
	"venus3":"Venus rotates in the opposite direction compared to most planets, including Earth. This means that if you could stand on its surface, the Sun would rise in the west and set in the east.",
	"venus4":"The planet is the third brightest object in the sky after the Sun and the Moon, visible to the naked eye and often called the \"morning star\" or \"evening star\", depending on when it appears.",
	"venus5":"Venus has some of the highest mountains in the Solar System and is considered to have a geologically young and active surface, with many volcanoes. Studies suggest that volcanic activity continues to this day.",
	
	
	//EARTH//
	"earth1":"The Earth's surface is covered in water by about 71%, making it the only planet in the Solar System with liquid water on its surface. The majority of this water is found in the oceans, which accounts for around 97% of the planet's water. Freshwater represents about 3% of the total amount of water on Earth, and of these 3%, about 69% are in the form of ice in glaciers and polar ice caps.",
	"earth2":"Earth has a complex atmosphere, primarily composed of nitrogen (78%) and oxygen (21%), with small amounts of water vapor, carbon dioxide, and other gases. This mixture sustains life by providing oxygen for breathing and protecting against harmful solar radiation.",
	"earth3":"The Earth has a circumference around its equator of approximately 40,075 km. Although it is often described as a sphere, Earth is actually an oblate spheroid, being slightly flattened at the poles and bulging at the equator due to its rotation.",
	"earth4":"At the peaks of some of the highest mountains, such as Everest, water can boil at a temperature of about 68°C (154°F) due to the reduced atmospheric pressure.",
	"earth5":"Earth is the only known planet with active plate tectonics. The plates of the Earth's crust move, leading to earthquakes, volcanic activity, and the formation of mountains. This process is key to recycling surface materials and sustaining life on the planet.",
	
	
	
	//MARS//
	"mars1":"Mars is also known as \"The Red Planet\" due to its red color, which is the result of large amounts of iron oxide (rust) on its surface. This gives the planet its characteristic red hue, which can be seen even with the naked eye from Earth.",
	"mars2":"Although the surface of Mars appears dry and lifeless, research shows that there are extensive deposits of water ice beneath it. This discovery increases the possibility of life in the past and supports hopes for future human missions that could use this ice as a resource.",
	"mars3":"Mars is home to the tallest volcano in the Solar System - Olympus Mons. The volcano is about 22 km high, which is nearly three times higher than Everest.",
	"mars4":"Mars has two small moons, Phobos and Deimos. It is believed that they are captured asteroids from the asteroid belt between Mars and Jupiter. Phobos is gradually approaching Mars and is expected to one day collide with the planet or be torn apart by gravitational forces, forming a ring around Mars.",
	"mars5":"Similar to Earth, Mars also has seasons, due to the tilt of its axis. However, since a year on Mars lasts almost twice as long as a year on Earth, the seasons are correspondingly longer.",


	
	//JUPITER//
	"jupiter1":"Jupiter is a gas giant and is the largest planet in the Solar System, so large that all the other planets in the Solar System could fit inside it. It has a diameter of about 142,984 km and a volume that is approximately 1.49 times greater than the combined volumes of all the other planets together.",
	"jupiter2":"Jupiter serves as a powerful gravitational shield for Earth, deflecting or absorbing asteroids and comets that could pose a threat. With its massive mass, it alters the trajectories of space objects and stabilizes the asteroid belt, preventing many potential collisions with our planet.",
	"jupiter3":"Jupiter has 79 known moons, with four of them, known as the Galilean moons (Io, Europa, Ganymede, and Callisto), discovered by Galileo Galilei in 1610. Ganymede, the largest moon in the Solar System, belongs to Jupiter. It is believed that beneath Europa's icy surface lies a vast ocean of liquid water, which increases the likelihood of life.",
	"jupiter4":"Jupiter's magnetic field is the largest and most powerful planetary magnetic field in the Solar System, extending millions of kilometers into space - far beyond the planet itself. It protects many of Jupiter's moons from cosmic radiation.",
	"jupiter5":"Jupiter has the shortest day of all the planets in the Solar System. A day on Jupiter lasts about 10 hours, as it rotates very quickly on its axis.",
	
	
	
	//SATURN//
	"saturn1":"The most famous feature of Saturn are its rings. They are primarily made up of icy particles of varying sizes – from microscopic grains to huge chunks that orbit around the planet. The rings can reach up to 282,000 km in width, but are surprisingly thin – in some parts, they are only about 10 meters thick.",
	"saturn2":"Despite its enormous size, the gas giant Saturn is the planet with the lowest density in the Solar System. It is light enough that if you could place Saturn in a vast ocean, it would float. Saturn's density is less than that of water.",
	"saturn3":"Like Earth, Saturn experiences seasons due to the tilt of its axis. However, since a year on Saturn lasts about 29.5 Earth years, each season lasts about 7 Earth years.",
	"saturn4":"Saturn has an impressive number of moons, with more than 80 confirmed moons, making it the planet with the most moons in the Solar System at the moment. The largest moon, Titan, surpasses even the planet Mercury in size and possesses a dense atmosphere.",
	"saturn5":"The north pole of Saturn displays a unique hexagonal pattern, which is not observed on other planets. This hexagonal vortex is stable and persists over time, making it a unique atmospheric phenomenon.",





	//URANUS//
	"uranus1":"One of the most unusual characteristics of Uranus is its extreme axial tilt of about 98 degrees. This means that the planet rotates \"on its side\" relative to its orbit around the Sun, leading to extreme seasonal changes and day and night cycles that last about 42 Earth years each. A full orbit around the sun takes about 84 Earth years.",
	"uranus2":"Uranus is classified as an ice giant due to its relatively small rocky core and a mantle rich in water, which contains ammonia and methane, combined with high pressure that turns water into \"hot ice.\"",
	"uranus3":"Uranus was discovered in 1781 by William Herschel, making it the first planet discovered with a telescope. This discovery doubled the known size of the Solar System at that time.",
	"uranus4":"Uranus is often considered to have the coldest atmosphere in the Solar System, with minimum cloud-top temperatures around -224°C (-371°F). This makes it one of the coldest places in the Solar System.",
	"uranus5":"The atmosphere of Uranus gives it a characteristic blue-green color, which is due to the presence of methane. Methane absorbs red light and reflects blue-green, which gives Uranus its color.",
	
	
	
	//NEPTUNE// 
	"neptune1":"Neptune is the first planet whose existence was mathematically predicted before it was observed through a telescope. Its discovery in 1846 was the result of calculations by Urbain Le Verrier and John Couch Adams, who noticed unexplained deviations in the orbit of Uranus, which could only be explained by the presence of another unknown planet.",
	"neptune2":"Neptune has 14 known moons, with the largest of them, Triton, being interesting for its retrograde orbit, meaning it moves in the opposite direction to Neptune's rotation. It is believed that Triton was captured by Neptune's gravity and was not formed in close proximity to the planet.",
	"neptune3":"Due to its great distance from the Sun and its slow orbital motion, one year on Neptune (a complete orbit around the Sun) is approximately 165 Earth years, leading to very long seasons.",
	"neptune4":"Neptune is one of the coldest planets in the Solar System, with cloud-top temperatures reaching about -218°C (-360°F), making it an extremely cold place, although Uranus can sometimes have even lower temperatures in its atmosphere.",
	"neptune5":"Neptune has the strongest winds in the Solar System, with speeds that can reach up to 2,100 km/h (more than 1,300 miles per hour). These winds are particularly impressive, considering that Neptune receives only a small fraction of the sunlight compared to other planets.",
	
	
	
	//SUN//
	"sun1":"The Sun is classified as a G2V type star, meaning it is a yellow dwarf with a surface temperature of about 5,500°C (9,932°F).",
	"sun2":"The Sun accounts for about 99.86% of the mass of the Solar System, making it approximately 713 times heavier than the total mass of everything else combined and 330,000 times more massive than Earth.",
	"sun3":"Every billion years, its luminosity increases by about 10%, leading to changes in Earth's climate over geological time.",
	"sun4":"Although it appears stationary from Earth's perspective, the Sun actually orbits around the center of the Milky Way at a great speed, completing one full orbit every 225-250 million years.",
	"sun5":"In the Sun's core, nuclear fusion occurs, where hydrogen atoms merge to form helium, releasing a vast amount of energy in the process. This energy is the source of sunlight and heat.",
  
},
  bg: {
	  	  // footer i nav bar// 

	"footer_words": "Този сайт е създаден с учебна цел.",
	"follow_us": "Последвайте ни",
	"site_map": "Карта на сайт",
    "title_home": "Начало",
    "solar_system": "Слънчева система",
    "planets": "Планети",
    "moons": "Луни",
    "sun": "Слънце",
    "mercury": "Меркурий",
    "venus": "Венера",
    "earth": "Земя",
    "mars": "Марс",
    "jupiter": "Юпитер",
    "saturn": "Сатурн",
    "uranus": "Уран",
    "neptune": "Нептун",
    "about_us": "За нас",
    "lang": "Език",
		

	//videa//
	"sun_video":"https://www.youtube.com/embed/ah14yGyW-iw?si=DlBMFdHlwcEMBd6j",
	"mercury_video":"https://www.youtube.com/embed/9EJGh0V4FF0?si=Z5HcrOlzm1mpyzB1",
	"venus_video":"https://www.youtube.com/embed/m31FeYAnxrU?si=cXz75hr_ZHa6vBKW",
	"earth_video":"https://www.youtube.com/embed/PkIlgD8_JgY?si=ti0m90TvB25QPPdC",
	"mars_video": "https://www.youtube.com/embed/TA1_bra1iog?si=SymOgpS8cpX2nAu9",
	"jupiter_video": "https://www.youtube.com/embed/rFBa2mNJqF8?si=4I4cBBItjn3Rp69B",
	"saturn_video":"https://www.youtube.com/embed/5gcFYjaMGFM?si=9v2KCX4iDxNVL98J",
	"uranus_video":"https://www.youtube.com/embed/TkpPVgjFJkU?si=BnmuWcfybLOaTsFI",
	"neptune_video":"https://www.youtube.com/embed/V8r8ofqhPoA?si=Pxch77N_yn3qM2ub",

	
		
		// index//
	"solar_system_description1":"Нашата слънчева система има осем планети и пет планети джуджета - всички разположени във външния спирален ръкав на галактиката Млечен път, наречен ръкав на Орион или Орионска шпора. Тя може да бъде разделена на три региона: вътрешната слънчева система, външната слънчева система, поясът на Кайпер и облакът на Оорт",
	"solar_system_description2":"Вътрешната Слънчева система обхваща Слънцето и вътрешните планети: Меркурий, Венера, Земята и Марс. Тези планети са относително близо до Слънцето и са известни като скалисти или терестриални планети, тъй като имат твърда повърхност. Вътрешната Слънчева система също така включва астероидния пояс, който се намира между орбитите на Марс и Юпитер и съдържа множество малки тела от скална съставка.",
	"solar_system_description3":"Външните планети са Юпитер, Сатурн, Уран и Нептун.  Тези планети са значително по-големи от терестриалните планети и имат главно газообразна и ледена съставка. Външната Слънчева система също така включва множество луни, които орбитират около газовите и ледените гиганти, както и малки тела като комети и астероиди.",
	"solar_system_description4":"Отвъд Нептун царува по-нов клас по-малки светове, наречени планети джуджета, включително отдавна любимият Плутон. Космическият кораб New Horizons на НАСА посети Плутон през 2015 г. и в момента изследва пояса на Кайпер отвъд Плутон. Другите планети джуджета са Церера, Макемаке, Хаумеа и Ерида.",
	"quiz": {
		url: "https://take.quiz-maker.com/QPR6X0RKC",
		text: "Проверете знанията си!"
	  },


	//ABOUT US//
	"bio_1": "Здравейте! Името ми е Виктор и съм съосновател на сайта AstroAcademy. Ученик съм в ПГИ „Иван Илиев“, където изучавам „Икономическа информатика“. Мотивите за избирането на темата са именно интересът, който и двамата споделяме към космоса, и желанието ни да заинтригуваме повече хора, запознавайки ги с мистериите му.",
	"bio_2": "Привет! Казвам се Деян и съм другият съосновател на сайта AstroAcademy. Ученик съм в Е.Г. „Акад. Людмил Стоянов“, където изучавам френски и английски език, като след 10-ти клас имах възможността да специализирам профил - информационни технологии.",
	"Viktor_name": "Виктор Ангелов",
	"Deyan_name": "Деян Петелов",
	"contact_us": "Свържете се с нас!",
	"any_questions":"С радост ще отговорим на въпросите ви.",
	"put_your_name": "Вашето име:",
	"your_email":"Вашият e-mail:",
	"your_msg":"Съобщението ви:",
	"submit_": "Изпрати",
	
	
	//MERCURY
	"mercury1": "Планетата Меркурий е кръстена на Меркурий, пратеника на римските богове, заради нейната бърза орбита около Слънцето - 88 дни. Един Меркуриев ден — времето, необходимо за една пълна ротация около собствената му ос — трае 59 земни дни.",
	"mercury2": "Въпреки близостта си до Слънцето, Меркурий не е най-горещата планета, защото нейната тънка атмосфера не може да задържа топлината. Температурите на Меркурий могат да варират драстично, достигайки до много високи стойности през деня и падайки до изключително ниски през нощта.",
	"mercury3":"Тя е най-малката планета Слънчевата система, като е и една от четирите земни планети.",
	"mercury4":"Меркурий има голямо желязно ядро, което заема около 42% от нейния обем. Учените предполагат, че това може да се дължи на гигантски удар в ранната история на планетата, който е откъснал голяма част от нейната първоначална мантия и кора.",
	"mercury5":"Изследвана от няколко космически апарата, включително \"Маринер 10\" и \"Месинджър\". Тези мисии са предоставили ценни данни за планетата, включително доказателства за наличието на вода в ледена форма, въпреки високите температури.",


	//VENUS//
	"venus1":"Венера е най-горещата планета в Слънчевата система, с повърхностни температури достигащи до около 465°C (869°F). Това е резултат от екстремния парников ефект, причинен от гъстата атмосфера, богата на въглероден диоксид.",
	"venus2":"Един ден на Венера е по-дълъг от една венерианска година. Върти се около оста си за около 243 земни дни, докато обикаля около Слънцето за около 225 земни дни.",
	"venus3":"Венера се върти в обратна посока в сравнение с повечето планети, включително Земята. Това означава, че ако бихте могли да стоите на повърхността ѝ, Слънцето би изгрявало от запад и залязвало на изток.",
	"venus4":"Планетата е третият най-ярък обект на небето след Слънцето и Луната, видима с невъоръжено око и често наричана \"утринна звезда\" или \"вечерна звезда\", в зависимост от това кога се появява.",
	"venus5":"Венера има някои от най-високите планини в Слънчевата система и се смята, че повърхността ѝ е геологически млада и активна, с множество вулкани. Изследвания предполагат, че вулканичната активност продължава и до днес.",


	//EARTH//
	"earth1":"Повърхността на Земята е покрита с вода на около 71%, което я прави единствената планета в Слънчевата система с течна вода на повърхността. Голямата част от тази вода се намира в океаните, които заемат около 97% от водата на планетата. Пресната вода представлява около 3% от общото количество вода на Земята, и от тези 3%, около 69% са във формата на лед в ледниците и полюсните ледени капаци.",
	"earth2":"Земята има сложна атмосфера, съставена основно от азот (78%) и кислород (21%), с малки количества водна пара, въглероден диоксид и други газове. Тази смес поддържа живота чрез осигуряване на кислород за дишане и защита от вредното слънчево излъчване.",
	"earth3":"Земята има обиколка около екватора си от приблизително 40,075 км. Въпреки че често се описва като сфера, Земята всъщност има форма на сплескан сфероид, като е леко сплескана на полюсите и издута на екватора поради въртенето си.",
	"earth4":"На върховете на някои от най-високите планини, като например Еверест, водата може да заври при температура, достигаща до около 68°C (154°F), което се дължи на намаленото атмосферно налягане.",
	"earth5":"Земята е единствената известна планета с активна тектоника на плочите. Плочите на земната кора се движат, което води до земетресения, вулканична активност и образуването на планини. Този процес е ключов за рециклирането на повърхностните материали и поддържането на живота на планетата.",
	
	
	//MARS//
	"mars1":"Марс е известна още като \"Червената планета\" заради червения си цвят, който е резултат от големите количества железен оксид (ръжда) на повърхността ѝ. Това придава на планетата характерния червен оттенък, който може да бъде забелязан дори с невъоръжено око от Земята.",
	"mars2":"Въпреки че повърхността на Марс изглежда суха и безжизнена, изследвания показват, че под нея се крият обширни залежи от воден лед. Това откритие увеличава възможността за съществуването на живот в миналото и поддържа надеждите за бъдещи човешки мисии, които могат да използват този лед като ресурс.",
	"mars3":"Марс е дом на най-високият вулкан в Слънчевата система - Олимп Монс. Вулканът е висок около 22 км, което е почти три пъти по-висок от Еверест.",
	"mars4":"Марс има две малки луни, Фобос и Деймос. Смята се, че те са уловени астероиди от астероидния пояс между Марс и Юпитер. Фобос постепенно се приближава към Марс и се очаква един ден да се сблъска с планетата или да бъде разкъсан от гравитационните сили, образувайки пръстен около Марс.",
	"mars5":"Подобно на Земята, Марс също има сезони, поради наклона на неговата ос. Въпреки това, тъй като една година на Марс трае почти два пъти по-дълго от земната, сезоните също са съответно по-дълги.",
	
	
	//JUPITER//
	"jupiter1":"Юпитер е газов гигант и е най-голямата планета в Слънчевата система, като е толкова голяма, че всички останали планети в Слънчевата система могат да се поберат в нея. Тя има диаметър от около 142,984 км и обем, който е приблизително 1.49 пъти по-голям от сумата на обемите на всички останали планети заедно.",
	"jupiter2":"Юпитер служи като мощен гравитационен щит за Земята, отклонявайки или поглъщайки астероиди и комети, които могат да представляват заплаха. Със своята огромна маса, тя променя траекториите на космическите обекти и стабилизира астероидния пояс, предотвратявайки много потенциални сблъсъци с нашата планета.",
	"jupiter3":"Юпитер има 79 известни луни, като четири от тях, известни като Галилееви луни (Ио, Европа, Ганимед и Калисто), бяха открити от Галилео Галилей през 1610 година. Ганимед, най-голямата луна в Слънчевата система, принадлежи към Юпитер. Смята се, че под повърхностния леден слой, луната Европа, крие огромен океан от течна вода, което повишава вероятността за съществуването на живот.",
	"jupiter4":"Магнитното поле на Юпитер е най-голямото и най-мощното планетарно магнитно поле в Слънчевата система, което се простира на милиони километри в космоса - далеч от самата планета. То защитава множество луни на Юпитер от космическата радиация.",
	"jupiter5":"Юпитер има най-краткия ден от всички планети в Слънчевата система. Един ден на Юпитер трае около 10 часа, тъй като се върти много бързо около своята ос.",
	
	
	
	
	//SATURN//
	"saturn1":"Най-известната характеристика на Сатурн са неговите пръстени. Те са съставени предимно от ледени частици с различен размер – от микроскопични зърна до огромни късове, които орбитират около планетата. Пръстените могат да достигнат до 282,000 км в ширина, но са изненадващо тънки – в някои части дебелината им е само около 10 метра.",
	"saturn2":"Въпреки огромния си размер,газовият гигант , Сатурн е планетата с най-ниска плътност в Слънчевата система. Той е достатъчно лек, така че ако бихте могли да поставите Сатурн в огромен океан, той би плавал. Плътността на Сатурн е по-малка от плътността на водата.",
	"saturn3":"Подобно на Земята, Сатурн преживява сезони поради наклона на своята ос. Въпреки това, тъй като една година на Сатурн трае около 29.5 земни години, всеки сезон продължава около 7 земни години.",
	"saturn4":"Сатурн има впечатляващ брой луни, с повече от 80 потвърдени луни, което го прави планетата с най-много луни в Слънчевата система към момента. Най-голямата луна, Титан, превъзхожда дори планетата Меркурий по размер и притежава гъста атмосфера.",
	"saturn5":"Северният полюс на Сатурн показва уникален хексагонален образец, който не се наблюдава на другите планети. Този шестоъгълен вихър е стабилен и се запазва във времето, което е уникално атмосферно явление.",



	//URANUS//
	"uranus1":"Една от най-необичайните характеристики на Уран е нейното екстремно осово наклонение от около 98 градуса. Това означава, че планетата се върти \"настрани\" относно орбитата си около Слънцето, което води до екстремни сезонни промени и ден и нощ, които продължават по 42 земни години всяка. Една пълна обиколка около слънцето варира около 84 земни години.",
	"uranus2":"Уран е класифицирана като леден гигант заради относително малкато каменисто ядро и богатата на вода \"мантия\", която съдържа амоняк и метан, в съчетание с високо налягане, което превръща водата в \"горещ лед\".",
	"uranus3":"Уран е откритa през 1781 година от Уилям Хершел, което я прави първата планета, открита с телескоп. Това откритие увеличи размера на известната Слънчева система двойно в онези времена.",
	"uranus4":"Уран често е считана за мястото с най-студена атмосфера в Слънчевата система, с минимални температури на облаците около -224°C (-371°F). Това я прави едно от най-студените места в Слънчевата система.",
	"uranus5":"Атмосферата на Уран ѝ придава характерен синьо-зелен цвят, който се дължи на наличието на метан. Метанът абсорбира червената светлина и отразява синьо-зелената, което дава на Уран нейния цвят.",	
	
	
	
	//NEPTUNE// 
	"neptune1":"Нептун е първата планета, чието съществуване беше предсказано математически преди да бъде наблюдавана през телескоп. Нейното откритие през 1846 година беше резултат на изчисленията на Урбен Леверие и Джон Коуч Адамс, които забелязаха необясними отклонения в орбитата на Уран, които можеха да бъдат обяснени само с присъствието на още една неизвестна планета.",
	"neptune2":"Нептун има 14 известни луни, като най-голямата от тях, Тритон, е интересна с това, че се движи в ретроградна орбита, което означава, че се върти в посока, обратна на въртенето на Нептун. Предполага се, че Тритон е бил уловен от гравитацията на Нептун и не е образуван в непосредствена близост до планетата.",
	"neptune3":"Поради голямото си разстояние от Слънцето и бавното си орбитално движение, една година на Нептун (пълно обиколение около Слънцето) е равна на приблизително 165 земни години, което води до много дълги сезони.",
	"neptune4":"Нептун е една от най-студените планети в Слънчевата система, с температури на върховете на облаците достигащи до около -218°C (-360°F), което го прави изключително студено място, въпреки че Уран понякога може да има още по-ниски температури в своята атмосфера",
	"neptune5":"Нептун има най-силните ветрове в Слънчевата система, със скорости, които могат да достигнат до 2,100 км/ч (повече от 1,300 мили в час). Тези ветрове са особено впечатляващи, като се има предвид, че Нептун получава само малък дял от слънчевата светлина в сравнение с другите планети.",
	
	
	
		//SUN//
	"sun1":"Слънцето е звезда от третия тип по спектрална класификация (G2V), което означава, че е жълто джудже с температура на повърхността около 5,500°C (9,932°F).",
	"sun2":"Слънцето съставлява около 99.86% от масата на Слънчевата система, като неговата маса е приблизително 713 пъти по-голяма от общата маса на всичко останало и 330000 пъти по-голямо от масата на Земята.",
	"sun3":"На всеки милиард години неговата светимост се увеличава с около 10%, което води до промени в климата на Земята през геологическото време.",
	"sun4":"Въпреки че изглежда неподвижно от гледна точка на Земята, Слънцето всъщност се върти около центъра на Млечния път с огромна скорост и извършва една пълна обиколка за около 225-250 милиона години.",
	"sun5":"В ядрото на Слънцето се извършва термоядрен синтез, при който водородните атоми се сливат заедно, за да образуват хелий, като процесът освобождава огромно количество енергия. Тази енергия е източник на слънчевата светлина и топлина.",
	
}
};