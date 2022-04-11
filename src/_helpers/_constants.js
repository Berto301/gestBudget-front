/*constants*/
export const STRONG_PASSWORD_REGEX = new RegExp(
  "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{6,})"
);

export const ERROR = "error";
export const SUCCESS = "success";
export const NUMBER_CHARACTER = 60;

export const lists =[
  {name:"",type:[]},
  {name:"Agency",type:["","Recruitment agency","Staffing agency","Travel agency"]},
  {name:"Agronomie",type:["","Animal production","Food production","Food Quality Manager"]},
  {name:"Computer",type:["","Computer repairer","Cyber","Infographic","Digital services company"]},
  {name:"Business",type:["","Car sales","Land sale","Land House"]},
  {name:"Restoration",type:["Casual dining","Fast food","Ghost kitchens","Pizzerias"]}
]

export const LAWER_FORMS =[
  "",
  "SARL",
  "SARL and EURL",
  "SAS",
  "SASU"
]
export const MANAGEMENT_STYLES=[
  "",
  "Autocratic",
  "Democratic",
  "Laissez-faire",
  "Interview questions"
]
export const STRUCTURES=[
"",
"Hierarchical structure",
"Matrix structure",
"Network structure"
]
export const BANK=[
"",
"Acces Banque",
"BOA",
"BFV",
"BMOI",
"MCB"
]