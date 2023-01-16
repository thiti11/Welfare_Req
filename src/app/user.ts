export class user{

    public Employee_ID: number;
    public Username: string;
    public Password: string;
    public Firsenamr: string;
    public Lastname: string;
    public EmpNo: number;
    public Position: string;
    public Department: string;
    public Section: string;
    public Type_of_Employee: string;
    public Employee_Detail: string;
    public Joined_date: string;

    constructor(   
         Employee_ID: number,
         Username: string,
         Password: string,
         Firsenamr: string,
         Lastname: string,
         EmpNo: number,
         Position:string,
         Department:string,
         Section: string,
         Type_of_Employee: string,
         Employee_Detail: string,
         Joined_date: string,
        ){

            this.Employee_ID =Employee_ID;
            this.Username = Username;
            this.Password =Password ;
            this.Firsenamr =Firsenamr;
            this.Lastname =Lastname;
            this.EmpNo =EmpNo;
            this.Position = Position;
            this.Department =Department;
            this.Section =Section;
            this.Type_of_Employee =Type_of_Employee;
            this.Employee_Detail =Employee_Detail;
            this.Joined_date =Joined_date;
        }
   
}