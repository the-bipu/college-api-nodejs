const EData = [
  {
    colleges: [
      "E - MAX TEACHER TRAINING COLLEGE,  - Haryana",
      "E F L University, HYDERABAD - Andhra Pradesh",
      "E K Nayanar Memorial Cooperative Hosp, School Of Nurisng, KASARAGOD - Kerala",
      "E M S Memorial Cooperative Hospital & Research Centre, MALAPPURAM - Kerala",
      "E M S Memorial Cooperative Hospital, School Of Nursing, MALAPPURAM - Kerala",
      "E S College Of Nursing, VILLUPURAM - Tamil Nadu",
      "E S I S General Hospital, AHMEDABAD - Gujarat",
      "E S I S General Hospital, Campus, School Of Nursing, AHMEDABAD - Gujarat",
      "E S School Of Nursing, VILLUPURAM - Tamil Nadu",
      "E T C M College of Nurisng, KOLAR - Karnataka",
      "E-MAX BUSINESS SCHOOL, AMBALA - Haryana",
      "E-Max, Polytechnic College,  - Haryana",
      "E.C.B. Polytechnic, Bikaner,  - Rajasthan",
      "E.K.Nayanar Memorial Government College, KASARAGOD - Kerala",
      "E.M.E.A. College of Arts & Science,  - Kerala",
      "E.M.G. Yadava Womens College, MADURAI - Tamil Nadu",
      "E.R.K. COLLEGE OF EDUCATION,  - Tamil Nadu",
      "E.S COLLEGE OF EDUCATION,  - Tamil Nadu",
      "E.S. College of Engineering and Technology, VILLUPURAM - Tamil Nadu",
      "E.S.C. Govt. Polytechnic, Nandyal,  - Andhra Pradesh",
      "E.S.S. College, VENKATAGIRI - Andhra Pradesh",
      "E.S.SUBRAMANIAM MEMORIAL TEACHER TRAINING INSTITUTE,  - Tamil Nadu",
      "E.S.TEACHER TRAINING INSTITUTE,  - Tamil Nadu",
      "E.V. Reddy Memorial College, KODAD - Andhra Pradesh",
      "EACSAM - European Academy of Cosmetic Surgery & Aesthetic Medicine,  - Maharashtra",
      "eAgeTutor,  - Delhi",
      "EARATHU TEACHER TRAINING INSTITUTE,  - Kerala",
      "EASA College Engineering Technology, COIMBATORE - Tamil Nadu",
      "Eashwari Bai Memorial College Of Nursing, SECUNDERABAD - Andhra Pradesh",
      "East Kolkata Girls College,  - West Bengal",
      "East Point College of Engineering & Technology, Karnataka",
      "East Point College Of Engineering and Technology, BANGALORE - Karnataka",
      "East Point College of Engineering for Women, VIRGONAGAR - Karnataka",
      "EAST POINT COLLEGE OF HIGHER EDUCATION, VIRGONAGAR - Karnataka",
      "East Point College Of Nursing, Bangalore, BANGALORE - Karnataka",
      "EAST WEST COLLEGE OF MGT, Karnataka",
      "East West College Of Nursing , Bangalore, BANGALORE - Karnataka",
      "East West College of Pharmacy , Bangalore, BANGALORE - Karnataka",
      "East West Institute of Technology, BANGALORE - Karnataka",
      "East West Polytechnic, Karnataka",
      "East West School Of Nursing , Bangalore, BANGALORE - Karnataka",
      "EAST WEST TCH COLLEGE, Karnataka",
      "Eastcoast Institute Of Medical Science , Moolakulam, PONDICHERRY - Pondicherry",
      "Eastend School Of Nursing , Ludhiana, LUDHIANA - Punjab",
      "Eastern Academy Of Science And Technology, Orissa",
      "Eastern Christian College, Nagaland",
      "Eastern Dooars B.Ed. Training College, West Bengal",
      "Eastern Guilds for Training and Study, West Bengal",
      "EASTERN INSTITUTE FOR INTEGRATED LEARNING IN MANAGEMENT, KOLKATA - West Bengal",
      "Eastern Institute for integrated Learning in Management University, Sikkim",
      "EASTERN INSTITUTE OF MANAGEMENT, KOLKATA, KOLKATA - West Bengal",
      "EASWARAMMA SHIKSHAK PRASHIKSHAN MAHILA MAHAVIDYALAYA, Rajasthan",
      "Easwari Engineering College, Tamil Nadu",
      "Eben - Ezer Education Institutions, Karnataka",
      "Eben Ezer College Of Nursing,Bangalore, BANGALORE - Karnataka",
      "Eben Ezer School Of Nursing , Bangalore, BANGALORE - Karnataka",
      "EBENEZER COLLEGE OF EDUCATION, Karnataka",
      "Echelon Institute of Technology EIT, Haryana",
      "Edaiyathangudi G.S. Pillai Arts And Science College, NAGAPATTINAM - Tamil Nadu",
      "Edappal Hospitals Pvt Ltd,Malappuram, MALAPPURAM - Kerala",
      "Edayathangudi GS Pillay Engineering College, NAGAPATTINAM - Tamil Nadu",
      "Edayathangudy G.S. Pillay College of Pharmacy , Nagapattinam, NAGAPATTINAM - Tamil Nadu",
      "EDEN GARDENS COLLEGE OF EDUCATION,  - Tamil Nadu",
      "EDGE International B - School,  - Andhra Pradesh",
      "Edify Institute of Management & Technology,  - Uttar Pradesh",
      "Educare Institute of Dental Sciences, Malappuram, MALAPPURAM - Kerala",
      "Education College,  - West Bengal",
      "EDUCATION DEPTT. BHU,  - Uttar Pradesh",
      "Educosm,  - Rajasthan",
      "EESWARI TEACHER TRAINING INSTITUTE,  - Tamil Nadu",
      "EFL University,  - Andhra Pradesh",
      "Egra Sarada Shasibhusan College,  - West Bengal",
      "EGS Pillay Polytechnic College,  - Tamil Nadu",
      "Ehiapur B.Ed. College,  - West Bengal",
      "Einstein College of Engineering,  - Tamil Nadu",
      "EINSTEIN PG COLLEGE, SAROORNAGAR - Andhra Pradesh",
      "Ekalabya Panchayat Samiti College (+3),  - Orissa",
      "EKALAVYA TEACHER TRAINING COLLEGE,  - Rajasthan",
      "Ekamra Mahavidyalaya,  - Orissa",
      "Eklavya Dental College & Hospital, Jaipur, JAIPUR - Rajasthan",
      "EKLAVYA MAHAVIDYALAYA,  - Uttar Pradesh",
      "EKLAYA TEACHER TRAINING COLLEGE,  - Haryana",
      "Eknath Sitarama Divekar College Varvand,  - Maharashtra",
      "Ekshala Degree College, JANGAON - Andhra Pradesh",
      "Ekta Nursing School , Sabarkantha,  - Gujarat",
      "EKVIRA DEVI COLLEGE OF EDUCATION,  - Maharashtra",
      "Ekvira Nursing School,Amaravati, AMRAVATI - Maharashtra",
      "Ekvira Nursing School,Wardha, WARDHA - Maharashtra",
      "El-Bethel College,  - West Bengal",
      "Elenki Degree College, Medak, MEDAK - Andhra Pradesh",
      "Eliezer Jolden Memorial College, - Jammu and Kashmir",
      "ELIJAH INSTITUTE OF MANAGEMENT STUDIES, - Kerala",
      "Elina Women Polytechnic, - Delhi",
      "Elite B.Ed. College, - West Bengal",
      "Elite Mission Hospital, College Of Nursing, Thrissur - Kerala",
      "Elite Mission Hospital College Of Nursing, Trichur - Kerala",
      "Elite Mission Hospital Of Nursing, Thrissur - Kerala",
      "ELIZABETH COLLEGE OF EDUCATION, - Tamil Nadu",
      "Ellamma School Of Nursing, Mysore - Karnataka",
      "Ellanki Degree College, Sangareddy - Andhra Pradesh",
      "Ellen College Of Nursing, Coimbatore - Tamil Nadu",
      "Ellen Thoburn Cowen Memorial College Of Nursing, Kolar - Karnataka",
      "Ellen Thoburn Cowen Memorial Hospital Of Methodist Church, School Of Nursing, Kolar - Karnataka",
      "Ellenki College of Engineering and Technology, - Andhra Pradesh",
      "Ellenki Degree College, Siddipet - Andhra Pradesh",
      "Elphinstone College, - Maharashtra",
      "Elumalai Polytechnic College, Dharmapuri - Tamil Nadu",
      "Elumalai Polytechnic College, - Tamil Nadu",
      "Elumalaiyan Polytechnic College, - Tamil Nadu",
      "Eluru College of Engineering and Technology, - Andhra Pradesh",
      "Emarti Devi Womens College, - Orissa",
      "Emax Group of Institutions, - Haryana",
      "Emerald Height College for Women, Nilgiris - Tamil Nadu",
      "EMERALD'S ADVANCED INSTITUTE OF MANAGEMENT STUDIES (EAIMS), Mandal - Andhra Pradesh",
      "Emeralds Degree College, Tirupati - Andhra Pradesh",
      "EMINANT TEACHER TRAINING GIRLS COLLEGE, - Rajasthan",
      "EMINENT TEACHER TRAINING COLLEGE, - Rajasthan",
      "Emmanuel College, Trivandrum - Kerala",
      "EMMANUEL COLLEGE OF EDUCATION, - Kerala",
      "EMMANUEL EACHER TRAINING INSTITUTE, - Tamil Nadu",
      "Emmanuel School Of Nursing, VISAKHAPATNAM - Andhra Pradesh",
      "Empee Institute of Hotel Management and Catering Technology, - Tamil Nadu",
      "Employees State Insurance Corporation Medical College, Bangalore - Karnataka",
      "Enathi Rajappa College Of Arts And Science, - Tamil Nadu",
      "Engineering College, - Orissa",
      "Engineering College, - Assam",
      "Engineering College Ajmer, - Rajasthan",
      "Engineering College Bikaner, BIKANER - Rajasthan",
      "Engineering College for Women, DELHI - Delhi",
      "Engineering College, Kota, KOTA - Rajasthan",
      "Engineering Institute for Junior Executives, - West Bengal",
      "Engineers Combine Professional School, GWALIOR - Madhya Pradesh",
      "Engineers Institute of India, - Delhi",
      "English Language Teaching Institute (PGDET), - Orissa",
      "English on Mobile, - Uttar Pradesh",
      "Enlight School Of Nursing, TIRUPATI - Andhra Pradesh",
      "Enrich Degree College, MARRIGUDA - Andhra Pradesh",
      "Entrepreneurship and Management Processes International Business School, - Delhi",
      "Entrepreneurship Development Institute of India, - Gujarat",
      "Environmental Consultancy Vikash Centre (ECOVIC), PATNA - Bihar",
      "ER & DCI Institute of Technology, TRIVANDRUM - Kerala",
      "Er. Perumal Manimekalai Polytechnic College, ERODE - Tamil Nadu",
      "Er. Perumal Manimekalai Polytechnic College, - Tamil Nadu",
      "Er. Perumal Manimekalai College of Engineering, - Tamil Nadu",
      "Era Business School, - Delhi",
      "Era Medical College, Lucknow, - Uttar Pradesh",
      "ERAM COLLEGE OF EDUCATION, - Uttar Pradesh",
      "Eras Institute Of Health Sciences & Research, LUCKNOW - Uttar Pradesh",
      "Erigeneni Tirupathi Naidu & Lakshmamma College, PRAKASAM - Andhra Pradesh",
      "ERNAD MUSLIM EDUCATIONAL ASSOCIATION,  - Kerala",
      "Erode Arts College For Mens, ERODE - Tamil Nadu",
      "Erode Arts College for women, ERODE - Tamil Nadu",
      "Erode Builder Educational Trust's Group Of Institutions,  - Tamil Nadu",
      "Erode Christian College Of Arts And Science For Women, ERODE - Tamil Nadu",
      "Erode Institude Of Chemical Technology Polytechnic College,  - Tamil Nadu",
      "Erode Institute Of Chemical Technology Polytechnic College, ERODE - Tamil Nadu",
      "Erode Institute Of Technology, CHENNAI - Tamil Nadu",
      "Erode Sengunthar Engineering College, ERODE - Tamil Nadu",
      "ES SUBRAMANIAM MEMORIAL COLL OF EDUCATION,  - Tamil Nadu",
      "Escorts Heart Institute & Research Centre , New Delhi, DELHI - Delhi",
      "ESENES INSTITUTE OF TEACHER EDUCATION,  - Tamil Nadu",
      "Eshwari Bai Lund Training centre, PUNE - Maharashtra",
      "Eshwari Bai Memorial College Of Nursing,Secunderabad, SECUNDERABAD - Andhra Pradesh",
      "ESIC Dental College,Delhi, DELHI - Delhi",
      "ESIPGIMSR,ESI Hospital,K.K Nagar,Chennai, CHENNAI - Tamil Nadu",
      "ESIPGIMSR,ESI Hospital.joka,Kolkata,  - West Bengal",
      "ESIPGIMSR,ESIHospital,AndheriE,Mumbai,  - Maharashtra",
      "ESIPGIMSR,ESIHospital,Basaidarapur,New Delhi, DELHI - Delhi",
      "ESIPGIMSR,ESIHospital,Parel,Mumbai, MUMBAI - Maharashtra",
      "ESIPGIMSR,ESIHospital,Rajajinnagar,Banglore, BANGALORE - Karnataka",
      "Essen School Of Nursing , Bhubaneswar, BHUBANESWAR - Orissa",
      "Esskay College Of Nursing,Visakhapatnam, VISAKHAPATNAM - Andhra Pradesh",
      "Est Josephs College Of Nursing , Guntur, GUNTUR - Andhra Pradesh",
      "ESTHER COLLEGE OF EDUCATION,  - Tamil Nadu",
      "Etess Arts Science & Commerce College,  - Maharashtra",
      "Ethiraj College For Women, CHENNAI - Tamil Nadu",
      "Ettumanoorappan College, KOTTAYAM - Kerala",
      "EUPHRAISIA TRAINING COLLEGE,  - Kerala",
      "EUROPEAN INSTITUE OF MANAGEMENT & TECHNOLOGY, TRIVANDRUM - Kerala",
      "Eva School Of Nursing , Rajkot, RAJKOT - Gujarat",
      "Evangeline Booth College Of Nursing,Guntur, GUDUR - Andhra Pradesh",
      "Evangeline Booth Hospital , salvation Army E.b. Hosp. , Ahmednagar, AHMEDNAGAR - Maharashtra",
      "Evening College, SECUNDERABAD - Andhra Pradesh",
      "Evening College, Shimla - Himachal Pradesh",
      "Event Management and Development Institute(EMDI) of Media & Communication, - Maharashtra",
      "Everest Polytechnic College, - Tamil Nadu",
      "Everest School Of Nursing , Yamunanagar, YAMUNANAGAR - Haryana",
      "EVERGREEN EDUCATIONAL ORGANIZAION, - Tamil Nadu",
      "EVERSHINE TEACHER TRAINING COLLEGE, - Tamil Nadu",
      "EVM College of Engineering and Technology, VATICHERUKURA - Andhra Pradesh",
      "EVVA MEMORIAL TEACHER TRAINING INSTITUTE, - Tamil Nadu",
      "EWING CHRISTIAN COLLEGE, ALLAHABAD - Uttar Pradesh",
      "EWING CHRISTIAN COLLEGE, - Uttar Pradesh",
      "Ewing Christian College, - Uttar Pradesh",
      "Ex Minister K Rajaram Naidu Para Medical Institutions , Madurai, MADURAI - Tamil Nadu",
      "Excecilla Ed. Soc's Kavikulguru Inst of Tech. & Sc, - Maharashtra",
      "Excel Business School, - Tamil Nadu",
      "Excel College of Architecture and Planning, - Tamil Nadu",
      "EXCEL COLLEGE OF EDUCATION, - Tamil Nadu",
      "Excel College of Engineering and Technology, - Tamil Nadu",
      "Excel College of Technology, - Tamil Nadu",
      "Excel Engineering College, - Tamil Nadu",
      "Excel College of Engineering for Women, - Tamil Nadu",
      "Excel Engineering College, Namakal - Tamil Nadu",
      "Excel Institute of Diploma Studies, - Gujarat",
      "EXCEL INSTITUTE OF EDUCATION & RESEARCH, - Uttar Pradesh",
      "Excel Institute of Management & Technology, - Uttar Pradesh",
      "Excel Law College Ghailla, - Uttar Pradesh",
      "excel polytechnic college, - Tamil Nadu",
      "Excel School Of Nursing , Bhavnagar, BHAVNAGAR - Gujarat",
      "Excel School Of Nursing , Kanpur, KANPUR - Uttar Pradesh",
      "Excel School Of Nursing, Tirunelveli, TIRUNELVELI - Tamil Nadu",
      "EXCELLENCE GIRLS EDCATION COLLEGE,  - Rajasthan",
      "Excellence Polytechnic College, Sikar,  - Rajasthan",
      "EXCELLENT DEGREE COLLEGE,  - Uttar Pradesh",
      "EXCELLENT TAMIL MEDIUM ED COLLEGE,  - Karnataka",
      "EXPERIMENTAL COLLEGE OF EDUACTION,  - Gujarat",
      "EZHIL TEACHER TRAINING INSTITUTE,  - Tamil Nadu",
      "Ezhuthachan College of Pharmaceutical Sciences, Marayamuttom, TRIVANDRUM - Kerala",
      "EZHUTHACHAN NATIONAL ACADEMI TEACHER TRAINING INSTITUTE,  - Kerala",
      "EZHUTHACHAN SMARAKA PPTTI,  - Kerala",
      "EZHUTHACHAN TRAINING COLLEGE,  - Kerala",
    ],
  },
];
