import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { IconDefinition, faCoffee, faHouse, faTrash } from '@fortawesome/free-solid-svg-icons';

interface UrlParams {
  userID: string
}
interface User {
  _id?: string;
  name: string;
  email: string;
  telefono: string;
  password: string;
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
  users: User[] = [];
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
      { description: 'Nombre de usuario', field: 'name' },
      { description: 'Telefono', field: 'telefono' },
      { description: 'Correo Electronico', field: 'email' },
      { description: 'Contraseña', field: 'password' },
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
    "telefono": ['', [Validators.minLength(7), Validators.maxLength(10), Validators.pattern(/^([0-9])*$/)]],
    "password": ['', Validators.required],
    "_id": ['']
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
    const tempUser: User = JSON.parse(JSON.stringify(this.formUser.value))
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
    })
  }

  addUser(): void {
    const id = this.formUser.value._id;
    if (id) {
      const userTemp = JSON.parse(JSON.stringify(this.formUser.value))
      this.updateUser(userTemp);
      console.log('Actualizando usuario')
    } else {
      const tempUser: User = JSON.parse(JSON.stringify(this.formUser.value))
      this.userService.addNewUser(tempUser).subscribe(user => {
        this.users.push(user)
        this.setDataTable()

        //this.getUsers()
      })
      console.log('Creando usuario')
    }
  }

  deleteUser(user: User) {
    this.userService.deleteUsers(user._id!).subscribe(resp => {

    })

  }

  updateUser(user: User) {
    this.userService.updateUsers(user).subscribe(resp => {
      const userTemp: User[] = this.users.filter(user => user._id !== user._id)
      this.users = [...userTemp, user]
      this.setDataTable()
      this.formUser.reset()
    })
  }

  onDeleteTable(item: User) {
    // console.log(item, 'delete on user management')

    // this.deleteUser(item)
    // this.getUsers()
    this.userService.deleteUsers(item._id!).subscribe(user => {
      const userTemp: User[] = this.users.filter(user => user._id !== item._id)
      this.users = [...userTemp]
      this.setDataTable()
    })
  }

  onUpdateTable(item: User) {

    this.formUser.setValue({
      name: item.name,
      email: item.email,
      password: item.password,
      telefono: item.telefono,
      _id: item._id!
    })
    // this.userService.updateUsers(item).subscribe(resp =>{
    //   const userTemp: User[] = this.users.filter(user => user._id !== item._id)
    //   this.users=[...userTemp, item]
    //   this.setDataTable()
    // })
  }

}
