/*constants*/
export const STRONG_PASSWORD_REGEX = new RegExp(
  "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{6,})"
);

export const ERROR = "error";
export const SUCCESS = "success";
export const NUMBER_CHARACTER = 60;

export const lists =[
  {name:"",type:[]},
  {name:"Agronomie",type:["Transformation alimentaire","Production animale","Transformation"]},
  {name:"Informatique",type:["ESN","Cyber","Infographie","Reparateur"]},
  {name:"Business",type:["Vente de voiture","Vente de terrain"]}
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