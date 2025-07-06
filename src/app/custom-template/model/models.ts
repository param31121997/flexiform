export interface Field{
  name:string,
  type:string,
  required:boolean,
  dropdownOptions?:string[];
}


export interface Section{
  sectionTitle:string,
  fields:Array<Field>,
  isEditing?:boolean,
  error?:string
}

export interface DynamicForm{
  id:string,
  formName:string,
  formType:string,
  formDescription:string,
  schema:any,
  uiSchema:any,
  sections:Section[],
  createdBy:string,
  updatedAt:string,
  company:string
}


export interface FormSummary{
  id:string,
  formName:string,
  formType:string,
  company:string
}