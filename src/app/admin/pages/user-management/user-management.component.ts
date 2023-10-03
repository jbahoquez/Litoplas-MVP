import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { IconDefinition, faCoffee, faHouse, faTrash } from '@fortawesome/free-solid-svg-icons';

interface UrlParams {
  userID: string
}
// interface User {

//   name: string;
//   email: string;
//   phone: string;
//   role: string;
//   id_d?: string;
// }

interface IIntranetUsuarios{
  n_ide:           string;
  password:        string;
  mail?:           string;
  nombre?:         string;
  fecha?:          Date | null;
  usuario?:        string;
  estado?:         string;
  peticiones?:     string;
  incidentes?:     string;
  fecha_password?: Date | null;
  fecha_retiro?:   Date | null;
  c_emp?:          string;
  bloqueado?:      string;
  salt?:           string;
  roles_id:        number;
  perfiles_id:     number;
}

interface TableData {
  headers: DataKeys[];
  dataColumns: any[];
}
//Cabeceras
interface DataKeys {
  description: string;
  field: string;
}


@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {
  users: IIntranetUsuarios[] = [];
  constructor(private route: ActivatedRoute, private fb: FormBuilder, private userService: UserService) { }


  urlParams: UrlParams = {
    userID: ''
  }




  // users:User={
  //   name:'',
  //   email:'',
  //   telefono:0,
  //   password:''
  // }
  // usersData: User[]=[]


  tableData: TableData = {
    headers: [
      { description: 'Nombre de usuario', field: 'nombre' },
      { description: 'Phone', field: 'n_ide' },
      { description: 'Correo Electronico', field: 'mail' },
      { description: 'Role', field: 'c_emp' },
      { description: 'Acciones', field: 'actions' }
    ],
    dataColumns: []
  }
  queryParams: any

  get name() {
    return this.formUser.get('name')
  }

  formUser = this.fb.group({
    "name": ['', Validators.required],
    "email": ['', [Validators.required, Validators.pattern(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/)]],
    "phone": ['', [Validators.minLength(7), Validators.maxLength(10), Validators.pattern(/^([0-9])*$/)]],
    "role": ['', Validators.required],
    "n_ide": ['']
    //,
    // "workInformation" : this.fb.group({
    //   "companyPosition":['',Validators.required]
    // })
  })

  // formUser: FormGroup = new FormGroup({
  //   "name" : new FormControl('', Validators.required),
  //   "email" : new FormControl('', [Validators.required, Validators.pattern(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/)]),
  //   "telefono" : new FormControl('', [Validators.minLength(7), Validators.maxLength(10), Validators.pattern(/^([0-9])*$/)]),
  //   "password" : new FormControl('', Validators.required)
  // })




  ngOnInit(): void {
    this.route.params.subscribe(params =>
      this.urlParams.userID = params['userID']
    )
    this.route.queryParams.subscribe(params => this.queryParams = { ...params });

    //this.tableData.dataColumns= this.userService.getUsers()
    console.log('query params', this.queryParams);
    this.getUsers()
  }

  setDataTable(): void {
    this.tableData = { ...this.tableData, dataColumns: this.users }
    this.userService.setTotalUsers(this.users.length)
  }

  getFormControl(controlName: string) {
    return this.formUser.get(controlName)
  }



  processData() {

    //console.log(this.formUser.value)
    const tempUser: IIntranetUsuarios = JSON.parse(JSON.stringify(this.formUser.value))
    //this.userService.saveUser(tempUser)
    //console.log(this.formUser.valid)
    //this.usersData.push(tempUser)
    //this.addUser()
    this.formUser.reset()
    //console.log(this.userService.userData)
    //this.tableData.dataColumns= this.userService.userData
    //this.tableData={...this.tableData, dataColumns: this.userService.userData}
  }

  getUsers(): void {
    this.userService.getUsers().subscribe(users => {
      this.users = users
      this.setDataTable();
      console.log(users)
    })
  }

  proccessUser(){
    console.log('Click')
    const user=this.formUser.value;
    if(!user.n_ide) this.addUser()
    //if (user.id_d) this.updateUser()

  }
  addUser(): void {
    const tempUser: IIntranetUsuarios = JSON.parse(JSON.stringify(this.formUser.value))
      this.userService.addNewUser(tempUser).subscribe(user => {
        this.users.push(user)
        this.setDataTable()

        //this.getUsers()
      })
    // const id = this.formUser.value.id_d;
    // if (id) {
    //   const userTemp = JSON.parse(JSON.stringify(this.formUser.value))
    //   this.updateUser(userTemp);
    //   console.log('Actualizando usuario')
    // } else {
    //   const tempUser: User = JSON.parse(JSON.stringify(this.formUser.value))
    //   this.userService.addNewUser(tempUser).subscribe(user => {
    //     this.users.push(user)
    //     this.setDataTable()

    //     //this.getUsers()
    //   })
    //   console.log('Creando usuario')
    // }
  }



  deleteUser(user: IIntranetUsuarios) {
    this.userService.deleteUsers(user.n_ide!).subscribe(resp => {

    })

  }

  // updateUser() {
  //   console.log('Uodate')
  //   const {n_ide,mail,nombre, usuario,c_emp}:IIntranetUsuarios = JSON.parse(JSON.stringify(this.formUser.value))
  //   this.userService.updateUsers({nombre,mail,usuario,c_emp},n_ide!).subscribe((user: any) => {
  //     const userIndex=this.users.findIndex(u=>user.n_ide===u.n_ide)
  //     this.users[userIndex]={...user}
  //     this.setDataTable()
  //     //this.formUser.reset()
  //   })
  // }

  onDeleteTable(item: IIntranetUsuarios) {
    // console.log(item, 'delete on user management')

    // this.deleteUser(item)
    // this.getUsers()

    this.userService.deleteUsers(item.n_ide!).subscribe(user => {
      const userTemp: IIntranetUsuarios[] = this.users.filter(user => user.n_ide !== item.n_ide)
      this.users = [...userTemp]
      this.setDataTable()
    })
  }

  // onUpdateTable(item: IIntranetUsuarios) {

  //   console.log(item)
  //   this.formUser.setValue({
  //     name: item.nombre,
  //     email: item.mail,
  //     phone: item.phone,
  //     role:item.role,
  //     id_d: item.id_d!
  //   })
  //   // this.userService.updateUsers(item).subscribe(resp =>{
  //   //   const userTemp: User[] = this.users.filter(user => user._id !== item._id)
  //   //   this.users=[...userTemp, item]
  //   //   this.setDataTable()
  //   // })
  // }

}
